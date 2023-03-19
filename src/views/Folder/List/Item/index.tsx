import React from "react"
import type { Item as ItemType } from "@/types"
import { useContextMenu } from "@/utiliities/ContextMenu"
import { ItemContainer } from "./style"
export type Props = {
  index: number
  isActive: boolean
  item: ItemType
}

const baseClass = "list-item"

const Item: React.FC<Props> = (props) => {
  const { index, item, isActive } = props
  const { onContextMenu } = useContextMenu()

  const classes = [baseClass, isActive && `${baseClass}--active`]
    .filter(Boolean)
    .join(" ")
  const contextMenuHanlder: React.MouseEventHandler = (event) => {
    onContextMenu(event, item)
  }

  return (
    <ItemContainer className={classes} onContextMenu={contextMenuHanlder}>
      <div className="index">{index}</div>
      {/* <div className={`${baseClass}__thumbnail`}>
        <img src={item.thumbnail} alt={item.name} />
      </div> */}
      <div className="label">{item.label || item.name}</div>
      <div className="actions">
        {item.options?.map((option, index) => {
          return (
            <div
              className="action"
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                
                option.action && option.action()
              }}
            >
              {option.icon}
            </div>
          )
        })}
      </div>
    </ItemContainer>
  )
}

export default Item
