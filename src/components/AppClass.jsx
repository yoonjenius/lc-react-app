import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/React.css';

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Finish React Series',
          isComplete: false,
        },
        {
          id: 2,
          title: 'Go to Grocery',
          isComplete: true,
        },
        {
          id: 3,
          title: 'Do other things',
          isComplete: false,
        },
      ],
    };
  }

  AddTodo = () => {
    this.setState((prevState) => {
      const newTodos = [
        ...prevState.todos,
        {
          id: 4,
          title: 'NewTodo',
          isComplete: false,
        },
      ];

      return { todos: newTodos };
    });
  };

  render() {
    return (
      <div>
        <div className="todo-app-container">
          <div className="todo-app">
            <h2>Todo App</h2>
            <form action="#" onSubmit={this.AddTodo}>
              <input type="text" className="todo-input" placeholder="What do you need to do?" />
            </form>
            <ul className="todo-list">
              {this.state.todos.map((todo, index) => (
                <li className="todo-item-container" key={index}>
                  <div className="todo-item">
                    <input type="checkbox" />
                    <span className={!todo.isComplete ? 'todo-item-label' : 'todo-item-label line-through'}>{todo.title}</span>
                  </div>
                  <button className="x-button">
                    <svg className="x-button-icon" file="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
            <div className="check-all-container">
              <div>
                <div className="button">Check All</div>
              </div>
              <span> 3 items remaining</span>
            </div>
            <div className="other-buttons-container">
              <div>
                <button className="button filter-button filter-button-active">All</button>
                <button className="button filter-button">Active</button>
                <button className="button filter-button">Completed</button>
              </div>
              <div>
                <button className="button">Clear Completed</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
