import React, { useState } from 'react';
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import '../styles/App.css';
import '../styles/React.css';
import TodoList from './TodoList';

function App() {
  const [Todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Go to Grocery',
      isComplete: true,
      isEditing: false,
    },
    {
      id: 3,
      title: 'Do other things',
      isComplete: false,
      isEditing: false,
    },
  ]);

  const [IdForTodo, setIdForTodo] = useState(Todos.length + 1);

  const AddTodo = (todo) => {
    let obj = {
      id: IdForTodo,
      title: todo,
      isComplete: false,
    };

    // setTodos([...Todos, obj]);
    setTodos(Todos.concat(obj));
    setIdForTodo((prevId) => prevId + 1);
  };

  const DeleteTodo = (todo) => {
    setTodos(Todos.filter((t) => t.id !== todo.id));
  };

  const ChangeIsComplete = (todo) => {
    const findTodo = Todos.find((t) => t.id === todo.id);
    const updateTodo = { ...findTodo, isComplete: !findTodo.isComplete };
    setTodos(Todos.map((t) => (t.id === updateTodo.id ? updateTodo : t)));
    // setTodos(Todos.filter((t) => (t.id === todo.id ? { ...todo, isComplete: !todo.isComplete } : t)));
  };

  const MarkAsEditing = (todo) => {
    const findTodo = Todos.find((t) => t.id === todo.id);
    const updateTodo = { ...findTodo, isEditing: true };
    setTodos(Todos.map((t) => (t.id === updateTodo.id ? updateTodo : t)));
  };

  const UpdateTodo = (event, todo) => {
    event.preventDefault();
    let update = event.target.value;

    if (update.trim().length === 0) {
      return;
    }

    let updatedObj = { ...todo, title: update, isEditing: false };
    setTodos(Todos.map((t) => (t.id === updatedObj.id ? updatedObj : t)));
  };

  const CancelEditing = (event, todo) => {
    event.preventDefault();
    let update = event.target.value;

    if (update.trim().length === 0) {
      return;
    }

    let updatedObj = { ...todo, isEditing: false };
    setTodos(Todos.map((t) => (t.id === updatedObj.id ? updatedObj : t)));
  };

  const CheckAllTodos = () => {
    setTodos(
      Todos.map((todo) => {
        return { ...todo, isComplete: true };
      })
    );
  };

  const RemainingTodos = () => {
    return Todos.filter((todo) => !todo.isComplete).length;
  };

  const ClearCompleted = () => {
    setTodos(Todos.filter((todo) => !todo.isComplete));
  };

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm addTodo={AddTodo} />
        {Todos.length > 0 ? (
          <TodoList
            todos={Todos}
            completeTodo={ChangeIsComplete}
            markAsEditing={MarkAsEditing}
            updateTodo={UpdateTodo}
            cancelEditing={CancelEditing}
            deleteTodo={DeleteTodo}
            clearAll={CheckAllTodos}
            remaining={RemainingTodos}
            clearCompleted={ClearCompleted}
          />
        ) : (
          <NoTodos />
        )}
      </div>
    </div>
  );
}
export default App;
