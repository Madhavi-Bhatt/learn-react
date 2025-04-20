import React from 'react';
import { 
  Typography, 
  Box, 
  Paper, 
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CodeBlock from '../../components/common/CodeBlock';
import Demo from '../../components/common/Demo';

const Redux = () => {
  const reduxExampleCode = `
// Action Types
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

// Action Creators
const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { id: Date.now(), text }
});

const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id
});

// Reducer
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

// Store
import { createStore } from 'redux';
const store = createStore(todoReducer);

// React Component with Redux
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Redux Toolkit Example
import { createSlice, configureStore } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload
      });
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    }
  }
});

const store = configureStore({
  reducer: todoSlice.reducer
});

export const { addTodo, removeTodo } = todoSlice.actions;
`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Redux
      </Typography>
      
      <Typography variant="body1" paragraph>
        Redux is a predictable state container for JavaScript applications. It helps you write applications that behave consistently and run in different environments.
      </Typography>

      <Demo title="Redux Demo" description="Todo list with Redux state management">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h6">Todo List</Typography>
          <Box component="form" sx={{ display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              label="Add Todo"
              variant="outlined"
              size="small"
            />
            <Button variant="contained">Add</Button>
          </Box>
          <List>
            <ListItem>
              <ListItemText primary="Example Todo" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Box>
      </Demo>

      <CodeBlock code={reduxExampleCode} title="Redux Example Code" />

      <Paper sx={{ p: 2, mt: 2, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>
          Things to Remember
        </Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li>Redux Principles:
              <ul>
                <li>Single source of truth</li>
                <li>State is read-only</li>
                <li>Changes through pure functions</li>
                <li>Predictable state updates</li>
              </ul>
            </li>
            <li>Action Rules:
              <ul>
                <li>Use action creators</li>
                <li>Include type and payload</li>
                <li>Keep actions simple</li>
                <li>Use constants for types</li>
              </ul>
            </li>
            <li>Reducer Rules:
              <ul>
                <li>Pure functions only</li>
                <li>Handle all action types</li>
                <li>Return new state</li>
                <li>Maintain immutability</li>
              </ul>
            </li>
            <li>Best Practices:
              <ul>
                <li>Use Redux Toolkit</li>
                <li>Normalize state shape</li>
                <li>Use selectors</li>
                <li>Implement middleware</li>
              </ul>
            </li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Redux; 