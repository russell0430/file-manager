import { PlayableType } from "@/types"

export type ResourceInfo = {
  name: string
  label?: string
  period?: number
  author: string[] | string
  resourceType: PlayableType
}

export type ResourceInfoContext = {
  setResourceInfo: (val: ResourceInfo) => void
} & ResourceInfo
