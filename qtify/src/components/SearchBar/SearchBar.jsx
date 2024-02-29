import React from "react";
import styles from "./SearchBar.module.css";
import Searchicon from "../../assets/Searchicon.svg";
// import { ReactComponent as Searchicon } from "../../assets/Searchicon.svg";

function SearchBox() {
  return (
    <div className={styles.container}>
      <input
        name="search"
        className={styles.search}
        placeholder="Search a album of your choice"
      />
      <button className={styles.searchButton}>
        {/* <Searchicon /> */}
        <img src={Searchicon} alt="Search Logo" />
      </button>
    </div>
  );
}

export default SearchBox;
