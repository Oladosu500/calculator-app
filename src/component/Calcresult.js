import React, { Component } from "react";

class Calcresult extends Component {
  render() {
    let { display } = this.props;

    return (
      <div className="display">
        <p>{display}</p>
      </div>
    );
  }
}

export default Calcresult;
