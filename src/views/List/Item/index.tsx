import React from "react"
import type { Item as ItemType } from "@/types"
import "./index.scss"
export type Props = {
  index: number
  isActive: boolean
  item: ItemType
}

const baseClass = "list-item"

const Item: React.FC<Props> = (props) => {
  const { index, item, isActive } = props

  const classes = [baseClass, isActive && `${baseClass}--active`]
    .filter(Boolean)
    .join(" ")
  return (
    <div className={classes}>
      <div className={`${baseClass}__index`}>{index}</div>
      {/* <div className={`${baseClass}__thumbnail`}>
        <img src={item.thumbnail} alt={item.name} />
      </div> */}
      <div className={`${baseClass}__label`}>{
        item.label||item.name
      }</div>
      <div className={`${baseClass}__actions`}>
        {item.actions?.map((action,index) => {
          return (
            <div className={`${baseClass}__action`} key={index}>
              {action.icon}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Item
