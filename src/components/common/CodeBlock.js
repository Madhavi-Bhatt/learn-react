import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ code, language = 'javascript', title }) => {
  return (
    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
      {title && (
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      )}
      <Box sx={{ 
        '& pre': { 
          margin: 0,
          borderRadius: 1,
          '& code': {
            fontFamily: 'monospace',
            fontSize: '0.9rem',
          }
        }
      }}>
        <SyntaxHighlighter 
          language={language} 
          style={vscDarkPlus}
          showLineNumbers
          wrapLines
        >
          {code}
        </SyntaxHighlighter>
      </Box>
    </Paper>
  );
};

export default CodeBlock; 