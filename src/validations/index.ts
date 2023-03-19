import { Validate } from "./types"
import { config } from "../../global.config"

export const password: Validate = (value: string, { required, max, min }) => {
  if (value && max && value.length > max) {
    return `password should shorter than ${max}`
  }
  if (value && min && value.length < min) {
    return `password should longer than ${min}`
  }
  if (required && !value) {
    return `password is requied`
  }
  return true
}

export const email: Validate = (value: string, { required, max, min }) => {
  if ((value && !/\S+@\S+\.\S+/.test(value)) || (!value && required))
    return `Email :${value} is not legal`
  return true
}
