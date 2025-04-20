import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import CodeBlock from '../../components/common/CodeBlock';
import Demo from '../../components/common/Demo';

const Components = () => {
  const simpleComponentCode = `
import React from 'react';

const SimpleComponent = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default SimpleComponent;
`;

  const userCardCode = `
import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

const UserCard = ({ user }) => {
  return (
    <Card>
      <CardContent>
        <Avatar>{user.name[0]}</Avatar>
        <Typography variant="h6">{user.name}</Typography>
        <Typography color="textSecondary">{user.email}</Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
`;

  const counterCode = `
import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <Box>
      <Typography>Count: {count}</Typography>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={() => setCount(count - 1)}>Decrement</Button>
    </Box>
  );
};

export default Counter;
`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Components & Props
      </Typography>
      
      <Typography variant="body1" paragraph>
        Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces.
      </Typography>

      <Demo title="Simple Component" description="A basic component that accepts a name prop">
        <SimpleComponent name="React Developer" />
      </Demo>
      <CodeBlock code={simpleComponentCode} title="Simple Component Code" />

      <Demo title="User Card Component" description="A more complex component that displays user information">
        <UserCard user={{ name: 'John Doe', email: 'john@example.com' }} />
      </Demo>
      <CodeBlock code={userCardCode} title="User Card Component Code" />

      <Demo title="Counter Component" description="A component with internal state">
        <Counter initialValue={5} />
      </Demo>
      <CodeBlock code={counterCode} title="Counter Component Code" />

      <Paper sx={{ p: 2, mt: 2, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>
          Things to Remember
        </Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li>Components must start with a capital letter</li>
            <li>Props are read-only (immutable)</li>
            <li>Use destructuring for cleaner prop access</li>
            <li>Keep components focused and single-responsibility</li>
            <li>Use meaningful prop names</li>
            <li>Document props with PropTypes or TypeScript</li>
            <li>Avoid prop drilling</li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Components; 