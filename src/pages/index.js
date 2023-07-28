import * as React from "react"
import ByteswapLogo from "../svgs/byteswaplogo.svg";
import ByteswapText from "../svgs/byteswaptext.svg";

import { MdEmail } from 'react-icons/md';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

// const buttonClasses = " ";
const linkClasses = "bg-[#007064] dark:bg-[#007064]";
const iconContainerClasses = "flex mx-6 my-4 w-10 h-10 rounded-lg bg-[#007064] dark:bg-[#007064]";
const iconClasses = "mx-auto place-self-center fill-white h-7 w-7";

const IndexPage = () => {
  return (
      <main className="bg-[#ffeed0] dark:bg-[#002233] w-screen h-screen grid md:grid-cols-3 grid-rows-3">
        <div className="justify-self-end md:col-start-3">
          <a aria-label="GitHub" href="https://github.com/ByteswapLabs">
            <div className={iconContainerClasses}><AiFillGithub aria-label="GitHub Icon" className={iconClasses}/></div>
          </a>
          <a aria-label="Twitter" className={linkClasses} href="https://twitter.com/byteswaplabs">
            <div className={iconContainerClasses}><AiOutlineTwitter aria-label="Twitter Icon" className={iconClasses}/></div>
          </a>
          <a aria-label="Email" className={linkClasses} href="mailto:byteswaplabs@gmail.com">
            <div className={iconContainerClasses}><MdEmail aria-label="Email Icon" className={iconClasses}/></div>
          </a>
        </div>
        <div className="md:col-start-2 row-start-2">
          <ByteswapLogo id="Byteswap Logo" aria-label="Byteswap Logo" className="p-6 md:p-0 absolute z-10 fill-[#007064] dark:fill-[#1ea699] w-full md:w-1/3 h-fit " />
          <ByteswapText id="Byteswap Labs" aria-label="Byteswap Labs" className="p-6 md:p-0 absolute z-0 fill-[#007064] dark:fill-white w-full md:w-1/3 h-fit" />
        </div>
      </main>
  )
}

export default IndexPage

export const Head = () => <title>Byteswap Labs</title>

