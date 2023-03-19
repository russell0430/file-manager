import React, {
  createContext,
  useState,
  useRef,
  useEffect,
  useContext,
} from "react"
import { AudioContext } from "./types"
import { Audio } from "@/types"
import { useRouter } from "@/routes/router"
const Context = createContext({} as AudioContext)

export const AudioProvider: React.FC<{
  children: React.ReactNode
  playlist: Audio[]
}> = ({ children, playlist }) => {
  const [playing, setPlaying] = useState(false)
  const curIndex = useRef(0)
  // const [audios, setAudios] = useState<Audio[]>(playlist)
  const audios = playlist
  // console.log(playlist)
  const [showing, setShowing] = useState(true)
  const { navigate, location } = useRouter()
  const randomOrder = useRef<number[]>([])
  const listRef = useRef<HTMLDivElement>(null)

  const play = () => {
    try {
      setPlaying(true)
      console.log("play")
    } catch (err) {
      setPlaying(false)
    }
  }
  const pause = () => setPlaying(false)
  const toggle = () => {
    setPlaying((val) => !val)
    // console.log("toggle")
  }
  const switchAudio = (index: number) => {
    if (audios[index]) {
      console.log(audios[index])
      navigate(`/${audios[index].to}`)
    } else {
      console.log(audios, index)
    }
  }
  useEffect(() => {
    console.log(audios, location.pathname)
    curIndex.current = audios.findIndex(
      (audio) => `/${audio.to}` === decodeURI(location.pathname)
    )
  }, [location.pathname, audios])
  const showList = () => setShowing(true)
  const hideList = () => setShowing(false)
  return (
    <Context.Provider
      value={{
        playing,
        play,
        pause,
        toggle,
        curIndex: curIndex.current,
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
