import React from "react"
import { FaDownload } from "react-icons/fa"

import CircleIconWrapper from "../CircleIconWrapper/CircleIconWrapper"
import styles from "./DownloadItem.module.css"

export default ({ number, name, href }) => {
  return (
    <li className={styles.downloadItem}>
      <span className={styles.text}>
        {number}. {name}
      </span>
      <div>
        <a className="no-style" href={href} download>
          <CircleIconWrapper>
            <FaDownload></FaDownload>
          </CircleIconWrapper>
        </a>
      </div>
    </li>
  )
}
