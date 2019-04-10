import React from "react";
import "./Tile.css";

// Component rendering individual tiles within a Grid component

const Tile = props => {
  return (
    <div
      className={`tile${
        props.tile.miss ? ` miss` : props.tile.hit ? ` hit` : ``
      }`}
    />
  );
};

export default Tile;
