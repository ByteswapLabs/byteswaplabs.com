import * as React from "react"
import ByteswapLogo from "../svgs/byteswaplogo.svg";
import ByteswapText from "../svgs/byteswaptext.svg";
import ByteswapJustLogo from "../svgs/byteswap_justlogo.svg";

const Navigation = ({navClasses}) => {
  return (
    <div className={navClasses.container}>
        <div className={navClasses.byteswap.container}>
            <ByteswapJustLogo id="Byteswap Just Logo" aria-label="Byteswap Logo" className={navClasses.byteswap.justlogo} />
            <ByteswapLogo id="Byteswap Logo" aria-label="Byteswap Logo" className={`${navClasses.byteswap.logo} ${navClasses.byteswap.logoandtext}`} />
            <ByteswapText id="Byteswap Labs" aria-label="Byteswap Labs" className={`${navClasses.byteswap.text} ${navClasses.byteswap.logoandtext}`} />
        </div>
    </div>
  )
}

export default Navigation
