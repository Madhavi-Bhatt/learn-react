import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

const WebSocketConcept = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('disconnected');

  // Simulated WebSocket connection
  useEffect(() => {
    // Simulate connection
    setConnectionStatus('connecting');
    setTimeout(() => {
      setConnectionStatus('connected');
      // Simulate receiving a message
      setMessages(prev => [...prev, {
        type: 'system',
        content: 'Connected to WebSocket server',
        timestamp: new Date().toISOString()
      }]);
    }, 1000);

    return () => {
      setConnectionStatus('disconnected');
    };
  }, []);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Simulate server response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'server',
        content: `Server received: ${inputMessage}`,
        timestamp: new Date().toISOString()
      }]);
    }, 500);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        WebSocket Chat Demo
      </Typography>

      {/* Connection Status */}
      <Paper sx={{ p: 2, mb: 2, bgcolor: connectionStatus === 'connected' ? '#e8f5e9' : '#ffebee' }}>
        <Typography variant="subtitle1">
          Connection Status: {connectionStatus}
        </Typography>
      </Paper>

      {/* Messages List */}
      <Paper sx={{ p: 2, mb: 2, maxHeight: 400, overflow: 'auto' }}>
        <List>
          {messages.map((message, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      sx={{
                        color: message.type === 'user' ? 'primary.main' :
                               message.type === 'server' ? 'secondary.main' :
                               'text.secondary'
                      }}
                    >
                      {message.content}
                    </Typography>
                  }
                  secondary={new Date(message.timestamp).toLocaleTimeString()}
                />
              </ListItem>
              {index < messages.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>

      {/* Input Area */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={connectionStatus !== 'connected'}
        />
        <Button
          variant="contained"
          onClick={handleSendMessage}
          disabled={!inputMessage.trim() || connectionStatus !== 'connected'}
        >
          Send
        </Button>
      </Box>

      {/* WebSocket Information */}
      <Paper sx={{ p: 2, mt: 2, bgcolor: '#f5f5f5' }}>
        <Typography variant="subtitle1" gutterBottom>
          WebSocket Information
        </Typography>
        <Typography variant="body2" paragraph>
          This is a simulated WebSocket implementation. In a real application:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="• Messages would be sent to a real WebSocket server" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Connection would be persistent and bidirectional" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Real-time updates would be received from the server" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Error handling and reconnection logic would be implemented" />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default WebSocketConcept; 