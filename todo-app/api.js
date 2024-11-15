// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/todos', // Replace with your backend URL
});

export const fetchTodos = () => API.get('/');
export const addTodo = (todo) => API.post('/', todo);
export const updateTodo = (id, updatedTodo) => API.put(`/${id}`, updatedTodo);
export const deleteTodo = (id) => API.delete(`/${id}`);
