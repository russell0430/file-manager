import React from "react"
import List from "@/views/List"
import AudioListItem from "./AudioListItem"
import { Audio } from "@/types"
import "./index.scss"

const baseClass = "audio-list"

type Props = {
  className?: string
  audios: Audio[]
}
const AudioList: React.FC<Props> = (props) => {
  const { audios, className } = props

  const classes = [baseClass, className].filter(Boolean).join(" ")
  return (
    <div className={classes}>
      <List>
        {audios.map((audio, index) => {
          return (
            <AudioListItem
              audio={audio}
              index={index}
              key={index}
            ></AudioListItem>
          )
        })}
      </List>
    </div>
  )
}

export default AudioList
