import React, { Component } from 'react';

export default class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      value: '',
    };
  }
  onChange = (e) => {
    this.setState({ value: e.target.value });
  };
  addTask = (e) => {
    e.preventDefault();

    const obj = {
      id: Math.random(),
      action: this.state.value,
      isDone: false,
    };
    if (this.state.value !== '') {
      this.setState({ tasks: this.state.tasks.concat(obj) });
      this.setState({ value: '' });
    }
  };

  deleteTask = (i) => {
    this.setState({
      tasks: this.state.tasks.filter((el) => el.id !== i),
    });
  };
  changeStatus = (i) => {
    this.setState({
      tasks: this.state.tasks.map((el) => {
        if (el.id === i) {
          el.isDone = true;
        }
        return el;
      }),
    });
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.addTask}>
            <input
              placeholder='type your task'
              value={this.state.value}
              onChange={this.onChange}
            />
            <button onClick={this.addTask}>Add Item</button>
          </form>

          <ul>
            {this.state.tasks.map((el) => (
              <li key={el.id}>
                <p
                  style={
                    el.isDone
                      ? { textDecoration: 'line-through' }
                      : { textDecoration: 'none' }
                  }
                >
                  {el.action}
                </p>
                <button onClick={() => this.deleteTask(el.id)}>Delete</button>
                <button onClick={() => this.changeStatus(el.id)}>
                  complete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
