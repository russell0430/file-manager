import Search from "@/components/icons/Search"
import React, { useEffect, useState } from "react"
import Header from "../../components/Header"
import Breadcrumb from "@/components/Breadcrumb"
import Player from "@/previews/Player"
import Video from "../../previews/Video"
import Slider from "@/components/Slider"
import List from "../List"
import { useRouter } from "@/routes/router"
import { parseLocation, processPaths } from "@/utiliities/utils"
import Markdown from "@/previews/Markdown"
import Sidebar from "@/components/Sidebar"
import { Item } from "@/components/Sidebar/types"
import { getFolder } from "@/request"
import Edit from "@/components/icons/Edit"
import Grid from "../Grid"
import { FolderShowEnum } from "./types"
import ListIcon from "@/components/icons/List"
import GridIcon from "@/components/icons/Grid"
import { ContextMenuProvider } from "@/utiliities/ContextMenu"
import { ContentContainer, DetailContainer } from "./style"

const baseClass = "detail"

const Detail: React.FC = () => {
  const { navigate, location } = useRouter()
  const { ext, dir, filename } = parseLocation(location)

  const [folderShow, setFolderShow] = useState<FolderShowEnum>(
    FolderShowEnum.list
  )
  const toggleFolderShow = () => {
    if (folderShow === FolderShowEnum.list) setFolderShow(FolderShowEnum.grid)
    else if (folderShow === FolderShowEnum.grid)
      setFolderShow(FolderShowEnum.list)
  }
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
    case "": {
      component = (
        <ContextMenuProvider>
          {folderShow === FolderShowEnum.list ? <List /> : <Grid />}
        </ContextMenuProvider>
      )
      break
    }
  }
  const navlinks = processPaths(dir.concat([filename || ""]).filter(Boolean))
  // console.log(navlinks)

  return (
    <DetailContainer className={`${baseClass}`}>
      <Header title={"resource maker"}></Header>
      <main className="main">
        <Sidebar></Sidebar>
        <ContentContainer className="content">
          <div className="navbar">
            <span>
              <Edit />
            </span>
            <span>
              <Breadcrumb navLinks={navlinks} />
            </span>
            <span onClick={toggleFolderShow}>
              {folderShow === FolderShowEnum.list ? <ListIcon /> : <GridIcon />}
            </span>
          </div>
          {/* <Audio/> */}
          {component}
        </ContentContainer>
      </main>
    </DetailContainer>
  )
}

export default Detail
