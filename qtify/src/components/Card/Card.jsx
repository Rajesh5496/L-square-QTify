import React from "react";
import styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function Cards({ data, type }) {
  // console.log(type);
  // console.log(data);
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, slug, songs } = data;
        // console.log(slug);
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className={styles.wrapper}>
              <Link to={`/album/${slug}`} style={{ textDecoration: 'none' }} className={styles.slug}>
                {/* <div className={styles.card}>
                  <img src={image} alt="album" width="100%" height="100%" loading="lazy" />
                  <Chip
                    label={`${follows} Follows`}
                    size="large"
                    className={styles.chip}
                  />
                </div>
                <div className={styles.titleWrapper}>
                  <p>{title}</p>
                </div> */}
                <Card className={styles.card} >
                {/* <img src={image} alt="album" width="100%"  loading="lazy" /> */}
                  <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                  />
                  {/* <CardContent sx={{ padding: 0, }} className={styles.root}> */}
                    <Chip label={`${follows} Followers`} size="small" className={styles.chip}/>
                  {/* </CardContent> */}
                </Card>
                <div className={styles.titleWrapper}>
                  {title}
                </div>
              </Link>
            </div>
          </Tooltip>
        );
      }
      case "song": {
        const { image, title, likes } = data;

        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy" />
              <div className={styles.banner}>
                <div className={styles.pill}>
                  <p>{likes} Likes</p>
                </div>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
}

export default Cards;
