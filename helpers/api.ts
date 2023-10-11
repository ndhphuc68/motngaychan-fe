import { useFetch } from "#app";
import { ResponseModel } from "~/models";

const baseUrl: string | undefined = "http://localhost:8080/api/v1";

export const apiPost = async (url: string, dataRequest: any) => {
  const res = await useFetch<ResponseModel>(`${baseUrl}${url}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    method: "POST",
    body: JSON.stringify(dataRequest),
  });
  return res.data.value;
};

export const apiGet = async (url: string) => {
  const res = await useFetch<ResponseModel>(`${baseUrl}${url}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    method: "GET",
  });
  return res.data.value;
};
