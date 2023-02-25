import React, { useEffect, useState } from "react"
import { SidebarProps } from "./types"
import Item from "./Item"
import { useSidebar, SidebarProvider } from "./useSidebar"
import "./index.scss"
const baseClass = "sidebar"

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { items, style, className } = props
  // const { activeItem, setActiveItem } = useSidebar()
  // const [isShow, setIsShow] = useState(true)
  const classes = [baseClass, className && className, "tree"]
    .filter(Boolean)
    .join(" ")
  return (
    <aside className={classes} style={style}>
      <SidebarProvider defaultActiveItem={items[0]?.to || ""}>
        <Item items={items} />
      </SidebarProvider>
    </aside>
  )
}

export default Sidebar
