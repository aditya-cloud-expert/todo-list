// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onUpdate }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
