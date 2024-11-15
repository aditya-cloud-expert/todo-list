import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = ({ todos, deleteTodo, toggleComplete }) => (
  <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
    {todos.map((todo) => (
      <ListItem
        key={todo._id}
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo._id)}>
            <DeleteIcon />
          </IconButton>
        }
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Checkbox
          edge="start"
          checked={todo.completed}
          onChange={() => toggleComplete(todo._id)}
        />
        <ListItemText
          primary={todo.title}
          primaryTypographyProps={{
            style: {
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? 'gray' : 'black',
            },
          }}
        />
      </ListItem>
    ))}
    {todos.length === 0 && (
      <Typography variant="body1" color="textSecondary" align="center" sx={{ mt: 2 }}>
        No todos available. Add a new one!
      </Typography>
    )}
  </List>
);

export default TodoList;
