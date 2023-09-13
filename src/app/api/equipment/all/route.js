import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import Equipments from "../../../../model/equipment";
import dbConnect from "../../../../lib/dbConenct";

export async function GET(request, { params }) {
  const session = await getServerSession({ request });

  const limit = 10,
    offset = 0;

  if (session) {
    const loggedInUser = session.user.email;
    console.log(loggedInUser);
    try {
      await dbConnect();
      const userEquipments = await Equipments.find({
        createdBy: loggedInUser,
      })
        .sort({ dateCreated: "desc" }) // Sort by dateCreated in descending order
        .limit(limit)
        .skip(offset)
        .exec();

      console.log(userEquipments);
      return NextResponse.json({
        status: "success",
        data: userEquipments,
      });
    } catch (error) {
      console.error("Error fetching user equipment:", error);

      return NextResponse.json({ status: "error", message: error });
    }
  } else {
    return NextResponse.json({ status: "error", message: "unathorized" });
  }
}
