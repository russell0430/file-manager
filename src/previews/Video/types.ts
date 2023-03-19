export type Props = {
  className?: string
  options?: {
    autoplay: boolean
    controls: boolean
    fluid: boolean
    sources: { src: string; type: string }[]
  }
  onReady?: (arg: any) => void
}
