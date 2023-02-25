import React, { useContext, createContext, ReactNode, useState } from "react"
import { SidebarContext } from "./types"

const Context = createContext({} as SidebarContext)

export const SidebarProvider: React.FC<{
  children: ReactNode
  defaultActiveItem?: string
}> = ({ children, defaultActiveItem }) => {
  const [activeItem, setActiveItem] = useState(defaultActiveItem || "")
  return (
    <Context.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </Context.Provider>
  )
}

export const useSidebar = (): SidebarContext => useContext(Context)
