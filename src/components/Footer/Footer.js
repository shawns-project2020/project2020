import React from "react"

import style from "./Footer.module.css"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Link to="/">Home</Link>
    </footer>
  )
}

export default Footer
