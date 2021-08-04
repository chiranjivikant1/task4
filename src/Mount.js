import React, { Component } from "react";

class Mount extends Component {
  constructor() {
    console.log("constructor called");
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log("componentDidMount  called");
    // write your Api fetch here
  }
  componentDidUpdate() {
    console.log("componentDidUpdate  called");
    // write your Api fetch here
  }

  setStateExample = () => {
    console.log("setState  called");
    this.setState({ name: "Name Changed", age: "age changed" });
  };

  render() {
    console.log("Render called");
    return (
      <>
        <h1>Name= {this.state.name}</h1>
        <h1>Age= {this.state.age}</h1>

        <button onClick={this.setStateExample}>SetState will change</button>
      </>
    );
  }
}

export default Mount;
