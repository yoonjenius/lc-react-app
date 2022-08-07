import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TodosContext } from '../context/TodoContext';

// ClearCompleted.prototype = {
//   clear: PropTypes.func.isRequired,
// };

function ClearCompleted() {
  const { Todos, setTodos } = useContext(TodosContext);

  const clear = () => {
    setTodos(Todos.filter((todo) => !todo.isComplete));
  };
  return (
    <div>
      <button className="button" onClick={clear}>
        Clear Completed
      </button>
    </div>
  );
}

export default ClearCompleted;
