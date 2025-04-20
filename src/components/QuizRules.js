import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import TimerIcon from '@mui/icons-material/Timer';
import BlockIcon from '@mui/icons-material/Block';
import ErrorIcon from '@mui/icons-material/Error';

const QuizRules = () => {
  const rules = [
    {
      icon: <TimerIcon color="error" />,
      text: "Please enter your name to start the quiz. You will have 25 minutes to complete 50 questions. The quiz will automatically end when the time is up."
    },
    {
      icon: <BlockIcon color="error" />,
      text: "Switching tabs or windows will result in immediate quiz termination."
    },
    {
      icon: <WarningIcon color="error" />,
      text: "Right-clicking, copying, or pasting is strictly prohibited and will result in quiz termination."
    },
    {
      icon: <ErrorIcon color="error" />,
      text: "Any attempt to cheat will result in immediate quiz termination and a failed attempt."
    }
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        mb: 3,
        backgroundColor: '#fff3f3',
        border: '2px solid #ffcdd2'
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: '#d32f2f',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        <WarningIcon color="error" />
        Important Quiz Rules
      </Typography>
      <List>
        {rules.map((rule, index) => (
          <ListItem key={index} sx={{ py: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              {rule.icon}
            </ListItemIcon>
            <ListItemText
              primary={rule.text}
              sx={{
                '& .MuiListItemText-primary': {
                  color: '#d32f2f',
                  fontWeight: 500
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default QuizRules; 