import axios from "axios";
export const url = "http://localhost:3000";

// create a equipment
export const createNewEquipment = (name: string, description: string) => {
  const response: any = axios
    .post(`${url}/api/equipment`, { name, details: description })
    .then((res) => {
      console.log("We recived the response in axios function", res);
      return res;
    })
    .catch((err) => {
      console.log("error", err);
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

// fetch details of an equipemnt
export const axiosFetchEqupDetails = (name: string) => {
  const response: any = axios
    .get(`${url}/api/equipment/${name}`)
    .then((res) => {
      console.log("We recived the response while fetching eqp details", res);
      return res.data;
    })
    .catch((err) => {
      console.log("error", err);
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

// fetch all the equipments created by logged in user
export const axiosFetchAllEqup = () => {
  const response: any = axios
    .get(`${url}/api/equipment/all`)
    .then((res) => {
      console.log("We recived the response while fetching eqp details", res);
      return res;
    })
    .catch((err) => {
      console.log("error", err);
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

// get the vib and temp data
export const axiosFetchTempVib = (secretKey: string) => {
  const response: any = axios
    .get(`${url}/api/vibTemp?secretKey=${secretKey}`)
    .then((res) => {
      console.log("axios response of temp vib data", res);
      return res.data;
    })
    .catch((err) => {
      console.log("error", err);
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
