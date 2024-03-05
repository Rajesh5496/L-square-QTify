import React from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Cards from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { Tab, Tabs } from "@mui/material";

function Section({ title, data, type }) {
  //   console.log(JSON.stringify(data));
  //   console.log(JSON.stringify(title));
  //   console.log(JSON.stringify(type));
  const [currentTabIndex, setCurrentTabIndex] = React.useState("all"); 
  let [filteredData, setFilteredData] = React.useState(data);

  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
    // if(tabIndex !== 'all') data = data.filter(song => song.genre.key === tabIndex);
    if (tabIndex !== 'all') {
        const newData = data.filter(song => song.genre.key === tabIndex);
        setFilteredData(newData);
      } else {
        setFilteredData(data);
      }
  };

  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const handleToggle = () => {
    setIsCollapsed((prevState) => !prevState);
  };
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {type !== "song" && (
          <h4 onClick={handleToggle}>
            {isCollapsed ? "Show All" : "Collapse"}
          </h4>
        )}
      </div>
      {type === "song" &&
      <Tabs value={currentTabIndex}
        onChange={handleTabChange}
        aria-label="wrapped label tabs example"
        className={styles.tabs}
      >
        <Tab value="all" label="All" className={styles.tabs}/>
        <Tab value="jazz" label="Jazz" wrapped className={styles.tabs} />
        <Tab value="rock" label="Rock" className={styles.tabs}/>
        <Tab value="pop" label="Pop" className={styles.tabs}/>
        <Tab value="blues" label="Blues" className={styles.tabs}/>
      </Tabs>}
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardsWrapper}>
          {isCollapsed ? (
            <Carousel data={filteredData} type={type} />
          ) : (
            data.map((ele) => <Cards data={ele} type={type} />)
          )}
        </div>
      )}
    </div>
  );
}

export default Section;
