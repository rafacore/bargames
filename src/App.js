import React from "react";
import Routes from "./routes";
import classes from "./App.module.css";

const App = props => {
  return (
    <div className={classes.App}>
      <Routes />
    </div>
  );
};
export default App;
