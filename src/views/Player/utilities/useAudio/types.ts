import { Audio } from "@/types"

export type AudioContext = {
  playing: boolean
  curIndex: number
  audios: Audio[]
  switchAudio: (index: number) => void
  play: () => void
  pause: () => void
  toggle: () => void
  showList: () => void
  hideList: () => void
  showing: boolean
  randomOrder: number[]
}
