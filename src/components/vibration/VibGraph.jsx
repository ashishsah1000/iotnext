import React, { useEffect, useState } from "react";
import { Card, Title, LineChart } from "@tremor/react";
import { RiBaseStationLine } from "react-icons/ri";
import {
  calculateTimeDifferenceInMinutes,
  formatDateTime,
} from "@/helpers/time";
import { axiosFetchTempVib } from "@/axios/equipment";

export default function VibGraph({ secretKey = 0 }) {
  const [data, setData] = useState([]);
  const [online, setOnline] = useState(false);

  // fetch data with the secretKey
  console.log("we are having the secretKey of the data ", secretKey);
  const fetchData = async () => {
    const res = await axiosFetchTempVib(secretKey);
    console.log(res);
    if (res.status == "success") {
      let arr = res.data.map((item) => {
        return {
          vib: item.vib,
          temp: item.temp,
          timestamp: formatDateTime(new Date(item.dateCreated)).split(" ")[0],
        };
      });
      const activeMinAgo = calculateTimeDifferenceInMinutes(
        res.data.reverse()[res.data.length - 1].dateCreated
      );
      console.log("was last active", activeMinAgo);
      let interval;
      if (activeMinAgo < 2) {
        setOnline(true);
        interval = setInterval(() => {
          console.log("fetching again");
          fetchData();
          if (activeMinAgo > 2) {
            clearInterval(interval);
          }
        }, 30000);
      } else {
        console.log("clearing interval as device is not active");
        setOnline(false);
        clearInterval(interval);
      }

      console.log("converted array", arr);
      setData([...arr]);
    } else {
      console.log("failed to fetch vib and sensordata");
    }
  };

  useEffect(() => {
    if (secretKey == 0) {
      console.log("no key passed");
    } else {
      fetchData();
    }
  }, []);

  const sampleData = [
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:00:00.000Z")).split(
        " "
      )[0],
      vib: 42,
      temp: 68,
    },
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:01:00.000Z")).split(
        " "
      )[0],
      vib: 55,
      temp: 172,
    },
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:02:00.000Z")).split(
        " "
      )[0],
      vib: 78,
      temp: 83,
    },
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:03:00.000Z")).split(
        " "
      )[0],
      vib: 36,
      temp: 54,
    },
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:04:00.000Z")).split(
        " "
      )[0],
      vib: 91,
      temp: 97,
    },
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:05:00.000Z")).split(
        " "
      )[0],
      vib: 23,
      temp: 42,
    },
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:06:00.000Z")).split(
        " "
      )[0],
      vib: 69,
      temp: 75,
    },
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:07:00.000Z")).split(
        " "
      )[0],
      vib: 81,
      temp: 89,
    },
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:08:00.000Z")).split(
        " "
      )[0],
      vib: 47,
      temp: 63,
    },
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:09:00.000Z")).split(
        " "
      )[0],
      vib: 62,
      temp: 76,
    },
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:10:00.000Z")).split(
        " "
      )[0],
      vib: 14,
      temp: 31,
    },
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:11:00.000Z")).split(
        " "
      )[0],
      vib: 72,
      temp: 80,
    },
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:12:00.000Z")).split(
        " "
      )[0],
      vib: 58,
      temp: 67,
    },
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:13:00.000Z")).split(
        " "
      )[0],
      vib: 39,
      temp: 59,
    },
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:14:00.000Z")).split(
        " "
      )[0],
      vib: 88,
      temp: 95,
    },
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:15:00.000Z")).split(
        " "
      )[0],
      vib: 27,
      temp: 49,
    },
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:16:00.000Z")).split(
        " "
      )[0],
      vib: 50,
      temp: 70,
    },
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:17:00.000Z")).split(
        " "
      )[0],
      vib: 63,
      temp: 77,
    },
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:18:00.000Z")).split(
        " "
      )[0],
      vib: 33,
      temp: 51,
    },
    {
      timestamp: formatDateTime(new Date("2023-09-14T00:19:00.000Z")).split(
        " "
      )[0],
      vib: 75,
      temp: 84,
    },
  ];

  const dataFormatter = (number) =>
    `${Intl.NumberFormat("us").format(number).toString()}%`;

  return (
    <div>
      <div className="w-full flex items-center justify-end my-2">
        <RiBaseStationLine
          size={36}
          className={`${online ? "text-green-500" : "text-red-500"}  `}
        />
      </div>

      <Card>
        <Title>Temprature and Vibration data</Title>
        <LineChart
          className="mt-6"
          data={data.length > 0 ? data.reverse() : sampleData}
          index="timestamp"
          categories={["vib", "temp"]}
          colors={["emerald", "gray"]}
          //   valueFormatter={dataFormatter}
          yAxisWidth={40}
        />
      </Card>
    </div>
  );
}
