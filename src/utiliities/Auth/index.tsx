import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react"
import jwtDecode from "jwt-decode"
import { getMe, logout as logoutRequest } from "@/request"
import { AuthContext, User } from "./types"

const Context = createContext({} as AuthContext)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null)
  const [tokenInMemory, setTokenInMemory] = useState<string | null>(null)

  const logout = useCallback(async () => {
    setUser(null)
    setTokenInMemory(null)
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    await logoutRequest()
  }, [])

  const setToken = useCallback((token: string) => {
    const decoded = jwtDecode<{
      user: User
      exp: number
      iat: number
      sub: string
    }>(token)

    // store in localstorage : optional solution for token
    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(decoded.user))

    setUser(decoded.user)
    setTokenInMemory(token)
  }, [])

  useEffect(() => {
    const user = localStorage.getItem("user")
    setUser(user ? JSON.parse(user) : null)
    setTokenInMemory(localStorage.getItem("token"))
  }, [])

  // useEffect(() => {
  //   const fetchMe = async (user: string) => {
  //     const request = await getMe(user)
  //     if (request.status === 200) {
  //       const json = await request.json()
  //       setUser(json?.user || null)
  //       if (json?.token) {
  //         setToken(json.token)
  //       }
  //     }
  //   }
  //   fetchMe()
  // }, [setToken])

  return (
    <Context.Provider value={{ user, logout, setToken, token: tokenInMemory }}>
      {children}
    </Context.Provider>
  )
}

export const useAuth = (): AuthContext => useContext(Context)
