import { useState, useEffect, useCallback } from 'react';

export const useWebSocket = (url) => {
  const [ws, setWs] = useState(null);
  const [lastMessage, setLastMessage] = useState(null);
  const [readyState, setReadyState] = useState(WebSocket.CONNECTING);

  useEffect(() => {
    const websocket = new WebSocket(url);
    
    websocket.onopen = () => {
      setReadyState(WebSocket.OPEN);
    };

    websocket.onclose = () => {
      setReadyState(WebSocket.CLOSED);
    };

    websocket.onmessage = (event) => {
      setLastMessage(event);
    };

    websocket.onerror = (error) => {
      console.error('WebSocket error:', error);
      setReadyState(WebSocket.CLOSED);
    };

    setWs(websocket);

    return () => {
      websocket.close();
    };
  }, [url]);

  const sendMessage = useCallback((message) => {
    if (ws && readyState === WebSocket.OPEN) {
      ws.send(message);
    }
  }, [ws, readyState]);

  return { sendMessage, lastMessage, readyState };
}; 