import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import CodeBlock from '../../components/common/CodeBlock';
import Demo from '../../components/common/Demo';

const ReactTestingLibrary = () => {
  const rtlExampleCode = `
// Basic Component Testing
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('LoginForm', () => {
  test('submits form with correct data', async () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onSubmit={handleSubmit} />);

    // Find elements by role and label
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Simulate user interactions
    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, 'password123');
    await userEvent.click(submitButton);

    // Assertions
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123'
    });
  });
});

// Testing Async Operations
describe('UserProfile', () => {
  test('loads and displays user data', async () => {
    render(<UserProfile userId="123" />);

    // Wait for loading state to disappear
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    
    // Wait for data to load
    const userName = await screen.findByText('John Doe');
    expect(userName).toBeInTheDocument();
  });
});

// Testing Error States
describe('ErrorBoundary', () => {
  test('displays error message when component fails', () => {
    render(
      <ErrorBoundary>
        <FailingComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });
});

// Testing Custom Hooks
import { renderHook, act } from '@testing-library/react-hooks';

describe('useCounter', () => {
  test('increments counter', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        React Testing Library
      </Typography>
      
      <Typography variant="body1" paragraph>
        React Testing Library is a very light-weight solution for testing React components. It provides utility functions on top of react-dom and react-dom/test-utils in a way that encourages better testing practices.
      </Typography>

      <Demo title="React Testing Library Demo" description="Interactive examples of React Testing Library">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h6">Testing Examples</Typography>
          <Typography>
            1. Component rendering
            2. User interactions
            3. Async operations
            4. Error handling
            5. Custom hooks testing
          </Typography>
        </Box>
      </Demo>

      <CodeBlock code={rtlExampleCode} title="React Testing Library Example Code" />

      <Paper sx={{ p: 2, mt: 2, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>
          Things to Remember
        </Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li>Query Rules:
              <ul>
                <li>Use getByRole when possible</li>
                <li>Use getByLabelText for form inputs</li>
                <li>Use getByText as a last resort</li>
                <li>Avoid test IDs unless necessary</li>
              </ul>
            </li>
            <li>User Interaction Rules:
              <ul>
                <li>Use userEvent over fireEvent</li>
                <li>Handle async operations properly</li>
                <li>Test user flows, not implementation</li>
                <li>Simulate real user behavior</li>
              </ul>
            </li>
            <li>Assertion Rules:
              <ul>
                <li>Test what users see</li>
                <li>Test accessibility</li>
                <li>Test error states</li>
                <li>Test loading states</li>
              </ul>
            </li>
            <li>Best Practices:
              <ul>
                <li>Write maintainable tests</li>
                <li>Test behavior, not implementation</li>
                <li>Use meaningful queries</li>
                <li>Keep tests focused</li>
              </ul>
            </li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
};

export default ReactTestingLibrary; 