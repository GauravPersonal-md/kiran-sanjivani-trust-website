type SubmissionType = "contact" | "volunteer";

interface GoogleScriptSuccess {
  success: true;
  message: string;
  type: SubmissionType;
}

interface GoogleScriptError {
  success: false;
  error: string;
}

export type GoogleScriptResponse = GoogleScriptSuccess | GoogleScriptError;

export async function submitToGoogleScript(
  type: SubmissionType,
  data: Record<string, string | undefined>
): Promise<GoogleScriptResponse> {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    console.error("GOOGLE_SCRIPT_URL is not configured");
    return {
      success: false,
      error: "Form service is not configured. Please try again later.",
    };
  }

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, ...data }),
      redirect: "follow",
    });

    const text = await response.text();

    let result: GoogleScriptResponse;
    try {
      result = JSON.parse(text) as GoogleScriptResponse;
    } catch {
      console.error("Invalid response from Google Script:", text.slice(0, 200));
      return {
        success: false,
        error: "Unexpected response from form service.",
      };
    }

    return result;
  } catch (error) {
    console.error("Google Script submission failed:", error);
    return {
      success: false,
      error: "Failed to submit form. Please check your connection and try again.",
    };
  }
}

// Simple in-memory rate limit: max 5 submissions per IP per 15 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count += 1;
  return true;
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}
