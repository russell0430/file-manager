import React from "react"
export const operations = [
  "download",
  "deleteFile",
  "rename"
] as const
export type OperationType = typeof operations[number]
export type Operation = {
  icon?: React.ReactNode
  label?: string
  action: (...args: unknown[]) => void
  name: string
  type: OperationType
}

export type Opts = {
  [index in typeof operations[number]]: boolean
}
