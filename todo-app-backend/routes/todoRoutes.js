const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();

// Get all todos
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Add a new todo
router.post('/', async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
  });
  await newTodo.save();
  res.status(201).json(newTodo);
});

// Update a todo
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedTodo);
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.status(204).send();
});

module.exports = router;
