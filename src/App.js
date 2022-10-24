import React, { Component } from 'react';
import './App.css';
// import Profile from './profile';
import ToDoList from './ToDoList';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Profile /> */}
        <ToDoList />
      </div>
    );
  }
}

export default App;
