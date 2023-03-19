import { useRouter } from "@/routes/router"
import { getFolder, getResource } from "@/request"
import React, { useEffect, useRef, useState } from "react"
import videojs from "video.js"
import "video.js/dist/video-js.css"
import { Props } from "./types"

const baseClass = "video"
const options = {
  autoplay: true,
  controls: true,
  fluid: true,
}
const getOptions = (src: string) => {
  return {
    ...options,
    // sources: [
    //   {
    //     src: "http://localhost:5174/resource?resource=movie/movie.mp4",
    //     type: "video/mp4",
    //   },
    // ],
    src,
  }
}
const Video: React.FC<Props> = (props) => {
  const { onReady } = props

  const {
    location: { pathname },
  } = useRouter()

  const videoRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<any>(null)

  const [src, setSrc] = useState("")

  useEffect(() => {
    getResource(pathname).then((response) => {
      const { data } = response
      if (data?.[0]) setSrc(data[0].url)
    })
  }, [pathname])

  useEffect(() => {
    if (!src) return
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js")

      videoElement.classList.add("vjs-big-play-ccentered")

      videoRef.current!.appendChild(videoElement)

      console.log(src)
      try {
        const player = (playerRef.current = videojs(videoElement, {
          ...getOptions(src),
        }))
        player.src(src)
        console.log(src)
      } catch (err) {}
    } else {
      const player = playerRef.current
      player.src(src)
      // player.autoplay(options.autoplay)
      // // console.log(options.sources[0].src)
      // getInfo(pathname).then(async (res) => {
      //   const {
      //     result: [{ url }],
      //   } = (await res.json()) as {
      //     result: { url: string; name: string }[]
      //   }
      //   setSrc(url)
      //   console.log(player.src)
      // })
    }
  }, [options, videoRef, src])

  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [])

  return (
    <div data-vjs-player>
      <div ref={videoRef}></div>
    </div>
  )
}

export default Video
