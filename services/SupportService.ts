import { post } from "@mb/services/FetchService";

const sendSupportRequest = async (requestSupport: any): Promise<string> => {
  return post(`/notify/requestSupport`, {
    body: JSON.stringify(requestSupport),
  });
};

export { sendSupportRequest };
