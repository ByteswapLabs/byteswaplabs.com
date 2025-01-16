import * as React from "react";
import ContentPage from "../../components/contentpage";
import Piko4Content from "../../content/games/piko4.mdx";

const Piko4Page = () => (
  <ContentPage>
    <Piko4Content />
  </ContentPage>
);

export default Piko4Page;

export const Head = () => <title>Piko Interactive Collection 4</title>;
