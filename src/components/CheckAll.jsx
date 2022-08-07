import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TodosContext } from '../context/TodoContext';

// CheckAll.prototype = {
//   checkAll: PropTypes.func.isRequired,
// };

function CheckAll() {
  const { Todos, setTodos } = useContext(TodosContext);

  const checkAll = () => {
    setTodos(
      Todos.map((t) => {
        return { ...t, isComplete: true };
      })
    );
  };
  return (
    <div>
      <div className="button" onClick={checkAll}>
        Check All
      </div>
    </div>
  );
}

export default CheckAll;
