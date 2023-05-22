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
          <ItemList name={this.state.item1} example={2 + 2} />
          <ItemList name={this.state.item2} />
          <ItemList name={this.state.item3} />
        </li>
      </ul>
    );
  }
}

// const ItemList = (props) => {
//   return (
//     <li>
//       {props.name} - {props.example}
//     </li>
//   );
// };

class ItemList extends React.Component {
  render() {
    return (
      <li>
        {this.props.name} - {this.props.example}
      </li>
    );
  }
}
export default ShoppingList;
