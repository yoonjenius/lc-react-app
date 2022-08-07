import React, { useState, useEffect, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { TodosContext } from '../context/TodoContext';

TodoRemaining.prototype = {
  todos: PropTypes.array.isRequired, // ? in typescript
};

export default function TodoRemaining(props) {
  //   const [RemainingTodos, setRemainingTodos] = useState(0);
  //   useEffect(() => {
  //     setRemainingTodos(props.todos.filter((todo) => !todo.isComplete).length);
  //   }, [props.todos]);
  const { Todos } = useContext(TodosContext);
  const remaining = useMemo(() => {
    return Todos.filter((todo) => !todo.isComplete).length;
  }, [Todos]);
  // const remainingTodos = () => {
  //   return Todos.filter((todo) => !todo.isComplete).length;
  // };
  // const remaining = useMemo(remainingTodos, [Todos]);

  return <span>{remaining} items remaining</span>;
}
