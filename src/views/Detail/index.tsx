import Search from "@/components/icons/Search"
import React, { useEffect, useState } from "react"
import Header from "../Header"
import Breadcrumb from "@/components/Breadcrumb"
import Player from "../Player"
import Video from "../Video"
import "./index.scss"
import Audio from "../Audio"
import Slider from "@/components/Slider"
import List from "../List"
import { useRouter } from "@/routes/router"
import { parseLocation, processPaths } from "@/utiliities/utils"
import Markdown from "@/components/Markdown"
import Sidebar from "@/components/Sidebar"
import { Item } from "@/components/Sidebar/types"
import { getTotalFolder } from "@/request"
import Menu from "@/components/icons/Menu"
import Edit from "@/components/icons/Edit"
const baseClass = "detail"

const items = [
  {
    name: "a",
    to: "/",
    thumbnail: "ss",
    actions: [{ name: "seach", icon: <Search />, handleClick() {} }],
  },
  {
    name: "a",
    to: "/",
    thumbnail: "ss",
    actions: [{ name: "seach", icon: <Search />, handleClick() {} }],
  },
  {
    name: "a",
    to: "/",
    thumbnail: "ss",
    actions: [{ name: "seach", icon: <Search />, handleClick() {} }],
  },
  {
    name: "a",
    to: "/",
    thumbnail: "ss",
    actions: [
      { name: "seach", icon: <Search />, handleClick() {} },
      { name: "seach", icon: <Search />, handleClick() {} },
      { name: "seach", icon: <Search />, handleClick() {} },
      { name: "seach", icon: <Search />, handleClick() {} },
    ],
  },
]

const videoSrc = "http://localhost:5174/video/movie.mp4"
const Detail: React.FC = () => {
  const options = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{ src: videoSrc, type: "video/mp4" }],
  }

  const { navigate, location } = useRouter()
  const { ext, dir, filename } = parseLocation(location)
  let component: React.ReactNode | null = null
  // if (!!ext) {
  //   // console.log(ext)
  //   component = <Video />
  // } else {
  //   component = <List></List>
  // }

  switch (ext) {
    case "md": {
      component = <Markdown></Markdown>
      break
    }

    case "mp4": {
      component = <Video />
      break
    }
    case "mp3": {
      component = <Player />
      break
    }
    case "": {
      component = <List></List>
      break
    }
  }
  const navlinks = processPaths(dir.concat([filename || ""]).filter(Boolean))
  // console.log(navlinks)
  const [sidebarContent, setSidebarContent] = useState<Item[]>([])
  const [showSidebar, setshowSidebar] = useState(true)
  useEffect(() => {
    getTotalFolder("/", true).then(async (response) => {
      const result = (await response.json()) as { result: any }
      setSidebarContent(result.result)
    })
  }, [])
  return (
    <div className={`${baseClass}`}>
      <Header title={"resource maker"}></Header>
      <main className="main">
        <Sidebar
          items={sidebarContent}
          className={`${showSidebar ? "" : "hide"}`}
        ></Sidebar>
        <section className="content">
          <div className="navbar">
            <span onClick={() => setshowSidebar((val) => !val)}>
              <Edit />
            </span>
            <span style={{ height: "100%" }}>
              <Breadcrumb navLinks={navlinks} />
            </span>
          </div>
          {/* <Audio/> */}
          {component}
        </section>
      </main>
    </div>
  )
}

export default Detail
