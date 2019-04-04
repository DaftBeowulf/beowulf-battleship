import React, { PureComponent } from "react";

const shipTypes = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2
};

class Ship extends PureComponent {
  state = {
    hits: 0,
    length: shipTypes[this.props.type],
    sunk: false
  };

  hit = () => {
    this.setState(
      state => ({
        hits: state.hits + 1
      }),
      () => {
        const { hits, length } = this.state;
        if (hits === length) this.sunk();
      }
    );
  };

  sunk = () => {
    this.setState({ sunk: true });
  };
}
