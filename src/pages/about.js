import * as React from "react"
import ContentPage from "../components/contentpage"
import AboutContent from "../content/about.mdx"

const AboutPage = () => (
  <ContentPage><AboutContent /></ContentPage>
)

export default AboutPage

export const Head = () => <title>About Byteswap</title>