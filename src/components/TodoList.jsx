import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoRemaining from './TodoRemaining';
import ClearCompleted from './ClearCompleted';
import CheckAll from './CheckAll';
import TodoFilters from './TodoFilters';
import useToggle from '../hooks/useToggle';

TodoList.prototype = {
  todos: PropTypes.array.isRequired, // ? in typescript
  completeTodo: PropTypes.func.isRequired,
  markAsEditing: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  cancelEditing: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  checkAll: PropTypes.func.isRequired,
  remaining: PropTypes.number.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  todosFiltered: PropTypes.func.isRequired,
};

export default function TodoList(props) {
  const [Filter, setFilter] = useState('all');
  const [IsFeaturesOneVisible, setIsFeaturesOneVisible] = useToggle(false);
  const [IsFeaturesTwoVisible, setIsFeaturesTwoVisible] = useToggle(false);

  return (
    <React.Fragment>
      <ul className="todo-list">
        {props.todosFiltered(Filter).map((todo, index) => (
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

      <div className="toggles-container">
        <button onClick={setIsFeaturesOneVisible} className="button">
          Features One Toggle
        </button>
        <button onClick={setIsFeaturesTwoVisible} className="button">
          Features One Toggle
        </button>
      </div>

      {IsFeaturesOneVisible && (
        <div className="check-all-container">
          <CheckAll checkAll={props.checkAll} />
          <TodoRemaining remaining={props.remaining} />
        </div>
      )}
      {IsFeaturesTwoVisible && (
        <div className="other-buttons-container">
          <TodoFilters todosFiltered={props.todosFiltered} filter={Filter} setFilter={setFilter} />
          <ClearCompleted clear={props.clearCompleted} />
        </div>
      )}
    </React.Fragment>
  );
}
