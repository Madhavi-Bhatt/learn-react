import React from 'react';
import { 
  Typography, 
  Box, 
  Paper, 
  Button,
  TextField,
  Switch,
  FormControlLabel,
  CircularProgress
} from '@mui/material';
import CodeBlock from '../../components/common/CodeBlock';
import Demo from '../../components/common/Demo';

// Custom Hooks
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

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

const useFetch = (url) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

const useWindowSize = () => {
  const [size, setSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  React.useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

// Demo Component
const AdditionalHooksDemo = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1');
  const windowSize = useWindowSize();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6">Debounce Demo</Typography>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
      />
      <Typography>Debounced value: {debouncedSearchTerm}</Typography>

      <Typography variant="h6">Local Storage Demo</Typography>
      <FormControlLabel
        control={
          <Switch
            checked={theme === 'dark'}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          />
        }
        label="Dark Mode"
      />
      <Typography>Current theme: {theme}</Typography>

      <Typography variant="h6">Fetch Demo</Typography>
      {loading ? (
        <CircularProgress size={20} />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <Typography>{JSON.stringify(data)}</Typography>
      )}

      <Typography variant="h6">Window Size Demo</Typography>
      <Typography>
        Width: {windowSize.width}, Height: {windowSize.height}
      </Typography>
    </Box>
  );
};

const AdditionalHooks = () => {
  const hooksExampleCode = `
// Debounce Hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

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

// Fetch Hook
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Window Size Hook
const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};
`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Additional Hooks
      </Typography>
      
      <Typography variant="body1" paragraph>
        Custom hooks allow you to extract component logic into reusable functions. They follow the naming convention "use" and can combine multiple React hooks.
      </Typography>

      <Demo title="Custom Hooks Demo" description="Examples of custom hooks">
        <AdditionalHooksDemo />
      </Demo>

      <CodeBlock code={hooksExampleCode} title="Custom Hooks Example Code" />

      <Paper sx={{ p: 2, mt: 2, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>
          Things to Remember
        </Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li>Custom Hook Rules:
              <ul>
                <li>Name must start with "use"</li>
                <li>Can only call other hooks at the top level</li>
                <li>Can only be called from React components or other hooks</li>
                <li>Must follow React's rules of hooks</li>
              </ul>
            </li>
            <li>Common Use Cases:
              <ul>
                <li>Data fetching</li>
                <li>Form handling</li>
                <li>Browser APIs</li>
                <li>State management</li>
              </ul>
            </li>
            <li>Best Practices:
              <ul>
                <li>Keep hooks focused and single-purpose</li>
                <li>Handle cleanup in useEffect</li>
                <li>Memoize expensive computations</li>
                <li>Document hook parameters and return values</li>
              </ul>
            </li>
            <li>Performance Considerations:
              <ul>
                <li>Use useCallback for functions</li>
                <li>Use useMemo for values</li>
                <li>Avoid unnecessary re-renders</li>
                <li>Clean up subscriptions and listeners</li>
              </ul>
            </li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
};

export default AdditionalHooks; 