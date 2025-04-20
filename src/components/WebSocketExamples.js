import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatExample = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const { sendMessage, lastMessage, readyState } = useWebSocket('wss://echo.websocket.org');

  useEffect(() => {
    if (lastMessage) {
      setMessages(prev => [...prev, JSON.parse(lastMessage.data)]);
    }
  }, [lastMessage]);

  const handleSend = () => {
    if (inputMessage.trim()) {
      sendMessage(JSON.stringify({
        type: 'message',
        content: inputMessage,
        timestamp: new Date().toISOString()
      }));
      setInputMessage('');
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Paper sx={{ height: 300, overflow: 'auto', mb: 2, p: 2 }}>
        {messages.map((msg, index) => (
          <Box key={index} sx={{ mb: 1 }}>
            <Typography variant="caption" color="text.secondary">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </Typography>
            <Typography>{msg.content}</Typography>
          </Box>
        ))}
      </Paper>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          size="small"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button
          variant="contained"
          onClick={handleSend}
          disabled={readyState !== WebSocket.OPEN}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export const LiveDataExample = () => {
  const [data, setData] = useState([]);
  const { sendMessage, lastMessage } = useWebSocket('wss://echo.websocket.org');

  useEffect(() => {
    if (lastMessage) {
      const newData = JSON.parse(lastMessage.data);
      setData(prev => [...prev.slice(-4), newData]);
    }
  }, [lastMessage]);

  useEffect(() => {
    const interval = setInterval(() => {
      const mockData = {
        timestamp: new Date().toISOString(),
        value: Math.random() * 100,
        metric: 'CPU Usage'
      };
      sendMessage(JSON.stringify(mockData));
    }, 2000);

    return () => clearInterval(interval);
  }, [sendMessage]);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Live System Metrics
      </Typography>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={6} key={index}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h4" color="primary">
                {item.value.toFixed(1)}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.metric}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {new Date(item.timestamp).toLocaleTimeString()}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export const WebSocketExample = () => (
  <Box>
    <Typography variant="h6" gutterBottom>
      WebSocket Examples
    </Typography>
    <Paper sx={{ p: 2, mb: 2, bgcolor: '#f5f5f5' }}>
      <Typography variant="subtitle1" gutterBottom>
        1. Real-time Chat Application
      </Typography>
      <Typography variant="body2" paragraph>
        This example demonstrates a simple chat application using WebSocket for real-time communication.
      </Typography>
      <ChatExample />
    </Paper>
    <Paper sx={{ p: 2, mb: 2, bgcolor: '#e3f2fd' }}>
      <Typography variant="subtitle1" gutterBottom>
        2. Live Data Dashboard
      </Typography>
      <Typography variant="body2" paragraph>
        This example shows how to display live system metrics using WebSocket for real-time updates.
      </Typography>
      <LiveDataExample />
    </Paper>
  </Box>
); 