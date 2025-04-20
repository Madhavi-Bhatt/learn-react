import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const Demo = ({ title, children, description }) => {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 3, 
        mb: 3,
        backgroundColor: '#f5f5f5'
      }}
    >
      {title && (
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>
      )}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center'
      }}>
        {children}
      </Box>
    </Paper>
  );
};

export default Demo; 