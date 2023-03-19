import React from "react"
import { OperationType, Operation, Opts, operations } from "./types"
import Download from "@/components/icons/Download"
import Trash from "@/components/icons/Trash"

import { downloadFile } from "@/utiliities/utils"
import { deleteFile, renameFile } from "@/request"
import { Item } from "@/types"
import Edit from "@/components/icons/Edit"

const SwitchOperation = (
  item: Item,
  operation: OperationType,
  token: string
) => {
  switch (operation) {
    case "download": {
      return () => {
        downloadFile(item.url)
      }
    }
    case "deleteFile": {
      return async () => {
        deleteFile(item.url, token)
      }
    }
    case "rename": {
      return async () => {
        renameFile(item.url, token)
      }
    }
  }
}

const iconMap: { [index in typeof operations[number]]?: React.ReactNode } = {
  download: <Download />,
  rename: <Edit />,
  deleteFile: <Trash />,
}

const getOperation = (item: Item, operations: Opts, token: string) => {
  const validOperation = Object.entries(operations)
    .filter(([key, val]) => val)
    .map(([operation]) => {
      const oper = operation as OperationType
      return {
        type: operation,
        name: operation,
        label: operation,
        icon: iconMap[oper],
        action: SwitchOperation(item, oper, token),
      } as Operation
    })

  return validOperation
}

export default getOperation
