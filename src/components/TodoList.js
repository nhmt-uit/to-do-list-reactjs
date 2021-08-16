import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { items, taskDone, clearList, handleDelete, handleEdit, handleCheckDone } = this.props;

    return (
      <ul className="list-group">
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              doneTask={taskDone.indexOf(item.id) > -1}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
              handleCheckDone={() => handleCheckDone(item.id)}
            />
          );
        })}

        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-2"
          onClick={clearList}
        >
          Clear list
        </button>
      </ul>
    );
  }
}
