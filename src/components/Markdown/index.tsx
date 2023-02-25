import React, { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import "./index.scss"
import "github-markdown-css"
import { useRouter } from "@/routes/router"
import { MarkdownProps } from "./types"
import { getResource } from "@/request"
const Markdown: React.FC<MarkdownProps> = (props) => {
  const [markdown, setMarkdown] = useState("")
  const {
    location: { pathname },
  } = useRouter()

  console.log(pathname)
  useEffect(() => {
    getResource(pathname.slice(1)).then(async (response) => {
      const result = await response.text()
      setMarkdown(result)
    })
  }, [pathname])

  return (
    <div className="markdown-wrap">
      <ReactMarkdown className="markdown-body" children={markdown} />
    </div>
  )
}

export default Markdown
