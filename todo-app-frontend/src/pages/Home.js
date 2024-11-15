import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Paper, Typography, Box } from '@mui/material';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const Home = () => {
  const [todos, setTodos] = useState([]);

  // Fetch Todos
  useEffect(() => {
    axios.get('http://localhost:5000/api/todos')
      .then((response) => setTodos(response.data))
      .catch((error) => console.error(error));
  }, []);

  // Add Todo
  const addTodo = (title) => {
    axios.post('http://localhost:5000/api/todos', { title })
      .then((response) => setTodos([...todos, response.data]))
      .catch((error) => console.error(error));
  };

  // Delete Todo
  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/api/todos/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo._id !== id)))
      .catch((error) => console.error(error));
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    const todo = todos.find((t) => t._id === id);
    axios.put(`http://localhost:5000/api/todos/${id}`, { completed: !todo.completed })
      .then((response) => {
        const updatedTodos = todos.map((t) =>
          t._id === id ? response.data : t
        );
        setTodos(updatedTodos);
      })
      .catch((error) => console.error(error));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Todo App
        </Typography>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
      </Paper>
    </Container>
  );
};

export default Home;
