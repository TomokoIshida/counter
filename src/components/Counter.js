import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "palevioletred",
          width: "500px",
          height: "100px",
          margin: "0 auto",
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{ fontSize: "30px", fontWeight: "bold" }}>
          {this.props.name}
        </div>
        <button
          onClick={this.props.minusFunction}
          style={{ marginLeft: "30px" }}
        >
          -
        </button>
        <button onClick={this.props.plusFunction}>+</button>
        <div
          style={{ marginLeft: "30px", fontSize: "30px", fontWeight: "bold" }}
        >
          {this.props.valueCounter}
        </div>
      </div>
    );
  }
}

export default Counter;
