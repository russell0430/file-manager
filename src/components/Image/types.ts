import { ImgHTMLAttributes } from "react"

export type ImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "children"
> & {
  fallback?: string
  placeholder: string
}

export type ImageState = {
  alt?: string
  src?: string
  srcSet?: string
  visibility?: "hidden"
}
