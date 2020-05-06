import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { tasks } from "./database/tasks.json";


class App extends Component {
  constructor() {
   super();
    this.state = {
      tasks
    }
  };
  render () {
    const toDos = this.state.tasks.map((task, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>
                {task.title}
              </h3>
              <span className="badge badge-pill badge-danger">
                {task.priority}
              </span>
            </div>
            <div className="card card-body">
              <p>
                {task.description}
              </p>
              <p>
                <mark>
                  {task.responsible}
                </mark>
              </p>
            </div>
          </div>
        </div>
      );
    })
    return (
    <div className="App">
      <Navigation title='Tasks' count={this.state.tasks.length} />
      <img src={logo} className="App-logo" alt="logo" />
      <div className="container">
        <div className="row mt-4">
          {toDos}
        </div>
      </div>
    </div>);
    }
}

export default App;
