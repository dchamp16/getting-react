import React from "react";
import Vegetables from "./Vegetables";
import { Citrus, NonCitrus } from "./TypeFruit";

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.fruitHeader}</h2>
        <NonCitrus />
        <Citrus />
      </div>
    );
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let x, y, sum;
    x = 1;
    y = 2;
    sum = x + y;

    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits fruitHeader="Fruits:" />
        <Vegetables vegetableHeader="Vegerables:" />
      </div>
    );
  }
}

export { Fruits, TypesOfFood };
