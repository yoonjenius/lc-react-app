import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

TodoRemaining.prototype = {
  todos: PropTypes.array.isRequired, // ? in typescript
};

export default function TodoRemaining(props) {
  //   const [RemainingTodos, setRemainingTodos] = useState(0);
  //   useEffect(() => {
  //     setRemainingTodos(props.todos.filter((todo) => !todo.isComplete).length);
  //   }, [props.todos]);

  return <span>{props.remaining()} items remaining</span>;
}
