import * as React from "react";
import Navigation from "../components/navigation";

const contentClasses = {
  page: "w-screen h-screen md:grid md:grid-cols-3",
  container:
    "bg-[#ffeed0] dark:bg-[#313338] dark:text-white md:col-start-2 md:col-span-2 md:h-full max-md:min-h-full",
  prose: "prose dark:prose-invert px-4 md:px-8 pt-2 md:pt-8 max-w-3xl",
};

const ContentPage = (props) => (
  <main className={contentClasses.page}>
    <Navigation />
    <div className={contentClasses.container}>
      <div className={contentClasses.prose}>{props.children}</div>
    </div>
  </main>
);

export default ContentPage;
