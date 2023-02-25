import React, { ChangeEvent, useState } from "react"
import Search from "../icons/Search"
import type { Props } from "./types"
import "./index.scss"

const baseClass = "search-box"

const SearchBox: React.FC<Props> = ({
  placeholder,
  withIcon,
  style,
  width,
}) => {
  const [value, setValue] = useState("")

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }
  const classes = [baseClass].filter(Boolean).join(" ")
  return (
    <div className={classes} style={{ width, ...style }}>
      <div className={`${baseClass}__input`}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
      {withIcon && <Search />}
    </div>
  )
}

export default SearchBox
