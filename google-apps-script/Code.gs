/**
 * Kiran Sanjivani Trust — Form Submission Handler
 *
 * Receives POST requests from the Next.js website and:
 *  - Appends contact form data to the "Contact" sheet tab
 *  - Appends volunteer form data to the "Volunteer" sheet tab
 *  - Sends an email notification for each submission
 *
 * SETUP:
 *  1. Create a Google Sheet named "KST Form Submissions"
 *  2. Add two tabs: "Contact" and "Volunteer" (exact names, case-sensitive)
 *  3. Paste this entire file into Extensions → Apps Script
 *  4. Set NOTIFICATION_EMAIL below to your real email
 *  5. Deploy as Web App (see DEPLOYMENT.md)
 */

// ─── Configuration ───────────────────────────────────────────────────────────

/** Email address that receives submission alerts */
const NOTIFICATION_EMAIL = "info@kiransanjivani.org";

/**
 * Optional: paste your spreadsheet ID here if getActiveSpreadsheet() fails.
 * Find it in the sheet URL: docs.google.com/spreadsheets/d/THIS_PART/edit
 * Leave empty ("") to use the spreadsheet the script is bound to.
 */
const SPREADSHEET_ID = "";

/** Sheet tab names (must match your spreadsheet exactly) */
const SHEET_CONTACT = "Contact";
const SHEET_VOLUNTEER = "Volunteer";

/** Contact sheet header row (row 1) */
const CONTACT_HEADERS = [
  "Timestamp",
  "Name",
  "Email",
  "Phone",
  "Subject",
  "Message",
];

/** Volunteer sheet header row (row 1) */
const VOLUNTEER_HEADERS = [
  "Timestamp",
  "Name",
  "Email",
  "Phone",
  "Age",
  "Occupation",
  "Interests",
  "Availability",
  "Message",
];

// ─── HTTP Handlers ───────────────────────────────────────────────────────────

/**
 * Handles POST requests from the website.
 * Expected JSON body:
 *   { "type": "contact", "name": "...", "email": "...", ... }
 *   { "type": "volunteer", "name": "...", "email": "...", ... }
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, error: "Missing request body" }, 400);
    }

    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      return jsonResponse({ success: false, error: "Invalid JSON" }, 400);
    }

    if (!data.type) {
      return jsonResponse({ success: false, error: "Missing submission type" }, 400);
    }

    var spreadsheet = getSpreadsheet();
    var timestamp = Utilities.formatDate(
      new Date(),
      Session.getScriptTimeZone(),
      "yyyy-MM-dd HH:mm:ss"
    );

    if (data.type === "contact") {
      return handleContactSubmission(spreadsheet, data, timestamp);
    }

    if (data.type === "volunteer") {
      return handleVolunteerSubmission(spreadsheet, data, timestamp);
    }

    return jsonResponse(
      { success: false, error: 'Invalid type. Use "contact" or "volunteer".' },
      400
    );
  } catch (error) {
    Logger.log("doPost error: " + error.toString());
    Logger.log("Stack: " + (error.stack || "no stack"));
    return jsonResponse(
      { success: false, error: "Server error. Please try again later." },
      500
    );
  }
}

/**
 * Handles GET requests — useful for testing the deployment in a browser.
 * Visit your Web App URL to see { "status": "ok", ... }
 */
function doGet() {
  return jsonResponse({
    status: "ok",
    service: "Kiran Sanjivani Trust Form Handler",
    accepts: ["POST"],
    types: ["contact", "volunteer"],
  });
}

// ─── Contact Submissions ─────────────────────────────────────────────────────

function handleContactSubmission(spreadsheet, data, timestamp) {
  var validationError = validateContact(data);
  if (validationError) {
    return jsonResponse({ success: false, error: validationError }, 400);
  }

  var sheet = getOrCreateSheet(spreadsheet, SHEET_CONTACT, CONTACT_HEADERS);

  var row = [
    timestamp,
    sanitize(data.name),
    sanitize(data.email),
    sanitize(data.phone),
    sanitize(data.subject),
    sanitize(data.message),
  ];

  sheet.appendRow(row);

  sendContactEmail(data, timestamp);

  return jsonResponse({
    success: true,
    message: "Contact message received. We will respond within 24 hours.",
    type: "contact",
  });
}

function validateContact(data) {
  if (!data.name || String(data.name).trim().length < 2) {
    return "Name must be at least 2 characters";
  }
  if (!data.email || !isValidEmail(data.email)) {
    return "Valid email is required";
  }
  if (!data.phone || String(data.phone).trim().length < 10) {
    return "Valid phone number is required";
  }
  if (!data.subject || String(data.subject).trim().length < 3) {
    return "Subject is required";
  }
  if (!data.message || String(data.message).trim().length < 10) {
    return "Message must be at least 10 characters";
  }
  return null;
}

function sendContactEmail(data, timestamp) {
  try {
    var subject = "[KST Contact] " + sanitize(data.subject);
    var body =
      "New contact form submission\n" +
      "─────────────────────────────\n\n" +
      "Time:    " + timestamp + "\n" +
      "Name:    " + sanitize(data.name) + "\n" +
      "Email:   " + sanitize(data.email) + "\n" +
      "Phone:   " + sanitize(data.phone) + "\n" +
      "Subject: " + sanitize(data.subject) + "\n\n" +
      "Message:\n" + sanitize(data.message) + "\n\n" +
      "─────────────────────────────\n" +
      "Reply directly to: " + sanitize(data.email);

    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: subject,
      body: body,
      replyTo: sanitize(data.email),
    });
  } catch (emailError) {
    Logger.log("Contact email failed (row still saved): " + emailError.toString());
  }
}

// ─── Volunteer Submissions ───────────────────────────────────────────────────

function handleVolunteerSubmission(spreadsheet, data, timestamp) {
  var validationError = validateVolunteer(data);
  if (validationError) {
    return jsonResponse({ success: false, error: validationError }, 400);
  }

  var sheet = getOrCreateSheet(spreadsheet, SHEET_VOLUNTEER, VOLUNTEER_HEADERS);

  var row = [
    timestamp,
    sanitize(data.name),
    sanitize(data.email),
    sanitize(data.phone),
    sanitize(data.age),
    sanitize(data.occupation),
    sanitize(data.interests),
    sanitize(data.availability),
    sanitize(data.message || ""),
  ];

  sheet.appendRow(row);

  sendVolunteerEmail(data, timestamp);

  return jsonResponse({
    success: true,
    message: "Volunteer application received. Our team will contact you shortly.",
    type: "volunteer",
  });
}

function validateVolunteer(data) {
  if (!data.name || String(data.name).trim().length < 2) {
    return "Name must be at least 2 characters";
  }
  if (!data.email || !isValidEmail(data.email)) {
    return "Valid email is required";
  }
  if (!data.phone || String(data.phone).trim().length < 10) {
    return "Valid phone number is required";
  }
  if (!data.age || String(data.age).trim().length < 1) {
    return "Age is required";
  }
  if (!data.occupation || String(data.occupation).trim().length < 2) {
    return "Occupation is required";
  }
  if (!data.interests || String(data.interests).trim().length < 3) {
    return "Areas of interest are required";
  }
  if (!data.availability || String(data.availability).trim().length < 3) {
    return "Availability is required";
  }
  return null;
}

function sendVolunteerEmail(data, timestamp) {
  try {
    var subject = "[KST Volunteer] New application from " + sanitize(data.name);
    var body =
      "New volunteer registration\n" +
      "─────────────────────────────\n\n" +
      "Time:         " + timestamp + "\n" +
      "Name:         " + sanitize(data.name) + "\n" +
      "Email:        " + sanitize(data.email) + "\n" +
      "Phone:        " + sanitize(data.phone) + "\n" +
      "Age:          " + sanitize(data.age) + "\n" +
      "Occupation:   " + sanitize(data.occupation) + "\n" +
      "Interests:    " + sanitize(data.interests) + "\n" +
      "Availability: " + sanitize(data.availability) + "\n";

    if (data.message && String(data.message).trim()) {
      body += "\nAdditional message:\n" + sanitize(data.message) + "\n";
    }

    body +=
      "\n─────────────────────────────\n" +
      "Reply directly to: " + sanitize(data.email);

    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: subject,
      body: body,
      replyTo: sanitize(data.email),
    });
  } catch (emailError) {
    Logger.log("Volunteer email failed (row still saved): " + emailError.toString());
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Opens the bound spreadsheet, or falls back to SPREADSHEET_ID if set.
 */
function getSpreadsheet() {
  if (SPREADSHEET_ID) {
    return SpreadsheetApp.openById(SPREADSHEET_ID);
  }
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) {
    throw new Error(
      "No spreadsheet found. Open Extensions → Apps Script FROM your sheet, " +
      "or set SPREADSHEET_ID at the top of Code.gs"
    );
  }
  return spreadsheet;
}

/**
 * Returns an existing sheet or creates it with a formatted header row.
 */
function getOrCreateSheet(spreadsheet, sheetName, headers) {
  var sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
    sheet.appendRow(headers);
    sheet
      .getRange(1, 1, 1, headers.length)
      .setFontWeight("bold")
      .setBackground("#1a5c3a")
      .setFontColor("#ffffff");
    sheet.setFrozenRows(1);
  }

  // Ensure headers exist if sheet was created manually without them
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet
      .getRange(1, 1, 1, headers.length)
      .setFontWeight("bold")
      .setBackground("#1a5c3a")
      .setFontColor("#ffffff");
    sheet.setFrozenRows(1);
  }

  return sheet;
}

/**
 * Builds a JSON HTTP response with CORS headers for browser requests.
 */
function jsonResponse(payload, statusCode) {
  statusCode = statusCode || 200;

  var output = ContentService.createTextOutput(JSON.stringify(payload));
  output.setMimeType(ContentService.MimeType.JSON);

  // Note: Apps Script Web Apps don't support custom HTTP status codes via
  // ContentService, but the JSON body includes success/error for the client.
  return output;
}

/**
 * Strips HTML tags and trims whitespace to prevent injection in sheets/emails.
 */
function sanitize(value) {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/<[^>]*>/g, "")
    .trim();
}

function isValidEmail(email) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(String(email).trim());
}

// ─── Manual test functions (run from Apps Script editor) ─────────────────────

/**
 * Run this from the Apps Script editor to test a contact submission.
 * View → Logs to see the result.
 */
function testContactSubmission() {
  var mockEvent = {
    postData: {
      contents: JSON.stringify({
        type: "contact",
        name: "Test User",
        email: "test@example.com",
        phone: "+91 98765 43210",
        subject: "Test inquiry",
        message: "This is a test message from Apps Script.",
      }),
    },
  };

  var result = doPost(mockEvent);
  Logger.log(result.getContent());
}

/**
 * Run this from the Apps Script editor to test a volunteer submission.
 */
function testVolunteerSubmission() {
  var mockEvent = {
    postData: {
      contents: JSON.stringify({
        type: "volunteer",
        name: "Test Volunteer",
        email: "volunteer@example.com",
        phone: "+91 98765 43210",
        age: "22",
        occupation: "Student",
        interests: "Education, Healthcare",
        availability: "Weekends, 4 hours/week",
        message: "I want to help the community.",
      }),
    },
  };

  var result = doPost(mockEvent);
  Logger.log(result.getContent());
}
