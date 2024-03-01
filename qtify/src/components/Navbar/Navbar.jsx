import React from "react";
import styles from "./Navbar.module.css"
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button"

function Navbar(){
    return(
        <nav className={styles.navbarContainer}>
            <Logo />
            <SearchBar />
            <Button />

        </nav>
    )
}

export default Navbar;