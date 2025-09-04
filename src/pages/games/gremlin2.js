import * as React from "react";
import ContentPage from "../../components/contentpage";
import Gremlin2Content from "../../content/games/gremlin2.mdx";

const Gremlin2Page = () => (
  <ContentPage>
    <Gremlin2Content />
  </ContentPage>
);

export default Gremlin2Page;

export const Head = () => <title>Gremlin Collection 2</title>;
