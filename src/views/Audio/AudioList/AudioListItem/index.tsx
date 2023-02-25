import React from "react"
import { Audio } from "@/types"
import "./index.scss"

const baseClass = "audio-list-item"

type Props = {
  index: number
  audio: Audio
  className?: string
}
const AudioListItem: React.FC<Props> = (props) => {
  const { index, audio, className } = props
  const classes = [baseClass, className && className].filter(Boolean).join(" ")
  return (
    <div className={classes}>
      <div className={`${baseClass}__wrap`}>
        <div className={`${baseClass}__index`}>
          {audio.imgUrl ? <img src={audio.imgUrl} alt="" /> : index}
        </div>
        <div className={`${baseClass}__label`}>{audio.label || audio.name}</div>
        <div className={`${baseClass}__author`}>{audio.author}</div>
      </div>
    </div>
  )
}

export default AudioListItem
