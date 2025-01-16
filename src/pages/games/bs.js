import * as React from "react";
import ContentPage from "../../components/contentpage";
import TR1Content from "../../content/games/bs.mdx";

const BsPage = () => (
  <ContentPage>
    <TR1Content />
  </ContentPage>
);

export default BsPage;

export const Head = () => <title>Broken Sword Collection</title>;
