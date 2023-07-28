import * as React from "react"
import GamesContent from "../content/games.mdx"
import Navigation from "../components/navigation"

const gamesNavClasses = {
    container: "bg-[#002233] h-20 md:h-full md:min-h-screen pt-2 md:pt-8 grid",
    byteswap: {
        container: "px-4 md:pl-0 pb-2 h-14 md:h-auto w-fit md:justify-self-end md:fixed",
        justlogo: "h-14 w-14 md:w-auto md:h-32 hidden md:max-lg:block",
        logoandtext: "h-14 md:h-32 md:w-auto md:max-lg:hidden",
    }
}

const gamesContentContainerClasses = "bg-[#ffeed0] dark:bg-[#313338] dark:text-white md:col-start-2 md:col-span-2 md:h-full max-md:min-h-full"
// const gamesContentContainerClasses = "bg-[#2A0033] md:col-start-2 md:col-span-2"

const GamesPage = () => (
  <main className="w-screen h-screen md:grid md:grid-cols-3">
    <Navigation navClasses={gamesNavClasses} />
    <div className={gamesContentContainerClasses}>
      <div className="prose dark:prose-invert px-4 md:px-8 pt-2 md:pt-8"><GamesContent /></div>
    </div>
  </main>
)

export default GamesPage

export const Head = () => <title>Byteswap Games</title>