import React from "react"
import { Link } from "gatsby"

import styles from "./Navigation.module.css"

export default ({ opened }) => {
  return (
    <nav className={opened ? `${styles.nav} ${styles.navToggled}` : styles.nav}>
      <ul>
        <Link className="no-style" to="/contact">
          <li>
            <span>contact</span>
          </li>
        </Link>
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
  )
}
