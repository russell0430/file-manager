import Breadcrumb from "@/components/Breadcrumb"
import Edit from "@/components/icons/Edit"
import React, { useEffect, useState } from "react"
import { ContentContainer } from "./style"
import { FolderShowEnum } from "./types"
import ListIcon from "@/components/icons/List"
import GridIcon from "@/components/icons/Grid"
import { useRouter } from "@/routes/router"
import { parseLocation, processPaths } from "@/utiliities/utils"
import Markdown from "@/previews/Markdown"
import Video from "@/previews/Video"
import Player from "@/previews/Player"
import Image from "@/previews/Image"
import { ContextMenuProvider } from "@/utiliities/ContextMenu"
import List from "../Folder/List"
import Grid from "../Folder/Grid"
import Header from "@/components/Header"
import { useLayout } from "@/utiliities/Layout"
import Folder from "../Folder"
const Content: React.FC = () => {
  const { navigate, location } = useRouter()

  const { ext, dir, filename } = parseLocation(location)

  const [contentComp, setContentCom] = useState<React.ReactNode | null>(null)

  const { showSidebar } = useLayout()
  // need to improve
  useEffect(() => {
    let component: React.ReactNode | null = null
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
      case "jpg": {
      }
      case "png": {
        component = <Image />
        break
      }
      case "": {
        component = <Folder />
        break
      }
    }
    setContentCom(component)
  }, [location])

  const navlinks = processPaths(dir.concat([filename || ""]).filter(Boolean))

  return (
    <ContentContainer className="content">
      <div className={`content-header ${showSidebar ? "" : "hide-sidebar"}`}>
        <Header />
      </div>
      <div className="navbar">
        <span>
          <Edit />
        </span>
        <span>
          <Breadcrumb navLinks={navlinks} />
        </span>
        {/* <span onClick={toggleFolderShow}>
          {folderShow === FolderShowEnum.list ? <ListIcon /> : <GridIcon />}
        </span> */}
      </div>
      <div className="content-body"> {contentComp}</div>
    </ContentContainer>
  )
}

export default Content
