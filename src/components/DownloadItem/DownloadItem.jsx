import React from "react"
import { FaDownload } from "react-icons/fa"

import CircleIconWrapper from "../CircleIconWrapper/CircleIconWrapper"
import styles from "./DownloadItem.module.css"

export default ({ author, number, name, href }) => {
  let linkName = name
  if (number != null) {
    linkName = `${number}. ${linkName}`
  }
  if (author != null) {
    linkName = (
      <>
        {`${linkName} - `} <span className="accent">{author}</span>
      </>
    )
  }
  return (
    <li className={styles.downloadItem}>
      <span className={styles.text}>{linkName}</span>
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
