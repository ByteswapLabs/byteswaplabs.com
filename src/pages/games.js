import * as React from "react"
import GamesContent from "../content/games.mdx"
import Navigation from "../components/navigation"

const gamesNavClasses = {
    container: "bg-[#002233] md:h-screen grid grid-cols-2 pt-8",
    byteswap: {
        container: "max-w-xs justify-self-end",
        logo: "max-w-xs absolute z-10 fill-[#007064] dark:fill-[#1ea699]",
        text: "max-w-xs absolute z-0 fill-[#002233] dark:fill-white"
    }
}

const GamesPage = () => (
  <main className="w-screen h-screen grid md:grid-cols-3">
    <Navigation navClasses={gamesNavClasses} />
    <GamesContent className="col-start-2 col-span-2"/>
  </main>
)

export default GamesPage

export const Head = () => <title>Byteswap Games</title>