import { useEffect, useLayoutEffect } from "react"
import { inBrowser } from "../utils"

export const useIsomorphicLayoutEffect = inBrowser ? useLayoutEffect : useEffect
