import * as React from "react"
import { Link } from "gatsby"
import Byteswap from "../svgs/byteswap_color.svg";
import ByteswapLogo from "../svgs/byteswaplogo_color.svg";
import { GiRetroController } from 'react-icons/gi';

const Navigation = ({navClasses}) => {
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
              <GiRetroController className={`${navClasses.page.icon} ${navClasses.about.icon}`} />
              <span className={`${navClasses.page.text} ${navClasses.about.text}`}>Games</span>
          </Link>
          <Link to="/socials" className={`${navClasses.page.link} ${navClasses.socials.link}`}>
              <GiRetroController className={`${navClasses.page.icon} ${navClasses.socials.icon}`} />
              <span className={`${navClasses.page.text} ${navClasses.socials.text}`}>Games</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation
