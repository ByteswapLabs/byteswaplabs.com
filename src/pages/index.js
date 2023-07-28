import * as React from "react";
import Navigation from "../components/navigation";

const indexNavClasses = {
  container: "md:max-lg:col-span-3 md:max-lg:col-start-2 lg:col-start-2 self-center",
  linkscontainer: "",
  byteswap: {
    logoandtext: "p-6 md:p-0 w-full",
    justlogo: "hidden",
  },
  pagelinkscontainer: "",
  page: {
    link: "mx-1 justify-self-end grid grid-cols-2 md:mb-6 grow md:grow-0",
    icon: "h-8 w-8 md:h-10 md:w-10 self-center justify-self-end",
    text: "text-white max-sm:hidden text-2xl pl-1 md:pl-2 font-bold self-center justify-self-start"
  },
  games: {
    link: "mt-2",
    icon: "fill-[#9e6ee5] ",
    text: "pt-2 md:pt-3"
  },
  about: {
    link: "mt-4",
    icon: "fill-[#e56e79] px-2",
    text: ""
  },
  socials: {
    link: "mt-4",
    icon: "fill-[#b5e56e] px-1",
    text: ""
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