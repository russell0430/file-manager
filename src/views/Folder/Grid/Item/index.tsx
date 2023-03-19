import React from "react"
import { Item as ItemType } from "@/types"
import { ItemContainer } from "./style"
import Folder from "@/components/icons/Folder"
import { useRouter } from "@/routes/router"
export type Props = {
  index: number
  item: ItemType
}
const Item: React.FC<Props> = (props) => {
  const { item } = props
  const { navigate } = useRouter()
  return (
    <ItemContainer>
      <div
        className="item"
        onClick={() => {
          navigate(item.to)
        }}
      >
        <div className="item-pic">
          {item.imgUrl ? <img src={item.imgUrl} alt="" /> : <Folder />}
        </div>
        <div className="item-label">{item.label || item.to}</div>
      </div>
    </ItemContainer>
  )
}

export default Item
