import React, { useState } from 'react';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import Filter from './component/Filter';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map((todo) =>
      todo.task === updatedTodo.task ? updatedTodo : todo
    ));
  };

  const deleteTodo = (todoToDelete) => {
    setTodos(todos.filter((todo) => todo !== todoToDelete));
  };

  return (
    <div className="App">
      <h1>My Todo</h1>
      <TodoForm addTodo={addTodo} />
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList
        todos={todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        filter={filter}
      />
    </div>
  );
};

export default App;
