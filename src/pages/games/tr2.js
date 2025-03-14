import * as React from "react";
import ContentPage from "../../components/contentpage";
import TR2Content from "../../content/games/tr2.mdx";

const Tr2Page = () => (
  <ContentPage>
    <TR2Content />
  </ContentPage>
);

export default Tr2Page;

export const Head = () => <title>Tomb Raider Collection 2</title>;
