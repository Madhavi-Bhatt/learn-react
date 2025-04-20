import React, { createContext, useContext, useState } from 'react';
import { 
  Typography, 
  Box, 
  Paper, 
  Button,
  Switch,
  FormControlLabel
} from '@mui/material';
import CodeBlock from '../../components/common/CodeBlock';
import Demo from '../../components/common/Demo';

// Create context
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

// Provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Consumer component
const ThemeConsumer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Box sx={{ 
      p: 2, 
      bgcolor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff'
    }}>
      <Typography variant="h6">Current Theme: {theme}</Typography>
      <FormControlLabel
        control={
          <Switch
            checked={theme === 'dark'}
            onChange={toggleTheme}
            color="primary"
          />
        }
        label="Toggle Theme"
      />
    </Box>
  );
};

const Context = () => {
  const contextExampleCode = `
// Create Context
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

// Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Consumer Component
const ThemeConsumer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ 
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff'
    }}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// Usage
const App = () => {
  return (
    <ThemeProvider>
      <ThemeConsumer />
    </ThemeProvider>
  );
};
`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Context API
      </Typography>
      
      <Typography variant="body1" paragraph>
        Context provides a way to pass data through the component tree without having to pass props manually at every level.
      </Typography>

      <Demo title="Context Demo" description="Theme switching using Context">
        <ThemeProvider>
          <ThemeConsumer />
        </ThemeProvider>
      </Demo>

      <CodeBlock code={contextExampleCode} title="Context Example Code" />

      <Paper sx={{ p: 2, mt: 2, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>
          Things to Remember
        </Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li>Context Creation Rules:
              <ul>
                <li>Create context with default values</li>
                <li>Place context in separate file</li>
                <li>Export context and provider</li>
                <li>Use meaningful context names</li>
              </ul>
            </li>
            <li>Provider Rules:
              <ul>
                <li>Wrap components that need context</li>
                <li>Provide all required values</li>
                <li>Handle state updates</li>
                <li>Consider performance impact</li>
              </ul>
            </li>
            <li>Consumer Rules:
              <ul>
                <li>Use useContext hook</li>
                <li>Access only needed values</li>
                <li>Handle undefined values</li>
                <li>Consider re-renders</li>
              </ul>
            </li>
            <li>Best Practices:
              <ul>
                <li>Split contexts by concern</li>
                <li>Use context for global state</li>
                <li>Consider alternatives for local state</li>
                <li>Monitor context performance</li>
              </ul>
            </li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Context; 