import React, { useEffect, useState } from "react"
import { AudioProvider } from "./utilities/useAudio"
import Body from "./Body"
import List from "./List"
import { Audio } from "@/types"
import "./index.scss"
import { getInfo } from "@/request"
import { useRouter } from "@/routes/router"
const baseClass = "player"
type Props = {
  className?: string
}
const Player: React.FC<Props> = ({ className }) => {
  const [playlist, setPlaylist] = useState<Audio[]>([])
  const {
    location: { pathname },
  } = useRouter()
  useEffect(() => {
    getInfo(pathname).then(async (res) => {
      const { result } = (await res.json()) as {
        result: { name: string; author: string; url: string }[]
      }
      // console.log(result)
      setPlaylist(result)
    })
  }, [pathname])
  const classes = [baseClass, className].filter(Boolean).join(" ")
  return (
    <div className={classes}>
      <AudioProvider playlist={playlist}>
        <Body imgUrl={""} theme={""} hide={false} />
        <List theme={""} audio={""} />
      </AudioProvider>
    </div>
  )
}

export default Player
