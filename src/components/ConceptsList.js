import React from 'react';
import { Typography, Grid, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const concepts = [
  {
    id: 1,
    title: 'Components & Props',
    description: 'Learn about React components, how to create them, and how to pass data between components using props.',
    difficulty: 'Beginner',
  },
  {
    id: 2,
    title: 'State & Lifecycle',
    description: 'Understanding component state, lifecycle methods, and how to manage component data and side effects.',
    difficulty: 'Intermediate',
  },
  {
    id: 3,
    title: 'Hooks',
    description: 'Explore React Hooks including useState, useEffect, useContext, and custom hooks.',
    difficulty: 'Intermediate',
  },
  {
    id: 4,
    title: 'Context',
    description: 'Learn about React Context API and how to manage global state in your application.',
    difficulty: 'Advanced',
  },
  {
    id: 5,
    title: 'Forms & Events',
    description: 'Master form handling, event handling, and user input in React applications.',
    difficulty: 'Intermediate',
  },
  {
    id: 8,
    title: 'React Router',
    description: 'Learn about routing in React applications, including navigation, route parameters, and protected routes.',
    difficulty: 'Intermediate',
  },
  {
    id: 13,
    title: 'Higher Order Components',
    description: 'Understand HOCs and how to use them to share common functionality between components.',
    difficulty: 'Advanced',
  },
  {
    id: 10,
    title: 'Additional Hooks',
    description: 'Explore custom hooks and advanced hook patterns for complex state management.',
    difficulty: 'Advanced',
  },
  {
    id: 14,
    title: 'JWT Authentication',
    description: 'Implement secure authentication using JWT tokens in React applications.',
    difficulty: 'Advanced',
  },
  {
    id: 11,
    title: 'Browser Storage',
    description: 'Learn about localStorage, sessionStorage, and managing persistent data in the browser.',
    difficulty: 'Intermediate',
  },
  {
    id: 12,
    title: 'API Integration',
    description: 'Master API integration in React, including data fetching, error handling, and loading states.',
    difficulty: 'Intermediate',
  },
  {
    id: 15,
    title: 'Payment Integration',
    description: 'Learn how to integrate payment gateways and handle transactions in React applications.',
    difficulty: 'Advanced',
  },
  {
    id: 16,
    title: 'Web Socket',
    description: 'Learn how to integrate Web Socket in React applications.',
    difficulty: 'Advanced',
  },
  {
    id: 17,
    title: 'Redux',
    description: 'Learn how to integrate Redux in React applications.',
    difficulty: 'Advanced',
  },
  {
    id: 18,
    title: 'Testing',
    description: 'Learn about testing React applications using Jest and React Testing Library.',
    difficulty: 'Advanced',
  },
  {
    id: 19,
    title: 'Error Handling & Debugging',
    description: 'Learn about error handling, debugging techniques, and developer tools in React.',
    difficulty: 'Advanced',
  },
  {
    id: 20,
    title: 'Internationalization (i18n)',
    description: 'Learn how to make your React applications multilingual using i18n libraries.',
    difficulty: 'Advanced',
  },
];

const ConceptsList = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        React Concepts
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        Explore different React concepts through interactive examples and exercises
      </Typography>

      <Grid container spacing={3}>
        {concepts.map((concept) => (
          <Grid item xs={12} md={6} key={concept.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {concept.title}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  Difficulty: {concept.difficulty}
                </Typography>
                <Typography variant="body2" component="p">
                  {concept.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component={RouterLink}
                  to={`/concept/${concept.id}`}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ConceptsList; 