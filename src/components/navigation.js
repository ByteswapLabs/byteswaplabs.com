import * as React from "react"
import { Link } from "gatsby"
import Byteswap from "../svgs/byteswap_color.svg";
import ByteswapLogo from "../svgs/byteswaplogo_color.svg";

const Navigation = ({navClasses}) => {
  return (
    <div className={navClasses.container}>
      <Link to="/" className={navClasses.byteswap.container}>
          <ByteswapLogo id="Byteswap Logo" aria-label="Byteswap Logo" className={navClasses.byteswap.justlogo} />
          <Byteswap id="Byteswap Labs" aria-label="Byteswap Labs" className={navClasses.byteswap.logoandtext} />
      </Link>
    </div>
  )
}

export default Navigation
