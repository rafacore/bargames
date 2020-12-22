import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Filter from "../../components/Filter/Filter";
import api from "../../services/api";
import GameList from "../../components/GameList/GameList";
import Search from "../../components/Search/Search";
import Title from "../../components/Title/Title";

import classes from "./GameBuilder.module.css";

const GameBuilder = props => {
  const [games, setGames] = useState([]);
  const [sort, setSort] = useState([]);
  const [cat, setCat] = useState([]);

  const [state, setState] = useState({});

  const [searchText, setSearchText] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    loadGames();
    // setGames(Data);

    console.log("USE EFECT !!!!11111111111", games);
  }, []);

  useEffect(() => {
    if (searchText && searchText.length) {
      const filteredGames = games.filter(
        game => game.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      );
      setFilteredGames(filteredGames);
      // const { ...games, ...searchText } = useState();
    } else {
      setFilteredGames(games);
    }

    console.log("USE EFFECT GamesBuilder", games);
  }, [searchText, games]);

  const loadGames = async () => {
    const res = await api.get("/games");
    // console.log("resposta data res ", res.data);
    setGames(res.data);
  };
  // console.log("GAMES GamesBuilder", games);

  //sorting
  const sorting = e => {
    const sorting = e.target.value;

    const sortRes = games.sort((a, b) => {
      if (sorting === "all") {
        return a.id > b.id ? 1 : -1;
      }
      if (sorting === "low") {
        return a.price > b.release_date ? 1 : -1;
      }
      if (sorting === "high") {
        return a.price < b.release_date ? 1 : -1;
      }
    });
    setSort(
      {
        sort: sorting,
        games: sortRes,
      },
      () => {
        localStorage.setItem("sort", JSON.stringify(this.state.sort));
        localStorage.setItem("data", JSON.stringify(this.state.games));
      }
    );
  };

  // const filteringName = e => {
  //   // const res = await api.get("/games");
  //   let categ = e.target.value;

  //   if (categ === "") {
  //     setCat({
  //       cat: categ,
  //       games: games,
  //     });
  //   } else {
  //     setGames({
  //       cat: categ,
  //       games: games.filter(game => {
  //         return game.genre.indexOf(e.target.value) >= 0;
  //       }),
  //     });
  //   }
  // };

  // searching = e => {
  //   const searc = e.target.value;
  //   this.setState({
  //     search: searc,
  //     products: Data.filter(
  //       product => product.title.toLowerCase().indexOf(this.state.search) > -1
  //     ),
  //   });
  // };
  // const filteredIngredientsHandler = useCallback(filteredIngredients => {
  //   setUserIngredients(filteredIngredients);
  // }, []);

  const onSearch = text => {
    // let text = e.target.value;
    console.log("TESTEFILTERRRRRRR BUILDER", text);
    if (text === "") {
      setFilteredGames(games);
    } else {
      const filteredGames = games.filter(
        game => game.title.toLowerCase().indexOf(text.toLowerCase()) > -1
      );
      setGames(filteredGames);
      console.log("TESTEFILTERRRRRRR BUILDER", filteredGames);
    }
    // if (searchText && searchText.length) {
    //   const filteredGames = games.filter(
    //     game => game.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    //   );
    //   setFilteredGames(filteredGames);
    // } else {
    //   setFilteredGames(games);
    // }

    // const filteredgames = games.filter(
    //   game => game.title.toLowerCase().indexOf(text.toLowerCase()) > -1
    // );

    // setGames(filteredgames);
  };
  console.log("TESTEFILTERRRRRRR BUILDER", searchText);

  return (
    <div className={classes.container}>
      <Title title="Find Games " className={classes.title} />

      <Search
        value={searchText}
        handleChange={e => setSearchText(e.target.value)}
      />
      <Filter
        sorting={sorting}
        sorts={state.sort}
        cat={state.cat}
        games={games}

        // filteringName={filteringName}
      />
      <GameList results={filteredGames} />
    </div>
  );
};

GameBuilder.defaulProps = {
  thumbnail: "This game has no image",
  title: "This game has no image",
};

GameBuilder.protoTypes = {
  onSearch: PropTypes.string,
  sorting: PropTypes.string,
  cat: PropTypes.string,
};
export default GameBuilder;
