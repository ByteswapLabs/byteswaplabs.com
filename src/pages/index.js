import * as React from "react"
import ByteswapLogo from "../svgs/byteswaplogo.svg";
import ByteswapText from "../svgs/byteswaptext.svg";

import { MdEmail } from 'react-icons/md';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import Navigation from "../components/navigation";

// const buttonClasses = " ";0b1a68
const linkClasses = "bg-[#007064] dark:bg-[#007064]";
const iconContainerClasses = "flex mx-6 my-4 w-10 h-10 rounded-lg bg-[#007064] dark:bg-[#007064]";
const iconClasses = "mx-auto place-self-center fill-white h-7 w-7";

const indexNavClasses = {
  container: "md:col-start-2 self-center",
  byteswap: {
    container: "h-48",
    logoandtext: "p-6 md:p-0 absolute w-full md:w-1/3 h-48",
    logo: "fill-[#007064] dark:fill-[#1ea699]",
    text: "fill-[#002233] dark:fill-white",
    justlogo: "hidden",
  }
}

const IndexPage = () => {
  return (
      <main className="bg-[#ffeed0] dark:bg-[#002233] w-screen h-screen grid md:grid-cols-3">
        <Navigation navClasses={indexNavClasses} />
      </main>
  )
}

export default IndexPage

export const Head = () => <title>Byteswap Labs</title>