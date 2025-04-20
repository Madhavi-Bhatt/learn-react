import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  Container,
  Box,
  Typography,
  Avatar,
  Paper,
  Grid,
  Divider,
  Button,
  useTheme,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import './Profile.css';

const Profile = () => {
  const { user } = useAuth();
  const theme = useTheme();

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-header">
          <div className="avatar-container">
            <Avatar
              src={user.picture}
              alt={user.name}
              className="profile-avatar"
            />
            <div className="avatar-overlay">
              <EditIcon className="edit-icon" />
            </div>
          </div>
          <Typography variant="h4" className="profile-name">
            {user.name}
          </Typography>
          <Typography variant="subtitle1" className="profile-email">
            {user.email}
          </Typography>
        </div>

        <div className="profile-stats">
          <div className="stat-item">
            <Typography variant="h6" className="stat-number">0</Typography>
            <Typography variant="body2" className="stat-label">Quizzes Taken</Typography>
          </div>
          <div className="stat-item">
            <Typography variant="h6" className="stat-number">0%</Typography>
            <Typography variant="body2" className="stat-label">Average Score</Typography>
          </div>
          <div className="stat-item">
            <Typography variant="h6" className="stat-number">0</Typography>
            <Typography variant="body2" className="stat-label">Certificates</Typography>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-item">
            <PersonIcon className="detail-icon" />
            <div className="detail-content">
              <Typography variant="body2" className="detail-label">Full Name</Typography>
              <Typography variant="body1" className="detail-value">{user.name}</Typography>
            </div>
          </div>
          <div className="detail-item">
            <EmailIcon className="detail-icon" />
            <div className="detail-content">
              <Typography variant="body2" className="detail-label">Email Address</Typography>
              <Typography variant="body1" className="detail-value">{user.email}</Typography>
            </div>
          </div>
        </div>

        <div className="profile-actions">
          <Button 
            variant="outlined" 
            className="action-button"
            startIcon={<EditIcon />}
          >
            Edit Profile
          </Button>
          <Button 
            variant="outlined" 
            className="action-button"
            color="error"
          >
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile; 