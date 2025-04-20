import React, { useState, useEffect, useContext, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Box,
  Paper,
  Tabs,
  Tab,
  Divider,
  Grid,
  Button,
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  TableContainer,
  Table,
  TableCell,
} from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WebSocketConcept from '../concepts/advanced/WebSocket';
import ReactMarkdown from 'react-markdown';
import { practiceQuestions } from '../data/practiceQuestions';
import PracticeQuestions from './PracticeQuestions';

// Example Components
const SimpleComponent = ({ name }) => (
  <Typography>Hello, {name}!</Typography>
);

const UserCard = ({ user }) => (
  <Paper sx={{ p: 2 }}>
    <Typography variant="h6">{user.name}</Typography>
    <Typography>Age: {user.age}</Typography>
    <Typography>Email: {user.email}</Typography>
  </Paper>
);

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Box>
      <Typography>Count: {count}</Typography>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={() => setCount(count - 1)}>Decrement</Button>
    </Box>
  );
};

const InputExample = () => {
  const [text, setText] = useState('');
  return (
    <Box>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <Typography>You typed: {text}</Typography>
    </Box>
  );
};

const WindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Typography>Window width: {width}px</Typography>
  );
};

const DataFetching = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch React concepts data from a more relevant API
        const response = await fetch('https://api.github.com/repos/facebook/react/readme');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return (
    <Box sx={{ p: 2 }}>
      <Typography>Loading React concepts...</Typography>
      <CircularProgress size={24} sx={{ ml: 2 }} />
    </Box>
  );
  
  if (error) return (
    <Box sx={{ p: 2, color: 'error.main' }}>
      <Typography>Error: {error}</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        This example demonstrates error handling in useEffect
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        React Repository Information
      </Typography>
      <Typography variant="body2" paragraph>
        This example demonstrates:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="success" />
          </ListItemIcon>
          <ListItemText primary="Data fetching with useEffect" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="success" />
          </ListItemIcon>
          <ListItemText primary="Loading state management" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="success" />
          </ListItemIcon>
          <ListItemText primary="Error handling" />
        </ListItem>
      </List>
      <Typography variant="body2" color="textSecondary">
        Repository: {data?.name || 'React'}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Description: {data?.description || 'A JavaScript library for building user interfaces'}
      </Typography>
    </Box>
  );
};

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Box sx={{ 
        bgcolor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#000000' : '#ffffff',
        p: 2,
        borderRadius: 1
      }}>
        {children}
      </Box>
    </ThemeContext.Provider>
  );
};

const ThemeExample = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Box>
      <Typography>Current theme: {theme}</Typography>
      <Button 
        variant="contained"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        sx={{ mt: 1 }}
      >
        Toggle Theme
      </Button>
    </Box>
  );
};

// Redux-like state management for theme
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
};

const ReduxThemeExample = () => {
  const [theme, dispatch] = useReducer(themeReducer, 'light');
  
  return (
    <Box sx={{ 
      bgcolor: theme === 'light' ? '#ffffff' : '#333333',
      color: theme === 'light' ? '#000000' : '#ffffff',
      p: 2,
      borderRadius: 1
    }}>
      <Typography>Current theme: {theme}</Typography>
      <Button 
        variant="contained"
        onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
        sx={{ mt: 1 }}
      >
        Toggle Theme (Redux-like)
      </Button>
    </Box>
  );
};

// Example components for different concepts
const ComponentsExample = () => (
  <Box>
    <Typography variant="h6" gutterBottom>
      Example 1: Simple Component
    </Typography>
    <SimpleComponent name="React Learner" />
    
    <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
      Example 2: Component with Object Props
    </Typography>
    <UserCard
      user={{
        name: 'John Doe',
        age: 25,
        email: 'john@example.com',
      }}
    />
  </Box>
);

const StateExample = () => {

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Example 1: Counter with State
      </Typography>
      <Counter />

      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Example 2: Input with State
      </Typography>
      <InputExample />
    </Box>
  );
};

const HooksExample = () => (
  <Box>
    <Typography variant="h6" gutterBottom>
      Example 1: Window Size Hook
    </Typography>
    <WindowSize />

    <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
      Example 2: Data Fetching Hook
    </Typography>
    <DataFetching />
  </Box>
);

const ContextExample = () => (
  <ThemeProvider>
    <Typography variant="h6" gutterBottom>
      Theme Context Example
    </Typography>
    <ThemeExample />
  </ThemeProvider>
);

const FormsExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted: ' + JSON.stringify(formData));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Form Example
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="message"
            label="Message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

// Example Components for Advanced Concepts
const RouterExample = () => (
  <Box>
    <Typography variant="h6" gutterBottom>
      Router Navigation Example
    </Typography>
    <Box sx={{ mb: 2 }}>
      <Button
        variant="contained"
        onClick={() => window.location.href = '/concept/1'}
        sx={{ mr: 1 }}
      >
        Go to Components
      </Button>
      <Button
        variant="contained"
        onClick={() => window.location.href = '/concept/2'}
        sx={{ mr: 1 }}
      >
        Go to State
      </Button>
      <Button
        variant="contained"
        onClick={() => window.location.href = '/concept/3'}
      >
        Go to Hooks
      </Button>
    </Box>
    <Typography variant="body2" color="textSecondary">
      Click the buttons above to navigate between different concepts.
      This demonstrates programmatic navigation using React Router.
    </Typography>
  </Box>
);

const AdditionalHooksExample = () => (
  <Box>
    <Typography variant="h6" gutterBottom>
      Additional Hooks Demo
    </Typography>
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1">useReducer Example:</Typography>
      <Counter />
    </Box>
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1">useRef Example:</Typography>
      <input
        type="text"
        ref={(el) => {
          if (el) {
            el.value = 'Focus me!';
            el.focus();
          }
        }}
      />
    </Box>
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1">useMemo Example:</Typography>
      <Typography>
        {(() => {
          const expensive = Array(1000).fill(0).map((_, i) => i * i).join(', ');
          return `Computed expensive value: ${expensive.slice(0, 50)}...`;
        })()}
      </Typography>
    </Box>
  </Box>
);

const BrowserStorageExample = () => (
  <Box>
    <Typography variant="h6" gutterBottom>
      Browser Storage Demo
    </Typography>
    
    {/* localStorage Example */}
    <Paper sx={{ p: 2, mb: 2, bgcolor: '#f5f5f5' }}>
      <Typography variant="subtitle1" gutterBottom>
        localStorage Example (Persistent Storage)
      </Typography>
      <Typography variant="body2" paragraph>
        localStorage persists data even after browser is closed. Data remains until explicitly cleared.
      </Typography>
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          placeholder="Enter text to save in localStorage"
          sx={{ mb: 1 }}
          onChange={(e) => {
            localStorage.setItem('localStorageDemo', e.target.value);
          }}
        />
        <Typography sx={{ mt: 1 }}>
          Current localStorage value: {localStorage.getItem('localStorageDemo') || 'Nothing saved yet'}
        </Typography>
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          localStorage.removeItem('localStorageDemo');
          alert('localStorage data cleared!');
        }}
        sx={{ mr: 1 }}
      >
        Clear localStorage
      </Button>
    </Paper>

    {/* sessionStorage Example */}
    <Paper sx={{ p: 2, mb: 2, bgcolor: '#e3f2fd' }}>
      <Typography variant="subtitle1" gutterBottom>
        sessionStorage Example (Session Storage)
      </Typography>
      <Typography variant="body2" paragraph>
        sessionStorage data persists only for the duration of the browser session. Data is cleared when the tab is closed.
      </Typography>
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          placeholder="Enter text to save in sessionStorage"
          sx={{ mb: 1 }}
          onChange={(e) => {
            sessionStorage.setItem('sessionStorageDemo', e.target.value);
          }}
        />
        <Typography sx={{ mt: 1 }}>
          Current sessionStorage value: {sessionStorage.getItem('sessionStorageDemo') || 'Nothing saved yet'}
        </Typography>
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          sessionStorage.removeItem('sessionStorageDemo');
          alert('sessionStorage data cleared!');
        }}
        sx={{ mr: 1 }}
      >
        Clear sessionStorage
      </Button>
    </Paper>

    {/* Cookies Example */}
    <Paper sx={{ p: 2, mb: 2, bgcolor: '#f3e5f5' }}>
      <Typography variant="subtitle1" gutterBottom>
        Cookies Example
      </Typography>
      <Typography variant="body2" paragraph>
        Cookies are small pieces of data stored on the client's computer. They are sent with every HTTP request.
      </Typography>
      <Box sx={{ mb: 2 }}>
        <input
          type="text"
          placeholder="Enter text to save as cookie"
          style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
          onChange={(e) => {
            document.cookie = `cookieDemo=${e.target.value}; max-age=3600; path=/`;
          }}
        />
        <Typography sx={{ mt: 1 }}>
          Current cookie value: {document.cookie.split('; ').find(row => row.startsWith('cookieDemo='))?.split('=')[1] || 'No cookie set'}
        </Typography>
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          document.cookie = 'cookieDemo=; max-age=0; path=/';
          alert('Cookie cleared!');
        }}
        sx={{ mr: 1 }}
      >
        Clear Cookie
      </Button>
    </Paper>

    {/* Storage Information */}
    <Paper sx={{ p: 2, mb: 2, bgcolor: '#e8f5e9' }}>
      <Typography variant="subtitle1" gutterBottom>
        Storage Information
      </Typography>
      <Typography variant="body2" paragraph>
        You can view all storage data in Chrome DevTools:
      </Typography>
      <Typography variant="body2" component="div" sx={{ ml: 2 }}>
        1. Open Chrome DevTools (F12 or right-click → Inspect)
        <br />
        2. Go to the "Application" tab
        <br />
        3. On the left sidebar, you'll find:
        <br />
        • Local Storage (persistent data)
        <br />
        • Session Storage (session data)
        <br />
        • Cookies (HTTP cookies)
      </Typography>
    </Paper>
  </Box>
);

const APIExample = () => (
  <Box>
    <Typography variant="h6" gutterBottom>
      API Integration Demo
    </Typography>
    <Box sx={{ mb: 2 }}>
      <Button
        variant="contained"
        onClick={async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const data = await response.json();
            alert(`Fetched data: ${data.title}`);
          } catch (error) {
            alert('Error fetching data: ' + error.message);
          }
        }}
        sx={{ mr: 1 }}
      >
        Fetch Data
      </Button>
      <Button
        variant="contained"
        onClick={async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                title: 'Test Post',
                body: 'This is a test post',
                userId: 1
              })
            });
            await response.json();
            alert('Post created successfully!');
          } catch (error) {
            alert('Error creating post: ' + error.message);
          }
        }}
      >
        Create Post
      </Button>
    </Box>
  </Box>
);

const PaymentExample = () => (
  <Box>
    <Typography variant="h6" gutterBottom>
      Payment Form Demo
    </Typography>
    <Paper sx={{ p: 2, maxWidth: 400 }}>
      <Typography variant="subtitle1" gutterBottom>
        Card Details
      </Typography>
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          label="Card Number"
          sx={{ mb: 1 }}
        />
        <TextField
          fullWidth
          label="Expiry Date"
          sx={{ mb: 1 }}
        />
        <TextField
          fullWidth
          label="CVV"
          sx={{ mb: 1 }}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => alert('Payment processing would happen here!')}
      >
        Pay Now
      </Button>
    </Paper>
  </Box>
);

const HOCExample = () => (
  <Box>
    <Typography variant="h6" gutterBottom>
      HOC Example
    </Typography>
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1">Loading Wrapper:</Typography>
      <Paper sx={{ p: 2, bgcolor: '#f5f5f5' }}>
        <Typography>Loading state: {Math.random() > 0.5 ? 'Loading...' : 'Loaded!'}</Typography>
      </Paper>
    </Box>
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1">Error Boundary:</Typography>
      <Paper sx={{ p: 2, bgcolor: '#ffebee' }}>
        <Typography>Error state: {Math.random() > 0.5 ? 'Error occurred!' : 'No errors'}</Typography>
      </Paper>
    </Box>
  </Box>
);

const JWTExample = () => (
  <Box>
    <Typography variant="h6" gutterBottom>
      JWT Authentication Demo
    </Typography>
    <Box sx={{ mb: 2 }}>
      <Button
        variant="contained"
        onClick={() => {
          // Create a JWT token with actual payload
          const header = {
            "alg": "HS256",
            "typ": "JWT"
          };
          const payload = {
            "sub": "1234567890",
            "name": "John Doe",
            "iat": Math.floor(Date.now() / 1000),
            "exp": Math.floor(Date.now() / 1000) + (60 * 60), // 1 hour expiration
            "role": "user"
          };
          
          // Convert to base64
          const headerBase64 = btoa(JSON.stringify(header));
          const payloadBase64 = btoa(JSON.stringify(payload));
          
          // Create signature (in real app, this would use a secret key)
          const signature = btoa('demo-signature');
          
          // Combine to create JWT
          const token = `${headerBase64}.${payloadBase64}.${signature}`;
          
          // Store in localStorage (for demo purposes)
          localStorage.setItem('jwtToken', token);
          
          // Also set as HTTP-only cookie (simulated)
          document.cookie = `jwt=${token}; HttpOnly; Secure; SameSite=Strict; max-age=3600; path=/`;
          
          alert('Logged in successfully! Token created and stored.');
        }}
        sx={{ mr: 1 }}
      >
        Login
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          localStorage.removeItem('jwtToken');
          document.cookie = 'jwt=; max-age=0; path=/';
          alert('Logged out successfully! Token removed.');
        }}
        sx={{ mr: 1 }}
      >
        Logout
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          const token = localStorage.getItem('jwtToken');
          if (token) {
            try {
              // Split the token into its parts
              const [payloadBase64] = token.split('.');
              
              // Decode the payload
              const payload = JSON.parse(atob(payloadBase64));
              
              // Check if token is expired
              const isExpired = payload.exp < Math.floor(Date.now() / 1000);
              
              alert(
                `Token Details:\n` +
                `User: ${payload.name}\n` +
                `Role: ${payload.role}\n` +
                `Issued At: ${new Date(payload.iat * 1000).toLocaleString()}\n` +
                `Expires At: ${new Date(payload.exp * 1000).toLocaleString()}\n` +
                `Status: ${isExpired ? 'Expired' : 'Valid'}\n\n` +
                `Token Location: localStorage.getItem('jwtToken')`
              );
            } catch (error) {
              alert('Invalid token format: ' + error.message);
            }
          } else {
            alert('No token found in localStorage. Please login first.');
          }
        }}
      >
        Decode Token
      </Button>
    </Box>

    {/* Token Storage Information */}
    <Paper sx={{ p: 2, mb: 2, bgcolor: '#e3f2fd' }}>
      <Typography variant="subtitle1" gutterBottom>
        Token Storage Information
      </Typography>
      <Typography variant="body2" paragraph>
        In this demo, the JWT token is stored in two places:
      </Typography>
      <Typography variant="body2" component="div" sx={{ ml: 2 }}>
        1. localStorage (for demo purposes)
        <br />
        2. HTTP-only cookie (simulated)
      </Typography>
      <Typography variant="body2" paragraph sx={{ mt: 2 }}>
        In a production environment:
      </Typography>
      <Typography variant="body2" component="div" sx={{ ml: 2 }}>
        • Store tokens in HTTP-only cookies (not localStorage)
        <br />
        • Use HTTPS for secure transmission
        <br />
        • Implement proper token refresh mechanism
        <br />
        • Use secure secret keys for signing
      </Typography>
    </Paper>

    {/* Token Structure */}
    <Paper sx={{ p: 2, mb: 2, bgcolor: '#f5f5f5' }}>
      <Typography variant="subtitle1" gutterBottom>
        JWT Token Structure
      </Typography>
      <Typography variant="body2" paragraph>
        A JWT token consists of three parts:
      </Typography>
      <Typography variant="body2" component="div" sx={{ ml: 2 }}>
        1. Header (algorithm & token type)
        <br />
        2. Payload (user data, timestamps)
        <br />
        3. Signature (verification)
      </Typography>
      <Typography variant="body2" paragraph sx={{ mt: 2 }}>
        Example token:
      </Typography>
      <Paper sx={{ p: 2, bgcolor: '#1E1E1E', color: '#fff', fontFamily: 'monospace' }}>
        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
        eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE1MTYyMzkwMjIsInJvbGUiOiJ1c2VyIn0.
        SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
      </Paper>
    </Paper>
  </Box>
);

const ReduxExample = () => (
  <Box>
    <Typography variant="h6" gutterBottom>
      Redux State Management Demo
    </Typography>
    <Paper sx={{ p: 2, mb: 2, bgcolor: '#f5f5f5' }}>
      <Typography variant="subtitle1" gutterBottom>
        Counter with Redux-like State Management
      </Typography>
      <ReduxThemeExample />
    </Paper>
    <Paper sx={{ p: 2, mb: 2, bgcolor: '#e3f2fd' }}>
      <Typography variant="subtitle1" gutterBottom>
        Redux Store Structure
      </Typography>
      <Typography variant="body2" paragraph>
        A Redux store consists of:
      </Typography>
      <Typography variant="body2" component="div" sx={{ ml: 2 }}>
        1. State (Single source of truth)
        <br />
        2. Actions (State change descriptions)
        <br />
        3. Reducers (Pure functions that handle state updates)
      </Typography>
    </Paper>
  </Box>
);

// Add ExampleComponent before ConceptDetail
const ExampleComponent = () => {
  const { id } = useParams();
  const numericId = parseInt(id, 10);
  
  switch (numericId) {
    case 1:
      return <ComponentsExample />;
    case 2:
      return <StateExample />;
    case 3:
      return <HooksExample />;
    case 4:
      return <ContextExample />;
    case 5:
      return <FormsExample />;
    case 8:
      return <RouterExample />;
    case 10:
      return <AdditionalHooksExample />;
    case 11:
      return <BrowserStorageExample />;
    case 12:
      return <APIExample />;
    case 13:
      return <HOCExample />;
    case 14:
      return <JWTExample />;
    case 15:
      return <PaymentExample />;
    case 16:
      return <WebSocketConcept />;
    case 17:
      return <ReduxExample />;
    default:
      return (
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" color="textSecondary">
            No example available for this concept
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            Please select a different concept to view its example.
          </Typography>
        </Box>
      );
  }
};

// Add getCodeExample function
const getCodeExample = (id) => {
  const numericId = parseInt(id, 10);
  
  switch (numericId) {
    case 1:
      return `// Simple Component
const SimpleComponent = ({ name }) => (
  <Typography>Hello, {name}!</Typography>
);

// Component with Props
const UserCard = ({ user }) => (
  <Paper sx={{ p: 2 }}>
    <Typography variant="h6">{user.name}</Typography>
    <Typography>Age: {user.age}</Typography>
    <Typography>Email: {user.email}</Typography>
  </Paper>
);`;

    case 2:
      return `// Counter with State
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Box>
      <Typography>Count: {count}</Typography>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={() => setCount(count - 1)}>Decrement</Button>
    </Box>
  );
};`;

    case 3:
      return `// Window Size Hook
const WindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Typography>Window width: {width}px</Typography>
  );
};`;

    case 4:
      return `// Theme Context
const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};`;

    case 5:
      return `// Form Example
const FormExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      <button type="submit">Submit</button>
    </form>
  );
};`;

    case 8:
      return `// Basic Router Setup
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);`;

    case 10:
      return `// useReducer Example
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
};`;

    case 11:
      return `// localStorage Example
const LocalStorageExample = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem('myData');
    if (savedData) setData(savedData);
  }, []);

  const handleSave = () => {
    localStorage.setItem('myData', data);
  };

  return (
    <div>
      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={handleSave}>Save to localStorage</button>
    </div>
  );
};`;

    case 12:
      return `// API Integration Example
const APIExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.example.com/data');
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <div>Error: {error}</div>}
      {data && <div>Data: {JSON.stringify(data)}</div>}
    </div>
  );
};`;

    case 13:
      return `// Higher Order Component Example
const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) return <div>Loading...</div>;
    return <WrappedComponent {...props} />;
  };
};

const UserProfile = ({ user }) => (
  <div>
    <h2>{user.name}</h2>
    <p>{user.email}</p>
  </div>
);

const UserProfileWithLoading = withLoading(UserProfile);`;

    case 14:
      return `// JWT Authentication Example
const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const login = async (credentials) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const { token } = await response.json();
      localStorage.setItem('token', token);
      setToken(token);
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  return (
    <AuthContext.Provider value={{ token, login }}>
      {children}
    </AuthContext.Provider>
  );
};`;

    case 15:
      return `// Payment Integration Example
const PaymentForm = () => {
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const token = await createPaymentToken(cardDetails);
      const response = await fetch('/api/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, amount: 1000 }),
      });

      const result = await response.json();
      if (result.success) {
        alert('Payment successful!');
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={cardDetails.number}
        onChange={(e) => setCardDetails({
          ...cardDetails,
          number: e.target.value
        })}
        placeholder="Card Number"
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};`;

    case 16:
      return `// WebSocket Hook
const useWebSocket = (url) => {
  const [ws, setWs] = useState(null);
  const [lastMessage, setLastMessage] = useState(null);
  const [readyState, setReadyState] = useState(WebSocket.CONNECTING);

  useEffect(() => {
    const websocket = new WebSocket(url);
    
    websocket.onopen = () => {
      setReadyState(WebSocket.OPEN);
    };

    websocket.onclose = () => {
      setReadyState(WebSocket.CLOSED);
    };

    websocket.onmessage = (event) => {
      setLastMessage(event);
    };

    setWs(websocket);

    return () => {
      websocket.close();
    };
  }, [url]);

  const sendMessage = useCallback((message) => {
    if (ws && readyState === WebSocket.OPEN) {
      ws.send(message);
    }
  }, [ws, readyState]);

  return { sendMessage, lastMessage, readyState };
};`;

    case 17:
      return `// Redux Store Setup
import { createStore, combineReducers } from 'redux';

// Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action Creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// Create Store
const store = createStore(counterReducer);`;

    case 18:
      return `// Testing Example
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('renders component', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});

test('handles user input', async () => {
  render(<MyComponent />);
  await userEvent.type(screen.getByRole('textbox'), 'Hello');
  expect(screen.getByText('Hello')).toBeInTheDocument();
});`;

    case 19:
      return `// Error Boundary Example
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}`;

    case 20:
      return `// i18n Setup Example
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { hello: 'Hello' } },
    es: { translation: { hello: 'Hola' } }
  },
  lng: 'en',
  fallbackLng: 'en'
});

// Usage in component
function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t('hello')}</h1>;
}`;

    default:
      return '// No code example available';
  }
};

// Add conceptData with all concepts including WebSocket
const conceptData = {
  1: {
    title: 'Components',
    description: 'Learn about React components and their types.',
    explanation: `## Introduction
React components are the building blocks of any React application. They are reusable pieces of UI that can be composed together to create complex user interfaces. Components can be either function-based (modern approach) or class-based (legacy approach).

## Core Concepts
• Components are reusable UI pieces
• Two types: Function and Class components
• Props for data passing
• State for dynamic data

## Component Types
1. Function Components
   • Modern, preferred approach
   • Simpler syntax
   • Better performance
   • Hooks support

2. Class Components
   • Legacy approach
   • Lifecycle methods
   • State management
   • Error boundaries

## Best Practices
• Keep components small and focused
• Use meaningful names
• Follow single responsibility
• Implement proper prop types

## Developer Cheat Sheet
### Quick Reference
• Function Component:
\`\`\`jsx
const Component = (props) => <div>...</div>
\`\`\`
• Class Component:
\`\`\`jsx
class Component extends React.Component {
  render() { ... }
}
\`\`\`
• Props:
\`\`\`jsx
<Component prop1="value" prop2={value} />
\`\`\`
• Children:
\`\`\`jsx
<Component>child content</Component>
\`\`\`

### Common Patterns
• Container/Presenter: Separate logic from presentation
• Compound Components: Group related components
• Render Props: Share code between components
• HOC Pattern: Reuse component logic

### Performance Tips
• Use React.memo for expensive renders
• Implement shouldComponentUpdate
• Avoid inline styles
• Use proper key props

### Common Pitfalls
• Forgetting to return JSX
• Incorrect prop usage
• Unnecessary re-renders
• Missing key props`
  },
  2: {
    title: 'State Management',
    description: 'Understanding React state and its management.',
    explanation: `## Introduction
State management is crucial in React applications as it determines how data flows and changes within your app. React provides multiple ways to manage state, from simple local state to complex global state management solutions.

## State Fundamentals
• Local vs Global state
• State updates are asynchronous
• State is immutable
• State triggers re-renders

## State Management Approaches
1. useState Hook
   • For simple state
   • Local component state
   • Quick implementation
   • Functional updates

2. useReducer Hook
   • Complex state logic
   • Multiple related states
   • Predictable updates
   • Action-based updates

3. Context API
   • Global state
   • Theme management
   • User preferences
   • Avoid prop drilling

## Developer Cheat Sheet
### Quick Reference
• useState:
\`\`\`jsx
const [state, setState] = useState(initialValue)
\`\`\`
• useReducer:
\`\`\`jsx
const [state, dispatch] = useReducer(reducer, initialState)
\`\`\`
• Context:
\`\`\`jsx
const value = useContext(MyContext)
\`\`\`
• State Update:
\`\`\`jsx
setState(prev => prev + 1)
\`\`\`

### Common Patterns
• State Lifting: Share state between components
• State Normalization: Flatten nested state
• State Persistence: Save state to localStorage
• State Reset: Reset state to initial values

### Performance Tips
• Use useMemo for expensive calculations
• Implement useCallback for functions
• Avoid unnecessary state updates
• Use proper state structure

### Common Pitfalls
• Mutating state directly
• Missing dependencies
• Infinite update loops
• Unnecessary re-renders`
  },
  3: {
    title: 'Hooks',
    description: 'Understanding React Hooks and their usage.',
    explanation: `## Introduction
React Hooks are functions that allow you to "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 to let you use state and other React features without writing a class component.

## Core Hooks
• useState - State management
• useEffect - Side effects
• useContext - Context consumption
• useReducer - Complex state

## Custom Hooks
• Reusable logic
• Share functionality
• Follow naming convention
• Handle cleanup

## Developer Cheat Sheet
### Quick Reference
• useState:
\`\`\`jsx
const [state, setState] = useState(initialValue)
\`\`\`
• useEffect:
\`\`\`jsx
useEffect(() => { effect }, [deps])
\`\`\`
• useContext:
\`\`\`jsx
const value = useContext(MyContext)
\`\`\`
• useReducer:
\`\`\`jsx
const [state, dispatch] = useReducer(reducer, initialState)
\`\`\`

### Common Patterns
• Data Fetching: \`useDataFetching(url)\`
• Form Handling: \`useForm(initialValues)\`
• Window Size: \`useWindowSize()\`
• Debounce: \`useDebounce(value, delay)\`

### Performance Tips
• Use proper dependencies
• Implement cleanup
• Avoid unnecessary effects
• Use appropriate hooks

### Common Pitfalls
• Missing dependencies
• Infinite loops
• Memory leaks
• Incorrect cleanup`
  },
  4: {
    title: 'Context',
    description: 'Understanding React Context and its usage.',
    explanation: `## Introduction
React Context provides a way to pass data through the component tree without having to pass props manually at every level. It's designed to share data that can be considered "global" for a tree of React components.

## Context Basics
• Global state management
• Avoid prop drilling
• Theme management
• User preferences

## Implementation Steps
1. Create Context
   • Define context object
   • Set default values
   • Export context

2. Provide Context
   • Wrap components
   • Set context value
   • Handle updates

3. Consume Context
   • Use useContext hook
   • Access context value
   • Handle changes

## Developer Cheat Sheet
### Quick Reference
• Create Context:
\`\`\`jsx
const Context = React.createContext(defaultValue)
\`\`\`
• Provider:
\`\`\`jsx
<Context.Provider value={value}>{children}</Context.Provider>
\`\`\`
• Consumer:
\`\`\`jsx
const value = useContext(Context)
\`\`\`
• Default Value:
\`\`\`jsx
const Context = React.createContext('default')
\`\`\`

### Common Patterns
• Theme Context: Manage app theme
• Auth Context: Handle authentication
• Settings Context: User preferences
• Data Context: Global data state

### Performance Tips
• Use memo for consumers
• Implement proper updates
• Avoid context nesting
• Use selective updates

### Common Pitfalls
• Unnecessary re-renders
• Missing provider
• Incorrect value updates
• Memory leaks`
  },
  5: {
    title: 'Forms',
    description: 'Understanding form handling in React.',
    explanation: `## Introduction
Forms in React can be handled in two ways: controlled components (where React state is the "single source of truth") and uncontrolled components (where form data is handled by the DOM itself). Each approach has its use cases and benefits.

## Form Handling
• Controlled components
• Uncontrolled components
• Form validation
• Error handling

## Implementation Approaches
1. Controlled Forms
   • State management
   • Real-time validation
   • Form submission
   • Error handling

2. Uncontrolled Forms
   • Refs usage
   • Form submission
   • Validation
   • Data collection

## Developer Cheat Sheet
### Quick Reference
• Controlled Input:
\`\`\`jsx
<input value={value} onChange={handleChange} />
\`\`\`
• Uncontrolled Input:
\`\`\`jsx
<input ref={inputRef} />
\`\`\`
• Form Submit:
\`\`\`jsx
<form onSubmit={handleSubmit}>
\`\`\`
• Form Reset:
\`\`\`jsx
formRef.current.reset()
\`\`\`

### Common Patterns
• Form Validation: Real-time validation
• Form Submission: Handle form data
• Form Reset: Clear form data
• Form State: Track form state

### Performance Tips
• Debounce validation
• Optimize re-renders
• Use proper validation
• Handle large forms

### Common Pitfalls
• Missing validation
• Incorrect state updates
• Form submission issues
• Error handling`
  },
  8: {
    title: 'React Router',
    description: 'Learn about routing in React applications.',
    explanation: `## Introduction
React Router is the standard routing library for React applications. It enables navigation between different components in your app, allowing you to build single-page applications with multiple views and URLs.

## Router Fundamentals
• Route definition
• Route matching
• Route parameters
• Route nesting

## Navigation Methods
1. Link Component
   • Declarative navigation
   • Active link states
   • Route parameters
   • Nested routes

2. Programmatic Navigation
   • useNavigate hook
   • useLocation hook
   • useParams hook
   • useSearchParams hook

## Developer Cheat Sheet
### Quick Reference
• Link:
\`\`\`jsx
<Link to="/path">Link Text</Link>
\`\`\`
• Navigate:
\`\`\`jsx
navigate('/path')
\`\`\`
• Params:
\`\`\`jsx
const { id } = useParams()
\`\`\`
• Location:
\`\`\`jsx
const location = useLocation()
\`\`\`

### Common Patterns
• Protected Routes: Auth protection
• Nested Routes: Route hierarchy
• Query Params: URL parameters
• Route Guards: Access control

### Performance Tips
• Lazy load routes
• Optimize route transitions
• Handle route changes
• Manage route data

### Common Pitfalls
• Missing route parameters
• Incorrect route paths
• Navigation issues
• State preservation`
  },
  10: {
    title: 'Additional Hooks',
    description: 'Explore more advanced React Hooks.',
    explanation: `## Introduction
Beyond the basic hooks (useState, useEffect), React provides additional hooks for specific use cases. These hooks help with performance optimization, complex state management, and DOM manipulation.

## Advanced Hooks
• useReducer - Complex state
• useCallback - Function memoization
• useMemo - Value memoization
• useRef - DOM references

## Hook Usage
1. useReducer
   • Complex state logic
   • Action types
   • State updates
   • State logic

2. useCallback & useMemo
   • Performance optimization
   • Function memoization
   • Value memoization
   • Dependency arrays

## Developer Cheat Sheet
### Quick Reference
• useReducer:
\`\`\`jsx
const [state, dispatch] = useReducer(reducer, initialState)
\`\`\`
• useCallback:
\`\`\`jsx
const memoizedCallback = useCallback(() => {}, [deps])
\`\`\`
• useMemo:
\`\`\`jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])
\`\`\`
• useRef:
\`\`\`jsx
const ref = useRef(initialValue)
\`\`\`

### Common Patterns
• State Management: Complex state logic
• Performance: Memoize expensive operations
• DOM Access: Access DOM elements
• Previous Values: Track previous state

### Performance Tips
• Use proper dependencies
• Implement cleanup
• Avoid unnecessary effects
• Use appropriate hooks

### Common Pitfalls
• Missing dependencies
• Unnecessary memoization
• Memory leaks
• Performance issues`
  },
  11: {
    title: 'Browser Storage',
    description: 'Learn about different browser storage options in React.',
    explanation: `## Introduction
Browser storage provides different ways to persist data in web applications. Each storage type has its own characteristics, use cases, and limitations. Understanding these options helps in choosing the right storage solution for your needs.

## Storage Options
• localStorage - Persistent storage
• sessionStorage - Session storage
• Cookies - HTTP cookies
• IndexedDB - Database storage

## Storage Usage
1. localStorage
   • Persistent data
   • Data retrieval
   • Data updates
   • Data removal

2. sessionStorage
   • Session data
   • Tab-specific storage
   • Temporary data
   • Data cleanup

## Developer Cheat Sheet
### Quick Reference
• localStorage:
\`\`\`jsx
localStorage.setItem(key, value)
\`\`\`
• sessionStorage:
\`\`\`jsx
sessionStorage.setItem(key, value)
\`\`\`
• Cookies:
\`\`\`jsx
document.cookie = "key=value; path=/"
\`\`\`
• Storage Event:
\`\`\`jsx
window.addEventListener('storage', handler)
\`\`\`

### Common Patterns
• Data Persistence: Save user data
• Session Management: Handle user sessions
• Cache Management: Store API responses
• State Recovery: Restore app state

### Performance Tips
• Handle large data
• Implement cleanup
• Use appropriate storage
• Optimize storage usage

### Common Pitfalls
• Storage limits
• Data serialization
• Security issues
• Performance impact`
  },
  12: {
    title: 'API Integration',
    description: 'Learn how to integrate APIs with React applications.',
    explanation: `## Introduction
API integration is a crucial part of modern web applications. React provides various ways to handle API calls, manage loading states, and handle errors. Understanding these patterns helps in building robust applications that communicate with backend services.

## API Concepts
• HTTP methods
• Request/Response
• Data formats
• Error handling

## API Usage
1. Fetch API
   • GET requests
   • POST requests
   • PUT requests
   • DELETE requests

2. Axios
   • Request configuration
   • Response handling
   • Error handling
   • Interceptors

## Developer Cheat Sheet
### Quick Reference
• GET Request:
\`\`\`jsx
fetch(url).then(res => res.json())
\`\`\`
• POST Request:
\`\`\`jsx
fetch(url, { method: 'POST', body: JSON.stringify(data) })
\`\`\`
• Error Handling:
\`\`\`jsx
try/catch with async/await
\`\`\`
• Loading State:
\`\`\`jsx
const [loading, setLoading] = useState(false)
\`\`\`

### Common Patterns
• Data Fetching: Handle API responses
• Error Handling: Manage API errors
• Loading States: Show loading indicators
• Caching: Cache API responses

### Performance Tips
• Implement caching
• Handle timeouts
• Optimize requests
• Manage state

### Common Pitfalls
• Missing error handling
• Race conditions
• CORS issues
• Network errors`
  },
  13: {
    title: 'Higher Order Components',
    description: 'Understanding HOCs and their usage in React.',
    explanation: `## Introduction
Higher Order Components (HOCs) are a pattern derived from React's compositional nature. A HOC is a function that takes a component and returns a new component with additional functionality. This pattern is useful for sharing common functionality between components.

## HOC Concepts
• Component wrapping
• Props manipulation
• State abstraction
• Logic reuse

## HOC Usage
1. With Loading
   • Loading states
   • Data fetching
   • Error handling
   • State management

2. With Authentication
   • Auth checks
   • Route protection
   • User context
   • Permissions

## Developer Cheat Sheet
### Quick Reference
• HOC Pattern:
\`\`\`jsx
const withHOC = (WrappedComponent) => (props) => { ... }
\`\`\`
• Props Forwarding:
\`\`\`jsx
{...props}
\`\`\`
• Display Name:
\`\`\`jsx
WrappedComponent.displayName = 'WithHOC(Component)'
\`\`\`
• Multiple HOCs:
\`\`\`jsx
compose(withHOC1, withHOC2)(Component)
\`\`\`

### Common Patterns
• Loading Wrapper: Handle loading states
• Auth Wrapper: Protect components
• Error Boundary: Handle errors
• Logging Wrapper: Track component usage

### Performance Tips
• Optimize renders
• Handle updates
• Manage state
• Use memoization

### Common Pitfalls
• Prop drilling
• Name collisions
• Component wrapping
• Performance issues`
  },
  14: {
    title: 'JWT Authentication',
    description: 'Learn about JWT authentication in React applications.',
    explanation: `## Introduction
JWT (JSON Web Tokens) is a popular method for handling authentication in web applications. It provides a secure way to transmit information between parties as a JSON object. Understanding JWT implementation is crucial for building secure applications.

## JWT Concepts
• Token structure
• Token validation
• Token storage
• Token refresh

## Authentication Flow
1. Login Process
   • Token creation
   • Token storage
   • Token validation
   • Token refresh

2. Security
   • HTTP-only cookies
   • Token expiration
   • CSRF protection
   • XSS prevention

## Developer Cheat Sheet
### Quick Reference
• Token Storage:
\`\`\`jsx
localStorage.setItem('token', token)
\`\`\`
• Token Validation:
\`\`\`jsx
const isValid = checkToken(token)
\`\`\`
• Token Refresh:
\`\`\`jsx
const newToken = await refreshToken(oldToken)
\`\`\`
• Auth Header:
\`\`\`jsx
headers: { 'Authorization': \`Bearer \${token}\` }
\`\`\`

### Common Patterns
• Token Management: Handle JWT tokens
• Auth State: Track authentication
• Protected Routes: Guard routes
• Token Refresh: Handle token expiration

### Performance Tips
• Handle token refresh
• Optimize validation
• Manage sessions
• Implement caching

### Common Pitfalls
• Token exposure
• Missing validation
• Expiration issues
• Security vulnerabilities`
  },
  15: {
    title: 'Payment Integration',
    description: 'Learn how to integrate payment systems in React applications.',
    explanation: `## Introduction
Payment integration in React applications requires careful consideration of security, user experience, and error handling. Modern payment solutions provide SDKs and APIs to handle sensitive payment data securely.

## Payment Concepts
• Payment methods
• Payment processing
• Payment validation
• Payment security

## Integration Methods
1. Payment Gateways
   • Stripe
   • PayPal
   • Square
   • Custom solutions

2. Payment Forms
   • Card details
   • Validation
   • Error handling
   • Success handling

## Developer Cheat Sheet
### Quick Reference
• Card Validation:
\`\`\`jsx
const isValid = validateCard(cardNumber)
\`\`\`
• Payment Processing:
\`\`\`jsx
const result = await processPayment(paymentData)
\`\`\`
• Error Handling:
\`\`\`jsx
try/catch with payment errors
\`\`\`
• Success Handling:
\`\`\`jsx
handlePaymentSuccess(response)
\`\`\`

### Common Patterns
• Payment Form: Handle card details
• Payment Processing: Process payments
• Error Handling: Manage payment errors
• Success Handling: Handle successful payments

### Performance Tips
• Handle timeouts
• Optimize validation
• Manage state
• Implement retries

### Common Pitfalls
• Security issues
• Validation errors
• Processing failures
• User experience`
  },
  16: {
    title: 'WebSocket',
    description: 'Learn about WebSocket implementation in React applications.',
    explanation: `## Introduction
WebSocket provides a persistent connection between client and server, enabling real-time, bidirectional communication. This is essential for features like chat applications, live updates, and real-time data synchronization.

## WebSocket Concepts
• Persistent connection
• Bidirectional communication
• Real-time updates
• Event-driven architecture

## Implementation
1. Connection Setup
   • WebSocket instance
   • Connection events
   • Error handling
   • Reconnection logic

2. Message Handling
   • Event listeners
   • Message types
   • Data serialization
   • State management

## Developer Cheat Sheet
### Quick Reference
• Connection:
\`\`\`jsx
const ws = new WebSocket(url)
\`\`\`
• Events:
\`\`\`jsx
ws.onopen, ws.onmessage, ws.onclose
\`\`\`
• Send Message:
\`\`\`jsx
ws.send(JSON.stringify(data))
\`\`\`
• Close Connection:
\`\`\`jsx
ws.close()
\`\`\`

### Common Patterns
• Chat Application: Real-time messaging
• Live Updates: Real-time data
• Connection Management: Handle connections
• Message Handling: Process messages

### Performance Tips
• Handle timeouts
• Optimize messages
• Manage connections
• Implement retries

### Common Pitfalls
• Connection issues
• Message handling
• State management
• Performance problems`
  },
  17: {
    title: 'Redux State Management',
    description: 'Learn about Redux for state management in React applications.',
    explanation: `## Introduction
Redux is a predictable state container for JavaScript applications, commonly used with React. It helps manage global state in large applications by providing a centralized store and a unidirectional data flow pattern.

## Core Concepts
• Single source of truth
• State is read-only
• Changes through pure functions
• Predictable state updates

## Redux Components
1. Store
   • State container
   • Action dispatcher
   • State updates
   • Middleware support

2. Actions
   • State changes
   • Type definitions
   • Payload data
   • Action creators

3. Reducers
   • Pure functions
   • State updates
   • Action handling
   • Immutable updates

## Developer Cheat Sheet
### Quick Reference
• Action Type:
\`\`\`jsx
const ACTION_TYPE = 'ACTION_TYPE'
\`\`\`
• Action Creator:
\`\`\`jsx
const action = () => ({ type: ACTION_TYPE })
\`\`\`
• Reducer:
\`\`\`jsx
const reducer = (state, action) => { switch(action.type) { ... } }
\`\`\`
• Store:
\`\`\`jsx
const store = createStore(reducer)
\`\`\`

### Common Patterns
• State Management: Handle global state
• Action Handling: Process actions
• State Updates: Update state
• Middleware: Handle side effects

### Performance Tips
• Use selectors
• Implement memoization
• Handle large state
• Optimize updates

### Common Pitfalls
• Mutating state
• Complex reducers
• Missing middleware
• Performance issues`
  },
  18: {
    title: 'Testing in React',
    description: 'Learn about testing React applications using Jest and React Testing Library.',
    explanation: `## Introduction
Testing is crucial for building reliable React applications. This concept covers different testing approaches, tools, and best practices for testing React components, hooks, and applications.

## Testing Fundamentals
• Unit Testing
• Integration Testing
• End-to-End Testing
• Test-Driven Development (TDD)

## Testing Tools
1. Jest
   • Test runner
   • Assertion library
   • Mocking capabilities
   • Snapshot testing

2. React Testing Library
   • Component testing
   • User interaction testing
   • Accessibility testing
   • Best practices

## Developer Cheat Sheet
### Quick Reference
• Component Test:
\`\`\`jsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('renders component', () => {
  render(<MyComponent />)
  expect(screen.getByText('Hello')).toBeInTheDocument()
})
\`\`\`
• User Interaction:
\`\`\`jsx
test('handles user input', async () => {
  render(<MyComponent />)
  await userEvent.type(screen.getByRole('textbox'), 'Hello')
  expect(screen.getByText('Hello')).toBeInTheDocument()
})
\`\`\`
• Hook Testing:
\`\`\`jsx
import { renderHook } from '@testing-library/react-hooks'

test('custom hook', () => {
  const { result } = renderHook(() => useMyHook())
  expect(result.current.value).toBe('expected')
})
\`\`\`
• Mock API Calls:
\`\`\`jsx
jest.mock('axios')
axios.get.mockResolvedValue({ data: { items: [] } })
\`\`\`

### Common Patterns
• Component Testing: Test component rendering
• Hook Testing: Test custom hooks
• Integration Testing: Test component interactions
• API Testing: Mock API calls

### Performance Tips
• Use proper test isolation
• Implement cleanup
• Mock expensive operations
• Use appropriate matchers

### Common Pitfalls
• Testing implementation details
• Missing async handling
• Incorrect mocking
• Poor test organization`
  },
  19: {
    title: 'Error Handling & Debugging',
    description: 'Learn about error handling, debugging techniques, and developer tools in React.',
    explanation: `## Introduction
Error handling and debugging are essential skills for React developers. This concept covers various techniques for handling errors gracefully, debugging React applications, and using developer tools effectively.

## Error Handling
• Error Boundaries
• Try-Catch Blocks
• Error States
• Fallback UI

## Debugging Tools
1. React DevTools
   • Component inspection
   • Props viewing
   • State monitoring
   • Performance profiling

2. Browser DevTools
   • Console logging
   • Network monitoring
   • Performance analysis
   • Source mapping

## Developer Cheat Sheet
### Quick Reference
• Error Boundary:
\`\`\`jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false }
  
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}
\`\`\`
• Custom Error Hook:
\`\`\`jsx
const useErrorHandler = () => {
  const [error, setError] = useState(null)
  
  const handleError = (error) => {
    setError(error)
    console.error(error)
  }
  
  return { error, handleError }
}
\`\`\`
• Debug Logging:
\`\`\`jsx
useEffect(() => {
  console.log('Component mounted')
  return () => console.log('Component unmounted')
}, [])
\`\`\`
• Performance Monitoring:
\`\`\`jsx
const startTime = performance.now()
// ... code ...
console.log(\`Operation took \${performance.now() - startTime}ms\`)
\`\`\`

### Common Patterns
• Error Boundaries: Catch component errors
• Custom Error Hooks: Handle async errors
• Debug Logging: Track component lifecycle
• Performance Monitoring: Measure operations

### Performance Tips
• Use error boundaries strategically
• Implement proper cleanup
• Monitor performance metrics
• Use appropriate logging levels

### Common Pitfalls
• Missing error boundaries
• Unhandled promises
• Memory leaks
• Excessive logging`
  },
  20: {
    title: 'Internationalization (i18n)',
    description: 'Learn how to make your React applications multilingual using i18n libraries.',
    explanation: `## Introduction
Internationalization (i18n) is the process of making your application support multiple languages and regions. This concept covers how to implement i18n in React applications using popular libraries like react-i18next.

## i18n Fundamentals
• Language switching
• Translation management
• Date formatting
• Number formatting
• RTL support

## Implementation
1. react-i18next
   • Translation files
   • Language detection
   • Dynamic loading
   • Pluralization

2. Formatting
   • Date formatting
   • Number formatting
   • Currency formatting
   • Unit formatting

## Developer Cheat Sheet
### Quick Reference
• Setup i18n:
\`\`\`jsx
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { hello: 'Hello' } },
    es: { translation: { hello: 'Hola' } }
  },
  lng: 'en',
  fallbackLng: 'en'
})
\`\`\`
• Use Translations:
\`\`\`jsx
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t } = useTranslation()
  return <h1>{t('hello')}</h1>
}
\`\`\`
• Language Switch:
\`\`\`jsx
const { i18n } = useTranslation()
const changeLanguage = (lng) => i18n.changeLanguage(lng)
\`\`\`
• Format Date:
\`\`\`jsx
import { format } from 'date-fns'
import { es, enUS } from 'date-fns/locale'

const formatDate = (date, locale) => {
  return format(date, 'PP', { locale: locale === 'es' ? es : enUS })
}
\`\`\`

### Common Patterns
• Language Detection: Auto-detect user language
• Dynamic Loading: Load translations on demand
• Fallback Handling: Handle missing translations
• RTL Support: Support right-to-left languages

### Performance Tips
• Lazy load translations
• Cache translations
• Optimize bundle size
• Use translation keys

### Common Pitfalls
• Missing translations
• Incorrect formatting
• RTL issues
• Performance overhead`
  }
};

// Update the ConceptDetail component to use the conceptData
const ConceptDetail = () => {
  const { id } = useParams();
  const [tabValue, setTabValue] = useState(0);
  const numericId = parseInt(id, 10);
  const concept = conceptData[numericId];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (!concept) {
    return <Typography>Concept not found</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        {concept.title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        {concept.description}
      </Typography>

      <Paper sx={{ mt: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Explanation" />
          <Tab label="Example" />
          <Tab label="Code" />
          <Tab label="Practice" />
        </Tabs>
        <Divider />
        <Box sx={{ p: 3 }}>
          {tabValue === 0 && (
            <Box sx={{ p: 3 }}>
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <Typography 
                      variant="h4" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 600,
                        color: 'primary.main',
                        borderBottom: '2px solid',
                        borderColor: 'primary.main',
                        pb: 1,
                        mb: 3
                      }}
                    >
                      {children}
                    </Typography>
                  ),
                  h2: ({ children }) => (
                    <Typography 
                      variant="h5" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 500,
                        color: 'secondary.main',
                        mt: 4,
                        mb: 2
                      }}
                    >
                      {children}
                    </Typography>
                  ),
                  p: ({ children }) => (
                    <Typography 
                      variant="body1" 
                      paragraph 
                      sx={{ 
                        lineHeight: 1.8,
                        color: 'text.secondary'
                      }}
                    >
                      {children}
                    </Typography>
                  ),
                  ul: ({ children }) => (
                    <Box 
                      component="ul" 
                      sx={{ 
                        pl: 3,
                        mb: 2
                      }}
                    >
                      {children}
                    </Box>
                  ),
                  li: ({ children }) => (
                    <Box 
                      component="li" 
                      sx={{ 
                        mb: 1,
                        display: 'flex',
                        alignItems: 'flex-start'
                      }}
                    >
                      <Typography 
                        component="span" 
                        sx={{ 
                          color: 'primary.main',
                          mr: 1,
                          mt: 0.5
                        }}
                      >
                        •
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'text.secondary',
                          lineHeight: 1.6
                        }}
                      >
                        {children}
                      </Typography>
                    </Box>
                  ),
                  code: ({ children }) => (
                    <Paper 
                      component="code" 
                      sx={{ 
                        p: 1,
                        bgcolor: 'grey.100',
                        borderRadius: 1,
                        fontFamily: 'monospace',
                        fontSize: '0.875rem'
                      }}
                    >
                      {children}
                    </Paper>
                  ),
                  pre: ({ children }) => (
                    <Paper 
                      component="pre" 
                      sx={{ 
                        p: 2,
                        bgcolor: 'grey.100',
                        borderRadius: 1,
                        overflow: 'auto',
                        mb: 2
                      }}
                    >
                      {children}
                    </Paper>
                  ),
                  blockquote: ({ children }) => (
                    <Paper 
                      component="blockquote" 
                      sx={{ 
                        p: 2,
                        borderLeft: '4px solid',
                        borderColor: 'primary.main',
                        bgcolor: 'grey.50',
                        my: 2,
                        fontStyle: 'italic'
                      }}
                    >
                      {children}
                    </Paper>
                  ),
                  table: ({ children }) => (
                    <TableContainer 
                      component={Paper} 
                      sx={{ 
                        my: 2,
                        overflow: 'auto'
                      }}
                    >
                      <Table size="small">
                        {children}
                      </Table>
                    </TableContainer>
                  ),
                  th: ({ children }) => (
                    <TableCell 
                      component="th" 
                      sx={{ 
                        bgcolor: 'grey.100',
                        fontWeight: 600
                      }}
                    >
                      {children}
                    </TableCell>
                  ),
                  td: ({ children }) => (
                    <TableCell>
                      {children}
                    </TableCell>
                  )
                }}
              >
                {concept.explanation || 'No explanation available'}
              </ReactMarkdown>
            </Box>
          )}
          {tabValue === 1 && (
            <Box>
              <ExampleComponent />
            </Box>
          )}
          {tabValue === 2 && (
            <Box>
              <Paper sx={{ p: 2, bgcolor: '#1E1E1E' }}>
                <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                  {getCodeExample(numericId)}
                </SyntaxHighlighter>
              </Paper>
            </Box>
          )}
          {tabValue === 3 && (
            <Box>
              <PracticeQuestions
                conceptId={numericId}
                questions={practiceQuestions[numericId]?.questions}
              />
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default ConceptDetail; 