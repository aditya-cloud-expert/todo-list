// src/App.js
import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from './api';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const { data } = await fetchTodos();
      setTodos(data);
    };
    getTodos();
  }, []);

  const handleAdd = async (newTodo) => {
    const { data } = await addTodo(newTodo);
    setTodos([...todos, data]);
  };

  const handleUpdate = async (id, updatedTodo) => {
    const { data } = await updateTodo(id, updatedTodo);
    setTodos(todos.map((todo) => (todo._id === id ? data : todo)));
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;
