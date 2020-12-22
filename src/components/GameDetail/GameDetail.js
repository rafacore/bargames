import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Thumbnail from "../Thumbnail/Thumbnail";
import Title from "../../components/Title/Title";

import api from "../../services/api";

import classes from "./GameDetail.module.css";

const GameDetail = props => {
  const [gameDetail, setGameDetail] = useState({});
  useEffect(() => {
    loadGamesDetails();
  }, []);
  const loadGamesDetails = async () => {
    const { id } = props.match.params;
    const res = await api.get("/game?id=" + props.match.params.id);
    setGameDetail(res.data);
    // const url = await api.get(
    //   "https://cors-anywhere.herokuapp.com/https://api.dev.cloud.barbooksaustralia.com/code-challenge/api/games"
    // );
    // console.log("URRRLLL", url);
  };

  return (
    <div className={classes.container}>
      <div className={classes.button}>
        <Link to={"/"}> Games List </Link>
      </div>

      <h1 className={classes.title}>Find Games</h1>

      <div className={classes.content}>
        <Thumbnail src={gameDetail.thumbnail} />

        <div className={classes.details}>
          <Title title={gameDetail.title} />
          <p>{gameDetail.status}</p>

          <p>{gameDetail.genre}</p>
          <p>{gameDetail.platform}</p>

          <p>{gameDetail.description}</p>
          <p>{gameDetail.publisher}</p>
          <p>{gameDetail.developer}</p>

          <p>{gameDetail.release_date}</p>
        </div>
      </div>
    </div>
  );
};
GameDetail.defaulProps = {
  thumbnail: "This game has no image",
  title: "This game has no image",
};

GameDetail.protoTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  status: PropTypes.string,
  genre: PropTypes.string,
  platform: PropTypes.string,
  description: PropTypes.string,
  publisher: PropTypes.string,
  developer: PropTypes.string,
  release_date: PropTypes.string,
};

export default GameDetail;
