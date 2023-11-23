import axios from "axios";
import { getCookiee } from "../helpers/Cookies";

export const useRequest = async (endpoint: string, body: Object, method: "GET" | "POST") => {

  const token = getCookiee("jwtToken")

  let headersList = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer "+token,
  };

  let bodyContent = JSON.stringify(body);

  let reqOptions = {
    url:
      "https://fepruebatecnicaculqi-backend-production.up.railway.app" +
      endpoint,
    method,
    headers: headersList,
    data: bodyContent,
  };

  let response = (await axios.request(reqOptions)).data;

  return response;
}
