"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { axiosFetchEqupDetails } from "@/axios/equipment";
import { RedSpinner, VibGraph } from "@/components";
import dummyData from "@/data/sample";
import { EquipmentCard } from "@/components";

export default function page() {
  // show the equipment public and secret key
  //fetch the username from the params
  const params = useParams();
  const [data, setdata] = useState(null);

  // right now we are using email as the username which causes @ -> %40  in future update we will be adding a username field.
  const equpName = params.device[0];

  const fetchDetails = async () => {
    const res = await axiosFetchEqupDetails(equpName);
    if (res.status == "success") {
      console.log(res.data);
      setdata(res.data);
    } else {
      console.log("failed to fetch the equipment data", res);
    }
  };
  useEffect(() => {
    fetchDetails();
    // setdata(dummyData[0]);
  }, []);
  if (data) {
    return (
      <div>
        <>
          <EquipmentCard equipment={data} />
        </>
        <VibGraph secretKey={data.privateKey} />
      </div>
    );
  } else {
    return (
      <>
        <div className="w-full flex justify-center items-center h-[50vh]">
          <RedSpinner />
        </div>
      </>
    );
  }
}
