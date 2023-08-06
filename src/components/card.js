import * as React from "react"

const standardCardClasses = "[&>h1]:text-sky-700"

const Card = ({url, children}) => (
  <a href={url} className={standardCardClasses}>
    {children}
  </a>
)

export default Card