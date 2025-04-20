import React from 'react';
import { 
  Typography, 
  Box, 
  Paper, 
  Button,
  CircularProgress,
  Alert
} from '@mui/material';
import CodeBlock from '../../components/common/CodeBlock';
import Demo from '../../components/common/Demo';

// Example Components
const UserCard = ({ user, loading }) => (
  <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
    {loading ? (
      <CircularProgress size={20} />
    ) : (
      <>
        <Typography variant="h6">{user.name}</Typography>
        <Typography>{user.email}</Typography>
      </>
    )}
  </Box>
);

const ProductCard = ({ product, loading }) => (
  <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
    {loading ? (
      <CircularProgress size={20} />
    ) : (
      <>
        <Typography variant="h6">{product.name}</Typography>
        <Typography>${product.price}</Typography>
      </>
    )}
  </Box>
);

// HOCs
const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    return (
      <Box>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <WrappedComponent {...props} />
        )}
      </Box>
    );
  };
};

const withData = (WrappedComponent, fetchData) => {
  return function WithDataComponent(props) {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
      const loadData = async () => {
        try {
          const result = await fetchData(props);
          setData(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      loadData();
    }, [props]);

    return (
      <Box>
        {error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <WrappedComponent data={data} loading={loading} {...props} />
        )}
      </Box>
    );
  };
};

const withErrorBoundary = (WrappedComponent) => {
  return class WithErrorBoundary extends React.Component {
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }

    render() {
      if (this.state.hasError) {
        return (
          <Alert severity="error">
            Something went wrong: {this.state.error?.message}
          </Alert>
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

// Enhanced Components
const UserCardWithLoading = withLoading(UserCard);
const ProductCardWithLoading = withLoading(ProductCard);

const UserList = withData(
  ({ data, loading }) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {data?.map(user => (
        <UserCardWithLoading
          key={user.id}
          user={user}
          loading={loading}
        />
      ))}
    </Box>
  ),
  async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ];
  }
);

const HOC = () => {
  const hocExampleCode = `
// Basic HOC
const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    return (
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <WrappedComponent {...props} />
        )}
      </div>
    );
  };
};

// Data Fetching HOC
const withData = (WrappedComponent, fetchData) => {
  return function WithDataComponent(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const loadData = async () => {
        try {
          const result = await fetchData(props);
          setData(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      loadData();
    }, [props]);

    return (
      <div>
        {error ? (
          <div>Error: {error}</div>
        ) : (
          <WrappedComponent data={data} loading={loading} {...props} />
        )}
      </div>
    );
  };
};

// Error Boundary HOC
const withErrorBoundary = (WrappedComponent) => {
  return class WithErrorBoundary extends React.Component {
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }

    render() {
      if (this.state.hasError) {
        return <div>Something went wrong</div>;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

// Usage Example
const UserCard = ({ user }) => (
  <div>
    <h3>{user.name}</h3>
    <p>{user.email}</p>
  </div>
);

const UserCardWithLoading = withLoading(UserCard);
const UserListWithData = withData(
  ({ data }) => (
    <div>
      {data.map(user => (
        <UserCardWithLoading
          key={user.id}
          user={user}
          isLoading={false}
        />
      ))}
    </div>
  ),
  async () => {
    const response = await fetch('/api/users');
    return response.json();
  }
);
`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Higher Order Components (HOC)
      </Typography>
      
      <Typography variant="body1" paragraph>
        Higher Order Components (HOC) is a pattern derived from React's compositional nature. HOCs are functions that take a component and return a new component with additional functionality.
      </Typography>

      <Demo title="HOC Demo" description="Examples of Higher Order Components">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h6">User List with Loading State</Typography>
          <UserList />
        </Box>
      </Demo>

      <CodeBlock code={hocExampleCode} title="HOC Example Code" />

      <Paper sx={{ p: 2, mt: 2, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>
          Things to Remember
        </Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li>HOC Rules:
              <ul>
                <li>Don't modify the wrapped component</li>
                <li>Pass through unrelated props</li>
                <li>Use displayName for debugging</li>
                <li>Handle refs properly</li>
              </ul>
            </li>
            <li>Common Use Cases:
              <ul>
                <li>Code reuse</li>
                <li>State abstraction</li>
                <li>Props manipulation</li>
                <li>Error handling</li>
              </ul>
            </li>
            <li>Best Practices:
              <ul>
                <li>Keep HOCs focused</li>
                <li>Use composition over inheritance</li>
                <li>Consider performance impact</li>
                <li>Document HOC behavior</li>
              </ul>
            </li>
            <li>Performance Considerations:
              <ul>
                <li>Memoize callbacks</li>
                <li>Use React.memo when needed</li>
                <li>Avoid unnecessary re-renders</li>
                <li>Profile performance impact</li>
              </ul>
            </li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
};

export default HOC; 