import React, { Component } from "react";

import Dice from "../dice/Dice";
import Path from "../path/Path";

export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      currPos: 0,
      count: 0,
      gameOver: false
    };
  }

  static defaultProps = {
    trackLen: 10,
    max: Infinity
  };

  updateState(val) {
    (async () => {
      for (let i = 0; i < val; i++) {
        await this.wait(500);
        let { currPos } = this.state;
        let { trackLen } = this.props;
        this.setState(
          {
            currPos: (currPos + 1) % this.props.trackLen,
            gameOver:
              (currPos + 1) % this.props.trackLen ===
                this.props.trackLen - 1 && i === val - 1
          },
          () => {
            // console.log(this.state);
            if (
              currPos % this.props.trackLen ===
              this.props.trackLen - 1
            ) {
              let oldHighScore = localStorage.getItem("max");
              if (this.state.count < oldHighScore) {
                alert("New High Score is " + this.state.count);
              }

              localStorage.setItem(
                "max",
                Math.min(this.state.count, this.props.max)
              );
            }
          }
        );
      }
    })();

    this.setState({
      count: this.state.count + 1
    });
  }

  wait(ms) {
    return new Promise(res => {
      setTimeout(res, ms);
    });
  }

  render() {
    return (
      <div>
        <div>{`High Score: ${this.props.max}`}</div>
        <div className="dice">
          {this.state.gameOver ? (
            <h2>You won .The number of tries is {this.state.count}</h2>
          ) : (
            <Dice
              updateParentState={this.updateState.bind(this)}
              currPos={this.state.currPos}
              trackLen={this.props.trackLen}
            />
          )}
        </div>
        <div className="path">
          <Path currPos={this.state.currPos} trackLen={this.props.trackLen} />
        </div>
      </div>
    );
  }
}
// Game.defaultProps = {

// }
