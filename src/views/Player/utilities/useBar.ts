import e from "express"
import React, { useState, useRef } from "react"

type CustomEvent = {
  changedTouches?: { clientX: number; clientY: number }[]
  offsetX: number
  offsetY: number
  clientX?: number
  clientY?: number
}

const isMobile = /mobile/i.test(window.navigator.userAgent)
const nameMap = {
  start: isMobile ? "onTouchStart" : "onMouseDown",
  move: isMobile ? "onTouchMove" : "onMouseMove",
  end: isMobile ? "onTouchEnd" : "onMouseUp",
}

type Direction = "vertical" | "horizontal"

const getOffset = (e: CustomEvent, dir: Direction) => {
  const style = dir === "horizontal" ? "clientX" : "clientY"
  if (isMobile) {
    return e.changedTouches![0][style]
  } else {
    return e[style]
  }
}
// enum Direction{
//   vertical='vertical',
//   horizontal="horizontal"
// }
const useBar = <T extends HTMLElement>(options: {
  direction: Direction
  defaultPercent: number
  callback?: (per: number) => void
}) => {
  const { direction = "vertical", defaultPercent = 0.2, callback } = options
  const [isMoving, setIsMoving] = useState(false)
  const [percent, setPercent] = useState(defaultPercent)
  const dir = useRef(direction)

  const barWrapRef = useRef<T>(null)

  const changeBar = (per: number) => {
    setPercent(per)
    callback && callback(per)
    // console.log(per)
  }

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    let percent
    if (dir.current === "vertical") {
      percent =
        (e.pageY - barWrapRef.current!.getBoundingClientRect().top) /
        barWrapRef.current!.clientHeight
    } else {
      percent =
        (e.pageX - barWrapRef.current!.getBoundingClientRect().left) /
        barWrapRef.current!.clientWidth
    }
    percent = Math.min(1, Math.max(0, percent))
    changeBar(percent)
  }

  const dragEnd = (e: CustomEvent) => {
    console.log("end")
    dragMove(e)
    setIsMoving(false)
  }
  const dragMove = (e: CustomEvent) => {
    // console.log(
    //   "move",
    //   e.clientX,
    //   e.offsetX,
    //   barRef.current!.getBoundingClientRect().left,
    //   barRef.current!.clientWidth
    // )
    if (!isMoving) return
    let percent
    console.log("move")
    if (dir.current === "vertical") {
      percent =
        ((getOffset(e, dir.current) as number) -
          barWrapRef.current!.getBoundingClientRect().top) /
        barWrapRef.current!.clientHeight
    } else {
      // console.log(
      //   getOffset(e, dir.current),
      //   barWrapRef.current!.getBoundingClientRect().left,
      //   barWrapRef.current!.clientWidth
      // )
      percent =
        ((getOffset(e, dir.current) as number) -
          barWrapRef.current!.getBoundingClientRect().left) /
        barWrapRef.current!.clientWidth
    }
    console.log(percent)
    percent = Math.min(1, Math.max(0, percent))
    changeBar(percent)
  }
  const dragStart = () => {
    console.log("start")
    setIsMoving(true)
  }

  const callbacks = {
    [nameMap.start]: dragStart,
    [nameMap.move]: dragMove,
    [nameMap.end]: dragEnd,
    // onClick: handleClick,
  }
  return {
    percent,
    setPercent,
    isMoving,
    callbacks,
    barWrapRef,
  }
}

export default useBar
