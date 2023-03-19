import React, { useEffect, useState } from "react"
import { ItemProps, LiItemProps } from "./types"
import { useRouter } from "@/routes/router"
import { useSidebar } from "../useSidebar"
import { ItemContainer, LiItemContainer } from "./style"
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

  useEffect(() => {}, [])
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
    <LiItemContainer onClick={handleClick} key={item.to}>
      {content}
    </LiItemContainer>
  )
}

const Item: React.FC<ItemProps> = (props) => {
  const { items } = props

  return (
    <ItemContainer className="item">
      {items.map((item) => {
        return <LiItem item={item} key={item.to}></LiItem>
      })}
    </ItemContainer>
  )
}

export default Item
