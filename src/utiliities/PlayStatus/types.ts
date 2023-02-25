
type Status = {
  isPlaying: boolean
  currentPeriod: number
  toggle: (status: boolean) => void
  pause: () => void
  play: () => void
  changePeriod: (val: number) => void
}

export type PlayStatusContext = Status
// & ResourceInfo
