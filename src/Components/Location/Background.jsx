import React from "react";
import './Background.css';

const Background = ({alt, src}) => {
  console.log(alt, src);
  return (
    <div className="background-container">
      <div className="gradiant"></div>
      <img alt={alt} src={src} />
    </div>
  );
};

export default Background;
