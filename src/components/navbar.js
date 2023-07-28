import * as React from "react"
import ByteswapLogo from "../svgs/byteswaplogo.svg";
import ByteswapText from "../svgs/byteswaptext.svg";

import { MdEmail } from 'react-icons/md';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

// const buttonClasses = " ";0b1a68
const linkClasses = "bg-[#007064] dark:bg-[#007064]";
const iconContainerClasses = "flex mx-6 my-4 w-10 h-10 rounded-lg bg-[#007064] dark:bg-[#007064]";
const iconClasses = "mx-auto place-self-center fill-white h-7 w-7";

const NavBar = () => {
  return (
    <div className="bg-[#002233] md:h-screen">
        <div className="h-screen">
            <ByteswapLogo id="Byteswap Logo" aria-label="Byteswap Logo" className="p-6 md:p-0 absolute z-10 fill-[#007064] dark:fill-[#1ea699] w-full md:w-1/3 h-fit " />
            <ByteswapText id="Byteswap Labs" aria-label="Byteswap Labs" className="p-6 md:p-0 absolute z-0 fill-[#002233] dark:fill-white w-full md:w-1/3 h-fit" />
        </div>
    </div>
  )
}

export default NavBar
