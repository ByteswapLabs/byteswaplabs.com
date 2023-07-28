import * as React from "react"
import GamesContent from "../content/games.mdx"
import NavBar from "../components/navbar"

const GamesPage = () => (
  <main className="w-screen h-screen grid md:grid-cols-3">
    <NavBar />
    <GamesContent className="col-start-2 col-span-2"/>
  </main>
)

export default GamesPage

export const Head = () => <title>Byteswap Games</title>