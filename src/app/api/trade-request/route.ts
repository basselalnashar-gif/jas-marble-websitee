import { NextRequest, NextResponse } from "next/server";

/**
 * Handles submissions from the Trade Program account request form.
 * See /api/quote-request/route.ts for integration notes — same idea applies
 * here (email service, CRM, or database).
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const required = ["companyName", "contactName", "email", "role"];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // eslint-disable-next-line no-console
    console.log("New trade account request:", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
