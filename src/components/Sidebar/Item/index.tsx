import React, { useState } from "react"
import { ItemProps, LiItemProps } from "./types"
import { useRouter } from "@/routes/router"
import "./index.scss"
import { useSidebar } from "../useSidebar"
const LiItem: React.FC<LiItemProps> = ({ item }) => {
  const [open, setOpen] = useState(false)

  const { activeItem, setActiveItem } = useSidebar()
  const { navigate } = useRouter()
  const handleClick: React.MouseEventHandler = (event) => {
    event.stopPropagation()
    event.preventDefault()
    setOpen((val) => !val)
    setActiveItem(item.to)
    navigate(item.to)
  }
  console.log(item.label)

  let content
  if (item.children && item.children.length) {
    content = (
      <details open={open}>
        <summary
          className={activeItem === item.to ? "active" : ""}
          onClick={handleClick}
        >
          {item.label}
        </summary>
        <Item items={item.children} />
      </details>
    )
  } else {
    content = (
      <summary className={activeItem === item.to ? "active" : ""}>
        {item.label}
      </summary>
    )
  }
  return (
    <li onClick={handleClick} key={item.to}>
      {content}
    </li>
  )
}

const Item: React.FC<ItemProps> = (props) => {
  const { items } = props

  return (
    <ul>
      {items.map((item) => {
        return <LiItem item={item} key={item.to}></LiItem>
      })}
    </ul>
  )
}

export default Item
