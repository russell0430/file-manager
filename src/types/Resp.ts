import { Item } from "@/components/Sidebar/types"
import { Resource } from "."

export type Resp<T = any> = {
  status: number
  msg?: string
  data?: T
}

export type LoginResp = Resp<{
  success: boolean
  token?: string
}>
export type ResourceResp = Resp<Resource[]>
export type RegisterResp = Resp<{ success: boolean }>

export type MdResp = Resp<{ mdText: string }>
export type FsListResp = Resp<{
  stats: Item[]
}>

export type SupportFormatFilesResp = Resp<{
  files: Item[]
}>
