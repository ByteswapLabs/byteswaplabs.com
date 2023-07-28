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
  container: "md:col-start-2 row-start-2",
  byteswap: {
    container: "md:col-start-2 row-start-2",
    logo: "p-6 md:p-0 absolute z-10 fill-[#007064] dark:fill-[#1ea699] w-full md:w-1/3 h-fit",
    text: "p-6 md:p-0 absolute z-0 fill-[#002233] dark:fill-white w-full md:w-1/3 h-fit"
  }
}

const IndexPage = () => {
  return (
      <main className="bg-[#ffeed0] dark:bg-[#002233] w-screen h-screen grid md:grid-cols-3 grid-rows-3">
        <Navigation navClasses={indexNavClasses} />
      </main>
  )
}

export default IndexPage

export const Head = () => <title>Byteswap Labs</title>