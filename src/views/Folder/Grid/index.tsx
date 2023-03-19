import { getFolder } from "@/request"
import { Item } from "@/types"
import { useRouter } from "@/routes/router"
import { parseLocation } from "@/utiliities/utils"
import React, { useEffect, useState } from "react"
import DefaultItem from "./Item"
import { GridContainer } from "./style"
import { GridProps } from "./types"

const Grid: React.FC<GridProps> = (props) => {
  const { Item = DefaultItem, items } = props
  const { location } = useRouter()

  return (
    <GridContainer>
      {items &&
        items.map((item, index) => {
          return <Item index={index} item={item} key={item.name} />
        })}
    </GridContainer>
  )
}

export default Grid
