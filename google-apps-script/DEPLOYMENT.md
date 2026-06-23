# Google Apps Script — Deployment Guide

This script receives form submissions from your Kiran Sanjivani Trust website and saves them to Google Sheets + emails you.

---

## Step 1 — Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **Blank** to create a new spreadsheet
3. Rename it to **KST Form Submissions** (click the title at the top)
4. Create two tabs at the bottom (click **+** to add sheets):
   - Rename the first tab to **`Contact`**
   - Rename the second tab to **`Volunteer`**

   Tab names must match exactly — capital C and V.

5. Optional: add header rows manually (the script will create them if missing):

   **Contact tab (row 1):**
   ```
   Timestamp | Name | Email | Phone | Subject | Message
   ```

   **Volunteer tab (row 1):**
   ```
   Timestamp | Name | Email | Phone | Age | Occupation | Interests | Availability | Message
   ```

---

## Step 2 — Add the Script

1. In your spreadsheet, go to **Extensions → Apps Script**
2. Delete any default code in `Code.gs`
3. Copy the entire contents of [`Code.gs`](./Code.gs) from this folder and paste it
4. **Change line 21** to your real email:
   ```javascript
   const NOTIFICATION_EMAIL = "your-email@gmail.com";
   ```
5. Click **Save** (disk icon) and name the project **KST Form Handler**

---

## Step 3 — Test Locally (before deploying)

1. In the Apps Script editor, select **`testContactSubmission`** from the function dropdown
2. Click **Run**
3. Google will ask for permissions the first time:
   - Click **Review permissions**
   - Choose your Google account
   - Click **Advanced → Go to KST Form Handler (unsafe)**
   - Click **Allow**
4. Open **View → Logs** — you should see:
   ```json
   {"success":true,"message":"Contact message received...","type":"contact"}
   ```
5. Check your **Contact** tab — a new row should appear
6. Check your email inbox for the notification
7. Repeat with **`testVolunteerSubmission`** to test the Volunteer tab

---

## Step 4 — Deploy as Web App

1. In Apps Script, click **Deploy → New deployment**
2. Click the gear icon next to **Select type** → choose **Web app**
3. Fill in:
   | Setting | Value |
   |---------|-------|
   | Description | KST Form Handler v1 |
   | Execute as | **Me** (your Google account) |
   | Who has access | **Anyone** |
4. Click **Deploy**
5. Copy the **Web App URL** — it looks like:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```
6. Save this URL — you will need it for your website

> **Important:** If you edit the script later, go to **Deploy → Manage deployments → Edit (pencil icon) → Version: New version → Deploy**. Otherwise the live URL keeps running the old code.

---

## Step 5 — Test the Live URL

### Test in browser (GET)
Open your Web App URL in a browser. You should see:
```json
{
  "status": "ok",
  "service": "Kiran Sanjivani Trust Form Handler",
  "accepts": ["POST"],
  "types": ["contact", "volunteer"]
}
```

### Test with curl (POST)

**Contact form:**
```bash
curl -X POST "YOUR_WEB_APP_URL" \
  -H "Content-Type: application/json" \
  -d "{\"type\":\"contact\",\"name\":\"Test User\",\"email\":\"test@example.com\",\"phone\":\"9876543210\",\"subject\":\"Hello\",\"message\":\"This is a test message.\"}"
```

**Volunteer form:**
```bash
curl -X POST "YOUR_WEB_APP_URL" \
  -H "Content-Type: application/json" \
  -d "{\"type\":\"volunteer\",\"name\":\"Test Volunteer\",\"email\":\"vol@example.com\",\"phone\":\"9876543210\",\"age\":\"25\",\"occupation\":\"Student\",\"interests\":\"Education\",\"availability\":\"Weekends\"}"
```

Expected response:
```json
{"success":true,"message":"...","type":"contact"}
```

---

## Step 6 — Connect to Your Website

1. In your project root, create a file `.env.local`:
   ```
   GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ID/exec
   CONTACT_EMAIL=your-email@gmail.com
   ```
2. The Next.js API routes (`/api/contact` and `/api/volunteer`) will forward form data to this URL
3. For Vercel deployment, add `GOOGLE_SCRIPT_URL` in **Vercel → Settings → Environment Variables**

---

## API Reference

### POST — Contact submission

```json
{
  "type": "contact",
  "name": "Priya Sharma",
  "email": "priya@example.com",
  "phone": "+91 98765 43210",
  "subject": "Partnership inquiry",
  "message": "We would like to partner with KST for CSR."
}
```

### POST — Volunteer submission

```json
{
  "type": "volunteer",
  "name": "Rahul Verma",
  "email": "rahul@example.com",
  "phone": "+91 98765 43210",
  "age": "22",
  "occupation": "College Student",
  "interests": "Education, Events",
  "availability": "Saturdays, 3 hours/week",
  "message": "Optional additional message"
}
```

### Success response

```json
{
  "success": true,
  "message": "Contact message received. We will respond within 24 hours.",
  "type": "contact"
}
```

### Error response

```json
{
  "success": false,
  "error": "Valid email is required"
}
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Authorization required" on first run | Run `testContactSubmission` and approve permissions |
| No email received | Check spam folder; verify `NOTIFICATION_EMAIL` is correct |
| "Sheet not found" | Ensure tabs are named exactly `Contact` and `Volunteer` |
| Old code still running after edits | Deploy a **New version** (see Step 4 note) |
| CORS errors from website | Use Next.js API routes as a proxy — don't call the script URL directly from the browser |
| Daily email limit (100/day) | Sufficient for an NGO site; upgrade to Gmail Workspace if needed |

---

## Security Tips

- Never share your Web App URL publicly in frontend code — keep it in `.env.local` / Vercel env vars only
- The script validates and sanitizes all input before writing to the sheet
- Consider adding a simple secret token check if you receive spam (ask us to add this when wiring the API routes)
