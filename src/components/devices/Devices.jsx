import { StatusOnlineIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { formatDateTime } from "@/helpers/time";

import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";
import Link from "next/link";
import { axiosFetchAllEqup } from "@/axios/equipment";
import { RedSpinner } from "..";

const data = [
  {
    name: "Equipment 1",
    dateCreated: "2023-09-15T10:30:00Z", // Date format should be in ISO 8601 format
    publicKey: "public_key_1",
  },
  {
    name: "Equipment 2",
    dateCreated: "2023-09-16T14:45:00Z",
    publicKey: "public_key_2",
  },
  {
    name: "Equipment 3",
    dateCreated: "2023-09-17T09:15:00Z",
    publicKey: "public_key_3",
  },
];

const Devices = () => {
  const fetchCreatedEquipmentsLists = async () => {
    // axios function to fetch the specific equuipment
    const res = await axiosFetchAllEqup();
    console.log("this is the response we are reciving ", res.data);
    if (res.data.status == "success") {
      setEqupData(res.data.data);
    } else {
      setEqupData(undefined);
    }
  };
  useEffect(() => {
    fetchCreatedEquipmentsLists();
  }, []);
  const [EqupData, setEqupData] = useState(null);
  return (
    <Card>
      <Title>List of Equipments</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Date Created</TableHeaderCell>
            <TableHeaderCell>Public Key</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {EqupData == undefined ? (
            <>
              <div className="p-4 flex justify-center w-full">
                {" "}
                <RedSpinner />{" "}
              </div>
            </>
          ) : (
            <>
              {EqupData.length == 0 ? (
                <>No Equipment added here</>
              ) : (
                <>
                  {EqupData.map((item) => (
                    <TableRow key={item.name}>
                      <TableCell>
                        <Link
                          href={`/dashboard/${item.name}`}
                          className="font-bold text-sky-800"
                        >
                          {item.name}
                        </Link>
                      </TableCell>
                      <TableCell>{formatDateTime(item.dateCreated)}</TableCell>
                      <TableCell>{item.publicKey}</TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            </>
          )}
        </TableBody>
      </Table>
    </Card>
  );
};

export default Devices;
