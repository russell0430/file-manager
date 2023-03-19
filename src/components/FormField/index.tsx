import React, { useState } from "react"
import { FieldProps } from "./types"
import { FieldWrap } from "./style"
import Check from "../icons/Check"

const Field: React.FC<FieldProps> = (props) => {
  const {
    prefixIcon,
    appendix = false,
    className,
    validate,
    label,
    type = "text",
  } = props

  const [value, setValue] = useState("")

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value)
  }
  return (
    <FieldWrap className="user input">
      <div className="prefix-icon">{prefixIcon || null}</div>
      <div className="input-content">
        <div className="label">email</div>
        <input type={type} value={value} onChange={onChange}  />
      </div>
      <div className="appendix-icon">{appendix || <Check />}</div>
    </FieldWrap>
  )
}

export default Field
