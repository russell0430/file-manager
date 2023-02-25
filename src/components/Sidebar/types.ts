export type Item = {
  label: string
  to: string
  type: "file" | "folder"
  children?: Item[]
}

export type SidebarProps = {
  items: Item[]
  style?: React.CSSProperties
  className?: string
}
