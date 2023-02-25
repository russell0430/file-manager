import React, { useCallback } from "react"
import { useRouter } from "../router"
import { LinkProps } from "../types"
export const Link: React.FC<LinkProps> = ({ to, children }) => {
  const { navigate } = useRouter()
  const handleClick = useCallback(() => {
    navigate(to)
  }, [to, navigate])
  return (
    <div className="link" onClick={handleClick}>
      {children}
    </div>
  )
}
