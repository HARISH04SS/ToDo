import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);
  const [description, setDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);

  const handleUpdate = () => {
    updateTodo({
      ...todo,
      task,
      description,
      status,
    });
    setIsEditing(false);
  };

  return (
    <div className={`todo-item`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{todo.task}</h3>
          <p>{todo.description}</p>
          <p className={`status ${status.toLowerCase().replace(' ', '-')}`}>
            {status}
          </p>
          <div className="actions">
            <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete-btn" onClick={() => deleteTodo(todo)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
