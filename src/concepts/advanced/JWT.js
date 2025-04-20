import React from 'react';
import { 
  Typography, 
  Box, 
  Paper, 
  Button,
  TextField,
  Alert,
  CircularProgress
} from '@mui/material';
import CodeBlock from '../../components/common/CodeBlock';
import Demo from '../../components/common/Demo';

// Mock Auth Service
const mockAuthService = {
  login: async (credentials) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (credentials.email === 'test@example.com' && credentials.password === 'password') {
      return {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTYiLCJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MTUxNjIzOTAyM30.4Adcj3UFYzPUVaVF43FmMze6QnqWgN3U5lD3M6Q5Y8k',
        user: {
          id: '123456',
          email: 'test@example.com',
          name: 'Test User'
        }
      };
    }
    throw new Error('Invalid credentials');
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: () => {
    const token = localStorage.getItem('token');
    if (!token) return false;
    // In a real app, you would verify the token's validity
    return true;
  }
};

// Auth Context
const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const user = mockAuthService.getCurrentUser();
    if (user) {
      setUser(user);
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const { token, user } = await mockAuthService.login(credentials);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      return user;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    mockAuthService.logout();
    setUser(null);
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = React.useContext(AuthContext);
  
  if (!user) {
    return <Alert severity="error">Please log in to access this page</Alert>;
  }

  return children;
};

// Login Form Component
const LoginForm = () => {
  const { login } = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login({ email, password });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
      />
      {error && <Alert severity="error">{error}</Alert>}
      <Button
        type="submit"
        variant="contained"
        disabled={loading}
        fullWidth
      >
        {loading ? <CircularProgress size={24} /> : 'Login'}
      </Button>
    </Box>
  );
};

// Demo Component
const JWTDemo = () => {
  const { user, logout } = React.useContext(AuthContext);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {user ? (
        <>
          <Alert severity="success">
            Welcome, {user.name}!
          </Alert>
          <Button variant="outlined" onClick={logout}>
            Logout
          </Button>
        </>
      ) : (
        <LoginForm />
      )}
    </Box>
  );
};

const JWT = () => {
  const jwtExampleCode = `
// Auth Service
const authService = {
  login: async (credentials) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    
    if (!response.ok) {
      throw new Error('Login failed');
    }
    
    const { token, user } = await response.json();
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    return { token, user };
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: () => {
    const token = localStorage.getItem('token');
    if (!token) return false;
    // Verify token validity
    return true;
  }
};

// Auth Context
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setUser(user);
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const { token, user } = await authService.login(credentials);
      setUser(user);
      return user;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Protected Route
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

// Login Form
const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login({ email, password });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      {error && <div className="error">{error}</div>}
      <button type="submit" disabled={loading}>
        {loading ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
};
`;

  return (
    <AuthProvider>
      <Box>
        <Typography variant="h4" gutterBottom>
          JWT Authentication
        </Typography>
        
        <Typography variant="body1" paragraph>
          JWT (JSON Web Token) authentication is a stateless method of securely transmitting information between parties as a JSON object. It's commonly used in web applications for user authentication and authorization.
        </Typography>

        <Demo title="JWT Authentication Demo" description="Example of JWT authentication flow">
          <JWTDemo />
        </Demo>

        <CodeBlock code={jwtExampleCode} title="JWT Authentication Example Code" />

        <Paper sx={{ p: 2, mt: 2, bgcolor: '#f5f5f5' }}>
          <Typography variant="h6" gutterBottom>
            Things to Remember
          </Typography>
          <Typography variant="body2" component="div">
            <ul>
              <li>JWT Structure:
                <ul>
                  <li>Header (algorithm & token type)</li>
                  <li>Payload (claims)</li>
                  <li>Signature (verification)</li>
                </ul>
              </li>
              <li>Security Best Practices:
                <ul>
                  <li>Use HTTPS</li>
                  <li>Set appropriate expiration</li>
                  <li>Store tokens securely</li>
                  <li>Implement refresh tokens</li>
                </ul>
              </li>
              <li>Token Management:
                <ul>
                  <li>Store in secure HTTP-only cookies</li>
                  <li>Implement token refresh mechanism</li>
                  <li>Handle token expiration</li>
                  <li>Clear tokens on logout</li>
                </ul>
              </li>
              <li>Error Handling:
                <ul>
                  <li>Handle invalid tokens</li>
                  <li>Handle expired tokens</li>
                  <li>Handle network errors</li>
                  <li>Implement retry mechanism</li>
                </ul>
              </li>
            </ul>
          </Typography>
        </Paper>
      </Box>
    </AuthProvider>
  );
};

export default JWT; 