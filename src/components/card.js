import * as React from "react";

const standardCardClasses = `
  bg-[#ffdc9d]
  dark:bg-[#574c4f]
  border
  border-black
  rounded-lg
  p-2
  mx-3
  mb-6
  inline-block
  w-[calc(100%-1.7rem)]
  sm:w-[calc(50%-1.7rem)]
  md:w-[calc(100%-1.7rem)]
  lg:w-[calc(50%-1.7rem)]
  no-underline
  [&>h2]:mt-3
  [&>h2]:mb-0
  [&>h2]:ml-2
  [&>h3]:mt-1
  [&>h3]:mb-1
  [&>h3]:ml-2
`;

const fullWidthCardClasses = `
  border
  border-black
  inline-block
  w-full
  relative
  [&>h2]:text-white
  [&>h2]:text-4xl
  [&>h2]:my-2
  [&>h2]:mx-4
  [&>h2]:absolute
  [&>h2]:bottom-0
`;

const Card = ({ url, fullWidth, children }) => (
  <a
    href={url}
    className={fullWidth ? fullWidthCardClasses : standardCardClasses}
  >
    {children}
  </a>
);

export default Card;
