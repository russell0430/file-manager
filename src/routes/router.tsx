// import { useRoutes } from "react-router-dom"
// import Detail from "@/views/Detail"

// export default function Index() {
//   const element = useRoutes([
//     {
//       path: "/:path",
//       element: <Detail></Detail>,
//     },
//   ])
//   return element
// }
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  // useEffect,
  useLayoutEffect,
  useCallback,
} from "react"
import { createBrowserHistory } from "./history"
import { LinkProps, RouterContext } from "./types"

const Context = createContext({} as RouterContext)

// const switchOpts = (): SwitchOpts => {
//   const paths: string[] = []
//   const pushPath = (pathname: string) => {
//     paths.push(pathname)
//     return () => {
//       const idx = paths.indexOf(pathname)
//       if (idx < 0) return
//       paths.splice(idx, 1)
//     }
//   }
//   return { paths, pushPath }
// }

export const Router: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const historyRef = useRef(createBrowserHistory())
  const [location, setLocation] = useState(historyRef.current.locaiton)
  // console.log(location)

  // const switch = useState(switchOpts())
  // const [paths, setPaths] = useState<string[]>([])
  // const pushPath = (pathname: string) => {
  //   setPaths((paths) => [...paths, pathname])
  //   return () => {
  //     setPaths((paths) => {
  //       const idx = paths.indexOf(pathname)
  //       if (idx < 0) return paths
  //       return paths.splice(idx, 1)
  //     })
  //   }
  // }
  useLayoutEffect(() => {
    const unlisten = historyRef.current.listen((update) => {
      // console.log(update, update.location)
      setLocation(update.location)
    })
    return unlisten
  }, [historyRef, setLocation])
  const navigate = useCallback(
    (to: number | string) => {
      if (typeof to === "number") {
        historyRef.current.go(to)
      } else {
        historyRef.current.push(to)
      }
    },
    [historyRef]
  )

  return (
    <Context.Provider
      value={{
        location,
        navigate,
        // switchOpts: {
        //   paths,
        //   pushPath,
        // },
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useRouter = (): RouterContext => useContext(Context)
