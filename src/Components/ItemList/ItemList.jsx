import React, { Component } from 'react';
import Item from '../Item/Item.jsx';

export default class ItemList extends Component {
  generateItemList() {
    return this.props.items.map(
        item => (     
            <Item 
                key={item.id} 
                id={item.id}
                name={item.name} 
                price={item.price}
                deleteTask={this.props.deleteTask} />
        )
    );

/*  // Same code without map:
    let itemListJsx = [];

    for (let item of this.props.items) {
        itemListJsx.push( 
            <Item 
                key={item.id} 
                id={item.id}
                name={item.name} 
                price={item.price}
                deleteTask={this.props.deleteTask} /> 
        );
    }

    return itemListJsx;
*/
  }
  getBasketSum = () => {
      let sum = 0;

      for (let item of this.props.items) {
          sum += item.price;
      }

      return sum;
  }
  render() {
    let itemListJsx = this.generateItemList();
    return (
      <>
        <ul className="results-container">
            {itemListJsx}
        </ul>
        <div>Sum: ${this.getBasketSum()}</div>
      </>
    )
  }
}
