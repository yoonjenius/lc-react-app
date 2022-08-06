import React, { useRef, useState, useEffect } from 'react';
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import '../styles/App.css';
import '../styles/React.css';
import TodoList from './TodoList';
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  // const [Name, setName] = useState('');
  const [Name, setName] = useLocalStorage('name', '');
  const nameInput = useRef(null);
  const [Todos, setTodos] = useLocalStorage('todo', []);
  // const [Todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: 'Finish React Series',
  //     isComplete: false,
  //     isEditing: false,
  //   },
  //   {
  //     id: 2,
  //     title: 'Go to Grocery',
  //     isComplete: true,
  //     isEditing: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'Do other things',
  //     isComplete: false,
  //     isEditing: false,
  //   },
  // ]);

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

  const TodosFiltered = (filter) => {
    if (filter === 'all') {
      return Todos;
    } else if (filter === 'active') {
      return Todos.filter((todo) => !todo.isComplete);
    } else if (filter === 'completed') {
      return Todos.filter((todo) => todo.isComplete);
    }
  };

  useEffect(() => {
    //<button onClick={() => nameInput.current.focus()}>Get Ref</button>
    // console.log('use effect running');
    // nameInput.current.focus(); //커서 포커스가..
    // return function cleanup()
    //   console.log('cleaning up');
    // };
    // setName(JSON.parse(localStorage.getItem('name')) ?? '');
  }, []);

  const handleName = (event) => {
    let name = event.target.value;
    // localStorage.setItem('name', JSON.stringify(name));
    setName(name);
  };
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <div className="name-container">
          <h2 className="todo-header">What is your name?</h2>
          <form action="#">
            <input
              type="text"
              ref={nameInput}
              className="todo-input"
              value={Name}
              onChange={(e) => handleName(e)}
              placeholder="What is your name?"
            />
          </form>
          {Name && <p className="name-label">Hello, {Name}</p>}
        </div>
        <h2 className="todo-header">Todo App</h2>
        <TodoForm addTodo={AddTodo} />
        {Todos.length > 0 ? (
          <TodoList
            todos={Todos}
            completeTodo={ChangeIsComplete}
            markAsEditing={MarkAsEditing}
            updateTodo={UpdateTodo}
            cancelEditing={CancelEditing}
            deleteTodo={DeleteTodo}
            checkAll={CheckAllTodos}
            remaining={RemainingTodos}
            clearCompleted={ClearCompleted}
            todosFiltered={TodosFiltered}
          />
        ) : (
          <NoTodos />
        )}
      </div>
    </div>
  );
}
export default App;
