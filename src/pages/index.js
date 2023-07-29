import * as React from "react";
import Navigation from "../components/navigation";

const indexNavClasses = {
  container: "self-center",
  linkscontainer: "grid grid-cols-1",
  byteswap: {
    logoandtext: "p-6 md:p-0 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 md:mx-auto",
    justlogo: "hidden",
  },
  pagelinkscontainer: "justify-self-center grid grid-cols-1 md:flex md:justify-center md:w-full md:mt-6",
  page: {
    link: "my-4 md:mx-8",
    icon: "h-16 w-16 inline",
    text: "pl-3 align-middle text-white text-4xl font-bold inline md:pl-0"
  },
  games: {
    link: "mt-2",
    icon: "fill-[#9e6ee5]",
    text: "pt-5 md:pl-2"
  },
  about: {
    link: "",
    icon: "fill-[#e56e79] px-3",
    text: ""
  },
  socials: {
    link: "",
    icon: "fill-[#b5e56e] px-2",
    text: ""
  }
}



const IndexPage = () => {
  return (
      <main className="bg-[#ffeed0] dark:bg-[#002233] w-screen h-screen grid grid-cols-1">
        <Navigation navClasses={indexNavClasses} />
      </main>
  )
}

export default IndexPage

export const Head = () => <title>Byteswap Labs</title>