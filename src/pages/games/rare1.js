import * as React from "react";
import ContentPage from "../../components/contentpage";
import Rare1Content from "../../content/games/rare1.mdx";

const Rare1Page = () => (
  <ContentPage>
    <Rare1Content />
  </ContentPage>
);

export default Rare1Page;

export const Head = () => <title>Rare Collection 1</title>;
