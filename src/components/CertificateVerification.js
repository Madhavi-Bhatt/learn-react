import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';
import { verifyCertificate } from '../data/quizAttempts';
import './CertificateVerification.css';

const CertificateVerification = () => {
  const { certificateId } = useParams();
  const certificate = verifyCertificate(certificateId);

  return (
    <Box className="verification-container">
      <Paper className="verification-content">
        {certificate ? (
          <>
            <Typography variant="h4" className="verification-title">
              Certificate Verified
            </Typography>
            <Typography variant="h5" className="verification-name">
              {certificate.name}
            </Typography>
            <Typography variant="h6" className="verification-score">
              Score: {certificate.score}/{certificate.totalQuestions} ({certificate.percentage.toFixed(1)}%)
            </Typography>
            <Typography variant="body1" className="verification-date">
              Date: {certificate.date}
            </Typography>
            <Typography variant="body2" className="verification-id">
              Certificate ID: {certificate.id}
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h4" className="verification-title">
              Invalid Certificate
            </Typography>
            <Typography variant="body1" className="verification-error">
              This certificate could not be verified. It may have been revoked or does not exist.
            </Typography>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default CertificateVerification; 