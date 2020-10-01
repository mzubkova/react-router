import React, { Component } from "react";
import "./style.css";
import Post from "./post";

const NASA_IMAGE =
  "https://pbs.twimg.com/profile_images/1091070803184177153/TI2qItoi_400x400.jpg";

const PLANETS_IMAGE =
  "https://pbs.twimg.com/media/EhGouVoWoAEk1sZ?format=jpg&name=small";

const MOON_IMAGE =
  "https://pbs.twimg.com/media/EhQESMZX0AADdFH?format=jpg&name=small";

const SPACE_IMAGE =
  "https://pbs.twimg.com/media/EhRONzoXcAEvuPf?format=jpg&name=small";

const postList = [
  {
    name: "NASA",
    photo: NASA_IMAGE,
    nickname: "@NASA",
    contentDate: "On Monday, Sept. 21 at 9pm ET,",
    contentUser: "",
    content:
      "Galaxy NGC 2188 is a barred spiral, but only its very narrow outer edge is visible to us on Earth.",
    image: SPACE_IMAGE,
    date: "14 ч.",
    comment: 120,
    retweet: "1,5 тыс",
    likes: "9,7 тыс.",
  },
  {
    name: "NASA",
    photo: NASA_IMAGE,
    nickname: "@NASA",
    contentDate: "On Thurs., Sept. 10 at 12pm ET,",
    contentUser: "@NASAJPL",
    content:
      "Our Moon is rusting. Using data from a @NASAJPL instrument aboard @ISRO's Chandrayaan-1 orbiter, scientists were surprised to find evidence of a form of iron oxide, or rust, produced when iron is exposed to oxygen and water: https://go.nasa.gov/331EdP3",
    image: MOON_IMAGE,
    date: "19 ч.",
    comment: 220,
    retweet: "1,8 тыс",
    likes: "9,3 тыс.",
  },
  {
    name: "NASA",
    photo: NASA_IMAGE,
    nickname: "@NASA",
    contentDate: "On Thurs., Sept. 10 at 12pm ET,",
    contentUser: "@Dr_ThomasZ",
    content:
      "and his leadership team will present updates on our science program during a public town hall meeting. How to join virtually: https://go.nasa.gov/32Tpohq",
    image: PLANETS_IMAGE,
    date: "4 сент.",
    comment: 62,
    retweet: 935,
    likes: "6,7 тыс.",
  },
];

export default class Posts extends Component {
  render() {
    return (
      <div>
        {postList.map((post) => (
          <Post {...post} />
        ))}
      </div>
    );
  }
}
