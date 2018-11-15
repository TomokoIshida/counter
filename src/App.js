import React, { Component } from "react";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    valueCounter: 0
  };

  increment = () => {
    this.setState({ valueCounter: this.state.valueCounter + 1 });
  };

  decrement = () => {
    this.setState({ valueCounter: this.state.valueCounter - 1 });
  };
  //props
  render() {
    return (
      <div>
        <Counter
          name="Sofiane"
          valueCounter={this.state.valueCounter}
          plusFunction={this.increment}
          minusFunction={this.decrement}
        />
        <Counter
          name="Tomoko-chan"
          valueCounter={this.state.valueCounter}
          plusFunction={this.increment}
          minusFunction={this.decrement}
        />
        <Counter
          name="Sangoku"
          valueCounter={this.state.valueCounter}
          plusFunction={this.increment}
          minusFunction={this.decrement}
        />
      </div>
    );
  }
}

export default App;
