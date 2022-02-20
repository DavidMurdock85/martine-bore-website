import { post } from "@mb/services/FetchService";

const sendContactRequest = async (requestSupport: any): Promise<string> => {
  return post(`/support/contact`, {
    body: JSON.stringify(requestSupport),
  });
};

export { sendContactRequest };
