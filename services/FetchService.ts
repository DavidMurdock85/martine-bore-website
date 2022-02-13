import { getLocalStorage, StorageKey } from "@mb/services/LocalStorageService";
import { API_BASE_URL } from "@mb/utils/constants";
import assign from "deep-assign";

const baseApiUrl = API_BASE_URL;

async function get<T>(path: string, options?: any): Promise<T> {
  return fetchWithDefaults(
    path,
    assign(
      {
        method: "get",
      },
      options,
    ),
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
      options,
    ),
  );
}

async function postFile(path: string, options?: any): Promise<any> {
  return fetchWithDefaults(
    path,
    assign(
      {
        method: "post",
      },
      options,
    ),
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
      options,
    ),
  );
}

async function del(path: string, options?: any): Promise<any> {
  return fetchWithDefaults(
    path,
    assign(
      {
        method: "delete",
      },
      options,
    ),
  );
}

async function fetchWithDefaults(path: string, options?: any): Promise<any> {
  const response = await fetch(
    `${baseApiUrl}${path}`,
    assign(
      {
        // credentials: "include",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${getLocalStorage(StorageKey.OAuthToken)}`,
        },
      },
      options,
    ),
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
        // TODO figure what should actually happen here? Currently 204 and 401 have
        // the same behavior, that doesn't seem correct
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
