import React, {
  createContext,
  useState,
  useRef,
  useEffect,
  useContext,
} from "react"
import { AudioContext } from "./types"
import { Audio } from "@/types"
const Context = createContext({} as AudioContext)

export const AudioProvider: React.FC<{
  children: React.ReactNode
  playlist: Audio[]
}> = ({ children, playlist }) => {
  const [playing, setPlaying] = useState(false)
  const [curIndex, setCurIndex] = useState(0)
  // const [audios, setAudios] = useState<Audio[]>(playlist)
  const audios = playlist
  // console.log(playlist)
  const [showing, setShowing] = useState(true)
  const randomOrder = useRef<number[]>([])
  const listRef = useRef<HTMLDivElement>(null)

  const play = () => {
    setPlaying(true)
    console.log("play")
  }
  const pause = () => setPlaying(false)
  const toggle = () => {
    setPlaying((val) => !val)
    // console.log("toggle")
  }
  const switchAudio = (index: number) => {
    if (audios[index]) {
      // console.log(index)
      setCurIndex(index)
    } else {
      console.log(audios, index)
    }
  }
  const showList = () => setShowing(true)
  const hideList = () => setShowing(false)
  return (
    <Context.Provider
      value={{
        playing,
        play,
        pause,
        toggle,
        curIndex,
        audios,
        switchAudio,
        showList,
        hideList,
        showing,
        randomOrder: randomOrder.current,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useAudio = (): AudioContext => useContext(Context)
