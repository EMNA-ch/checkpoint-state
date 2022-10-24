import React, { Component } from 'react';

class ToDoList extends Component {
  state = {
    tasks: [
      {
        id: Math.random(),
        action: 'wake-up',
        isDone: true,
      },
      {
        id: Math.random(),
        action: 'breakfast',
        isDone: false,
      },
    ],
  };
  deleteTask = (i) => {
    this.setState({ tasks: this.state.tasks.filter((el) => el.id !== i) });
  };

  render() {
    return (
      <div>
        <form action=''>
          <input type='text' />
          <button>Add</button>
        </form>
        {this.state.tasks.map((el) => (
          <div key={el.id}>
            <h2>{el.action}</h2>
            <button onClick={() => this.deleteTask(el.id)}>Delete</button>
            <button>Complete</button>
          </div>
        ))}
      </div>
    );
  }
}

export default ToDoList;
