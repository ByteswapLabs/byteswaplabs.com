import * as React from "react"
import ByteswapLogo from "../svgs/logo.svg";

import { Button } from 'flowbite-react';
import { MdEmail } from 'react-icons/md';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

const buttonClasses = "w-10 h-10 mx-6 my-4";

const IndexPage = () => {
  return (
      <main className="w-screen h-screen grid md:grid-cols-3 grid-rows-3">
        <div className="justify-self-end md:col-start-3">
          <Button className={buttonClasses} href="https://www.google.com">
            <AiFillGithub className="h-7 w-7"/>
          </Button>
          <Button className={buttonClasses} href="https://www.google.com">
            <AiOutlineTwitter className="h-7 w-7"/>
          </Button>
          <Button className={buttonClasses} href="https://www.google.com">
            <MdEmail className="h-7 w-7"/>
          </Button>
        </div>
        <ByteswapLogo className="w-full h-full md:col-start-2 row-start-2 dark:bg-red-600" />
      </main>
  )
}

export default IndexPage

export const Head = () => <title>Byteswap Labs</title>

