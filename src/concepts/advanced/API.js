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
  CircularProgress,
  Alert
} from '@mui/material';
import CodeBlock from '../../components/common/CodeBlock';
import Demo from '../../components/common/Demo';

// API Service
const apiService = {
  baseURL: 'https://jsonplaceholder.typicode.com',

  async get(endpoint) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  async post(endpoint, data) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
};

// Custom Hook for API Calls
const useApi = (endpoint, method = 'GET', data = null) => {
  const [result, setResult] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = method === 'GET' 
          ? await apiService.get(endpoint)
          : await apiService.post(endpoint, data);
        setResult(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, method, data]);

  return { result, loading, error };
};

// Demo Components
const PostsList = () => {
  const { result: posts, loading, error } = useApi('/posts');

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <List>
      {posts?.slice(0, 5).map(post => (
        <ListItem key={post.id}>
          <ListItemText
            primary={post.title}
            secondary={post.body}
          />
        </ListItem>
      ))}
    </List>
  );
};

const CreatePost = () => {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [result, setResult] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await apiService.post('/posts', { title, body });
      setResult(response);
      setTitle('');
      setBody('');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
        multiline
        rows={4}
        fullWidth
      />
      {error && <Alert severity="error">{error}</Alert>}
      {result && <Alert severity="success">Post created successfully!</Alert>}
      <Button
        type="submit"
        variant="contained"
        disabled={loading}
        fullWidth
      >
        {loading ? <CircularProgress size={24} /> : 'Create Post'}
      </Button>
    </Box>
  );
};

const API = () => {
  const apiExampleCode = `
// API Service
const apiService = {
  baseURL: 'https://api.example.com',

  async get(endpoint) {
    try {
      const response = await fetch(\`\${this.baseURL}\${endpoint}\`);
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  async post(endpoint, data) {
    try {
      const response = await fetch(\`\${this.baseURL}\${endpoint}\`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
};

// Custom Hook for API Calls
const useApi = (endpoint, method = 'GET', data = null) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = method === 'GET' 
          ? await apiService.get(endpoint)
          : await apiService.post(endpoint, data);
        setResult(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, method, data]);

  return { result, loading, error };
};

// Usage Example
const PostsList = () => {
  const { result: posts, loading, error } = useApi('/posts');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {posts?.map(post => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};
`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        API Integration
      </Typography>
      
      <Typography variant="body1" paragraph>
        API integration in React involves making HTTP requests to external services and handling the responses. This concept covers different approaches to API integration, including using fetch, axios, and custom hooks.
      </Typography>

      <Demo title="API Integration Demo" description="Examples of API integration with custom hooks">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Fetch Posts (GET Request)
            </Typography>
            <PostsList />
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Create Post (POST Request)
            </Typography>
            <CreatePost />
          </Box>
        </Box>
      </Demo>

      <CodeBlock code={apiExampleCode} title="API Integration Example Code" />

      <Paper sx={{ p: 2, mt: 2, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>
          Things to Remember
        </Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li>API Integration Methods:
              <ul>
                <li>Fetch API</li>
                <li>Axios</li>
                <li>Custom hooks</li>
                <li>React Query</li>
              </ul>
            </li>
            <li>Error Handling:
              <ul>
                <li>Handle network errors</li>
                <li>Handle API errors</li>
                <li>Show error messages</li>
                <li>Implement retry logic</li>
              </ul>
            </li>
            <li>Loading States:
              <ul>
                <li>Show loading indicators</li>
                <li>Disable buttons during requests</li>
                <li>Handle race conditions</li>
                <li>Cancel pending requests</li>
              </ul>
            </li>
            <li>Best Practices:
              <ul>
                <li>Use environment variables</li>
                <li>Implement request caching</li>
                <li>Handle offline scenarios</li>
                <li>Implement rate limiting</li>
              </ul>
            </li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
};

export default API; 