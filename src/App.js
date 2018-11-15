import React, { Component } from "react";
import Counter from "./components/Counter";

class App extends Component {
  //props
  render() {
    return (
      <div>
        <Counter name="Sofiane" />
        <Counter name="Tomoko-chan" />
        <Counter name="Sangoku" />
      </div>
    );
  }
}

export default App;
