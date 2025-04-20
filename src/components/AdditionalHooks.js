import React, { useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const AdditionalHooks = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#FFFFFF', mb: 4 }}>
        Counter with Hooks
      </Typography>
      
      <Paper 
        sx={{ 
          p: 4, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: 3,
          background: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Typography 
          variant="h2" 
          sx={{ 
            color: '#FFFFFF',
            fontWeight: 600,
            minWidth: '100px',
            textAlign: 'center',
          }}
        >
          {count}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            onClick={handleDecrement}
            startIcon={<RemoveIcon />}
            size="small"
            sx={{
              border: '2px solid #FFFFFF',
              color: '#FFFFFF',
              px: 3,
              py: 1,
              fontSize: '0.9rem',
              borderRadius: '20px',
              minWidth: '120px',
              '&:hover': {
                border: '2px solid #FFFFFF',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateY(-2px) scale(1.05)',
                boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Decrement
          </Button>

          <Button
            variant="outlined"
            onClick={handleIncrement}
            startIcon={<AddIcon />}
            size="small"
            sx={{
              border: '2px solid #FFFFFF',
              color: '#FFFFFF',
              px: 3,
              py: 1,
              fontSize: '0.9rem',
              borderRadius: '20px',
              minWidth: '120px',
              '&:hover': {
                border: '2px solid #FFFFFF',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateY(-2px) scale(1.05)',
                boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Increment
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AdditionalHooks; 