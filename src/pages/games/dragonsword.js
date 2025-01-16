import * as React from "react";
import ContentPage from "../../components/contentpage";
import DragonContent from "../../content/games/dragon.mdx";

const DragonPage = () => (
  <ContentPage>
    <DragonContent />
  </ContentPage>
);

export default DragonPage;

export const Head = () => <title>Dragon Sword</title>;
