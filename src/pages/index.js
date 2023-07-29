import * as React from "react";
import Navigation from "../components/navigation";

const indexNavClasses = {
  container: "md:max-lg:col-span-3 md:max-lg:col-start-2 lg:col-start-2 self-center",
  linkscontainer: "grid grid-cols-1",
  byteswap: {
    logoandtext: "p-6 md:p-0 w-full",
    justlogo: "hidden",
  },
  pagelinkscontainer: "justify-self-center grid grid-cols-1 md:grid-cols-3",
  page: {
    link: "my-4 md:grow",
    icon: "h-16 w-16 md:w-10 inline md:self-center md:justify-self-start",
    text: "pl-3 align-middle text-white text-4xl font-bold inline md:self-center md:justify-self-start"
  },
  games: {
    link: "mt-2",
    icon: "fill-[#9e6ee5]",
    text: "pt-5 md:pt-3"
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
      <main className="bg-[#ffeed0] dark:bg-[#002233] w-screen h-screen grid md:max-lg:grid-cols-5 lg:grid-cols-3">
        <Navigation navClasses={indexNavClasses} />
      </main>
  )
}

export default IndexPage

export const Head = () => <title>Byteswap Labs</title>