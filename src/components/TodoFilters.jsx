import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TodosContext } from '../context/TodoContext';

// TodoFilters.prototype = {
//   todosFiltered: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
//   setFilter: PropTypes.func.isRequired,
// };

function TodoFilters() {
  // todosFiltered={props.todosFiltered} filter={Filter} setFilter={setFilter}
  const { Filter, setFilter, TodosFiltered } = useContext(TodosContext);
  return (
    <div>
      <button
        onClick={() => {
          setFilter('all');
          TodosFiltered();
        }}
        className={`button filter-button ${Filter === 'all' ? 'filter-button-active' : ''}`}
      >
        All
      </button>
      <button
        onClick={() => {
          setFilter('active');
          TodosFiltered();
        }}
        className={`button filter-button ${Filter === 'active' ? 'filter-button-active' : ''}`}
      >
        Active
      </button>
      <button
        onClick={() => {
          setFilter('completed');
          TodosFiltered();
        }}
        className={`button filter-button ${Filter === 'completed' ? 'filter-button-active' : ''}`}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilters;
