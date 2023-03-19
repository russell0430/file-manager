export type User = {
  username: string
  _id: number
}
export type Permissions = string
export type AuthContext<T = User> = {
  user: T | null
  logout: () => void
  setToken: (token: string) => void
  token: string | null
  permissions?: Permissions
}
