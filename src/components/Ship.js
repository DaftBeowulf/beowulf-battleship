import React, { PureComponent } from "react";

// The individual ship component

const shipTypes = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2
};

class Ship extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { length: shipTypes[this.props.type], sunk: false };
    this.state.hits = Array(this.state.length).fill(false);
  }

  hit = position => {
    const hits = this.state.hits;
    hits[position] = true;
    this.setState({ hits }, () => {
      if (this.state.hits.every(pos => pos)) this.sunk();
    });
  };

  sunk = () => {
    this.setState({ sunk: true });
  };

  render() {
    return <div />;
  }
}
