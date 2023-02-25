import React from "react"
import { useRouter } from "../router"
import { Path, Route } from "../types"
import { Props } from "./types"
const useRoutes: React.FC<Props> = (props) => {
  const { routes } = props

  // let matches = matchesRoutes(routes, { pathname })
  const {
    location: { pathname },
  } = useRouter()
  // return null

  const matchRoutes = routes.filter((route) => route.to === pathname)
  const defaultRoutes = routes.filter((route) => route.defaultIndex)
  return (
    <>
      {matchRoutes.length===1
        ? matchRoutes[0].element
        : defaultRoutes.length
        ? defaultRoutes[0].element
        : null}
    </>
  )
  // return <>{matchRoutes && matchRoutes.map((route) => route.element)}</>
}

export { useRoutes }
