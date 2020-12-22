import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classes from "./GameList.module.css";
import Thumbnail from "../Thumbnail/Thumbnail";
import Title from "../../components/Title/Title";
const axios = require("axios");

const GameList = ({ results }) => {
  const [baseImage, setBaseImage] = useState("");

  // useEffect(() => {
  //   baseUrl();
  // }, []);

  // const baseUrl = async () => {
  //   const image_url =
  //     "https://cors-anywhere.herokuapp.com/https://api.dev.cloud.barbooksaustralia.com/code-challenge/api/games";

  //   const response = await axios.get(image_url);

  //   setBaseImage(response.data);
  // };
  // const baseurl =
  // "https://cors-anywhere.herokuapp.com/https://api.dev.cloud.barbooksaustralia.com/code-challenge/api/games";

  return (
    <div>
      <ul className={classes.gameList}>
        {/* {console.log("base image", baseImage)} */}
        {results.map(game => (
          <Link key={game.id} to={"/game/" + game.id}>
            <li className={classes.game}>
              {/* <img src={game.thumbnail}></img> */}
              <Thumbnail src={`${game.thumbnail}`} />
              {/* <img src={`data:image/jpeg;base64,${baseImage}`} /> */}
              {/* <img src={baseImage} /> */}

              <Title type="h1" title={game.title} />
              {/* <p>{game.short_description}</p> */}
              <p className={classes.tag}>{game.platform}</p>
              <p>{game.genre}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
GameList.defaulProps = {
  thumbnail: "This game has no image",
  title: "This game has no title",
};

GameList.protoTypes = {
  id: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  genre: PropTypes.string,
  platform: PropTypes.string,
};

export default GameList;
