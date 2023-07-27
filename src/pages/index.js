import * as React from "react"

import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import ByteswapLogo from "../svgs/logo.svg";

const IndexPage = () => {
  return (
      <main className="container mx-auto h-screen grid md:grid-cols-3 grid-rows-3">
        <ByteswapLogo className="w-full h-full md:col-start-2 row-start-2 dark:bg-red-600" />
        <Flowbite theme={{usePreferences: true}}><DarkThemeToggle className="m-4 row-start-3 place-self-end w-min h-min"/></Flowbite>
      </main>
  )
}

export default IndexPage

export const Head = () => <title>Byteswap Labs</title>
