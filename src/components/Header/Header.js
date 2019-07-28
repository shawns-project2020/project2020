
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"

import style from "./Header.module.css";

const Header = ({ siteTitle }) => {
  
  let [lastScrollTop, setLastScrollTop] = useState(0);
  let [shouldHideHeader, setShouldHideHeader] = useState(false);

  useEffect(
    () => {
      const onScroll = () => {
        const currentScrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop > lastScrollTop) {
          // scrolled down
          setShouldHideHeader(true);
        } else {
          // scrolled up
          setShouldHideHeader(false);
        }
        setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
      };
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    },
    [lastScrollTop]
  );

  const headerClasses = shouldHideHeader ? `${style.header} ${style.scrollDown}` : style.header

  return (
    <header className={headerClasses}>
        <h1 className={style.title}>
          <Link className="no-style" to="/">
            {siteTitle}
          </Link>
        </h1>
        <nav className={style.nav}>
          <ul>
            <Link className="no-style" to="/articles">
              <li>
                <span>articles</span>
              </li>
            </Link>
            <Link className="no-style" to="/bible-class-material">
              <li>
                <span>class material</span>
              </li>
            </Link>
            <Link className="no-style" to="/sermon-material">
              <li>
                <span>sermon material</span>
              </li>
            </Link>
            <Link className="no-style" to="/resources">
              <li>
                <span>resources</span>
              </li>
            </Link>
          </ul>
        </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
