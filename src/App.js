import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
    taskDone: []
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };

  clearList = () => {
    this.setState({
      items: [],
      taskDone: []
    });
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  };

  handleCheckDone = id => {
    let taskDone = this.state.taskDone.slice();
    let index = taskDone.indexOf(id);

    if (index > -1) {
      taskDone.splice(index, 1);
    } else {
      taskDone.push(id);
    }
    this.setState({
      taskDone: taskDone
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col mx-auto col-md-5 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
          </div>

          <div className="col mx-auto col-md-7 mt-4">
            <h3 className="text-capitalize text-center">todo list</h3>
            <TodoList
              items={this.state.items}
              taskDone={this.state.taskDone}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleCheckDone={this.handleCheckDone}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
