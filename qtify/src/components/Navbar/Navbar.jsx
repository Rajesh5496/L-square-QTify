import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
// import Hero from "../Hero/Hero";
// import Cards from "../Card/Card";
// import Section from "../Section/Section"

function Navbar() {
 
  return (
    <>
      <nav className={styles.navbarContainer}>
        <Logo />
        <SearchBar />
        <Button />
      </nav>
      {/* <Hero />
      <Cards data={data} type={type}/>
      <Section title="Top Albums"  data={data} type={type}/> */}
      
    </>
  );
}

export default Navbar;
