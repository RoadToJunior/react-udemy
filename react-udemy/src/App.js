import React from "react";
import "./App.css";

class ShoppingList extends React.Component {
  state = {
    item1: "ogórki",
    item2: "pomidory",
    item3: "sałata",
  };

  render() {
    return (
      <ul>
        <li>
          {this.state.item1} - {4}
        </li>
        <li>{this.state.item2} - </li>
        <li>{this.state.item3} - </li>
      </ul>
    );
  }
}
export default ShoppingList;
