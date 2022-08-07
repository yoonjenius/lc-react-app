import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import TodoRemaining from './TodoRemaining';
import ClearCompleted from './ClearCompleted';
import CheckAll from './CheckAll';
import TodoFilters from './TodoFilters';
import useToggle from '../hooks/useToggle';
import { TodosContext } from '../context/TodoContext';

TodoList.prototype = {
  // todos: PropTypes.array.isRequired, // ? in typescript
  // completeTodo: PropTypes.func.isRequired,
  // markAsEditing: PropTypes.func.isRequired,
  // updateTodo: PropTypes.func.isRequired,
  // cancelEditing: PropTypes.func.isRequired,
  // deleteTodo: PropTypes.func.isRequired,
  // checkAll: PropTypes.func.isRequired,
  // remaining: PropTypes.number.isRequired,
  // clearCompleted: PropTypes.func.isRequired,
  // todosFiltered: PropTypes.func.isRequired,
};

export default function TodoList() {
  const { Todos, setTodos, TodosFiltered, Filter } = useContext(TodosContext);
  const [IsFeaturesOneVisible, setIsFeaturesOneVisible] = useToggle(false);
  const [IsFeaturesTwoVisible, setIsFeaturesTwoVisible] = useToggle(false);

  const markAsEditing = (todo) => {
    const findEditing = Todos.find((t) => t.id === todo.id);
    const changeEditing = { ...findEditing, isEditing: true };
    setTodos(Todos.map((t) => (t.id === changeEditing.id ? changeEditing : t)));
  };

  const deleteTodo = (todo) => {
    setTodos(Todos.filter((t) => t.id !== todo.id));
  };

  const updateTodo = (event, todo) => {
    event.preventDefault();
    const update = event.target.value;
    if (update.trim().length === 0) {
      return;
    }
    const updateObj = { ...todo, title: update, isEditing: false };
    setTodos(Todos.map((t) => (t.id === updateObj.id ? updateObj : t)));
  };

  const completeTodo = (todo) => {
    const findTodo = Todos.find((t) => t.id === todo.id);
    const updateTodo = { ...findTodo, isComplete: !findTodo.isComplete };
    setTodos(Todos.map((t) => (t.id === updateTodo.id ? updateTodo : t)));
  };
  const cancelEditing = (event, todo) => {
    event.preventDefault();
    const cancel = event.target.value;
    if (cancel.trim().length === 0) {
      return;
    }
    const cancelObj = { ...todo, isEditing: false };
    setTodos(Todos.map((t) => (t.id === cancelObj.id ? cancelObj : t)));
  };

  return (
    <React.Fragment>
      <ul className="todo-list">
        {TodosFiltered().map((todo, index) => (
          <li className="todo-item-container" key={index}>
            <div className="todo-item">
              <input type="checkbox" onChange={() => completeTodo(todo)} checked={todo.isComplete ? true : false} />
              {/* <span className={!todo.isComplete ? 'todo-item-label' : 'todo-item-label line-through'}>{todo.title}</span> */}
              {todo.isEditing ? (
                <input
                  type={'text'}
                  className="todo-item-input"
                  defaultValue={todo.title}
                  autoFocus
                  onBlur={(event) => updateTodo(event, todo)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      updateTodo(event, todo);
                    } else if (event.key === 'Escape') {
                      cancelEditing(event, todo);
                    }
                  }}
                />
              ) : (
                <span className={`todo-item-label ${!todo.isComplete ? '' : 'line-through'}`} onDoubleClick={() => markAsEditing(todo)}>
                  {todo.title}
                </span>
              )}
            </div>
            <button className="x-button" onClick={() => deleteTodo(todo)}>
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
          {/* <CheckAll checkAll={props.checkAll} />
          <TodoRemaining remaining={props.remaining} /> */}
          <CheckAll />
          <TodoRemaining />
        </div>
      )}
      {IsFeaturesTwoVisible && (
        <div className="other-buttons-container">
          {/* <TodoFilters todosFiltered={TodosFiltered} filter={Filter} setFilter={setFilter} /> */}
          {/* <ClearCompleted clear={props.clearCompleted} /> */}
          <TodoFilters />
          <ClearCompleted />
        </div>
      )}
    </React.Fragment>
  );
}
