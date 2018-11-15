import React, { Component } from "react";

class Counter extends Component {
  //state = donnée du composant
  state = {
    valueCounter: 0
  };

  //onClick = propriété de button et de pleins d'autres balises
  //(onClick = event)
  render() {
    console.log("PAR ICIIIIIIIIII", this.props.name);
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
          style={{ marginLeft: "30px" }}
          onClick={() => {
            this.setState({ valueCounter: this.state.valueCounter - 1 });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            //this.setState = changer de state
            this.setState({ valueCounter: this.state.valueCounter + 1 });
          }}
        >
          +
        </button>
        <div
          style={{ marginLeft: "30px", fontSize: "30px", fontWeight: "bold" }}
        >
          {this.state.valueCounter}
        </div>
      </div>
    );
  }
}

export default Counter;
