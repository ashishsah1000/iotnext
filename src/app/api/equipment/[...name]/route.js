import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Equipments from "../../../../model/equipment";
import dbConnect from "../../../../lib/dbConenct";

export async function GET(request, { params }) {
  const session = await getServerSession({ request });
  const name = params.name[0];
  if (session) {
    try {
      await dbConnect();

      const equipment = await Equipments.findOne({ name });
      if (!equipment) {
        // Handle the case where equipment with the specified name was not found
        return NextResponse.json({
          status: "failed",
          data: "no such equipment",
        });
      }

      // Equipment with the specified name was found
      // return equipment;
      return NextResponse.json({ status: "success", data: equipment });
    } catch (error) {
      console.error("Error finding equipment by name:", error);
      return NextResponse.json({
        status: "failed",
        data: "database error",
      });
    }
  } else {
    return NextResponse.json({ status: "error", message: "unathorized" });
  }
}
