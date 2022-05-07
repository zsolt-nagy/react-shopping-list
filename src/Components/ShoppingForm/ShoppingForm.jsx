import React, { Component } from 'react';
import './ShoppingForm.css';

export default class ShoppingForm extends Component {
  taskNameRef = React.createRef();
  priceRef = React.createRef();
  handleSubmit = (event) => {
    event.preventDefault();
    let name = this.taskNameRef.current.value.trim();
    if (name.length === 0) {
        alert('Error: name only contains spaces.');
    } else {
        let price = Number.parseInt(this.priceRef.current.value, 10);
        this.props.addTask(name, price);
        this.taskNameRef.current.value = '';
        this.priceRef.current.value = '';
    }

  }
  render() {
    return (
        <form action="#" onSubmit={this.handleSubmit}>
            <label className="input-label">
                <div>Task:</div>
                <input 
                    type="text" 
                    name="new-task" 
                    className="input-field"
                    required 
                    ref={this.taskNameRef} />
            </label>
            <label className="input-label">
                <div>Price:</div>
                <input 
                    type="number" 
                    name="price" 
                    className="input-field"
                    required min="1"
                    ref={this.priceRef} />
            </label>
            <button className="button add-button">Add</button>
        </form>
    )
  }
}
