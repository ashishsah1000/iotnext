import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConenct";

export async function GET(request) {
  const session = await getServerSession({ request });
  if (session) {
    await dbConnect();

    return NextResponse.json({
      status: "connected to database",
      message: "Database has been connected",
    });
  } else {
    return NextResponse.json({ status: "error", message: "unathorized" });
  }
}
