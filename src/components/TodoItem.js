import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { doneTask, title, handleDelete, handleEdit, handleCheckDone } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <div className="todo-icon">
          <span className="text-success" onClick={handleCheckDone}>
            {!doneTask ? <i className="fas fa-check" /> : <i class="fa fa-times-circle"/>}
          </span>
        </div>
        <h6 style={doneTask ? {textDecoration: "line-through"} : {}}>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
