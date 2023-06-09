import { useEffect, useRef } from "react"

const useUnmount = (effect: () => void) => {
  const effectRef = useRef(effect)
  effectRef.current = effect

  useEffect(() => {
    return () => {
      effectRef.current()
    }
  }, [])
}
export default useUnmount
