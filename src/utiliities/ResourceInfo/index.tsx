import React, { createContext, useContext, useState } from "react"
import { PlayableType } from "@/types"
import { ResourceInfo, ResourceInfoContext } from "./types"

const Context = createContext({} as ResourceInfoContext)

export const ResourceInfoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [name, setName] = useState("")
  const [label, setLabel] = useState<string>()
  const [period, setPeriod] = useState<number>(0)
  const [author, setAuthor] = useState<string[] | string>("")
  const [resourceType, setResourceType] = useState("unknown" as PlayableType)

  const setResourceInfo = ({
    name,
    period,
    author,
    resourceType,
    label,
  }: ResourceInfo) => {
    setName(name)
    period && setPeriod(period)
    setAuthor(author)
    setResourceType(resourceType)
    label && setLabel(label)
  }
  return (
    <Context.Provider
      value={{
        name,
        label,
        period,
        author,
        resourceType,
        setResourceInfo,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useResourceInfo = (): ResourceInfo => useContext(Context)
