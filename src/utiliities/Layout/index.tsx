import { useContext, createContext, useState } from "react"
import { LayoutContext } from "./types"

const Context = createContext({} as LayoutContext)

export const LayoutProvider: React.FC<{
  showSidebar: boolean
  toggleShowSidebar: () => void
  children: React.ReactNode
}> = ({ showSidebar, toggleShowSidebar, children }) => {
  return (
    <Context.Provider value={{ showSidebar, toggleShowSidebar }}>
      {children}
    </Context.Provider>
  )
}

export const useLayout = (): LayoutContext => useContext(Context)
