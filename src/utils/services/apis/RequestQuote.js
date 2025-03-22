import axiosInstance from "../../AxiosInstance";

export const createRequestQuoteApi = async (payload) => {
  const res = await axiosInstance.post(`/v1/requestQuote/create`, payload);
  return res.data;
};