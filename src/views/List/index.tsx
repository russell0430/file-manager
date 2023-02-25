import React, { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
import { Props } from "./types"
import { Item } from "@/types"
import "./index.scss"

import DefaultItem from "./Item"
import { Link } from "@/routes/Link"
import { getFolder } from "@/request"
import { parseLocation } from "@/utiliities/utils"
import { useRouter } from "@/routes/router"

const baseClass = "list"

const List: React.FC<Props> = (props) => {
  const { Item = DefaultItem, children } = props

  const [items, setItems] = useState<Item[]>([])
  const { location } = useRouter()

  const { dir} = parseLocation(location)
  useEffect(() => {
    getFolder(location.pathname.slice(1)).then(async (response) => {
      const { result } = (await response.json()) as {
        result: { isFile: boolean; name: string }[]
      }

      const res = result.map(({ isFile, name }) => ({ name, to: [...dir,name].join("/") }))
      setItems(res)
    })
  }, [location.pathname])

  const classes = [baseClass].filter(Boolean).join(" ")
  return (
    <div className={classes}>
      <div className={`${baseClass}__wrap`}>
        {children ||
          (items &&
            items.map((item, index) => {
              return (
                <div key={index} className={`${baseClass}__item`}>
                  <Link to={item.to}>
                    <Item item={item} isActive={false} index={index}></Item>
                  </Link>
                </div>
              )
            }))}
      </div>
    </div>
  )
}

export default List
