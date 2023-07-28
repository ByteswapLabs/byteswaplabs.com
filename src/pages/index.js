import * as React from "react"
import { MdEmail } from 'react-icons/md';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import Navigation from "../components/navigation";

const indexNavClasses = {
  container: "md:max-lg:col-span-3 md:max-lg:col-start-2 lg:col-start-2 self-center",
  byteswap: {
    logoandtext: "p-6 md:p-0 w-full",
    justlogo: "hidden",
  }
}

const IndexPage = () => {
  return (
      <main className="bg-[#ffeed0] dark:bg-[#002233] w-screen h-screen grid md:max-lg:grid-cols-5 lg:grid-cols-3">
        <Navigation navClasses={indexNavClasses} />
      </main>
  )
}

export default IndexPage

export const Head = () => <title>Byteswap Labs</title>