// export type

import React from "react"

export type PlayableType = "audio" | "video" | "txt" | "markdown" | "unknown"

export type Resource = {
  name: string
  label?: string
  imgUrl?: string
  author: string

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
  name: string
  label?: string
  to: string
  imgUrl?: string // url of pic
  actions?: Action[]
}

export type Action = {
  name: string
  icon: React.ReactNode
  handleClick: (item: Item) => void
}

export type Audio = {
  period?: number
} & Resource

export type Video = {
  period: number
} & Resource


