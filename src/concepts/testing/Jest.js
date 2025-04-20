import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import CodeBlock from '../../components/common/CodeBlock';
import Demo from '../../components/common/Demo';

const Jest = () => {
  const jestExampleCode = `
// Basic Jest Test
describe('Math operations', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

  test('multiplies 2 * 3 to equal 6', () => {
    expect(2 * 3).toBe(6);
  });
});

// Testing React Components
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button component', () => {
  test('renders button with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    userEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

// Mocking
jest.mock('./api');

describe('UserProfile component', () => {
  test('displays user data after fetch', async () => {
    const mockUser = { name: 'John', email: 'john@example.com' };
    fetchUser.mockResolvedValue(mockUser);

    render(<UserProfile userId="123" />);
    
    expect(await screen.findByText('John')).toBeInTheDocument();
  });
});

// Snapshot Testing
describe('Card component', () => {
  test('matches snapshot', () => {
    const { container } = render(<Card title="Test" />);
    expect(container).toMatchSnapshot();
  });
});
`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Jest Testing
      </Typography>
      
      <Typography variant="body1" paragraph>
        Jest is a JavaScript testing framework that works with projects using Babel, TypeScript, Node, React, Angular, Vue and more.
      </Typography>

      <Demo title="Jest Testing Demo" description="Interactive examples of Jest testing">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h6">Test Examples</Typography>
          <Typography>
            1. Basic assertions
            2. Component testing
            3. Mocking
            4. Snapshot testing
          </Typography>
        </Box>
      </Demo>

      <CodeBlock code={jestExampleCode} title="Jest Example Code" />

      <Paper sx={{ p: 2, mt: 2, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>
          Things to Remember
        </Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li>Test Structure Rules:
              <ul>
                <li>Use describe for grouping tests</li>
                <li>Use test or it for individual tests</li>
                <li>Write clear test descriptions</li>
                <li>Follow AAA pattern (Arrange, Act, Assert)</li>
              </ul>
            </li>
            <li>Assertion Rules:
              <ul>
                <li>Use appropriate matchers</li>
                <li>Test one thing per test</li>
                <li>Make assertions specific</li>
                <li>Use async/await for asynchronous tests</li>
              </ul>
            </li>
            <li>Mocking Rules:
              <ul>
                <li>Mock external dependencies</li>
                <li>Use jest.fn() for functions</li>
                <li>Mock API calls</li>
                <li>Reset mocks between tests</li>
              </ul>
            </li>
            <li>Best Practices:
              <ul>
                <li>Keep tests independent</li>
                <li>Use meaningful test names</li>
                <li>Maintain test coverage</li>
                <li>Review snapshots regularly</li>
              </ul>
            </li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Jest; 