import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Divider,
  Link,
  Paper,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PeopleIcon from '@mui/icons-material/People';
import StarIcon from '@mui/icons-material/Star';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link as RouterLink } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import SpeedIcon from '@mui/icons-material/Speed';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import QuizIcon from '@mui/icons-material/Quiz';
import { statsService } from '../services/statsService';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { user } = useAuth();
  const theme = useTheme();
  const [visitorCount, setVisitorCount] = useState(0);
  const [feedbacks, setFeedbacks] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [openFeedback, setOpenFeedback] = useState(false);
  const [newFeedback, setNewFeedback] = useState({ rating: 0, comment: '' });
  const navigate = useNavigate();

  useEffect(() => {
    // Update visitor count
    const count = statsService.incrementVisitorCount();
    setVisitorCount(count);

    // Load feedbacks and average rating
    const loadedFeedbacks = statsService.getFeedbacks();
    setFeedbacks(loadedFeedbacks);
    setAverageRating(statsService.getAverageRating());
  }, []);

  const handleFeedbackSubmit = () => {
    if (!user) return;

    const feedback = {
      name: user.name,
      rating: newFeedback.rating,
      comment: newFeedback.comment,
      avatar: user.picture,
    };

    const updatedFeedbacks = statsService.addFeedback(feedback);
    setFeedbacks(updatedFeedbacks);
    setAverageRating(statsService.getAverageRating());
    setOpenFeedback(false);
    setNewFeedback({ rating: 0, comment: '' });
  };

  const handleStartLearning = () => {
    if (user) {
      navigate('/concepts');
    } else {
      navigate('/login');
    }
  };

  const handleTakeQuiz = () => {
    if (user) {
      navigate('/quiz');
    } else {
      navigate('/login');
    }
  };

  const handleAddFeedback = () => {
    setOpenFeedback(true);
  };

  return (
    <Box sx={{ marginBottom: 0 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(145deg, #1976D2 0%, #42A5F5 100%)',
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                Master React Development
              </Typography>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                Learn React through interactive concepts, hands-on exercises, and real-world projects.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, position: 'relative', zIndex: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleStartLearning}
                  sx={{
                    bgcolor: 'white',
                    color: '#1976D2',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.9)',
                    },
                  }}
                >
                  Start Learning
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleTakeQuiz}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  Take Quiz
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CodeIcon sx={{ fontSize: 200, opacity: 0.2 }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6, color: '#2C3E50' }}>
          Why Learn With Us?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <SchoolIcon sx={{ fontSize: 40, color: '#1976D2' }} />
                </Box>
                <Typography variant="h5" component="h3" gutterBottom align="center" sx={{ color: '#2C3E50' }}>
                  Comprehensive Learning
                </Typography>
                <Typography variant="body1" color="text.secondary" align="center">
                  Master React from basics to advanced concepts with our structured curriculum.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <SpeedIcon sx={{ fontSize: 40, color: '#1976D2' }} />
                </Box>
                <Typography variant="h5" component="h3" gutterBottom align="center" sx={{ color: '#2C3E50' }}>
                  Interactive Practice
                </Typography>
                <Typography variant="body1" color="text.secondary" align="center">
                  Learn by doing with hands-on exercises and real-world projects.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <EmojiEventsIcon sx={{ fontSize: 40, color: '#1976D2' }} />
                </Box>
                <Typography variant="h5" component="h3" gutterBottom align="center" sx={{ color: '#2C3E50' }}>
                  Earn Certificates
                </Typography>
                <Typography variant="body1" color="text.secondary" align="center">
                  Get certified as you progress through our learning paths.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ bgcolor: '#F8F9FA', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6} sm={3}>
              <Box textAlign="center">
                <PeopleIcon sx={{ fontSize: 40, color: '#1976D2', mb: 1 }} />
                <Typography variant="h4" component="div" sx={{ color: '#2C3E50' }}>
                  {visitorCount}+
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Active Learners
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box textAlign="center">
                <MenuBookIcon sx={{ fontSize: 40, color: '#1976D2', mb: 1 }} />
                <Typography variant="h4" component="div" sx={{ color: '#2C3E50' }}>
                  50+
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Concepts
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box textAlign="center">
                <QuizIcon sx={{ fontSize: 40, color: '#1976D2', mb: 1 }} />
                <Typography variant="h4" component="div" sx={{ color: '#2C3E50' }}>
                  100+
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Questions
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box textAlign="center">
                <StarIcon sx={{ fontSize: 40, color: '#1976D2', mb: 1 }} />
                <Typography variant="h4" component="div" sx={{ color: '#2C3E50' }}>
                  {averageRating.toFixed(1)}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Average Rating
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Feedback Section */}
      <Box sx={{ 
        bgcolor: '#F8F9FA', 
        py: 8, 
        mb: 8, 
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
        borderRadius: '24px',
        mx: 2,
      }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom sx={{ color: '#2C3E50', mb: 4 }}>
            What Our Users Say
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%',
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}>
                <CardContent>
                  <Rating value={5} readOnly sx={{ mb: 2, color: '#1976D2' }} />
                  <Typography variant="body1" sx={{ color: '#546E7A', mb: 2 }}>
                    "The interactive examples made learning React so much easier. Highly recommended!"
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#2C3E50' }}>
                    - John Doe
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%',
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}>
                <CardContent>
                  <Rating value={5} readOnly sx={{ mb: 2, color: '#1976D2' }} />
                  <Typography variant="body1" sx={{ color: '#546E7A', mb: 2 }}>
                    "The practice exercises helped me master React concepts quickly."
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#2C3E50' }}>
                    - Jane Smith
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%',
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}>
                <CardContent>
                  <Rating value={5} readOnly sx={{ mb: 2, color: '#1976D2' }} />
                  <Typography variant="body1" sx={{ color: '#546E7A', mb: 2 }}>
                    "Best React learning platform I've found. The quizzes are challenging and helpful."
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#2C3E50' }}>
                    - Mike Johnson
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              onClick={handleAddFeedback}
              sx={{
                bgcolor: '#1976D2',
                color: 'white',
                '&:hover': {
                  bgcolor: '#1565C0',
                },
              }}
            >
              Add Your Feedback
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Feedback Dialog */}
      <Dialog open={openFeedback} onClose={() => setOpenFeedback(false)}>
        <DialogTitle sx={{ color: '#2C3E50' }}>Share Your Feedback</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <Rating
              value={newFeedback.rating}
              onChange={(event, newValue) => {
                setNewFeedback({ ...newFeedback, rating: newValue });
              }}
              sx={{ color: '#1976D2' }}
            />
            <TextField
              multiline
              rows={4}
              placeholder="Tell us about your experience..."
              value={newFeedback.comment}
              onChange={(e) => setNewFeedback({ ...newFeedback, comment: e.target.value })}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1976D2',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1976D2',
                  },
                },
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenFeedback(false)}
            sx={{ color: '#546E7A' }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleFeedbackSubmit}
            variant="contained"
            sx={{
              bgcolor: '#1976D2',
              color: 'white',
              '&:hover': {
                bgcolor: '#1565C0',
              },
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8, px: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ 
              p: 3, 
              height: '100%', 
              textAlign: 'center',
              background: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-8px)',
              },
            }}>
              <CodeIcon sx={{ fontSize: 40, color: '#1976D2', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ color: '#2C3E50' }}>
                Interactive Examples
              </Typography>
              <Typography sx={{ color: '#546E7A' }}>
                Learn by doing with hands-on code examples and live demos
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ 
              p: 3, 
              height: '100%', 
              textAlign: 'center',
              background: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-8px)',
              },
            }}>
              <SpeedIcon sx={{ fontSize: 40, color: '#1976D2', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ color: '#2C3E50' }}>
                Performance Tips
              </Typography>
              <Typography sx={{ color: '#546E7A' }}>
                Optimize your React applications with best practices
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ 
              p: 3, 
              height: '100%', 
              textAlign: 'center',
              background: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-8px)',
              },
            }}>
              <EmojiEventsIcon sx={{ fontSize: 40, color: '#1976D2', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ color: '#2C3E50' }}>
                Practice Exercises
              </Typography>
              <Typography sx={{ color: '#546E7A' }}>
                Test your knowledge with practical coding challenges
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Learning Path Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ color: '#2C3E50' }}>
            Learning Path
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ 
                p: 3,
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}>
                <Typography variant="h6" gutterBottom sx={{ color: '#2C3E50' }}>
                  Core Concepts
                </Typography>
                <Typography paragraph sx={{ color: '#546E7A' }}>
                  Master the fundamentals of React.js:
                </Typography>
                <ul style={{ color: '#546E7A', paddingLeft: '20px' }}>
                  <li>Components and Props</li>
                  <li>State and Lifecycle</li>
                  <li>Hooks (useState, useEffect)</li>
                  <li>Context API</li>
                  <li>Forms and Events</li>
                </ul>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ 
                p: 3,
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}>
                <Typography variant="h6" gutterBottom sx={{ color: '#2C3E50' }}>
                  Advanced Topics
                </Typography>
                <Typography paragraph sx={{ color: '#546E7A' }}>
                  Dive into advanced React.js concepts:
                </Typography>
                <ul style={{ color: '#546E7A', paddingLeft: '20px' }}>
                  <li>React Router</li>
                  <li>Performance Optimization</li>
                  <li>State Management</li>
                  <li>Testing</li>
                  <li>Error Handling & Debugging</li>
                  <li>Internationalization (i18n)</li>
                  <li>Best Practices</li>
                </ul>
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/concepts"
                  size="small"
                  startIcon={<SchoolIcon />}
                  sx={{ 
                    mt: 2,
                    bgcolor: '#1976D2',
                    color: 'white',
                    '&:hover': {
                      bgcolor: '#1565C0',
                    },
                  }}
                >
                  Explore Concepts
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Footer */}
      <Box 
        component="footer" 
        sx={{ 
          mt: 8,
          py: 3,
          bgcolor: '#F8F9FA',
          borderTop: '1px solid rgba(0, 0, 0, 0.05)',
          color: '#2C3E50',
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
        }}
      >
        <Container maxWidth="lg" sx={{ px: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" sx={{ color: '#546E7A' }}>
                © 2024 React Learning Platform. All rights reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2 }}>
                <Typography variant="body2" sx={{ color: '#546E7A' }}>
                  Developed with ❤️ by Sagar Gondaliya
                </Typography>
                <Link
                  href="https://github.com/Sagar610"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#1976D2',
                    '&:hover': {
                      color: '#1565C0',
                      transform: 'scale(1.1)',
                      transition: 'transform 0.2s ease-in-out',
                    },
                  }}
                >
                  <GitHubIcon sx={{ fontSize: 24 }} />
                </Link>
                <Link
                  href="https://linkedin.com/in/sagar-gondaliya"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#1976D2',
                    '&:hover': {
                      color: '#1565C0',
                      transform: 'scale(1.1)',
                      transition: 'transform 0.2s ease-in-out',
                    },
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: 24 }} />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 