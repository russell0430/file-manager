import React, { useEffect, useRef, useState } from "react"
import { Props } from "./types"

import "./index.scss"

const baseClass = "slider"

const Slider: React.FC<Props> = (props) => {
  const { percent = 0, onChange } = props
  const classes = [baseClass].filter(Boolean).join(" ")

  const progressRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)
  const [drag, setDrag] = useState(false)
  const dragRef = useRef({ left: progressRef.current?.clientWidth, startX: 0 })

  const _offset = (offsetWidth: number) => {
    console.log("offset")
    setTimeout(() => {
      progressRef.current!.style.width = `${offsetWidth}px`
      btnRef.current!.style.transform = `translate3d(${offsetWidth}px,0,0)`
    },0)
    const percent = offsetWidth / (sliderRef.current?.clientWidth as number)
    onChange(percent)
  }

  const progressDragStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    setDrag(true)
    // console.log("start")
    dragRef.current = {
      left: progressRef.current?.clientWidth,
      startX: e.touches[0].pageX,
    }
  }

  const progressDragMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (!drag) return

    const deltaX = e.touches[0].pageX - dragRef.current.startX
    const barWidth = sliderRef.current?.clientWidth as number
    const offsetWidth = Math.min(
      Math.max(0, (dragRef.current?.left as number) + deltaX),
      barWidth
    )
    console.log("move", offsetWidth)
    _offset(offsetWidth)
  }

  const progressDragEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    setDrag(false)

    // e.
  }

  const progressClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = progressRef.current?.getBoundingClientRect()
    const offsetWidth = e.pageX - (rect?.left || 0)
    // if (offsetWidth < 0) return
    // console.log("click")
    _offset(offsetWidth)
  }
  useEffect(() => {
    _offset((sliderRef.current?.clientWidth as number) * percent)
  }, [])
  return (
    <div className={classes} onClick={progressClick} ref={sliderRef}>
      <div
        className={`${baseClass}__btn__wrap`}
        ref={btnRef}
        onTouchStart={progressDragStart}
        onTouchMove={progressDragMove}
        onTouchEnd={progressDragEnd}
      >
        <div className={`${baseClass}__btn`}></div>
      </div>
      <div className={`${baseClass}__process`} ref={progressRef}></div>
    </div>
  )
}

export default Slider
