import React, { useEffect, useRef, useState } from "react"
import { Props } from "./types"
import { useAudio } from "../utilities/useAudio"

import useVolume from "../utilities/useVolume"
import Play from "@/components/icons/Play"
import Pause from "@/components/icons/Pause"
import SkipStart from "@/components/icons/SkipStart"
import SkipEnd from "@/components/icons/SkipEnd"
import VolumeMute from "@/components/icons/VolumeMute"
import Volume from "@/components/icons/Volume"
import useBar from "../utilities/useBar"
import OrderRandom from "@/components/icons/OrderRandom"
import LoopAll from "@/components/icons/LoopAll"
import List from "@/components/icons/List"
import {
  PlayerBody,
  PlayerController,
  PlayerInfo,
  PlayerPic,
  PlayerTime,
  PlayerVolumeWrap,
} from "./style"
import { formatTime } from "@/utiliities/utils"

const baseClass = "player-body"

const Body: React.FC<Props> = (props) => {
  const { theme } = props
  const classes = [baseClass].filter(Boolean).join(" ")

  const {
    curIndex,
    audios,
    showing,
    hideList,
    showList,
    toggle,
    playing,
    play,
    pause,
  } = useAudio()

  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [songReady, setsongReady] = useState(false)

  useEffect(() => {
    if (!audios.length || curIndex === -1 || !audios[curIndex]) {
      return
    }
    setsongReady(false)
    setCurrentTime(0)
    // setTimeout(() => {
    //   audioRef.current
    //     ?.play()
    //     .then(() => {
    //       setsongReady(true)
    //       setCurrentTime(0)
    //       setDuration(audioRef.current?.duration || 0)
    //       play()
    //       console.log(audioRef.current?.duration)
    //       // console.log("ready")
    //     })
    //     .catch((error) => {
    //       pause()
    //     })
    // }, 0)
  }, [audios, curIndex])

  const handleCanPlay = () => {
    setsongReady(true)
    // setCurrentTime(0)
    setDuration(audioRef.current?.duration || 0)
    play()
  }
  const toggleList = () => {
    if (showing) {
      hideList()
    } else {
      showList()
    }
  }
  useEffect(() => {
    if (playing) {
      audioRef.current?.play().catch((error) => {
        pause()
      })
    } else audioRef.current?.pause()
  }, [playing])
  const audio = audios[curIndex]

  const audioRef = useRef<HTMLAudioElement>(null)
  const {
    volume,
    callbacks: volumeCallbacks,
    volumeBarRef,
    onVolumeBtnClick,
  } = useVolume<HTMLDivElement>()

  useEffect(() => {
    if (!audioRef.current) return
    if (volume === 0) {
      audioRef.current!.muted = true
      audioRef.current!.volume = volume
    } else {
      audioRef.current!.volume = volume
    }
  }, [volume])

  const { percent, setPercent, barWrapRef, callbacks, isMoving } =
    useBar<HTMLDivElement>({
      direction: "horizontal",
      defaultPercent: 0,
      callback: (per: number) => {
        const newTime = per * (audioRef.current?.duration || 0)
        setCurrentTime(newTime)
        play()
        // console.log("callback")
        audioRef.current!.currentTime = newTime
      },
    })

  useEffect(() => {
    if (isMoving && audioRef.current) {
      audioRef.current.currentTime = percent * (audioRef.current?.duration || 0)
    }
    setPercent(audioRef.current ? currentTime / audioRef.current?.duration : 0)
  }, [currentTime])
  const onAudioTimeUpdate: React.ReactEventHandler<HTMLAudioElement> = (
    event
  ) => {
    setCurrentTime(audioRef.current?.currentTime || 0)
  }

  // console.log(audio.url)

  return (
    <PlayerBody className={classes}>
      <PlayerPic className="player-pic" cover={(audio && audio.cover) || ""}>
        <div className="player-button player-play" onClick={toggle}></div>
      </PlayerPic>
      <PlayerInfo className="player-info">
        <div className="player-music">
          <span className="player-title">
            {(audio && audio.name) || "No Audio"}
          </span>
          -
          <span className="player-author">
            {audio && audio.artist ? `${audio.artist}` : "no author"}
          </span>
        </div>
        <div className="player-lrc"></div>
        <PlayerController className="player-controller" percent={percent * 100}>
          <div className="player-bar-wrap" {...callbacks} ref={barWrapRef}>
            <div className="player-bar">
              <div className="player-loaded" style={{ width: 0 }}></div>
              <div
                className="player-played"
                style={{ width: `${percent * 100}%` }}
              >
                {/* <span className="player-thumb" style={{ background: theme }}>
                  <span className="player-loading-icon">
                    <Loading />
                  </span>
                </span> */}
              </div>
            </div>
          </div>
          <PlayerTime className="player-time">
            <span className="player-time-inner">
              <span className="player-ptime">{formatTime(currentTime)}</span>/
              <span className="player-dtime">{formatTime(duration)}</span>
            </span>
            <span className="player-icon player-icon-back">
              <SkipStart />
            </span>
            <span className="player-icon player-icon-play" onClick={toggle}>
              {playing ? <Pause /> : <Play />}
            </span>
            <span className="player-icon player-icon-forward">
              <SkipEnd />
            </span>
            <PlayerVolumeWrap className="player-volume-wrap player-icon">
              <span
                className="player-icon player-icon-volume-down"
                onClick={onVolumeBtnClick}
              >
                {volume === 0 ? <VolumeMute /> : <Volume />}
              </span>
              <div className="player-volume-bar-wrap">
                <div
                  className="player-volume-bar"
                  ref={volumeBarRef}
                  {...volumeCallbacks}
                >
                  <div
                    className="player-volume"
                    style={{ height: `${volume * 100}%` }}
                  ></div>
                </div>
              </div>
            </PlayerVolumeWrap>
            <span className="player-icon player-icon-order">
              <OrderRandom />
            </span>
            <span className="player-icon player-icon-loop">
              <LoopAll />
            </span>
            <span
              className="player-icon player-icon-menu"
              onClick={() => toggleList()}
            >
              <List />
            </span>
          </PlayerTime>
        </PlayerController>
      </PlayerInfo>
      <div className="player-notice"></div>
      <audio
        src={audio && audio.url}
        ref={audioRef}
        onTimeUpdate={onAudioTimeUpdate}
        onCanPlay={handleCanPlay}
      ></audio>
    </PlayerBody>
  )
}

export default Body
