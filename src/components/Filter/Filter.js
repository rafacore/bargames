import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../services/api";
import classes from "./Filter.module.css";

const Filter = ({ sorts, sorting, cat, filteringName, games }) => {
  const getUnique = (arr, comp) => {
    const unique = arr

      .map(e => e[comp])

      .map((e, i, final) => final.indexOf(e) === i && i)

      .filter(e => arr[e])

      .map(e => arr[e]);

    return unique;
  };

  const uniqueCategory = getUnique(games, "genre");
  const [enteredFilter, setEnteredFilter] = useState("");
  useEffect(() => {
    loadGamesSort();
  }, [enteredFilter]);

  const loadGamesSort = async () => {
    const query =
      enteredFilter.length === 0 ? "" : `?platform=${enteredFilter}`;
    const res = await api.get("/games" + query);
  };

  return (
    <div className={classes.FilterBar}>
      <div>
        <label>Category: </label>
        <select value={cat} onChange={filteringName}>
          <option value=" "> All</option>
          {uniqueCategory.map(game => (
            <option key={game.id} value={game.genre}>
              {game.genre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Sort by release</label>
        <select value={sorts} onChange={sorting}>
          <option value="all"> All</option>
          <option value="low"> Low</option>
          <option value="high"> High</option>
        </select>
      </div>
      <div>
        <label>Platform:</label>
        <select
          value={enteredFilter}
          onChange={event => setEnteredFilter(event.target.value)}
        >
          <option value="all"> All platforms</option>
          <option value="pc"> Windows (PC)</option>
          <option value="browser"> Browser (web)</option>
        </select>
      </div>
    </div>
  );
};

Filter.protoTypes = {
  sorts: PropTypes.string,
  sorting: PropTypes.string,
  cat: PropTypes.string,
  filteringName: PropTypes.arrayOf(PropTypes.string),
  games: PropTypes.arrayOf(PropTypes.string),
};
export default Filter;
