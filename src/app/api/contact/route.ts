import { HOME_DOMAIN } from "@/lib/constants";
import { NextResponse } from "next/server";
import { sendEmail } from "../../../../emails";
import Query from "../../../../emails/query";

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
    const { email, comments, name } = (await request.json()) as {
      email: string;
      comments: string;
      name: string;
    };

    await sendEmail({
      identifier: process.env.EMAIL_SERVER_USER ?? "",
      subject: "New Query for Orgnise",
      react: Query({
        name,
        email,
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
