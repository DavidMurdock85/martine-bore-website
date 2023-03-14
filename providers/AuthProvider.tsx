import {
  clearLocalStorage,
  getLocalStorage,
  setLocalStorage,
  StorageKey,
} from "@mb/services/LocalStorageService";
import { API_BASE_URL } from "@mb/utils/constants";
import { useRouter } from "next/router";
import React, { useEffect, useReducer } from "react";

// Define an interface for the authentication state
export interface AuthState {
  loggedIn?: boolean; // Whether the user is currently logged in or not
  user?: { id: string }; // User information (e.g. user ID)
}

// Define an interface for the authentication context properties
export interface AuthContextProps {
  state: AuthState; // Current authentication state
  login: (username: string, password: string) => Promise<any>; // Function to log in the user
}

// Create a new context for the authentication state and properties
// @ts-ignore 
const AuthContext: React.Context<AuthContextProps> = React.createContext(null);

// Create a provider component that wraps the app and provides the authentication context
const AuthProvider: React.FC = (props: any) => {
  const router = useRouter(); // Get the current router instance
  const [state, dispatch] = useReducer(reducer, {}); // Use a reducer to manage the authentication state

  // Check if there is an expired OAuth token and refresh it if possible
  // Otherwise, check if there is a saved user ID and log them in automatically
  useEffect(() => {
    const expToken = getLocalStorage(StorageKey.OAuthTokenExp);
    if (expToken && (new Date(expToken) < new Date())) {
      const refreshToken = getLocalStorage(StorageKey.OAuthRefreshTokenExp);
      if (refreshToken && new Date(refreshToken) < new Date()) {
        // TODO: implement refresh token logic
      }
    } else if (getLocalStorage(StorageKey.UserId)) {
      dispatch({
        type: "loginUser",
        payload: { user: { id: getLocalStorage(StorageKey.UserId) } },
      });
    } else {
      // TODO: handle the case where the user is not logged in
    }
  }, []);

  // Log in the user and update the authentication state
  const loginUser = function (authResponse: any) {
    setLocalStorage(StorageKey.OAuthToken, authResponse.accessToken);
    setLocalStorage(StorageKey.OAuthTokenExp, authResponse.accessTokenExpiresAt);
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
  // Attempt to log in the user using the provided credentials
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
        loginUser(authResponse); // Log in the user and update the authentication state
      } else {
        throw response.json(); // Throw an error if the login request failed
      }
    } catch (err) {
      throw new Error("Email and/or password did not match our records");
    }
  };

  // Log out the user and clear their authentication data
  const logout = () => {
    dispatch({
      type: "logoutUser",
    });
    router.push("/");
    clearLocalStorage();
  };


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
