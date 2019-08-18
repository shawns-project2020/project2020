import React from "react"
import { FaSearch } from "react-icons/fa"

import styles from "./SearchBar.module.css"

export default ({ searchValue, setSearchValue }) => {
  const handleSearchChange = event => {
    setSearchValue(event.target.value)
  }

  return (
    <div className={styles.searchBar}>
      <FaSearch></FaSearch>
      <label htmlFor="searchBar"></label>
      <input
        type="search"
        name="searchBar"
        id="searchBar"
        placeholder="Search"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
  )
}
