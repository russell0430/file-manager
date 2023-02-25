import React from "react"
export type Step = {
  label?: string | React.ReactNode
  to: string
  name: string
}

export type Props = {
  navLinks: Step[]
}
