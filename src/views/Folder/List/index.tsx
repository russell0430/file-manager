import React, { useEffect, useState } from "react"
import { Props } from "./types"
import DefaultItem from "./Item"
import { Link } from "@/routes/Link"
import { useContextMenu } from "@/utiliities/ContextMenu"
import { ListContainer } from "./style"
import SkeletonList from "./Skeleton"

const baseClass = "list"

const List: React.FC<Props> = (props) => {
  const { Item = DefaultItem, items } = props

  const { setShow } = useContextMenu()

  const classes = [baseClass].filter(Boolean).join(" ")
  console.log(
    items,
    !!items &&
      items.map((item, index) => {
        return (
          <div key={index} className={`${baseClass}__item`}>
            <Link to={item.to}>
              <Item item={item} isActive={false} index={index}></Item>
            </Link>
          </div>
        )
      })
  )

  return (
    <ListContainer className={classes}>
      <div className={`${baseClass}__wrap`}>
        {items && items.length ? (
          items.map((item, index) => {
            return (
              <div key={index} className={`${baseClass}__item`}>
                <Link to={item.to}>
                  <Item item={item} isActive={false} index={index}></Item>
                </Link>
              </div>
            )
          })
        ) : (
          <SkeletonList num={4} />
        )}
      </div>
    </ListContainer>
  )
}

export default List
