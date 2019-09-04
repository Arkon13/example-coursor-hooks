import React, {Component} from 'react'
import TodoList from './TodoList'

import './App.css'

export default class App extends Component {
  state = {
    todos: [
      {id: 1, title: 'First todo', completed: false},
      {id: 2, title: 'Second todo', completed: true},
    ]
  }

render() {
    return (
          <div className="container">
            <h1>Todo app</h1>

              <div className="input-field">
                  <label>Todo name</label>
              <input type="text" />

              </div>

              <TodoList todos={this.state.todos} />
          </div>
        );
    }
}
