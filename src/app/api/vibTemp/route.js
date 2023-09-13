import { getServerSession } from "next-auth";
import TempVibs from "../../../model/TempVib";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConenct";

export async function GET(request) {
  const session = await getServerSession({ request });
  if (session) {
    const { searchParams } = new URL(request.url);
    const secretKey = searchParams.get("secretKey");
    console.log("this is the secretKey ", secretKey);
    await dbConnect();
    const TempVibsData = await TempVibs.find({
      secretKey: secretKey,
    })
      .sort({ dateCreated: "desc" }) // Sort by dateCreated in descending order
      .limit(20)
      .skip(0)
      .exec();

    return NextResponse.json({
      status: "success",
      data: TempVibsData,
    });
  } else {
    return NextResponse.json({ status: "error", message: "unathorized" });
  }
}
