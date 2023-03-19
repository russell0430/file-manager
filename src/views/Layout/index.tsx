import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import React, { useState } from "react"
import { LayoutProvider } from "@/utiliities/Layout"
import { LayoutContainer, MainContainer } from "./style"
import Content from "../Content"

const Layout: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(true)
  const toggleShowSidebar = () => {
    setShowSidebar((val) => !val)
  }
  return (
    <LayoutContainer>
      <LayoutProvider
        showSidebar={showSidebar}
        toggleShowSidebar={toggleShowSidebar}
      >
        <MainContainer className={showSidebar ? "" : "hide"}>
          <Sidebar />
          <Content />
        </MainContainer>
      </LayoutProvider>
    </LayoutContainer>
  )
}

export default Layout
