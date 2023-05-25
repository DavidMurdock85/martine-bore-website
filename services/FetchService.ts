import { getLocalStorage, StorageKey } from "@mb/services/LocalStorageService";
import { API_BASE_URL } from "@mb/utils/constants";
import assign from "deep-assign";

// Set the base URL for API calls
const baseApiUrl = API_BASE_URL;

async function get<T>(path: string, options?: any): Promise<T> {
  return fetchWithDefaults(
    path,
    assign(
      {
        method: "get",
      },
      options
    )
  );
}

async function post(path: string, options?: any): Promise<any> {
  return fetchWithDefaults(
    path,
    assign(
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
      },
      options
    )
  );
}

// Async function to make a POST request with a file
async function postFile(path: string, options?: any): Promise<any> {
  return fetchWithDefaults(
    path,
    assign(
      {
        method: "post",
      },
      options
    )
  );
}

async function put(path: string, options?: any): Promise<any> {
  return fetchWithDefaults(
    path,
    assign(
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "put",
      },
      options
    )
  );
}

async function del(path: string, options?: any): Promise<any> {
  return fetchWithDefaults(
    path,
    assign(
      {
        method: "delete",
      },
      options
    )
  );
}

// Async function to make a fetch request with default headers and options
async function fetchWithDefaults(path: string, options?: any): Promise<any> {
  // Make the fetch request with the specified path and options
  const response = await fetch(
    `${baseApiUrl}${path}`,
    assign(
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${getLocalStorage(StorageKey.OAuthToken)}`,
        },
      },
      options
    )
  );

  if (response.ok) {
    switch (response.status) {
      case 204:
        return;
      default:
        return response.json();
    }
  } else {
    switch (response.status) {
      case 401:
        throw new Error("Unauthorized");
      default:
        throw {
          response: await response.json(),
          error: new Error(),
        };
    }
  }
}

export { del, get, post, postFile, put };
