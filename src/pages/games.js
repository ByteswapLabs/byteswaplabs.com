import * as React from "react"
import GamesContent from "../content/games.mdx"
import Navigation from "../components/navigation"

const gamesNavClasses = {
    container: "bg-[#002233] h-20 md:h-screen grid lg:grid-cols-3 pt-2 md:pt-8",
    byteswap: {
        container: "pl-4 md:pl-0 pb-2 h-14 md:h-auto w-xs md:col-span-2 md:col-start-3 xl:col-start-2",
        logo: "h-14 md:h-32 absolute z-10 fill-[#007064] dark:fill-[#1ea699]",
        text: "h-14 md:h-32 absolute z-0 fill-[#002233] dark:fill-white md:max-xl:invisible"
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