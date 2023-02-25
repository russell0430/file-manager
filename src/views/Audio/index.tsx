import React, { useState } from "react"
import AudioCard from "./AudioCard"
import AudioList from "./AudioList"
import { Props } from "./types"
import "./index.scss"

import { Audio as AudioType } from "@/types"

const baseClass = "audio"

const Audio: React.FC<Props> = (props) => {
  const { className, style } = props
  const audios: AudioType[] = [
    { period: 0, name: "name", author: "author", path: "/" },
    { period: 0, name: "name", author: "author", path: "/" },
    { period: 0, name: "name", author: "author", path: "/" },
  ]
  const classes = [baseClass, className].filter(Boolean).join(" ")

  const [hiddenList, setHiddenList] = useState(false)

  return (
    <div className={classes}>
      <div
        className={`${baseClass}__wrap`}
        onClick={() => setHiddenList((val) => !val)}
      >
        <AudioCard></AudioCard>
        <AudioList audios={audios} className={hiddenList ? "hidden" : "show"} />
      </div>
    </div>
  )
}

export default Audio
