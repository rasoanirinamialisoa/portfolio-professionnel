import api from "../config/api.js";

export const serviceContact = async (contactData) => {
  const response = await api.post("/api/contact", contactData);
  return response.data;
};
