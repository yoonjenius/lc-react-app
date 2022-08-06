import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.prototype = {
  addTodo: PropTypes.func,
};

function TodoForm(props) {
  const [NewTodo, setNewTodo] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (NewTodo.trim().length === 0) {
      return;
    }
    props.addTodo(NewTodo);
    setNewTodo('');
  };

  return (
    <form action="#" onSubmit={(e) => handleSubmit(e)}>
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
