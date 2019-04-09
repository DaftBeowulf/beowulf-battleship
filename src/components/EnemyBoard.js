import React, { Component, Fragment } from "react";
import Ship from "./Ship";
import "./PlayerBoard.css";

// Describe this component

class EnemyBoard extends Component {
  constructor(props) {
    super(props);

    this.coords = [];
    this.hits = [];
  }

  // Function eAttack() is being passed down from index.js. Now it needs to be passed into each Tile child component

  attackCoordinate = (x, y) => {};
  render() {
    return (
      <Fragment>
        <section className="board-container">
          <div />
        </section>
      </Fragment>
    );
  }
}

export default EnemyBoard;
