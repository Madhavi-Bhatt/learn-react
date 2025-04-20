import React from 'react';
import { 
  Typography, 
  Box, 
  Paper, 
  Button,
  Link,
  Alert
} from '@mui/material';
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link as RouterLink,
  useParams,
  useNavigate,
  Navigate
} from 'react-router-dom';
import CodeBlock from '../../components/common/CodeBlock';
import Demo from '../../components/common/Demo';

// Demo Pages
const Home = () => (
  <Box>
    <Typography variant="h5">Home Page</Typography>
    <Typography>Welcome to our React Learning Platform!</Typography>
  </Box>
);

const About = () => (
  <Box>
    <Typography variant="h5">About Page</Typography>
    <Typography>Learn about React concepts and best practices.</Typography>
  </Box>
);

const UserProfile = () => {
  const { userId } = useParams();
  return (
    <Box>
      <Typography variant="h5">User Profile</Typography>
      <Typography>User ID: {userId}</Typography>
    </Box>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/profile/1');
  };

  return (
    <Box>
      <Typography variant="h5">Login Page</Typography>
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

// Protected Route Component
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Router Demo Component
const RouterDemo = () => {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link component={RouterLink} to="/">Home</Link>
          <Link component={RouterLink} to="/about">About</Link>
          <Link component={RouterLink} to="/profile/1">Profile</Link>
          <Link component={RouterLink} to="/login">Login</Link>
        </Box>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="/profile/:userId" 
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            } 
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

const Router = () => {
  const routerExampleCode = `
// Basic Router Setup
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

// Route Parameters
const UserProfile = () => {
  const { userId } = useParams();
  return <div>User ID: {userId}</div>;
};

// Protected Routes
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Navigation
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/profile/1');
  };

  return <button onClick={handleLogin}>Login</button>;
};

// Nested Routes
const Dashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};
`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        React Router
      </Typography>
      
      <Typography variant="body1" paragraph>
        React Router is a standard library for routing in React applications. It enables navigation between different components while maintaining the single-page application (SPA) behavior.
      </Typography>

      <Demo title="Router Demo" description="Navigation between different pages with protected routes">
        <RouterDemo />
      </Demo>

      <CodeBlock code={routerExampleCode} title="Router Example Code" />

      <Paper sx={{ p: 2, mt: 2, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>
          Things to Remember
        </Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li>Router Setup Rules:
              <ul>
                <li>Wrap app with BrowserRouter</li>
                <li>Define routes in Routes component</li>
                <li>Use Route for each path</li>
                <li>Handle 404 routes</li>
              </ul>
            </li>
            <li>Navigation Rules:
              <ul>
                <li>Use Link for navigation</li>
                <li>Use useNavigate for programmatic navigation</li>
                <li>Handle navigation events</li>
                <li>Preserve navigation history</li>
              </ul>
            </li>
            <li>Route Parameters Rules:
              <ul>
                <li>Use :paramName syntax</li>
                <li>Access with useParams hook</li>
                <li>Validate parameters</li>
                <li>Handle optional parameters</li>
              </ul>
            </li>
            <li>Best Practices:
              <ul>
                <li>Organize routes logically</li>
                <li>Use nested routes when needed</li>
                <li>Implement route guards</li>
                <li>Handle loading states</li>
              </ul>
            </li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Router; 