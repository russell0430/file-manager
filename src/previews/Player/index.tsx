import React, { useEffect, useState } from "react"
import { AudioProvider } from "./utilities/useAudio"
import Body from "./Body"
import List from "./List"
import { Audio } from "@/types"
import { PlayerContainer } from "./style"
import { getFolder, getResource, getSupportFiles } from "@/request"
import { useRouter } from "@/routes/router"
import { parseLocation } from "@/utiliities/utils"


const baseClass = "player"
type Props = {
  className?: string
}
const Player: React.FC<Props> = ({ className }) => {
  const [playlist, setPlaylist] = useState<Audio[]>([])
  const { location } = useRouter()

  const { dir, filename } = parseLocation(location)

  useEffect(() => {
    getSupportFiles(dir.join("/"), ["mp3"]).then((response) => {
      const { data } = response
      if (data?.files) setPlaylist(data?.files)
    })
  }, [location.pathname])
  const classes = [baseClass, className].filter(Boolean).join(" ")
  return (
    <PlayerContainer className={classes}>
      <AudioProvider playlist={playlist}>
        <Body imgUrl={""} theme={""} hide={false} />
        <List theme={""} audio={""} />
      </AudioProvider>
    </PlayerContainer>
  )
}

export default Player
