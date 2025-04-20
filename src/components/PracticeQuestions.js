import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Chip,
  Button,
  Collapse,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';

const PracticeQuestions = ({ conceptId, questions }) => {
  const [expandedAnswers, setExpandedAnswers] = useState({});

  const toggleAnswer = (questionId) => {
    setExpandedAnswers(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'success';
      case 'medium':
        return 'warning';
      case 'hard':
        return 'error';
      default:
        return 'default';
    }
  };

  if (!questions || questions.length === 0) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="body1" color="textSecondary">
          No practice questions available for this concept yet.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Practice Questions
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        Test your knowledge with these practice questions. Click on "Show Answer" to reveal the solution.
      </Typography>

      {questions.map((question) => (
        <Paper key={question.id} sx={{ p: 3, mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Question {question.id}
            </Typography>
            <Chip
              label={question.difficulty}
              color={getDifficultyColor(question.difficulty)}
              size="small"
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" component="div">
              <ReactMarkdown
                components={{
                  code: ({ node, inline, className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {question.question}
              </ReactMarkdown>
            </Typography>
          </Box>

          <Button
            variant="outlined"
            color="primary"
            onClick={() => toggleAnswer(question.id)}
            endIcon={
              <ExpandMoreIcon
                sx={{
                  transform: expandedAnswers[question.id] ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s',
                }}
              />
            }
          >
            {expandedAnswers[question.id] ? 'Hide Answer' : 'Show Answer'}
          </Button>

          <Collapse in={expandedAnswers[question.id]}>
            <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography variant="subtitle2" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
                Answer & Explanation:
              </Typography>
              <Typography variant="body1" component="div">
                <ReactMarkdown
                  components={{
                    code: ({ node, inline, className, children, ...props }) => {
                      const match = /language-(\w+)/.exec(className || '');
                      return !inline && match ? (
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {question.answer}
                </ReactMarkdown>
              </Typography>
            </Box>
          </Collapse>
        </Paper>
      ))}
    </Box>
  );
};

export default PracticeQuestions; 