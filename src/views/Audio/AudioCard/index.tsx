import React, { useState } from "react"
import { Props } from "./types"
import Menu from "@/components/icons/Menu"
import Swap from "@/components/icons/Swap"
import Slider from "@/components/Slider"
import Edit from "@/components/icons/Edit"
import Volume from "@/components/icons/Volume"
import VolumeMute from "@/components/icons/VolumeMute"
import "./index.scss"
import List from "@/components/icons/List"
import { useAudio } from "@/views/Player/utilities/useAudio"

// import { useAudio } from "../utilities/useAudio"

const baseClass = "audio-card"

const AudioCard: React.FC<Props> = (props) => {
  const classes = [baseClass].filter(Boolean).join(" ")

  const {curIndex,audios,}=useAudio()
  
  //音乐音量
  const [volume, setVolume] = useState(0.2)
  const onChange = () => {}
  return (
    <div className={classes}>
      <div className={`${baseClass}__wrap`}>
        <div className={`${baseClass}__img`}>
          <img src="" alt="" />
        </div>
        <div className={`${baseClass}__info`}>
          <div className={`${baseClass}__info__title`}>
            <span className={`${baseClass}__info__label`}>name</span>-
            <span className={`${baseClass}__info__author`}>author</span>
          </div>
          <div className={`${baseClass}__control`}>
            <div className={`${baseClass}__slider`}>
              <Slider onChange={onChange} percent={0} />
            </div>
            <div className={`${baseClass}__period`}>
              <span className={`${baseClass}__period--current`}>0:00</span>
              <span className="slash">/</span>
              <span className={`${baseClass}__period--total`}>3:12</span>
            </div>
            <div className={`${baseClass}__apps`}>
              <Edit />
              <Swap />
              <List />
              {volume === 0 ? <VolumeMute /> : <Volume />}
            </div>
          </div>
        </div>
      </div>
      <audio src="http://localhost:5174/music/jok.mp3" />
    </div>
  )
}
export default AudioCard
