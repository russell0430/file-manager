import React from "react"
import "./index.scss"

type Props = {
  left?: boolean
  right?: boolean
  negativeLeft?: boolean
  negativeRight?: boolean
  className?: string
  children: React.ReactNode
  ref?: React.Ref<HTMLDivElement>
}
const baseClass = "gutter"

export const Gutter: React.FC<Props> = (props) => {
  const {
    left = true,
    right = true,
    negativeLeft = false,
    negativeRight = false,
    className,
    children,
    ref,
  } = props

  const shouldPadLeft = left && !negativeLeft
  const shouldPadRight = right && !negativeRight

  const classes = [
    baseClass,
    className,
    shouldPadLeft && `${baseClass}--left`,
    shouldPadRight && `${baseClass}--right`,
    negativeLeft && `${baseClass}--negative-left`,
    negativeRight && `${baseClass}--negative-right`,
  ]
    .filter(Boolean)
    .join(" ")
  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  )
}
