import * as React from "react";
import Navigation from "../components/navigation";

const contentClasses = {
  page: "w-screen h-screen md:grid md:grid-cols-3",
  container: `
    bg-[#ffeed0]
    dark:bg-[#313338]
    dark:text-white
    md:col-start-2
    md:col-span-2
    md:h-full
    max-md:min-h-[calc(100vh-180px)]
  `,
  prose:
    "prose dark:prose-invert px-4 md:px-8 pt-2 md:pt-8 max-w-3xl min-h-[calc(100vh-180px)] md:min-h-[calc(100vh-100px)]",
};

const ContentPage = (props) => (
  <main className={contentClasses.page}>
    <Navigation />
    <div className={contentClasses.container}>
      <div className={contentClasses.prose}>{props.children}</div>
      <div className="bg-[#002233] text-white p-4 text-sm mt-[24px] h-[76px]">
        <p className="text-base font-bold">
          © Byteswap Labs <span className="text-xs font-normal">2023</span>
        </p>
        <a href="mailto:byteswaplabs@gmail.com">byteswaplabs@gmail.com</a>
      </div>
    </div>
  </main>
);

export default ContentPage;
