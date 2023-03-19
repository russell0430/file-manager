import React from "react"
import { Item } from "@/types"

type Position = { x: number; y: number }
export type ContextMenuProps = {
  onContextMenu?: () => void
  onContextMenuExit?: () => void
  style?: React.CSSProperties
  children?: React.ReactNode
  Menu?: React.FC
}

export type ContextMenuContext = {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  position: Position
  setPosition: React.Dispatch<React.SetStateAction<Position>>
  activeItems: Item[]
  onContextMenu: (event: React.MouseEvent, item?: Item) => void
}
