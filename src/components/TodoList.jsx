import React from 'react';
import PropTypes from 'prop-types';
import TodoRemaining from './TodoRemaining';
import ClearCompleted from './ClearCompleted';

TodoList.prototype = {
  todos: PropTypes.array.isRequired, // ? in typescript
  completeTodo: PropTypes.func.isRequired,
  markAsEditing: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  cancelEditing: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  clearAll: PropTypes.func.isRequired,
  remaining: PropTypes.number.isRequired,
};

export default function TodoList(props) {
  return (
    <React.Fragment>
      <ul className="todo-list">
        {props.todos.map((todo, index) => (
          <li className="todo-item-container" key={index}>
            <div className="todo-item">
              <input type="checkbox" onChange={() => props.completeTodo(todo)} checked={todo.isComplete ? true : false} />
              {/* <span className={!todo.isComplete ? 'todo-item-label' : 'todo-item-label line-through'}>{todo.title}</span> */}
              {todo.isEditing ? (
                <input
                  type={'text'}
                  className="todo-item-input"
                  defaultValue={todo.title}
                  autoFocus
                  onBlur={(event) => props.updateTodo(event, todo)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      props.updateTodo(event, todo);
                    } else if (event.key === 'Escape') {
                      props.cancelEditing(event, todo);
                    }
                  }}
                />
              ) : (
                <span
                  className={`todo-item-label ${!todo.isComplete ? '' : 'line-through'}`}
                  onDoubleClick={() => props.markAsEditing(todo)}
                >
                  {todo.title}
                </span>
              )}
            </div>
            <button className="x-button" onClick={() => props.deleteTodo(todo)}>
              <svg className="x-button-icon" file="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
      <div className="check-all-container">
        <div>
          <div className="button" onClick={() => props.clearAll()}>
            Check All
          </div>
        </div>
        <TodoRemaining remaining={props.remaining} />
      </div>
      <div className="other-buttons-container">
        <div>
          <button className="button filter-button filter-button-active">All</button>
          <button className="button filter-button">Active</button>
          <button className="button filter-button">Completed</button>
        </div>
        <ClearCompleted clear={props.clearCompleted} />
      </div>
    </React.Fragment>
  );
}
