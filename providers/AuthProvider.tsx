import {
  clearLocalStorage,
  getLocalStorage,
  setLocalStorage,
  StorageKey,
} from "@mb/services/LocalStorageService";
import { API_BASE_URL } from "@mb/utils/constants";
import { useRouter } from "next/router";
import React, { useEffect, useReducer } from "react";

export interface AuthState {
  loggedIn?: boolean;
  user?: { id: string };
}

export interface AuthContextProps {
  state: AuthState;
  login: (username: string, password: string) => Promise<any>;
}

// @ts-ignore
const AuthContext: React.Context<AuthContextProps> = React.createContext(null);

const AuthProvider: React.FC = (props: any) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, {});

  // code for pre-loading the user's information if we have their token in
  // localStorage goes here
  useEffect(() => {
    const expToken = getLocalStorage(StorageKey.OAuthTokenExp);
    if (expToken && (new Date(expToken) < new Date())) {
      const refreshToken = getLocalStorage(StorageKey.OAuthRefreshTokenExp);
      if (refreshToken && new Date(refreshToken) < new Date()) {
        // router.push("/admin/login");
      }
      /* refreshAuthToken(getLocalStorage(StorageKey.OAuthRefreshToken)).catch((err) => {
        router.push("/");
      }); */
    } else if (getLocalStorage(StorageKey.UserId)) {
      dispatch({
        type: "loginUser",
        payload: { user: { id: getLocalStorage(StorageKey.UserId) } },
      });
    } else {
      // router.push("/admin/login");
    }
  }, []);

  /* const refreshAuthToken = async function (refreshToken: string) {
    const response = await fetch(`${baseAuthUrl}/oauth/token`, {
      body: `client_id=${clientId}&client_secret=${clientSecret}&grant_type=refresh_token&refresh_token=${refreshToken}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "post",
    });
    if (response.ok) {
      loginUser(await response.json());
    } else {
      throw await response.json();
    }
  }; */

  const loginUser = function (authResponse: any) {
    setLocalStorage(StorageKey.OAuthToken, authResponse.accessToken);
    setLocalStorage(StorageKey.OAuthTokenExp, authResponse.accessTokenExpiresAt);
    // setLocalStorage(StorageKey.OAuthRefreshToken, authResponse.refreshToken);
    // setLocalStorage(StorageKey.OAuthRefreshTokenExp, authResponse.refreshTokenExpiresAt);
    setLocalStorage(StorageKey.UserId, authResponse.user.id);
    dispatch({
      type: "loginUser",
      payload: {
        user: authResponse.user,
      },
    });
  };

  /**
   * Make a login request to OAuth server
   *
   * @param username
   * @param password
   */
  const login = async (username: string, password: string): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/token`, {
        body: `password=${encodeURIComponent(
          password,
        )}&username=${encodeURIComponent(username)}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "post",
      });

      if (response.ok) {
        const authResponse = await response.json();
        loginUser(authResponse);
      } else {
        throw response.json();
      }
    } catch (err) {
      throw new Error("Email and/or password did not match our records");
    }
  };

  /**
   * Logout by clearing cookie/localStorage and active auth data
   */
  const logout = () => {
    dispatch({
      type: "logoutUser",
    });
    router.push("/");
    clearLocalStorage();
  };

  // clear the token in localStorage and the user data
  // note, I'm not bothering to optimize this `value` with React.useMemo here
  // because this is the top-most component rendered in our app and it will very
  // rarely re-render/cause a performance problem.
  return <AuthContext.Provider value={{ state, login, logout }} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

const reducer = (state: AuthState, action: any) => {
  switch (action.type) {
    case "logoutUser":
      return {
        loggedIn: false,
        user: null
      };
    case "loginUser":
      return {
        loggedIn: true,
        user: action.payload.user
      };
    default:
      return state;
  }
};

export { AuthProvider, useAuth };
