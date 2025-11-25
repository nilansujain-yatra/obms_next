import { NextResponse } from "next/server";

export interface DemoResponse {
  message: string;
}

export async function GET() {
  const response: DemoResponse = {
    message: "Hello from Next.js server",
  };
  return NextResponse.json(response);
}
