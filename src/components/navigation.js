import * as React from "react"
import Byteswap from "../svgs/byteswap_color.svg";
import ByteswapLogo from "../svgs/byteswaplogo_color.svg";

const Navigation = ({navClasses}) => {
  return (
    <div className={navClasses.container}>
        <div className={navClasses.byteswap.container}>
            <ByteswapLogo id="Byteswap Logo" aria-label="Byteswap Logo" className={navClasses.byteswap.justlogo} />
            <Byteswap id="Byteswap Labs" aria-label="Byteswap Labs" className={navClasses.byteswap.logoandtext} />
        </div>
    </div>
  )
}

export default Navigation
