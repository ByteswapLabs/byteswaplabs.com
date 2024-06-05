import * as React from "react";
import Navigation from "../components/navigation";

const IndexPage = () => {
  const year = new Date().getFullYear();
  
  return (
    <main className="bg-[#003322] w-screen h-screen grid grid-cols-1">
      <Navigation index />
      <div className="text-white text-sm text-right absolute bottom-4 right-4 md:bottom-8 md:right-8">
        <p className="text-base font-bold">
          © Byteswap Labs <span className="text-xs font-normal">{`LLC ${year}`}</span>
        </p>
        <a href="mailto:info@byteswaplabs.com">info@byteswaplabs.com</a>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Byteswap Labs</title>;
