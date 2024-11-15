// src/components/TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);

  const handleUpdate = () => {
    onUpdate(todo._id, { title: updatedTitle });
    setIsEditing(false);
  };

  return (
    <div style={{ display: 'flex', marginBottom: '10px' }}>
      {isEditing ? (
        <input
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
      ) : (
        <span>{todo.title}</span>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => onDelete(todo._id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
