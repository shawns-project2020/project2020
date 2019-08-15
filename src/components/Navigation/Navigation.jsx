import React from "react"
import { Link } from "gatsby"

import styles from "./Navigation.module.css"

export default ({ opened }) => {
  return (
    <nav className={opened ? `${styles.nav} ${styles.navToggled}` : styles.nav}>
      <ul>
        <Link className="no-style" to="/">
          <li>
            <div className="container">
              <span>Home</span>
            </div>
          </li>
        </Link>
        <Link className="no-style" to="/about">
          <li>
            <div className="container">
              <span>About Project2020 Enlightening the Eyes</span>
            </div>
          </li>
        </Link>
        <Link className="no-style" to="/bible-class-material">
          <li>
            <div className="container">
              <span>Bible Class Material</span>
            </div>
          </li>
        </Link>
        <Link className="no-style" to="/articles">
          <li>
            <div className="container">
              <span>Articles</span>
            </div>
          </li>
        </Link>
        <Link className="no-style" to="/sermon-material">
          <li>
            <div className="container">
              <span>Preacher Material</span>
            </div>
          </li>
        </Link>
        <Link className="no-style" to="/resources">
          <li>
            <div className="container">
              <span>Resources</span>
            </div>
          </li>
        </Link>
        <Link className="no-style" to="/contact">
          <li>
            <div className="container">
              <span>Contact</span>
            </div>
          </li>
        </Link>
      </ul>
    </nav>
  )
}
