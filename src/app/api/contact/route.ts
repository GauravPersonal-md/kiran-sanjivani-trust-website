import { NextResponse } from "next/server";
import {
  checkRateLimit,
  getClientIp,
  submitToGoogleScript,
} from "@/lib/google-script";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body" },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const firstError = parsed.error.errors[0]?.message ?? "Validation failed";
    return NextResponse.json(
      { success: false, error: firstError },
      { status: 400 }
    );
  }

  const result = await submitToGoogleScript("contact", parsed.data);

  if (!result.success) {
    return NextResponse.json(result, { status: 400 });
  }

  return NextResponse.json(result);
}
