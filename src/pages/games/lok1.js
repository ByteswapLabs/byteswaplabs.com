import * as React from "react";
import ContentPage from "../../components/contentpage";
import TR1Content from "../../content/games/lok1.mdx";

const Lok1Page = () => (
  <ContentPage>
    <TR1Content />
  </ContentPage>
);

export default Lok1Page;

export const Head = () => <title>Legacy of Kain Collection 1</title>;
