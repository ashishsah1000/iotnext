import { url } from "./equipment";
import axios from "axios";

// this will create a database connection in mongoose
export const establishConnection = () => {
  const response: any = axios
    .get(`${url}/api/equipment`)
    .then((res) => {
      console.log(
        "We recived the response while trying to establish database",
        res
      );
      return res;
    })
    .catch((err) => {
      console.log("error while connecting to database", err);
      return {
        status: "failed",
        data: "some error happened axios function",
      };
    })
    .finally(() => {
      console.log("axios function was completed");
    });
  return response;
};
