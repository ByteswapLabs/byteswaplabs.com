import * as React from "react";
import ContentPage from "../components/contentpage";
import GamesContent from "../content/games.mdx";

const GamesPage = () => (
  <ContentPage>
    <GamesContent />
  </ContentPage>
);

export default GamesPage;

export const Head = () => <title>Byteswap Games</title>;
