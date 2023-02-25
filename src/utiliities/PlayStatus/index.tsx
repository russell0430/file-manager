import React, { createContext, useContext, useState } from "react"

import { PlayStatusContext } from "./types"

const Context = createContext({} as PlayStatusContext)

export const PlayStatusProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [period, setPeriod] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const play = () => {
    setIsPlaying(true)
  }
  const pause = () => {
    setIsPlaying(false)
  }
  const toggle = () => {
    setIsPlaying((val) => !val)
  }

  return (
    <Context.Provider
      value={{
        isPlaying,
        pause,
        play,
        toggle,
        currentPeriod: period,
        changePeriod: setPeriod,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const usePlayStatus = (): PlayStatusContext => useContext(Context)
