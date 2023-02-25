import React, { useEffect, useRef, useState } from "react"

import { Props } from "./types"
import { useAudio } from "../utilities/useAudio"

import useVolume from "../utilities/useVolume"
import "./index.scss"
import Play from "@/components/icons/Play"
import Pause from "@/components/icons/Pause"
import SkipStart from "@/components/icons/SkipStart"
import SkipEnd from "@/components/icons/SkipEnd"
import VolumeMute from "@/components/icons/VolumeMute"
import Volume from "@/components/icons/Volume"
import Loading from "@/components/icons/Loading"
import useBar from "../utilities/useBar"
import OrderRandom from "@/components/icons/OrderRandom"
import LoopAll from "@/components/icons/LoopAll"
import List from "@/components/icons/List"

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
  } = useAudio()

  const [currentTime, setCurrentTime] = useState(0)
  const [songReady, setsongReady] = useState(false)

  useEffect(() => {
    if (!audios.length || curIndex === -1 || !audios[curIndex] || !songReady) {
      return
    }
    setsongReady(false)
    setTimeout(() => {
      audioRef.current?.play().then(() => {
        setsongReady(true)
        console.log("ready")
      })
    }, 0)
    play()
    setCurrentTime(0)
  }, [audios, curIndex])
  const toggleList = () => {
    if (showing) {
      hideList()
    } else {
      showList()
    }
  }
  useEffect(() => {
    if (playing) audioRef.current?.play()
    else audioRef.current?.pause()
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

  console.log(playing)
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

  if (!audio) return null
  return (
    <div className={classes}>
      <div
        className="player-pic"
        style={{
          backgroundImage: audio ? `url(${audio.cover})` : "",
          backgroundColor: theme,
        }}
      >
        <div className="player-button player-play" onClick={toggle}></div>
      </div>
      <div className="player-info">
        <div className="player-music">
          <span className="player-title">{audio.name || "No Audio"}</span>-
          <span className="player-author">
            {audio.artist ? `-${audio.artist}` : "no author"}
          </span>
        </div>
        <div className="player-lrc"></div>
        <div className="player-controller">
          <div className="player-bar-wrap" {...callbacks} ref={barWrapRef}>
            <div className="player-bar">
              <div className="player-loaded" style={{ width: 0 }}></div>
              <div
                className="player-played"
                style={{ width: `${percent * 100}%`, background: "green" }}
              >
                {/* <span className="player-thumb" style={{ background: theme }}>
                  <span className="player-loading-icon">
                    <Loading />
                  </span>
                </span> */}
              </div>
            </div>
          </div>
          <div className="player-time">
            <span className="player-time-inner">
              <span className="player-ptime">00:00</span>/
              <span className="player-dtime">00:00</span>
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
            <div className="player-volume-wrap">
              <button
                className="player-icon player-icon-volume-down"
                type="button"
                onClick={onVolumeBtnClick}
              >
                {volume === 0 ? <VolumeMute /> : <Volume />}
              </button>
              <div className="player-volume-bar-wrap">
                <div
                  className="player-volume-bar"
                  ref={volumeBarRef}
                  {...volumeCallbacks}
                >
                  <div
                    className="player-volume"
                    style={{ height: `${volume * 100}%`, background: "red" }}
                  ></div>
                </div>
              </div>
            </div>
            <button className="player-icon player-icon-order" type="button">
              <OrderRandom />
            </button>
            <button className="player-icon player-icon-loop" type="button">
              <LoopAll />
            </button>
            <button
              className="player-icon player-icon-menu"
              onClick={() => toggleList()}
            >
              <List />
            </button>
            {/* <button className="player-icon player-icon-lrc">{"lrc"}</button> */}
          </div>
        </div>
      </div>
      <div className="player-notice"></div>
      {/* <div className="player-miniswitcher">
        <button className={`${baseClass}-icon`}>{"icon.right"}</button>
      </div> */}
      <audio
        src={audio.url}
        ref={audioRef}
        onTimeUpdate={onAudioTimeUpdate}
      ></audio>
    </div>
  )
}

export default Body
