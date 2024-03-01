import React from "react";
import LogoImage from "../../assets/qtifylogo.png"
import styles from "./Logo.module.css"

export default function Logo(){
    return <img src={LogoImage} className={styles.center} alt="Qtify Logo" width={67} />
}