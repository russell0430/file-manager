import { Item as BasicItem } from "@/types"
export type Item = {
  children?: Item[]
} & BasicItem

export type Props = {
  style?: React.CSSProperties
  className?: string
  width?: string | number
}
