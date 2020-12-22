import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./Search.module.css";

const Search = props => {
  const { onSearch } = props;
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState("");

  // const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   const query =
  //     enteredFilter.length === 0
  //       ? ""
  //       : `?orderBy="title"&equalTo="${enteredFilter}"`;
  //   fetch(
  //     "https://react-hooks-update-433eb-default-rtdb.firebaseio.com/ingredients.json" +
  //       query
  //   )
  //     .then(response => response.json())
  //     .then(responseData => {
  //       const loadedIngredients = [];
  //       for (const key in responseData) {
  //         loadedIngredients.push({
  //           id: key,
  //           title: responseData[key].title,
  //           amount: responseData[key].amount,
  //         });
  //       }
  //       onLoadIngredients(loadedIngredients);
  //     });
  // }, [enteredFilter, onLoadIngredients]);

  // const handleInput = e => {
  //   const text = e.target.value;
  //   setSearchText(text);
  // };
  // const handleEnterKeyPressed = e => {
  //   if (e.key === "Enter") {
  //     onSearch(searchText);
  //   }
  // };

  return (
    <div className={classes.searchWrapper}>
      <input
        className={classes.searchBar}
        type="text"
        value={props.searchText}
        onChange={props.handleChange}
        // onKeyPress={handleEnterKeyPressed}
      ></input>
    </div>
  );
};
Search.defaulProps = {
  thumbnail: "This game has no image",
  title: "This game has no title",
};

Search.protoTypes = {
  searchText: PropTypes.string,
  handleInput: PropTypes.string,
  handleEnterKeyPressed: PropTypes.string,
};
export default Search;
