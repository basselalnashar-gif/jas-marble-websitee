import { NextRequest, NextResponse } from "next/server";

/**
 * Handles submissions from the main Contact & Quote form.
 *
 * TODO before launch: this currently only logs the submission. Wire it up to
 * one of:
 *   - An email service (Resend, SendGrid, Postmark) to notify your inbox
 *   - A CRM (HubSpot, Pipedrive) to create a lead automatically
 *   - A spreadsheet/database for simple tracking
 *
 * The shape of `body` below already contains everything the quote form
 * collects, so integration is just adding the API call — no form changes
 * needed.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const required = ["name", "email", "role", "projectType"];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // eslint-disable-next-line no-console
    console.log("New quote request:", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
