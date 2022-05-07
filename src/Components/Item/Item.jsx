import React, { Component } from 'react';
import './Item.css';

export default class Item extends Component { 
  handleClick = (event) => {
      event.preventDefault();
      this.props.deleteTask(this.props.id);
  }
  render() {
    return (
      <li className="item">
          {this.props.name} 
          (${this.props.price}) 
          <button 
            onClick={this.handleClick}
            className="button delete-button">
              Delete
          </button>
      </li>
    )
  }
}
