import React, { Component } from "react";

export default class Dice extends Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }

  render() {
    return (
      <div>
        {
          <button
            onClick={() => {
              let newVal = Math.ceil(Math.random()*6);
              this.setState({ val: newVal });
              this.props.updateParentState(newVal);
              //  console.log(this.state.val);
            }}
          >
            {this.state.val}{" "}
          </button>
        }
      </div>
    );
  }
}
