import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  source?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const service = body.service?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const isQuickBanner = body.source === "home-banner";

    const fieldErrors: Record<string, string> = {};

    if (name.length < 2) {
      fieldErrors.name = "Please enter your full name (at least 2 characters).";
    }
    if (!EMAIL_RE.test(email)) {
      fieldErrors.email = "Please enter a valid work email address.";
    }
    if (phone && !/^[+\d\s().-]{7,20}$/.test(phone)) {
      fieldErrors.phone = "Please enter a valid phone number.";
    }
    if (!service) {
      fieldErrors.service = "Please select a service you are interested in.";
    }
    if (!isQuickBanner && message.length < 10) {
      fieldErrors.message =
        "Please share a few project details (at least 10 characters).";
    }

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please fix the highlighted fields and try again.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message:
          "Your inquiry has been received. Our team will respond within one business day.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to process your request right now. Please try again.",
      },
      { status: 500 }
    );
  }
}
