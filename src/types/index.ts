// export type

import React from "react"
import { Option } from "./Option"

export type PlayableType = "audio" | "video" | "txt" | "markdown" | "unknown"

export type Resource = {
  name: string
  label?: string
  imgUrl?: string
  author?: string

  url: string
}

export type ResourceInfo = {
  name: string
  label?: string
  period?: number
  author: string[] | string
  resourceType: PlayableType
}

export type Link = {
  icon?: React.ReactNode
  name: string
  handle: () => void
}

export type Item = {
  to: string
  options?: Option[]
} & Resource

export type Audio = {
  period?: number
} & Resource

export type Video = {
  period: number
} & Resource
