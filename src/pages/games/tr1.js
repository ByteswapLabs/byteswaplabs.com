import * as React from "react";
import ContentPage from "../../components/contentpage";
import TR1Content from "../../content/games/tr1.mdx";

const Tr1Page = () => (
  <ContentPage>
    <TR1Content />
  </ContentPage>
);

export default Tr1Page;

export const Head = () => <title>Tomb Raider Collection 1</title>;
