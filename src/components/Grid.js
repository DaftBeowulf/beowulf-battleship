import React from "react";
import tiles from "./TilesData";
import Tile from "./Tile";
import "./Grid.css";

// Describe this component

const Grid = props => {
  return (
    <div className="grid-container">
      {tiles.map(tile => (
        <Tile tile={tile} key={tile.id} />
      ))}
    </div>
  );
};

export default Grid;
