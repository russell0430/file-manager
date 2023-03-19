import { useRef } from "react"

const usePersist = <T extends (...args: any[]) => any>(callback: T) => {
  const persistRef = useRef<T>()
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  if (persistRef.current === undefined) {
    persistRef.current = function (this: any, ...args) {
      return callbackRef.current.apply(this, args)
    } as T
  }

  return persistRef.current
}

export default usePersist
