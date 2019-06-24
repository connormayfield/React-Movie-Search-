import React from "react";
import style from "./render.module.css";

const Render = ({ title, average, image, overview }) => {
  return (
    <div className={style.render}>
      <img
        className="card"
        src={`http://image.tmdb.org/t/p/w185${image}`}
        alt=""
      />
      <p className="text">{overview} </p>

      {/* <div className="subset">
          <h1>{title}</h1>
          <p>{average}</p>
        </div> */}
    </div>
  );
};

export default Render;
