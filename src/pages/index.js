import * as React from "react";
import Navigation from "../components/navigation";

const IndexPage = () => {
  return (
      <main className="bg-[#002233] w-screen h-screen grid grid-cols-1">
        <Navigation index />
      </main>
  )
}

export default IndexPage

export const Head = () => <title>Byteswap Labs</title>