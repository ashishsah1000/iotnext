import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Equipments from "../../../model/equipment";
import dbConnect from "@/lib/dbConenct";

export async function GET(request) {
  const session = await getServerSession({ request });
  if (session) {
    return NextResponse.json({ status: "error", message: "unathorized" });
  } else {
    return NextResponse.json({ status: "error", message: "unathorized" });
  }
}

export async function POST(request) {
  const session = await getServerSession({ request });
  console.log("we have this session in post request of next api", session);
  if (session) {
    const { user } = session;
    const res = await request.json();
    const { name, details } = res;
    console.log("🚀 ~ file: route.js:27 ~ POST ~ res:", res);
    try {
    } catch (error) {
      console.log(error);
    }
    await dbConnect();
    const eqp = new Equipments({
      name,
      description: details,
      createdBy: session.user.email,
      publicKey: Math.random().toString().split(".")[1],
      privateKey: Math.random().toString().split(".")[1],
    }); /* create a new model in the database */
    await eqp
      .save()
      .then((it) => {
        console.log("item saved", it);
      })
      .catch((err) => {
        console.log("error saving item", err);
      });
    return NextResponse.json({
      success: false,
      name,
      details,
    });
  } else {
    return NextResponse.json({ error: "Unauthorized" });
  }
}
