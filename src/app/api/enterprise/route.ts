import { HOME_DOMAIN } from "@/lib/constants";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "../../../../emails";
import EnterpriseRequest from "../../../../emails/enterprise-request";

// Add and setting up the OPTIONS method
export async function OPTIONS(request: Request) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": `${HOME_DOMAIN}`,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

// API to save waitlist email
export async function POST(request: Request) {
  try {
    const { email, company, comments } = (await request.json()) as {
      email: string;
      company: string;
      comments: string;
    };

    console.log({ email, company, comments });
    await sendEmail({
      identifier: process.env.EMAIL_SERVER_USER ?? "",
      subject: "Enterprise Request",
      react: EnterpriseRequest({
        email,
        company,
        comment: comments,
      }),
    });
    return NextResponse.json({ status: "OK" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
        error: err.toString(),
      },
      { status: 500 },
    );
  }
}
