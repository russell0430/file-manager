import React from "react"
// refer
// https://github.com/remix-run/history/blob/actions/packages/history/index.ts

export enum Action {
  Pop = "POP",
  Push = "PUSH",
  Replace = "REPLACE",
}
type Pathname = string
type Search = string
type Hash = string
type Key = string
export type State = object | null

export type Path = {
  pathname: Pathname
  search: Search
  hash: Hash
}
export type PartialPath = Partial<Path>
export type To = string | PartialPath
export type Location<S extends State = State> = { state: S; key: Key } & Path

export type Update<S extends State = State> = {
  action: Action
  location: Location<S>
}
export type Listener<S extends State = State> = (update: Update<S>) => void

export type Transition<S extends State = State> = {
  retry: () => void
} & Update<S>

export type Blocker<S extends State = State> = (tx: Transition<S>) => void
type HistoryOptions = {
  window: Window
}

export type Event<F> = {
  length: number
  push: (fn: F) => () => void
  call: (...args: unknown[]) => void
}
export type HistoryState = {
  usr: State
  key?: string
  idx: number
}
export type History<S extends State = State> = {
  readonly action: Action
  readonly locaiton: Location<S>
  push(to: To, state?: S): void
  replace(to: To, state?: S): void
  go(delta: number): void
  back(): void
  forward(): void
  /**
   *
   * @param listener
   * @returns unlisten
   */
  listen(listener: Listener<S>): () => void
  // return same as the above
  block(blocker: Blocker<S>): () => void
}
export type BrowserHistory<S extends State = State> = History<S> & {}

export type BrowserHistoryOptions = Partial<HistoryOptions>

// export type SwitchOpts = {
//   paths: string[]
//   pushPath: (path: string) => () => void
// }
export type RouterContext = {
  location: Location
  navigate: (to: number | string) => void
  // switchOpts?: SwitchOpts
}

export type LinkProps = {
  to: string
  children: React.ReactNode
}


 
// new add
export type Route = {
  to: string
  element: React.ReactNode
  // now children is not used
//   children?: Route[]
  defaultIndex?: boolean
}
