import React, { Component } from "react";
import logo from "./logo.svg";
import Game from "./components/game/Game";
import "./App.css";
import "./Display.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="dice">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
