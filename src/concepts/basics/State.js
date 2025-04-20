import React, { useState, useEffect } from 'react';
import { Typography, Box, Paper, Button, CircularProgress } from '@mui/material';
import CodeBlock from '../../components/common/CodeBlock';
import Demo from '../../components/common/Demo';

const State = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setData({ message: 'Data loaded!' });
      setIsLoading(false);
    }, 2000);
  }, []);

  const stateExampleCode = `
import React, { useState } from 'react';

const StateExample = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};
`;

  const lifecycleExampleCode = `
import React, { useState, useEffect } from 'react';

const LifecycleExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when component mounts
    fetchData().then(result => {
      setData(result);
      setLoading(false);
    });

    // Cleanup when component unmounts
    return () => {
      // Cleanup code here
    };
  }, []); // Empty dependency array means run once on mount

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>{data}</p>}
    </div>
  );
};
`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        State & Lifecycle
      </Typography>
      
      <Typography variant="body1" paragraph>
        State allows components to keep track of changing data and re-render when that data changes.
      </Typography>

      <Demo title="State Example" description="A simple counter using useState">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Typography>Count: {count}</Typography>
          <Button variant="contained" onClick={() => setCount(count + 1)}>
            Increment
          </Button>
        </Box>
      </Demo>
      <CodeBlock code={stateExampleCode} title="State Example Code" />

      <Demo title="Lifecycle Example" description="Data fetching with useEffect">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Typography>{data?.message}</Typography>
          )}
        </Box>
      </Demo>
      <CodeBlock code={lifecycleExampleCode} title="Lifecycle Example Code" />

      <Paper sx={{ p: 2, mt: 2, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>
          Things to Remember
        </Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li>Never modify state directly (use setState or useState)</li>
            <li>State updates are asynchronous</li>
            <li>Multiple state updates are batched</li>
            <li>State updates trigger re-renders</li>
            <li>useState Hook must be called at the top level</li>
            <li>Don't call hooks inside loops or conditions</li>
            <li>Use array destructuring for state and setter</li>
            <li>Initialize with appropriate default value</li>
            <li>setState can accept function or value</li>
            <li>Use functional updates for dependent updates</li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
};

export default State; 