import * as React from "react"
import { Link } from "gatsby"
import Byteswap from "../svgs/byteswap_color.svg";
import ByteswapLogo from "../svgs/byteswaplogo_color.svg";
import { GiRetroController } from 'react-icons/gi';
import { MdAlternateEmail } from 'react-icons/md';
import { FaBookAtlas } from 'react-icons/fa6';

const contentNavClasses = {
  container: "bg-[#002233] h-20 md:h-full md:min-h-screen pt-2 md:pt-8 grid",
  linkscontainer: "px-4 md:pl-0 pb-2 h-14 md:h-auto w-screen md:w-fit md:justify-self-end md:fixed flex md:grid ",
  byteswap: {
      link: "justify-self-end",
      justlogo: "h-14 w-14 md:w-auto md:h-32 hidden md:max-lg:block",
      logoandtext: "h-14 md:h-32 md:w-auto md:max-lg:hidden",
  },
  pagelinkscontainer: "flex ml-8 mr-4 md:flex-col md:mt-8 grow md:grow-0",
  page: {
      link: "mx-1 justify-self-end grid grid-cols-2 md:mb-6 grow md:grow-0",
      icon: "h-8 w-8 md:h-10 md:w-10 self-center justify-self-end",
      text: "text-white max-sm:hidden text-2xl pl-1 md:pl-2 font-bold self-center justify-self-start"
  },
  games: {
      link: "mt-2",
      icon: "fill-[#9e6ee5] ",
      text: "pt-2 md:pt-3"
  },
  about: {
      link: "mt-4",
      icon: "fill-[#e56e79] px-2",
      text: ""
  },
  socials: {
      link: "mt-4",
      icon: "fill-[#b5e56e] px-1",
      text: ""
  }
}

const indexNavClasses = {
  container: "self-center",
  linkscontainer: "grid grid-cols-1",
  byteswap: {
    logoandtext: "p-6 md:p-0 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 md:mx-auto",
    justlogo: "hidden",
  },
  pagelinkscontainer: "justify-self-center grid grid-cols-1 md:flex md:justify-center md:w-full md:mt-6",
  page: {
    link: "my-4 md:mx-8",
    icon: "h-16 w-16 inline",
    text: "pl-3 align-middle text-white text-4xl font-bold inline md:pl-0"
  },
  games: {
    link: "mt-2",
    icon: "fill-[#9e6ee5]",
    text: "pt-5 md:pl-2"
  },
  about: {
    link: "",
    icon: "fill-[#e56e79] px-3",
    text: ""
  },
  socials: {
    link: "",
    icon: "fill-[#b5e56e] px-2",
    text: ""
  }
}

const Navigation = ({index}) => {
  const navClasses = index ? indexNavClasses : contentNavClasses;

  return (
    <div className={navClasses.container}>
      <div className={navClasses.linkscontainer}>
        <Link to="/" className={navClasses.byteswap.link}>
            <ByteswapLogo id="Byteswap Logo" aria-label="Byteswap Logo" className={navClasses.byteswap.justlogo} />
            <Byteswap id="Byteswap Labs" aria-label="Byteswap Labs" className={navClasses.byteswap.logoandtext} />
        </Link>
        <div className={navClasses.pagelinkscontainer}>
          <Link to="/games" className={`${navClasses.page.link} ${navClasses.games.link}`}>
              <GiRetroController className={`${navClasses.page.icon} ${navClasses.games.icon}`} />
              <span className={`${navClasses.page.text} ${navClasses.games.text}`}>Games</span>
          </Link>
          <Link to="/about" className={`${navClasses.page.link} ${navClasses.about.link}`}>
              <FaBookAtlas className={`${navClasses.page.icon} ${navClasses.about.icon}`} />
              <span className={`${navClasses.page.text} ${navClasses.about.text}`}>About</span>
          </Link>
          <Link to="/socials" className={`${navClasses.page.link} ${navClasses.socials.link}`}>
              <MdAlternateEmail className={`${navClasses.page.icon} ${navClasses.socials.icon}`} />
              <span className={`${navClasses.page.text} ${navClasses.socials.text}`}>Socials</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation
