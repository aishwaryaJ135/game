import React, { Component } from "react";

export default class Path extends Component {
  render() {
    let length = this.props.trackLen;
    // let arr = [];
    // for (let x = 0; x < length; x++) {
    //   arr.push("_");
    // }
    // arr[this.props.currPos] = "|";
    // return arr;
    return Array(length)
      .fill(0)
      .map((d, i) => {
        return (
          <div id="divD">
            <div className={`box ${this.props.currPos === i ? "red" : "blue"}`}>
              {i === this.props.currPos
                ? "P"
                : i === 0
                ? "S"
                : i === length - 1
                ? "E"
                : "."}
            </div>
          </div>
        );
      });
  }
}
