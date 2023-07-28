import * as React from "react"
import GamesContent from "../content/games.mdx"
import Navigation from "../components/navigation"

const gamesNavClasses = {
    container: "bg-[#002233] h-20 md:h-screen pt-2 md:pt-8 grid",
    byteswap: {
        container: "px-4 md:pl-0 pb-2 h-14 md:h-auto w-fit lg:w-[280px] md:justify-self-end",
        justlogo: "h-14 w-14 md:w-auto md:h-32 hidden md:max-lg:block",
        logoandtext: "h-14 md:h-32 md:w-auto md:max-lg:hidden",
    }
}

const GamesPage = () => (
  <main className="w-screen h-screen md:grid md:grid-cols-3">
    <Navigation navClasses={gamesNavClasses} />
    <GamesContent className="md:col-start-2 md:col-span-2"/>
  </main>
)

export default GamesPage

export const Head = () => <title>Byteswap Games</title>