import React from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Cards from "../Card/Card";

function Section({title, data, type}) {
//   console.log(JSON.stringify(data));
//   console.log(JSON.stringify(title));
//   console.log(JSON.stringify(type));
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4>Collapse</h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardsWrapper}>
          {data.map((ele) => (
            <Cards data={ele} type={type} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;
