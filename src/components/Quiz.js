import React, { useState, useEffect, useCallback } from 'react';
import { quizData, generateQuiz, calculateScore, getFailedQuestions } from '../data/quizData';
import QuizStart from './QuizStart';
import Certificate from './Certificate';
import './Quiz.css';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Quiz = () => {
  const { user } = useAuth();
  const [currentQuiz, setCurrentQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showCertificate, setShowCertificate] = useState(false);
  const [timeLeft, setTimeLeft] = useState(780); // 13 minutes in seconds
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [userName, setUserName] = useState('');
  const [certificateId, setCertificateId] = useState('');
  const [isCheating, setIsCheating] = useState(false);
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [lastActivity, setLastActivity] = useState(Date.now());
  const [isPassed, setIsPassed] = useState(false);
  const [showPassingMessage, setShowPassingMessage] = useState(false);
  const navigate = useNavigate();

  // Enhanced cheat detection
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitchCount(prev => prev + 1);
        if (tabSwitchCount >= 2) {
          setIsCheating(true);
          handleQuizEnd();
        }
      }
    };

    const handleActivity = () => {
      const now = Date.now();
      if (now - lastActivity > 30000) { // 30 seconds of inactivity
        setIsCheating(true);
        handleQuizEnd();
      }
      setLastActivity(now);
    };

    const handleCopy = (e) => {
      e.preventDefault();
      setIsCheating(true);
      handleQuizEnd();
    };

    const handleRightClick = (e) => {
      e.preventDefault();
      setIsCheating(true);
      handleQuizEnd();
    };

    const handleDevTools = (e) => {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
        setIsCheating(true);
        handleQuizEnd();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('mousemove', handleActivity);
    document.addEventListener('keypress', handleActivity);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('contextmenu', handleRightClick);
    document.addEventListener('keydown', handleDevTools);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('mousemove', handleActivity);
      document.removeEventListener('keypress', handleActivity);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('keydown', handleDevTools);
    };
  }, [tabSwitchCount, lastActivity]);

  // Timer
  useEffect(() => {
    if (timeLeft > 0 && !showCertificate && !isCheating) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleQuizEnd();
    }
  }, [timeLeft, showCertificate, isCheating]);

  const handleStart = (name) => {
    setUserName(name);
    setIsQuizStarted(true);
    const newQuiz = generateQuiz();
    setCurrentQuiz(newQuiz);
    setAnswers({});
    setScore(0);
    setTimeLeft(780);
  };

  const handleAnswer = (index) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: index
    }));
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < currentQuiz.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      const finalScore = calculateScore(currentQuiz, answers);
      setScore(finalScore);
      setShowPassingMessage(true);
      const passingScore = 43; // 86% of 50 points
      setIsPassed(finalScore >= passingScore);
    }
  };

  const handleFinish = () => {
    const finalScore = calculateScore(currentQuiz, answers);
    setScore(finalScore);
    setShowCertificate(true);
  };

  const handleRestart = () => {
    setCurrentQuiz([]);
    setCurrentQuestion(0);
    setAnswers({});
    setScore(0);
    setTimeLeft(780);
    setIsQuizStarted(false);
    setUserName('');
    setIsCheating(false);
  };

  const generateCertificateId = () => {
    return `CERT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  const handleGenerateCertificate = useCallback(() => {
    const certificate = {
      id: generateCertificateId(),
      name: userName,
      date: new Date().toLocaleDateString(),
      score: score,
      totalQuestions: quizData.totalQuestions,
      percentage: (score / quizData.totalQuestions) * 100
    };

    // Store certificate in localStorage
    const certificates = JSON.parse(localStorage.getItem('certificates') || '[]');
    certificates.push(certificate);
    localStorage.setItem('certificates', JSON.stringify(certificates));
    setCertificateId(certificate.id);
  }, [userName, score]);

  useEffect(() => {
    if (showCertificate) {
      handleGenerateCertificate();
    }
  }, [showCertificate, handleGenerateCertificate]);

  const handleQuizEnd = () => {
    const finalScore = calculateScore(currentQuiz, answers);
    setScore(finalScore);
    setShowPassingMessage(true);
    const passingScore = 43; // 86% of 50 points
    setIsPassed(finalScore >= passingScore);
  };

  const handleCertificateClick = () => {
    setShowCertificate(true);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  if (!user) {
    return (
      <Box sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(145deg, #000000 0%, #111111 100%)',
        color: '#FFFFFF',
        p: 3,
      }}>
        <Typography variant="h4" gutterBottom>
          Please Login to Take Quiz
        </Typography>
        <Button
          component={RouterLink}
          to="/login"
          variant="outlined"
          sx={{
            borderColor: '#FFFFFF',
            color: '#FFFFFF',
            '&:hover': {
              borderColor: '#FFFFFF',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          Login
        </Button>
      </Box>
    );
  }

  if (isCheating) {
    return (
      <Box sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(145deg, #000000 0%, #111111 100%)',
        color: '#FFFFFF',
        p: 3,
      }}>
        <Typography variant="h4" gutterBottom color="error">
          Quiz Terminated
        </Typography>
        <Typography variant="body1" gutterBottom>
          The quiz has been terminated due to suspicious activity.
        </Typography>
        <Button
          onClick={handleBackToHome}
          variant="outlined"
          sx={{
            borderColor: '#FFFFFF',
            color: '#FFFFFF',
            '&:hover': {
              borderColor: '#FFFFFF',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          Back to Home
        </Button>
      </Box>
    );
  }

  if (showCertificate) {
    return (
      <Box sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(145deg, #000000 0%, #111111 100%)',
        color: '#FFFFFF',
        p: 3,
      }}>
        <Paper sx={{ 
          p: 4, 
          maxWidth: 600, 
          width: '100%',
          background: 'linear-gradient(145deg, #111111 0%, #000000 100%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          overflow: 'hidden',
        }}>
          <Typography variant="h4" gutterBottom align="center">
            Certificate of Completion
          </Typography>
          <Typography variant="h6" gutterBottom align="center" sx={{ color: '#B0B0B0' }}>
            This is to certify that
          </Typography>
          <Typography variant="h5" gutterBottom align="center" sx={{ color: '#FFFFFF' }}>
            {user.name}
          </Typography>
          <Typography variant="body1" gutterBottom align="center" sx={{ color: '#B0B0B0' }}>
            has successfully completed the React Quiz with a score of
          </Typography>
          <Typography variant="h4" gutterBottom align="center" sx={{ color: '#FFFFFF' }}>
            {score}/50
          </Typography>
          <Typography variant="body1" gutterBottom align="center" sx={{ color: '#B0B0B0' }}>
            on {new Date().toLocaleDateString()}
          </Typography>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button
              onClick={handleBackToHome}
              variant="outlined"
              sx={{
                borderColor: '#FFFFFF',
                color: '#FFFFFF',
                '&:hover': {
                  borderColor: '#FFFFFF',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Back to Home
            </Button>
          </Box>
        </Paper>
      </Box>
    );
  }

  if (showPassingMessage) {
    return (
      <Box sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(145deg, #000000 0%, #111111 100%)',
        color: '#FFFFFF',
        p: 3,
      }}>
        <Paper sx={{ 
          p: 4, 
          maxWidth: 600, 
          width: '100%',
          background: 'linear-gradient(145deg, #111111 0%, #000000 100%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          overflow: 'hidden',
        }}>
          <Typography variant="h4" gutterBottom align="center">
            Quiz Complete!
          </Typography>
          <Typography variant="h5" gutterBottom align="center" sx={{ color: isPassed ? '#4CAF50' : '#F44336' }}>
            {isPassed ? 'Congratulations! You Passed!' : 'Sorry, You Did Not Pass'}
          </Typography>
          <Typography variant="h6" gutterBottom align="center" sx={{ color: '#B0B0B0' }}>
            Your Score: {score}/50
          </Typography>
          <Typography variant="body1" gutterBottom align="center" sx={{ color: '#B0B0B0' }}>
            {isPassed ? 'You can now view your certificate!' : 'Try again to improve your score.'}
          </Typography>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            {isPassed ? (
              <Button
                onClick={handleCertificateClick}
                variant="outlined"
                sx={{
                  borderColor: '#FFFFFF',
                  color: '#FFFFFF',
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                View Certificate
              </Button>
            ) : (
              <Button
                onClick={handleBackToHome}
                variant="outlined"
                sx={{
                  borderColor: '#FFFFFF',
                  color: '#FFFFFF',
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Back to Home
              </Button>
            )}
          </Box>
        </Paper>
      </Box>
    );
  }

  if (!isQuizStarted) {
    return (
      <Box sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(145deg, #000000 0%, #111111 100%)',
        color: '#FFFFFF',
        p: 3,
      }}>
        <Paper sx={{ 
          p: 4, 
          maxWidth: 800, 
          width: '100%',
          background: 'linear-gradient(145deg, #111111 0%, #000000 100%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          overflow: 'hidden',
        }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ color: '#FFFFFF', mb: 3 }}>
            Welcome to React Quiz
          </Typography>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#FFFFFF', mb: 2 }}>
              Quiz Rules:
            </Typography>
            <Box component="ul" sx={{ pl: 3, color: '#B0B0B0' }}>
              <Typography component="li" sx={{ mb: 1 }}>
                The quiz consists of 50 questions with multiple-choice answers
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                You have 13 minutes to complete the quiz
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Passing score is 43 out of 50 (86%)
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                You can navigate between questions using Previous and Next buttons
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                You can change your answers before moving to the next question
              </Typography>
              <Typography component="li" sx={{ mb: 1, color: '#F44336' }}>
                Warning: The quiz will terminate if you:
                <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                  <Typography component="li">Switch tabs more than twice</Typography>
                  <Typography component="li">Try to copy questions or answers</Typography>
                  <Typography component="li">Use right-click</Typography>
                  <Typography component="li">Open developer tools</Typography>
                  <Typography component="li">Are inactive for more than 30 seconds</Typography>
                </Box>
              </Typography>
            </Box>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Button
              onClick={() => handleStart(user.name)}
              variant="outlined"
              sx={{
                borderColor: '#FFFFFF',
                color: '#FFFFFF',
                fontSize: '1.1rem',
                py: 1.5,
                px: 4,
                '&:hover': {
                  borderColor: '#FFFFFF',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Start Quiz
            </Button>
          </Box>
        </Paper>
      </Box>
    );
  }

  if (!currentQuiz || currentQuiz.length === 0) {
    return (
      <Box sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(145deg, #000000 0%, #111111 100%)',
        color: '#FFFFFF',
        p: 3,
      }}>
        <Typography variant="h4" gutterBottom>
          Loading Quiz...
        </Typography>
      </Box>
    );
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Box sx={{ 
      minHeight: '100vh',
      bgcolor: '#F8F9FA',
      py: 4,
      px: 2
    }}>
      {!isQuizStarted ? (
        <QuizStart onStart={handleStart} />
      ) : showCertificate ? (
        <Certificate
          userName={userName}
          score={score}
          certificateId={certificateId}
          onBackToHome={handleBackToHome}
        />
      ) : (
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              bgcolor: 'white',
              borderRadius: 2,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              mb: 4
            }}
          >
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mb: 4,
              p: 2,
              bgcolor: '#F8F9FA',
              borderRadius: 1
            }}>
              <Typography variant="h6" sx={{ color: '#2C3E50' }}>
                Question {currentQuestion + 1} of {currentQuiz.length}
              </Typography>
              <Typography variant="h6" sx={{ color: '#1976D2' }}>
                Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </Typography>
            </Box>

            <Typography variant="h5" sx={{ 
              mb: 4,
              color: '#2C3E50',
              fontWeight: 500
            }}>
              {currentQuiz[currentQuestion].question}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {currentQuiz[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={answers[currentQuestion] === index ? "contained" : "outlined"}
                  onClick={() => handleAnswer(index)}
                  sx={{
                    justifyContent: 'flex-start',
                    p: 2,
                    textTransform: 'none',
                    bgcolor: answers[currentQuestion] === index ? '#1976D2' : 'transparent',
                    color: answers[currentQuestion] === index ? 'white' : '#546E7A',
                    borderColor: '#1976D2',
                    '&:hover': {
                      bgcolor: answers[currentQuestion] === index ? '#1565C0' : 'rgba(25, 118, 210, 0.04)',
                      borderColor: '#1565C0',
                    }
                  }}
                >
                  {option}
                </Button>
              ))}
            </Box>

            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              mt: 4,
              gap: 2
            }}>
              <Button
                variant="outlined"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                sx={{
                  color: '#1976D2',
                  borderColor: '#1976D2',
                  '&:hover': {
                    borderColor: '#1565C0',
                    bgcolor: 'rgba(25, 118, 210, 0.04)',
                  },
                  '&.Mui-disabled': {
                    color: '#B0BEC5',
                    borderColor: '#B0BEC5',
                  }
                }}
              >
                Previous
              </Button>
              <Button
                variant="contained"
                onClick={currentQuestion === currentQuiz.length - 1 ? handleFinish : handleNext}
                sx={{
                  bgcolor: '#1976D2',
                  '&:hover': {
                    bgcolor: '#1565C0',
                  }
                }}
              >
                {currentQuestion === currentQuiz.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default Quiz; 