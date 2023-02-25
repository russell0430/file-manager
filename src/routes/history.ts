import React from "react"
import {
  BrowserHistory,
  BrowserHistoryOptions,
  Action,
  Listener,
  Blocker,
  Update,
  Transition,
  Location,
  To,
  State,
  PartialPath,
  Event,
  HistoryState,
} from "./types"

const BeforeUnloadEventType = "beforeunload"
const PopStateEvent = "popstate"
const HashChangeEvent = "hashchange"
const __DEV__ = false
const readOnly: <T extends unknown>(obj: T) => T = __DEV__
  ? (obj) => Object.freeze(obj)
  : (obj) => obj

const createPath = ({ pathname = "/", search = "", hash = "" }: PartialPath) =>
  `${pathname}${search}${hash}`

const parsePath = (path: string) => {
  let partialPath: PartialPath = {}

  if (path) {
    let hashIndex = path.indexOf("#")
    if (hashIndex >= 0) {
      partialPath.hash = path.substr(hashIndex)
      path = path.substr(0, hashIndex)
    }

    let searchIndex = path.indexOf("?")
    if (searchIndex >= 0) {
      partialPath.search = path.substr(searchIndex)
      path = path.substr(0, searchIndex)
    }

    if (path) {
      partialPath.pathname = path
    }
  }

  return partialPath
}

const createKey = () => Math.random().toString(36).substr(2, 8)

const promptBeforeUnload = (event: BeforeUnloadEvent) => {
  event.preventDefault()
  event.returnValue = ""
}

const createEvents = <T extends Function>(): Event<T> => {
  let handlers: T[] = []

  return {
    get length() {
      return handlers.length
    },
    push(fn: T) {
      handlers.push(fn)
      return () => {
        handlers = handlers.filter((handler) => handler !== fn)
      }
    },
    call(...args: unknown[]) {
      handlers.forEach((fn) => fn && fn(...args))
    },
  }
}

const createBrowserHistory = (
  options: BrowserHistoryOptions = {}
): BrowserHistory => {
  let { window = document.defaultView! } = options
  let globalHistory = window.history

  const getIndexAndLocation = (): [number, Location] => {
    let { pathname, search, hash } = window.location
    let state = globalHistory.state || {}
    return [
      state.idx,
      readOnly<Location>({
        pathname,
        search,
        hash,
        state: state.usr || null,
        key: state.key || "default",
      }),
    ]
  }

  const createHref = (to: To) => {
    return typeof to === "string" ? to : createPath(to)
  }

  const getHistoryStateAndUrl = (
    nextLocation: Location,
    index: number
  ): [HistoryState, string] => {
    return [
      { usr: nextLocation.state, key: nextLocation.key, idx: index },
      createHref(nextLocation),
    ]
  }
  const getNextLocation = (to: To, state: State = null): Location => {
    return readOnly<Location>({
      ...location,
      ...(typeof to === "string" ? parsePath(to) : to),
      state,
      key: createKey(),
    })
  }
  let blockedPopTx: Transition | null = null

  const handlePop = () => {
    if (blockedPopTx) {
      blcokers.call(blockedPopTx)
      blockedPopTx = null
    } else {
      let nextAction = Action.Pop
      let [nextIndex, nextLocation] = getIndexAndLocation()

      if (blcokers.length) {
        if (nextIndex !== null) {
          let delta = index - nextIndex
          if (delta) {
            blockedPopTx = {
              action: nextAction,
              location: nextLocation,
              retry() {
                go(delta * -1)
              },
            }
            go(delta)
          }
        } else {
        }
      } else {
        applyTx(nextAction)
      }
    }
  }

  window.addEventListener(PopStateEvent, handlePop)

  let action = Action.Pop
  let [index, location] = getIndexAndLocation()
  let listeners = createEvents<Listener>()
  let blcokers = createEvents<Blocker>()

  if (index == null) {
    index = 0
    globalHistory.replaceState({ ...globalHistory.state, idx: index }, "")
  }

  const allowTx = (action: Action, location: Location, retry: () => void) => {
    return (
      !blcokers.length || (blcokers.call({ action, location, retry }), false)
    )
  }

  const applyTx = (nextAction: Action) => {
    // console.log("applyTx")
    action = nextAction
    ;[index, location] = getIndexAndLocation()
    // console.log(location)
    listeners.call({ action, location })
  }
  const push = (to: To, state?: State) => {
    let nextAction = Action.Push
    let nextLocation = getNextLocation(to, state)
    const retry = () => {
      push(to, state)
    }

    if (allowTx(nextAction, nextLocation, retry)) {
      let [historyState, url] = getHistoryStateAndUrl(nextLocation, index + 1)

      try {
        // console.log(window.location)
        globalHistory.pushState(historyState, "", url)
        // console.log(historyState, url)
        // console.log(window.location)
      } catch (error) {
        window.location.assign(url)
      }
      applyTx(nextAction)
    }
  }

  const replace = (to: To, state?: State) => {
    let nextAction = Action.Replace
    let nextLocation = getNextLocation(to, state)
    const retry = () => {
      replace(to, state)
    }
    if (allowTx(nextAction, nextLocation, retry)) {
      let [historyState, url] = getHistoryStateAndUrl(nextLocation, index)

      globalHistory.replaceState(historyState, "", url)
      applyTx(nextAction)
    }
  }

  const go = (delta: number) => {
    globalHistory.go(delta)
  }
  const history: BrowserHistory = {
    get action() {
      return action
    },
    get locaiton() {
      return location
    },
    push,
    replace,
    go,
    back() {
      go(-1)
    },
    forward() {
      go(1)
    },
    listen(listener) {
      return listeners.push(listener)
    },
    block(blocker) {
      const unblock = blcokers.push(blocker)
      if (blocker.length === 1) {
        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload)
      }
      return () => {
        unblock()
        if (!blocker.length) {
          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload)
        }
      }
    },
  }
  return history
}

export { createBrowserHistory }
