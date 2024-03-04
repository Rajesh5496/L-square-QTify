import React from "react";
import styles from "./Homepage.module.css";
import Hero from "../Hero/Hero";
// import Cards from "../Card/Card";
import Section from "../Section/Section";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

function Homepage() {
  const baseURL = "https://qtify-backend-labs.crio.do/albums/top";
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  const data = [
    {
      id: "d286d5b4-dbaf-4a15-a551-ea3fa8ccfd4f",
      title: "Slushy Assignment",
      description:
        "Quam nobis aut.\nRepudiandae itaque culpa molestiae explicabo ex nostrum fugiat.\nSapiente quam tenetur ipsa.",
      follows: 12945,
      image:
        "https://images.pexels.com/photos/145707/pexels-photo-145707.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      slug: "slushy-assignment",
      songs: [
        {
          id: "0d801ed3-7ad1-4fca-b602-121ddfdfbd16",
          title: "(Everything I Do) I Do it For You",
          artists: ["Freddie Franecki"],
          genre: { key: "blues", label: "Blues" },
          likes: 8593,
          image:
            "https://images.pexels.com/photos/2309266/pexels-photo-2309266.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 54109,
        },
        {
          id: "88300ba7-3c74-48b6-83ee-926a1116847c",
          title: "Greatest Love of All",
          artists: ["Leon Von"],
          genre: { key: "rock", label: "Rock" },
          likes: 29851,
          image:
            "https://images.pexels.com/photos/53212/one-world-trade-center-manhattan-owtc-new-york-53212.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 36789,
        },
        {
          id: "9441d7d5-91bc-4c90-ac05-2c0a236add0c",
          title: "Maggie May",
          artists: ["Bill Fadel I", "Essie Windler"],
          genre: { key: "jazz", label: "Jazz" },
          likes: 6525,
          image:
            "https://images.pexels.com/photos/1128440/pexels-photo-1128440.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 38077,
        },
        {
          id: "0c3f4ea3-03e3-4e1d-8bb0-deba5901b20d",
          title: "If (They Made Me a King)",
          artists: ["Sadie Pagac", "Corey Botsford", "Camille Dickens"],
          genre: { key: "blues", label: "Blues" },
          likes: 52096,
          image:
            "https://images.pexels.com/photos/2168974/pexels-photo-2168974.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 32512,
        },
        {
          id: "7fd503cc-50a1-4bf5-b610-87917922a4c1",
          title: "Boom Boom Pow",
          artists: ["Pedro Goldner Sr.", "Benny Bayer"],
          genre: { key: "jazz", label: "Jazz" },
          likes: 96786,
          image:
            "https://images.pexels.com/photos/1784577/pexels-photo-1784577.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 44997,
        },
        {
          id: "fa2eb213-b02f-420f-b979-0dc42574ae1b",
          title: "The Loco-Motion",
          artists: ["Rodney Herman", "Catherine Cronin"],
          genre: { key: "pop", label: "Pop" },
          likes: 55267,
          image:
            "https://images.pexels.com/photos/366283/tianjin-twilight-city-scenery-366283.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 35072,
        },
        {
          id: "4dcb4af4-f2f9-4778-9226-7584efd03a84",
          title: "Hair",
          artists: ["Monica Dooley III", "Ryan Hartmann IV", "Gerard Douglas"],
          genre: { key: "pop", label: "Pop" },
          likes: 47956,
          image:
            "https://images.pexels.com/photos/15497599/pexels-photo-15497599.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 29569,
        },
        {
          id: "08045a6b-1447-43bd-9801-166fba129bca",
          title: "Tighten Up",
          artists: ["Rafael Daugherty", "Nora Bayer"],
          genre: { key: "jazz", label: "Jazz" },
          likes: 27545,
          image:
            "https://images.pexels.com/photos/2362004/pexels-photo-2362004.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 39592,
        },
        {
          id: "022831ed-0757-40d7-8e97-c2890e21aa45",
          title: "Long Cool Woman in a Black Dress",
          artists: ["Morris Senger"],
          genre: { key: "pop", label: "Pop" },
          likes: 30250,
          image:
            "https://images.pexels.com/photos/159884/pexels-photo-159884.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 55341,
        },
        {
          id: "09928293-d154-44ec-8f4e-10dfbc3ae20c",
          title: "Girls Just Wanna Have Fun",
          artists: ["Gretchen Hintz", "Ruth Walker"],
          genre: { key: "blues", label: "Blues" },
          likes: 50841,
          image:
            "https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 34210,
        },
        {
          id: "10c2076a-4106-47e5-9c2c-d94d9028063a",
          title: "Goodbye Yellow Brick Road",
          artists: ["Mario Johns I", "Faye Jerde"],
          genre: { key: "pop", label: "Pop" },
          likes: 9305,
          image:
            "https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 52890,
        },
        {
          id: "630d8605-0acb-462c-add1-959a10ceb863",
          title: "You Can't Hurry Love",
          artists: ["Patrick Mosciski", "Jonathon Johns IV", "Amanda Olson"],
          genre: { key: "blues", label: "Blues" },
          likes: 8089,
          image:
            "https://images.pexels.com/photos/3582128/pexels-photo-3582128.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 31901,
        },
        {
          id: "860b99fa-7536-48ec-963b-836acc8a55e3",
          title: "(Sittin' On) the Dock of the Bay",
          artists: ["Delia Huels", "Jennie Effertz DDS", "Roosevelt Schultz"],
          genre: { key: "blues", label: "Blues" },
          likes: 48459,
          image:
            "https://images.pexels.com/photos/2576111/pexels-photo-2576111.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 45755,
        },
        {
          id: "fa94f0d9-6257-4ad5-9e8d-2b4dd3143503",
          title: "Maggie May",
          artists: ["Ms. Sarah Corkery Jr.", "Emanuel Hilpert"],
          genre: { key: "jazz", label: "Jazz" },
          likes: 5596,
          image:
            "https://images.pexels.com/photos/5611198/pexels-photo-5611198.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 43222,
        },
        {
          id: "48e99dbb-2a60-49ce-a099-82074b65c1f8",
          title: "Can You Feel the Love Tonight",
          artists: ["Moses Watsica", "Lorenzo O'Keefe", "Stuart Nienow DVM"],
          genre: { key: "jazz", label: "Jazz" },
          likes: 71928,
          image:
            "https://images.pexels.com/photos/2770933/pexels-photo-2770933.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 24027,
        },
        {
          id: "a902d28c-2e1d-4373-a8d6-a7f727b41c17",
          title: "Strangers in the Night",
          artists: ["Mrs. Dave Hills"],
          genre: { key: "jazz", label: "Jazz" },
          likes: 79633,
          image:
            "https://images.pexels.com/photos/1366922/pexels-photo-1366922.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 53674,
        },
        {
          id: "46efa30e-87dd-4b2c-85bf-d84c82764ab3",
          title: "The Sounds of Silence",
          artists: ["Nicole Zemlak PhD", "Mrs. Seth Williamson"],
          genre: { key: "pop", label: "Pop" },
          likes: 92641,
          image:
            "https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 41672,
        },
        {
          id: "038f991c-c60f-4eef-a305-8a725f6b92fd",
          title: "More Than a Feeling",
          artists: ["Dr. Olga Conn"],
          genre: { key: "jazz", label: "Jazz" },
          likes: 75591,
          image:
            "https://images.pexels.com/photos/2879991/pexels-photo-2879991.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 41183,
        },
        {
          id: "b99b7f14-90dc-4581-9e08-9fd98679a67a",
          title: "Whole Lotta Love",
          artists: ["Blanca Hessel"],
          genre: { key: "jazz", label: "Jazz" },
          likes: 6259,
          image:
            "https://images.pexels.com/photos/1388069/pexels-photo-1388069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 37668,
        },
        {
          id: "0eef2306-2283-4aa6-9488-1c5d8cfc99f1",
          title: "Suspicious Minds",
          artists: ["Nettie Lockman"],
          genre: { key: "blues", label: "Blues" },
          likes: 51908,
          image:
            "https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 58861,
        },
        {
          id: "57d9c088-7db5-4a4e-b28b-1d5ba3447e01",
          title: "One Sweet Day",
          artists: ["Enrique Olson", "Jaime Shields DDS"],
          genre: { key: "blues", label: "Blues" },
          likes: 89240,
          image:
            "https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 55281,
        },
        {
          id: "8ec3949f-e92d-40a6-83c2-32669021300a",
          title: "More Than Words",
          artists: ["Mr. Alton Wunsch", "Ian Nicolas"],
          genre: { key: "jazz", label: "Jazz" },
          likes: 14938,
          image:
            "https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 25623,
        },
        {
          id: "f053e73c-6278-490f-95d3-a350a0453b42",
          title: "Return to Sender",
          artists: ["Dave Littel"],
          genre: { key: "pop", label: "Pop" },
          likes: 64775,
          image:
            "https://images.pexels.com/photos/1525589/pexels-photo-1525589.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 56539,
        },
        {
          id: "8bdac99e-cb72-4495-a994-28f9a103573d",
          title: "Runaway",
          artists: ["Grant Feeney", "Tony Berge"],
          genre: { key: "pop", label: "Pop" },
          likes: 81911,
          image:
            "https://images.pexels.com/photos/1287083/pexels-photo-1287083.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 55460,
        },
        {
          id: "5f9436b4-fbe3-469a-84d0-e56d5c89e5d4",
          title: "You've Got a Friend",
          artists: ["Willard Zieme", "Matt Keeling"],
          genre: { key: "rock", label: "Rock" },
          likes: 76545,
          image:
            "https://images.pexels.com/photos/1886641/pexels-photo-1886641.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 37729,
        },
        {
          id: "1a960cdf-0d26-46d3-a96b-68df8dac69ad",
          title: "The Song From Moulin Rouge (Where Is Your Heart)",
          artists: ["Edith Botsford"],
          genre: { key: "pop", label: "Pop" },
          likes: 90250,
          image:
            "https://images.pexels.com/photos/4709825/pexels-photo-4709825.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 41556,
        },
        {
          id: "e8fe717d-6a5c-4e1b-80d5-ecdaa1b30225",
          title: "Only The Lonely (Know The Way I Feel)",
          artists: ["Jean Macejkovic", "Lana Weber Jr.", "Joe Cole"],
          genre: { key: "blues", label: "Blues" },
          likes: 82321,
          image:
            "https://images.pexels.com/photos/1437493/pexels-photo-1437493.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 54785,
        },
        {
          id: "320162d2-4f65-4477-9693-384449f33ee0",
          title: "Burn",
          artists: ["Neil Lang"],
          genre: { key: "blues", label: "Blues" },
          likes: 91389,
          image:
            "https://images.pexels.com/photos/5326904/pexels-photo-5326904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 44971,
        },
        {
          id: "f562f0df-5920-4bca-b166-c2ecd5eeb7b3",
          title: "Time of the Season",
          artists: ["Michele Weissnat", "Rachael Osinski", "Guadalupe Pouros"],
          genre: { key: "pop", label: "Pop" },
          likes: 40996,
          image:
            "https://images.pexels.com/photos/3552948/pexels-photo-3552948.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 31985,
        },
        {
          id: "70afa9e5-e2cc-42db-a032-5d0de1a9d00d",
          title: "How Do I Live?",
          artists: ["Ruby Bergstrom", "Winston Wolf", "Rodolfo Mueller II"],
          genre: { key: "rock", label: "Rock" },
          likes: 82675,
          image:
            "https://images.pexels.com/photos/934067/pexels-photo-934067.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 38057,
        },
        {
          id: "0eef2306-2283-4aa6-9488-1c5d8cfc99f1",
          title: "Suspicious Minds",
          artists: ["Nettie Lockman"],
          genre: { key: "blues", label: "Blues" },
          likes: 51908,
          image:
            "https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 58861,
        },
        {
          id: "a60c6bc9-af9a-4525-bee0-83f46d07008c",
          title: "Yeah!",
          artists: ["Harriet Balistreri", "Hazel Schoen", "Grant Leffler"],
          genre: { key: "rock", label: "Rock" },
          likes: 87943,
          image:
            "https://images.pexels.com/photos/208560/pexels-photo-208560.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 33237,
        },
        {
          id: "bb94ef46-8f41-411e-832a-ddb8fbb210d8",
          title: "Addicted to Love",
          artists: [
            "Ms. Melinda Osinski DVM",
            "Angelina Pfannerstill",
            "Misty Mante MD",
          ],
          genre: { key: "jazz", label: "Jazz" },
          likes: 53242,
          image:
            "https://images.pexels.com/photos/4087996/pexels-photo-4087996.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 50430,
        },
        {
          id: "681ac0d0-a7d6-46e7-a6ea-b4ea715ae3c5",
          title: "Cat's in the Cradle",
          artists: [
            "Leticia Walsh",
            "Dr. Alejandro Zulauf",
            "Jenny Volkman III",
          ],
          genre: { key: "rock", label: "Rock" },
          likes: 36002,
          image:
            "https://images.pexels.com/photos/2406785/pexels-photo-2406785.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 24024,
        },
        {
          id: "8a2c57e3-9b8c-4e46-a0db-0e852c1ef084",
          title: "Get Off of My Cloud",
          artists: ["Arlene Schoen", "Helen Bosco"],
          genre: { key: "rock", label: "Rock" },
          likes: 57375,
          image:
            "https://images.pexels.com/photos/860707/pexels-photo-860707.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 34505,
        },
        {
          id: "eba9c4cc-628f-49f6-85b7-65ce0bd51720",
          title: "Need You Now",
          artists: ["Stacey Gleason MD"],
          genre: { key: "pop", label: "Pop" },
          likes: 8227,
          image:
            "https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          durationInMs: 34633,
        },
      ],
    },
  ];
  const type = "album";
  return (
    <>
      <Navbar />
      <Hero />
      {post !== null && <Section title="Top Albums" data={post} type={type} />}
    </>
  );
}

export default Homepage;
