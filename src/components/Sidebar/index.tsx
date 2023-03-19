import React, { useEffect, useMemo, useState } from "react"
import Item from "./Item"
import { Item as ItemType, Props } from "./types"
import { SidebarProvider } from "./useSidebar"
import { getFolder } from "@/request"
import { SidebarContainer } from "./style"
import { useLayout } from "@/utiliities/Layout"
import { Link } from "@/routes/Link"
import Logo from "@/components/Logo"
const Sidebar: React.FC<Props> = (props) => {
  const { style, className, width = "200px" } = props
  // const { activeItem, setActiveItem } = useSidebar()
  // const [isShow, setIsShow] = useState(true)

  const { showSidebar } = useLayout()
  const [sidebarContent, setSidebarContent] = useState<ItemType[]>([])

  useEffect(() => {
    getFolder("/", true).then((response) => {
      const { data, msg, status } = response
      setSidebarContent(data?.stats || [])
    })
  }, [])
  const sidebarWidth = useMemo(
    () => (typeof width === "number" ? `${width}px` : width),
    [width]
  )
  return (
    <SidebarContainer
      className={`sidebar ${showSidebar ? "" : "hide"}`}
      style={style}
    >
      <div className="sidebar-header">
        <Link to="/">
          <Logo />
        </Link>
        <div className="sidebar-label">label</div>
      </div>
      <div className="sidebar-content">
        <SidebarProvider defaultActiveItem={sidebarContent[0]?.to || ""}>
          <Item items={sidebarContent} />
        </SidebarProvider>
      </div>
      {/* <div className="show-icon">
        <ChevronRight />
      </div> */}
    </SidebarContainer>
  )
}

export default Sidebar
