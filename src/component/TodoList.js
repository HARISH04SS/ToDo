import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, updateTodo, deleteTodo, filter }) => {
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'All') return true;
    return todo.status === filter;
  });

  return (
    <div className="todo-list">
      {filteredTodos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
