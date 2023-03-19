export type FieldProps = {
  className?: string
  prefixIcon?: React.ReactNode
  appendix?: boolean
  label: string
  type?: string
  validate?: (val: string) => boolean
}
