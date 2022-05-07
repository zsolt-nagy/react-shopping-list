import logo from './logo.svg';
import './App.css';
import ShoppingForm from './Components/ShoppingForm/ShoppingForm';
import ItemList from './Components/ItemList/ItemList';
import React from 'react';

class App extends React.Component {
  state = {
    items: [
      {
        name: "Game Console",
        price: 499,
        id: 1
      },
      {
        name: "Fan", 
        price: 99,
        id: 2
      },
      {
        name: "Smart Fridge",
        price: 1299,
        id: 3
      },
      {
        name: "Ethereum",
        price: 2899, 
        id: 4
      }
    ],
    nextId: 5
  }
  addTask = (name, price) => {
    let newItem = {
      name, 
      price, 
      id: this.state.nextId
    }
    let newItemList = structuredClone(this.state.items);
    newItemList.push(newItem);
    this.setState({
      items: newItemList,
      nextId: this.state.nextId + 1
    });
  }
  deleteTask = (id) => {
    let newItems = this.state.items.filter(
      item => item.id !== id
    );
    this.setState({
      items: newItems
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Shopping list</h1>
        <ShoppingForm addTask={this.addTask} />
        <ItemList 
          items={this.state.items} 
          deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
