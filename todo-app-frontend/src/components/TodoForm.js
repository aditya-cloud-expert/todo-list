import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTodo(title);
    setTitle('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', gap: 2, marginBottom: 3 }}
    >
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button variant="contained" type="submit" color="primary">
        Add
      </Button>
    </Box>
  );
};

export default TodoForm;
