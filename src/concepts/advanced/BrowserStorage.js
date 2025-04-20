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
  IconButton,
  Alert
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CodeBlock from '../../components/common/CodeBlock';
import Demo from '../../components/common/Demo';

// Custom Hooks
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

const useSessionStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

// Demo Components
const TodoList = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [newTodo, setNewTodo] = React.useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <form onSubmit={handleAddTodo} style={{ marginBottom: '1rem' }}>
        <TextField
          fullWidth
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          variant="outlined"
        />
      </form>
      <List>
        {todos.map(todo => (
          <ListItem
            key={todo.id}
            button
            onClick={() => handleToggleTodo(todo.id)}
            sx={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? 'text.secondary' : 'text.primary'
            }}
          >
            <ListItemText primary={todo.text} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const SessionCounter = () => {
  const [count, setCount] = useSessionStorage('count', 0);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
      <Typography variant="h6">Session Counter</Typography>
      <Typography>Count: {count}</Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          variant="contained"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </Button>
        <Button
          variant="outlined"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </Button>
      </Box>
      <Alert severity="info">
        This counter persists in sessionStorage. Try refreshing the page!
      </Alert>
    </Box>
  );
};

const BrowserStorage = () => {
  const storageExampleCode = `
// Local Storage Hook
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

// Session Storage Hook
const useSessionStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

// Usage Example
const TodoList = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Browser Storage
      </Typography>
      
      <Typography variant="body1" paragraph>
        Browser storage provides two mechanisms for storing data in the browser: localStorage and sessionStorage. localStorage persists data even after the browser window is closed, while sessionStorage data is cleared when the page session ends.
      </Typography>

      <Demo title="Browser Storage Demo" description="Examples of localStorage and sessionStorage usage">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Local Storage Example (Persistent Todo List)
            </Typography>
            <TodoList />
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Session Storage Example (Session Counter)
            </Typography>
            <SessionCounter />
          </Box>
        </Box>
      </Demo>

      <CodeBlock code={storageExampleCode} title="Browser Storage Example Code" />

      <Paper sx={{ p: 2, mt: 2, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>
          Things to Remember
        </Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li>Storage Types:
              <ul>
                <li>localStorage: Persistent storage</li>
                <li>sessionStorage: Session-based storage</li>
                <li>Both have similar APIs</li>
                <li>Both store data as strings</li>
              </ul>
            </li>
            <li>Storage Limitations:
              <ul>
                <li>Storage size (usually 5-10MB)</li>
                <li>Data must be serializable</li>
                <li>Synchronous operations</li>
                <li>No expiration mechanism</li>
              </ul>
            </li>
            <li>Best Practices:
              <ul>
                <li>Handle storage errors</li>
                <li>Use try-catch blocks</li>
                <li>Check storage availability</li>
                <li>Clean up unused data</li>
              </ul>
            </li>
            <li>Security Considerations:
              <ul>
                <li>Don't store sensitive data</li>
                <li>Validate stored data</li>
                <li>Use HTTPS</li>
                <li>Consider data encryption</li>
              </ul>
            </li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
};

export default BrowserStorage; 