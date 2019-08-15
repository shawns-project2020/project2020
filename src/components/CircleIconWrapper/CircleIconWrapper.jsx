import React from "react"

import styles from "./CircleIconWrapper.module.css"

export default ({ children }) => {
  return <div className={styles.circle}>{children}</div>
}
