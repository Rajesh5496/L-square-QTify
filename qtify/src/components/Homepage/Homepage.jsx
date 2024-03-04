import React from "react";
import styles from "./Homepage.module.css";
import Hero from "../Hero/Hero";
// import Cards from "../Card/Card";
import Section from "../Section/Section";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

function Homepage() {
  const baseURL = "https://qtify-backend-labs.crio.do/albums/top";
  const newbaseURL = "https://qtify-backend-labs.crio.do/albums/new";
  const [post, setPost] = React.useState(null);
  const [newpost, setnewpost] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get(newbaseURL).then((response) => {
        setnewpost(response.data);
    });
  }, []);

  const type = "album";
  return (
    <>
      <Navbar />
      <Hero />
      {post !== null && <Section title="Top Albums" data={post} type={type} />}
      {newpost !== null && <Section title="New Albums" data={newpost} type={type} />}
    </>
  );
}

export default Homepage;
