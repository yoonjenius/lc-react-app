import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { TodosContext } from '../context/TodoContext';

// TodoForm.prototype = {
//   addTodo: PropTypes.func,
// };

function TodoForm() {
  const { Todos, setTodos, IdForTodo, setIdForTodo } = useContext(TodosContext);
  const [NewTodo, setNewTodo] = useState('');

  const AddTodo = (event) => {
    event.preventDefault();
    if (NewTodo.trim().length === 0) {
      return;
    }
    // props.addTodo(NewTodo);
    let obj = {
      id: IdForTodo,
      title: NewTodo,
      isComplete: false,
    };

    setTodos(Todos.concat(obj));
    setIdForTodo((prevId) => prevId + 1);
    setNewTodo('');
  };

  return (
    <form action="#" onSubmit={(e) => AddTodo(e)}>
      <input
        type="text"
        className="todo-input"
        placeholder="What do you need to do?"
        value={NewTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
