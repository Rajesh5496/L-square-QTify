import React from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Cards from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Section({ title, data, type }) {
  //   console.log(JSON.stringify(data));
  //   console.log(JSON.stringify(title));
  //   console.log(JSON.stringify(type));
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const handleToggle = () => {
    setIsCollapsed((prevState) => !prevState);
  };
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 onClick={handleToggle}>{isCollapsed ? "Show All" : "Collapse"}</h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardsWrapper}>
          {isCollapsed ? (
            <Carousel data={data} type={type}/>
          ) : (
            data.map((ele) => <Cards data={ele} type={type} />)
          )}
        </div>
      )}
    </div>
  );
}

export default Section;
