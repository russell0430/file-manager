import React from "react"
// import { Link } from "react-router-dom"
import { Props } from "./types"
import { Link as LinkType } from "@/types"
import "./index.scss"
import SearchBox from "@/components/SearchBox"

const baseClass = "header"

const links: LinkType[] = [
  {
    name: "a",
    handle: () => {
      console.log("click a")
    },
  },
  {
    name: "b",
    handle: () => {
      console.log("click b")
    },
  },
  {
    name: "c",
    handle: () => {
      console.log("click c")
    },
  },
]

const Header: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { title, className } = props

  const classes = [baseClass, className].filter(Boolean).join(" ")
  return (
    <div className={classes}>
      <div className={`${baseClass}__title`}>{title}</div>
      <div className={`${baseClass}__searchbox`}>
        <SearchBox withIcon placeholder="search" width="100%"></SearchBox>
      </div>
      <div className={`${baseClass}__actions`}>
        {links &&
          links.map(({ icon, name, handle }) => {
            return (
              <div className={`${baseClass}__action`} key={name} onClick={handle}>
                {icon || name}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Header
