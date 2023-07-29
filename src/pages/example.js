import * as React from "react"
import ContentPage from "../components/contentpage"
import ExampleContent from "../content/example.mdx"

const ExamplePage = () => (
  <ContentPage><ExampleContent /></ContentPage>
)

export default ExamplePage

export const Head = () => <title>Example Markdown</title>