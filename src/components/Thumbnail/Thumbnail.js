import React, { useEffect, useState } from "react";
import Axios from "axios";
// import "./styles.css";

const Thumbnail = ({ src, alt }) => {
  const [imageSrc, sertImageSrc] = useState("https://via.placeholder.com/150");

  useEffect(() => {
    Axios.get(src)
      .then(res => sertImageSrc(res.data))
      .catch(err => console.log(err));
  }, [src]);

  return <img src={imageSrc} alt={alt} />;
};

export default Thumbnail;
