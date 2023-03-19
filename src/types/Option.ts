import { ReactNode } from "react"

export type Option = {
  label?: string
  name: string
  action?: (...val: unknown[]) => void
  icon?: ReactNode
  imgUrl?: string
}
