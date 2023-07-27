import * as React from "react"
import ByteswapLogo from "../svgs/justlogo.svg";
import ByteswapLogoText from "../svgs/justtext.svg";

import { Button } from 'flowbite-react';
import { MdEmail } from 'react-icons/md';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

const buttonClasses = "w-10 h-10 mx-6 my-4 bg-[#007064] dark:bg-[#007064]";

const IndexPage = () => {
  return (
      <main className="bg-[#ffeed0] dark:bg-[#002233] w-screen h-screen grid md:grid-cols-3 grid-rows-3">
        <div className="justify-self-end md:col-start-3">
          <Button className={buttonClasses} href="https://github.com/ByteswapLabs">
            <AiFillGithub className="h-7 w-7"/>
          </Button>
          <Button className={buttonClasses} href="https://twitter.com/byteswaplabs">
            <AiOutlineTwitter className="h-7 w-7"/>
          </Button>
          <Button className={buttonClasses} href="mailto:contact@byteswaplabs.com">
            <MdEmail className="h-7 w-7"/>
          </Button>
        </div>
        <div className="md:col-start-2 row-start-2">
          <ByteswapLogo className="absolute z-10 fill-[#007064] dark:fill-[#1ea699] w-full md:w-1/3 h-fit " />
          <ByteswapLogoText className="absolute z-0 fill-[#007064] dark:fill-white w-full md:w-1/3 h-fit" />
        </div>
      </main>
  )
}

export default IndexPage

export const Head = () => <title>Byteswap Labs</title>

