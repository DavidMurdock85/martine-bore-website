import {
  clearLocalStorage,
  getLocalStorage,
  setLocalStorage,
  StorageKey,
} from '@mb/services/LocalStorageService'
import { API_BASE_URL } from '@mb/utils/constants'
import { useRouter } from 'next/router'
import React, { useEffect, useReducer } from 'react'

export interface AuthState {
  loggedIn?: boolean 
  user?: { id: string } 
}
export interface AuthContextProps {
  state: AuthState 
  login: (username: string, password: string) => Promise<any> 
}

const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps
)

const AuthProvider: React.FC<any> = (props: any) => {
  const router = useRouter() 
  const [state, dispatch] = useReducer(reducer, {}) 

  useEffect(() => {
    const expToken = getLocalStorage(StorageKey.OAuthTokenExp)
    if (expToken && new Date(expToken) < new Date()) {
      const refreshToken = getLocalStorage(StorageKey.OAuthRefreshTokenExp)
      if (refreshToken && new Date(refreshToken) < new Date()) {
        // TODO: implement refresh token logic
      }
    } else if (getLocalStorage(StorageKey.UserId)) {
      dispatch({
        type: 'loginUser',
        payload: { user: { id: getLocalStorage(StorageKey.UserId) } },
      })
    } else {
      // TODO: handle the case where the user is not logged in
    }
  }, [])

  const loginUser = function (authResponse: any) {
    setLocalStorage(StorageKey.OAuthToken, authResponse.accessToken)
    setLocalStorage(StorageKey.OAuthTokenExp, authResponse.accessTokenExpiresAt)
    setLocalStorage(StorageKey.UserId, authResponse.user.id)
    dispatch({
      type: 'loginUser',
      payload: {
        user: authResponse.user,
      },
    })
  }
  
  const login = async (username: string, password: string): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/token`, {
        body: `password=${encodeURIComponent(
          password
        )}&username=${encodeURIComponent(username)}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'post',
      })

      if (response.ok) {
        const authResponse = await response.json()
        loginUser(authResponse) 
      } else {
        throw response.json() 
      }
    } catch (err) {
      throw new Error('Email and/or password did not match our records')
    }
  }

  const logout = () => {
    dispatch({
      type: 'logoutUser',
    })
    router.push('/')
    clearLocalStorage()
  }

  return <AuthContext.Provider value={{ state, login, logout }} {...props} />
}

const useAuth = () => React.useContext(AuthContext)
const initialState: AuthState = {}
const reducer = (state: AuthState = initialState, action: any) => {
  switch (action.type) {
    case 'logoutUser':
      return {
        loggedIn: false,
        user: null,
      }
    case 'loginUser':
      return {
        loggedIn: true,
        user: action.payload.user,
      }
    default:
      return state
  }
}

export { AuthProvider, useAuth }
