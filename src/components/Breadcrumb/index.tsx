import React from "react"
import { Props } from "./types"

import "./index.scss"
import { Link } from "@/routes/Link"

const baseClass = "breadcrumb"

const Breadcrumb: React.FC<Props> = (props) => {
  const { navLinks } = props
  const linksLength = navLinks.length
  if (linksLength === 0) return null
  const classes = [baseClass].filter(Boolean).join(" ")
  return (
    <section className={classes}>
      <div className={`${baseClass}__wrap`}>
        {navLinks.map((item, index) => {
          return (
            <div key={index} className={`${baseClass}__labels`}>
              <div className={`${baseClass}__link`}>
                <Link to={item.to}>{item.label || item.name}</Link>
              </div>
              {index !== linksLength - 1 ? (
                <div className={`${baseClass}__slash`}>/</div>
              ) : null}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Breadcrumb
