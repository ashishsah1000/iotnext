"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Login from "./login/page";
import Dashboard from "./dashboard/page";
import { AddDevice, Devices } from "@/components";

export default function Home() {
  const session = useSession();
  console.log(session);

  if (session.data) {
    return (
      <>
        <div className="w-[80vw] mx-auto mt-24">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl mb-12">
              Welcome <b>{session.data?.user?.name}</b> ,{" "}
            </h1>
            <div className="flex-grow"></div>
            <AddDevice />
          </div>
          <div className="mt-12">
            <Devices />
          </div>
        </div>
      </>
    );
  }
  return <Login />;
}
