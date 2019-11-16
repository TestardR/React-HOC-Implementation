import React, { Component } from "react";
import ButtonOne from "./components/ButtonOne";
import MyComponent from "./components/MyComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonOne />
        <MyComponent></MyComponent>
      </div>
    );
  }
}

export default App;
