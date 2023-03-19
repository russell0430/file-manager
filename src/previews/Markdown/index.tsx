import React, { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import "github-markdown-css"
import { useRouter } from "@/routes/router"
import { MarkdownProps } from "./types"
import { getMD, getResource } from "@/request"
import { Resource } from "@/types"
import { MdContainer } from "./style"
const Markdown: React.FC<MarkdownProps> = (props) => {
  const [markdown, setMarkdown] = useState("")
  const [resourceInfo, setResourceInfo] = useState<Resource | null>(null)
  const {
    location: { pathname },
  } = useRouter()

  console.log(pathname)
  useEffect(() => {
    getResource(pathname.slice(1)).then(async (response) => {
      const resource = await response.data
      console.log(resource)
      if (resource) setResourceInfo(resource[0])
    })
  }, [pathname])

  useEffect(() => {
    if (resourceInfo)
      getMD(resourceInfo.url).then((response) => {
        const { data } = response
        if (data) setMarkdown(data.mdText)
      })
  }, [resourceInfo])
  return (
    <MdContainer className="markdown-wrap">
      <ReactMarkdown className="markdown-body" children={markdown} />
    </MdContainer>
  )
}

export default Markdown
