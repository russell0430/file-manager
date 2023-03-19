import React from "react"
import { Props } from "./types"

import { Link } from "@/routes/Link"
import { BreadcrumbContainer } from "./style"
const baseClass = "breadcrumb"

const Breadcrumb: React.FC<Props> = (props) => {
  const { navLinks } = props
  const linksLength = navLinks.length
  if (linksLength === 0) return null
  const classes = [baseClass].filter(Boolean).join(" ")
  return (
    <BreadcrumbContainer className={classes}>
      <div className="wrap">
        {navLinks.map((item, index) => {
          return (
            <div key={index} className="labels">
              <div className="link">
                <Link to={item.to}>{item.label || item.name}</Link>
              </div>
              {index !== linksLength - 1 ? (
                <div className="slash">/</div>
              ) : null}
            </div>
          )
        })}
      </div>
    </BreadcrumbContainer>
  )
}

export default Breadcrumb
