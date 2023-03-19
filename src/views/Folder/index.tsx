import Download from "@/components/icons/Download"
import PencilSquare from "@/components/icons/PencilSquare"
import Trash from "@/components/icons/Trash"
import { getFolder } from "@/request"
import { Item } from "@/types"
import { ContextMenuProvider } from "@/utiliities/ContextMenu"
import { downloadFile } from "@/utiliities/utils"
import React, { useEffect, useState } from "react"
import Grid from "./Grid"
import List from "./List"
import { FolderContainer } from "./style"
export enum FolderShowEnum {
  list = "list",
  grid = "gird",
}

const Folder: React.FC = () => {
  const [folderShow, setFolderShow] = useState<FolderShowEnum>(
    FolderShowEnum.list
  )
  const toggleFolderShow = () => {
    if (folderShow === FolderShowEnum.list) setFolderShow(FolderShowEnum.grid)
    else if (folderShow === FolderShowEnum.grid)
      setFolderShow(FolderShowEnum.list)
  }

  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    setItems([])
    getFolder(location.pathname, false).then((response) => {
      const { status, msg, data } = response

      if (status === 200 && data) {
        setItems(
          data.stats.map((stat) => ({
            ...stat,
            options: [
              {
                name: "download",
                label: "download",
                action: () => {
                  // console.log(stat)
                  downloadFile(stat.url)
                  console.log("download")
                },
                icon: <Download />,
              },
              {
                name: "delete",
                label: "delete",
                action: () => {
                  console.log("delte")
                },
                icon: <Trash />,
              },
              {
                name: "rename",
                label: "rename",
                action: () => {
                  console.log("rename")
                },
                icon: <PencilSquare />,
              },
            ],
          }))
        )
      }
    })
  }, [location.pathname])
  return (
    <ContextMenuProvider>
      <FolderContainer>
        {folderShow === FolderShowEnum.list ? (
          <List items={items} />
        ) : (
          <Grid items={items} />
        )}
      </FolderContainer>
    </ContextMenuProvider>
  )
}

export default Folder
