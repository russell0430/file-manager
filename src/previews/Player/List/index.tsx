import React, { useEffect, useState } from "react"
import { useAudio } from "../utilities/useAudio"
import { PlayerList } from "./style"
// import "./index.scss"
type Props = {
  theme: string
  audio: string
}
const baseClass = "player-list"

const List: React.FC<Props> = (props) => {
  const { theme, audio } = props
  const { curIndex, switchAudio, audios, showing } = useAudio()
  const classes = [baseClass, !showing && `${baseClass}-hide`]
    .filter(Boolean)
    .join(" ")

  const [listHeight, setListHeight] = useState(0)
  useEffect(() => {
    if (showing) {
      setListHeight(400)
    } else {
      setTimeout(() => {
        setListHeight(0)
      }, 0)
    }
  }, [showing])

  return (
    <PlayerList className={classes} onClick={(e) => {}}>
      <ol
        className={`player-list ${!showing ? "player-list-hide" : ""}`}
        style={{ height: listHeight }}
      >
        {audios.map((audio, index) => {
          return (
            <li
              className={curIndex === index ? "player-list-light" : ""}
              key={index}
              onClick={() => switchAudio(index)}
            >
              <span
                className="player-list-cur"
                style={{ backgroundColor: theme }}
              >
                {/* {"theme"} */}
              </span>
              <span className="player-list-index">{index}</span>
              <span className="player-list-title">
                {audio.label || audio.name}
              </span>
              <span className="player-list-author">
                {audio.author || "no author"}
              </span>
            </li>
          )
        })}
      </ol>
    </PlayerList>
  )
}

export default List
