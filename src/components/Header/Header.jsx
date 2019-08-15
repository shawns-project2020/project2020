import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FaBars } from "react-icons/fa"

import Navigation from "../Navigation/Navigation"

import styles from "./Header.module.css"
import glassesIcon from "../../images/project2020-big.svg"

const Header = ({ siteTitle }) => {
  let [opened, setOpened] = useState(false)
  let [lastScrollTop, setLastScrollTop] = useState(0)
  let [shouldHideHeader, setShouldHideHeader] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollTop > lastScrollTop) {
        // scrolled down
        setShouldHideHeader(true)
        setOpened(false)
      } else {
        // scrolled up
        setShouldHideHeader(false)
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop)
    }
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [lastScrollTop])

  const toggleNavigation = () => {
    setOpened(!opened)
  }

  const headerClasses = shouldHideHeader
    ? `${styles.header} ${styles.scrollDown}`
    : styles.header

  return (
    <header className={headerClasses}>
      <div className={`container ${styles.headerGroup}`}>
        <Link className={`no-style ${styles.iconTitle}`} to="/">
          <img height="60" src={glassesIcon} alt="glasses" />
          <div className={styles.fullTitle}>
            <h1 className={styles.title}>{siteTitle}</h1>
            <div>
              <span className={styles.titleAccent}>Enlightening the Eyes</span>
            </div>
          </div>
        </Link>
        <button className="no-style" onClick={toggleNavigation}>
          <FaBars className={styles.navIcon} />
        </button>
      </div>
      <Navigation {...{ toggleNavigation, opened }} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
