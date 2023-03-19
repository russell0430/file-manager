import { Location } from "@/routes/types"
import { Item } from "@/components/Sidebar/types"
const regex = /\.([\w]{2,4})$/
export const parseLocation = (location: Location) => {
  const paths = location.pathname.split("/").filter(Boolean)
  // console.log(regex.exec(location.pathname)?.[1])
  const ext = regex.exec(location.pathname)?.[1] || ""
  // get undefined when folder
  const filename = !!ext ? paths.pop() : undefined
  return {
    filename,
    dir: paths,
    ext,
  }
}
export const processPaths = (paths: string[]) => {
  let prefix = ""
  let res = []
  for (let path of paths) {
    prefix = `${prefix}/${path}`
    res.push({ to: prefix, name: path })
  }
  return res
}

export const parseSidebarPaths = (items: Item[]): Item[] => {
  return items.map((item) => {
    const label = item.label || item.to.split("/").pop() || ""
    return { ...item, label }
  })
}

export const downloadFile = (url: string, name?: string) => {
  fetch(url).then((res) =>
    res.blob().then((blob) => {
      const a = document.createElement("a")
      const objUrl = window.URL.createObjectURL(blob)
      const filename = name || url.split("/").pop() || "file"
      a.href = objUrl
      a.download = filename
      a.click()
      window.URL.revokeObjectURL(objUrl)
    })
  )
}

export const formatTime = (val: number) => {
  let res = "",
    value = val
  if (value < 60) {
    res += "00:"
  }
  while (value >= 60) {
    res +=
      Math.floor(value / 60)
        .toString()
        .padStart(2, "0") + ":"
    value %= 60
  }
  return res + Math.floor(value).toString().padStart(2, "0")
}
