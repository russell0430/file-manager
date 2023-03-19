import { EffectCallback, DependencyList, useEffect, useRef } from "react"

const useUpdate = (effect: EffectCallback, deps?: DependencyList) => {
  const mountedRef = useRef(false)
  useEffect(() => {
    if (mountedRef.current) {
      return effect()
    } else {
      mountedRef.current = true
    }
  }, deps)
}
export default useUpdate
