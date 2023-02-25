import React, { createContext, useContext } from "react"
// ready for type
type Context = {}
const Context = createContext<Context>({} as Context)

export const ConfigProvider: React.FC<
  React.PropsWithChildren<{ config: Context }>
> = ({ children, config }) => (
  <Context.Provider value={config}>{children}</Context.Provider>
)

export const useConfig = (): Context => useContext(Context)
