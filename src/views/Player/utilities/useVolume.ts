import e from "express"
import React, { useEffect, useRef, useState } from "react"
import useBar from "./useBar"

type CustomEvent = {
  changedTouches?: { clientX: number; clientY: number }[]
  clientX?: number
  clientY?: number
}

const isMobile = /mobile/i.test(window.navigator.userAgent) ? 0 : 1
const nameMap = {
  start: isMobile ? "onTouchStart" : "onMouseDown",
  move: isMobile ? "onTouchMove" : "onMouseMove",
  end: isMobile ? "onTouchEnd" : "onMouseUp",
}

const threshould = 0.01

const useVolume = <T extends HTMLElement>(defaultVolume: number = 0.2) => {
  const {
    percent: volume,
    setPercent: setVolume,
    isMoving,
    callbacks,
    barWrapRef: volumeBarRef,
  } = useBar<T>({
    defaultPercent: defaultVolume,
    direction: "vertical",
  })

  const lastVolume = useRef(0.2)

  const onVolumeBtnClick = () => {
    if (volume === 0) {
      setVolume(lastVolume.current)
    } else {
      lastVolume.current = volume
      setVolume(0)
    }
  }

  useEffect(() => {
    if (volume <= threshould) setVolume(0)
    else if (1 - volume <= threshould) setVolume(1)
  }, [volume])

  return {
    volume: 1 - volume,
    isMoving,
    callbacks,
    onVolumeBtnClick,
    volumeBarRef,
  }
}

export default useVolume
