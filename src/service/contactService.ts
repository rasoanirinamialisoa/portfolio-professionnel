import api from "../config/api";

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

const contactService = async (
  contactData: ContactData
): Promise<any> => {
  const response = await api.post(
    "/api/contact",
    contactData
  );

  return response.data;
};

export default contactService;

export const serviceContact = async (contactData: ContactData) => {
  return await contactService(contactData);
};