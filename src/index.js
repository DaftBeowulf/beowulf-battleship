import React from "react";
import ReactDOM from "react-dom";

import PlayerBoard from "./components/PlayerBoard";
import EnemyBoard from "./components/EnemyBoard";
import Grid from "./components/Grid";

import { enemyBoard } from "./logic/enemyBoard";

import "./styles.css";

class App extends React.Component {
  state = { eBoard: [], eAttacks: [] };

  componentDidMount() {
    this.setEnemyBoard();
  }

  eAttack = e => {
    e.preventDefault();
    const tileCoord = e.target.id;
    this.state.eBoard.forEach(coord => {
      if (coord.substring(3) === tileCoord) {
        console.log("HIT");
      } else {
        console.log("MISS");
      }
    });
  };

  setEnemyBoard = () => this.setState({ eBoard: enemyBoard() });

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Battleship!</h1>
        <Grid />
        {/* <PlayerBoard /> */}
        <EnemyBoard attack={this.eAttack} />
        {/* <Controls/> */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
