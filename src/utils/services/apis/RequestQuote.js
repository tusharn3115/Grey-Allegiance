import axiosInstance from "../../AxiosInstance";

export const createRequestQuoteApi = async (payload) => {
  const res = await axiosInstance.post(`/v1/requestQuote/create`, payload);
  return res.data;
};

// export const giveMyRatingOfDoctor = async (doctorId, payload) => {
//   const res = await axiosInstance.post(`/v1/user/give-doctor-rating/${doctorId}`, payload);
//   return res.data;
// };