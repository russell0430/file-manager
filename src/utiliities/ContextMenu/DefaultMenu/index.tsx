import { Link } from "@/routes/Link"
import { Item } from "@/types"
import React from "react"
import { MenuWrap } from "./style"
import { useContextMenu } from ".."
const Menu: React.FC<{ item?: Item }> = (props) => {
  const { item } = props

  return (
    <>
      {item && item.options && (
        <MenuWrap>
          {item.options.map((option, index) => {
            return (
              <div
                className="option"
                key={`{option.name}${index}`}
                onClick={option.action}
              >
                {option.icon ||
                  (option.imgUrl && <img src={option.imgUrl} alt="" />) || (
                    <div className="item-label">
                      {option.label || option.name}
                    </div>
                  )}
              </div>
            )
          })}
        </MenuWrap>
      )}
    </>
  )
}

export default Menu
