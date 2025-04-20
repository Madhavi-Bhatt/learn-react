import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, FormControlLabel, Checkbox } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import QuizRules from './QuizRules';

const QuizStart = ({ onStart }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [rulesAccepted, setRulesAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!rulesAccepted) {
      setError('Please accept the quiz rules to continue');
      return;
    }
    onStart(name.trim());
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        p: 3,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 600,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          React Quiz
         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
          <TimerIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6" color="primary">
            25 Minutes
          </Typography>
        </Box>
        </Typography>

       

        <QuizRules />

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!error}
            helperText={error}
            sx={{ mb: 2 }}
          />
          
          <FormControlLabel
            control={
              <Checkbox
                checked={rulesAccepted}
                onChange={(e) => setRulesAccepted(e.target.checked)}
                color="error"
                sx={{ mb: 2 }}
              />
            }
            label={
              <Typography variant="body2" color="error">
                I understand and accept the quiz rules
              </Typography>
            }
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            disabled={!rulesAccepted}
          >
            Start Quiz
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default QuizStart; 