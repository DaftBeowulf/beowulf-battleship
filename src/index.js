import React from "react";
import ReactDOM from "react-dom";

import PlayerBoard from "./components/PlayerBoard";
import EnemyBoard from "./components/EnemyBoard";
import Grid from "./components/Grid";

import { enemyBoard } from "./logic/enemyBoard";

import "./styles.css";

class App extends React.Component {
  state = { eBoard: [] };

  componentDidMount() {
    this.setEnemyBoard();
  }

  setEnemyBoard = () => this.setState({ eBoard: enemyBoard() });

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Battleship!</h1>
        <Grid />
        {/* <PlayerBoard /> */}
        <EnemyBoard />
        {/* <Controls/> */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
