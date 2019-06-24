import React from "react";

const Render = ({ title, overview, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{overview}</p>
      <img src={`http://image.tmdb.org/t/p/w185${image}`} alt="" />
    </div>
  );
};

export default Render;
