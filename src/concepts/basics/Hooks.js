import React, { useState, useEffect, useContext, useRef } from 'react';
import { Typography, Box, Paper, Button, TextField } from '@mui/material';
import CodeBlock from '../../components/common/CodeBlock';
import Demo from '../../components/common/Demo';

// Create a context for the demo
const ThemeContext = React.createContext('light');

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const useStateExampleCode = `
import React, { useState } from 'react';

const UseStateExample = () => {
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

  const useEffectExampleCode = `
import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

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

  const useContextExampleCode = `
import React, { createContext, useContext } from 'react';

const ThemeContext = React.createContext('light');

const UseContextExample = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ 
      backgroundColor: theme === 'light' ? '#fff' : '#000',
      color: theme === 'light' ? '#000' : '#fff'
    }}>
      Current theme: {theme}
    </div>
  );
};
`;

  const useRefExampleCode = `
import React, { useRef } from 'react';

const UseRefExample = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </div>
  );
};
`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        React Hooks
      </Typography>
      
      <Typography variant="body1" paragraph>
        Hooks are functions that let you "hook into" React state and lifecycle features from function components.
      </Typography>

      <Demo title="useState Hook" description="Managing state in functional components">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Typography>Count: {count}</Typography>
          <Button variant="contained" onClick={() => setCount(count + 1)}>
            Increment
          </Button>
        </Box>
      </Demo>
      <CodeBlock code={useStateExampleCode} title="useState Example Code" />

      <Demo title="useEffect Hook" description="Handling side effects">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Typography>Count: {count}</Typography>
          <Typography variant="caption">Check the page title!</Typography>
          <Button variant="contained" onClick={() => setCount(count + 1)}>
            Update Title
          </Button>
        </Box>
      </Demo>
      <CodeBlock code={useEffectExampleCode} title="useEffect Example Code" />

      <Demo title="useContext Hook" description="Accessing context values">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: 2,
          p: 2,
          bgcolor: theme === 'light' ? '#fff' : '#000',
          color: theme === 'light' ? '#000' : '#fff',
          borderRadius: 1
        }}>
          <Typography>Current theme: {theme}</Typography>
        </Box>
      </Demo>
      <CodeBlock code={useContextExampleCode} title="useContext Example Code" />

      <Demo title="useRef Hook" description="Accessing DOM elements">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <TextField
            inputRef={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type something..."
          />
          <Button variant="contained" onClick={() => inputRef.current.focus()}>
            Focus Input
          </Button>
        </Box>
      </Demo>
      <CodeBlock code={useRefExampleCode} title="useRef Example Code" />

      <Paper sx={{ p: 2, mt: 2, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>
          Things to Remember
        </Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li>Only call hooks at the top level</li>
            <li>Don't call hooks inside loops or conditions</li>
            <li>Only call hooks from React function components</li>
            <li>Hook names must start with "use"</li>
            <li>useState Hook:
              <ul>
                <li>const [state, setState] = useState(initialValue)</li>
                <li>setState can be function or value</li>
                <li>State updates are asynchronous</li>
                <li>Multiple state updates are batched</li>
              </ul>
            </li>
            <li>useEffect Hook:
              <ul>
                <li>useEffect(() => {}, [dependencies])</li>
                <li>Empty array for mount/unmount only</li>
                <li>No array for every render</li>
                <li>Cleanup function optional</li>
              </ul>
            </li>
            <li>useContext Hook:
              <ul>
                <li>const value = useContext(MyContext)</li>
                <li>Must be used within Provider</li>
                <li>Re-renders on context changes</li>
                <li>Avoid unnecessary context updates</li>
              </ul>
            </li>
            <li>useRef Hook:
              <ul>
                <li>const ref = useRef(initialValue)</li>
                <li>.current property for value</li>
                <li>Changes don't trigger re-renders</li>
                <li>Persists between renders</li>
              </ul>
            </li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Hooks; 