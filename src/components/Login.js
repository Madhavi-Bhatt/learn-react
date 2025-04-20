import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import './Login.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    // Decode the JWT token to get user information
    const decoded = JSON.parse(atob(credentialResponse.credential.split('.')[1]));
    login({
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
    });
    navigate('/');
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="welcome-title">Welcome to React Learning Platform</h1>
        <p className="welcome-subtitle">Please sign in to continue</p>
        <div className="google-sign-in-container">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            useOneTap
            theme="outline"
            size="large"
            width="300"
            text="signin_with"
            shape="rectangular"
          />
        </div>
      </div>
    </div>
  );
};

export default Login; 