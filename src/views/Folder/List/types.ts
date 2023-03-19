import { Item } from "@/types"
import { Props as ItemProps } from "./Item"
import React from "react"

export type Props = {
  items?: Item[]
  Item?: React.FC<ItemProps>
}

export type Action = {
  name: string
  icon: React.ReactNode
  handleClick: (item: Item) => void
}
