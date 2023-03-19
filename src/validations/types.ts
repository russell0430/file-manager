// return true when legal
// return error;string when illegal
export type Validate<T = any> = (
  value: T,
  options: ValidationOptions
) => true | string

export type ValidationOptions = {
  name: string
  min?: number
  max?: number
  required?: boolean
  validate?: Validate
}
