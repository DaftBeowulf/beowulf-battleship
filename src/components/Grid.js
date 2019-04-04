import React from "react";
import tiles from "./TilesData";
import Tile from "./Tile";
import "./Grid.css";

const Grid = props => {
  return (
    <div className="grid-container">
      {tiles.map(tile => (
        <Tile tileData={tile} key={`${tile.x}${tile.y}`} />
      ))}
    </div>
  );
};

export default Grid;
