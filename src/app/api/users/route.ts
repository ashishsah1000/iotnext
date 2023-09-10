import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: "this is executed with get request" });
}
