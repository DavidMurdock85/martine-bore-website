import { post } from "@mb/services/FetchService";

// Define a function named 'sendContactRequest' that accepts a 'requestSupport' object and returns a Promise of a string.
const sendContactRequest = async (requestSupport: any): Promise<string> => {
  // Send a POST request to the server to create a new contact request.
  return post(`/support/contact`, {
    body: JSON.stringify(requestSupport), // Set the request body to the 'requestSupport' object.
  });
};

// Export the 'sendContactRequest' function as the default export of the module.
export { sendContactRequest };