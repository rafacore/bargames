import React, { useState } from "react";
import PropTypes from "prop-types";
import { classes } from "./Title.module.css";

const Title = ({ type, title, right, center, ...props }) => {
  if (type === "h1") {
    return (
      <h1 className={props.className} right={right} center={center}>
        {title}
      </h1>
    );
  }
  if (type === "h2") {
    return (
      <h2 className={props.className} right={right} center={center}>
        {title}
      </h2>
    );
  }

  return (
    <h1 className={props.className} right={right} center={center}>
      {title}
    </h1>
  );
};

Title.defaultProps = {
  type: "h1",

  className: null,

  right: null,
  center: null,
};

Title.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4"]),
  title: PropTypes.string.isRequired,

  className: PropTypes.string,
  noMargin: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool,
};

export default Title;
