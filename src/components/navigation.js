import * as React from "react"
import ByteswapLogo from "../svgs/byteswaplogo.svg";
import ByteswapText from "../svgs/byteswaptext.svg";

const Navigation = ({navClasses}) => {
  return (
    <div className={navClasses.container}>
        <div className={navClasses.byteswap.container}>
            <ByteswapLogo id="Byteswap Logo" aria-label="Byteswap Logo" className={navClasses.byteswap.logo} />
            <ByteswapText id="Byteswap Labs" aria-label="Byteswap Labs" className={navClasses.byteswap.text} />
        </div>
    </div>
  )
}

export default Navigation
