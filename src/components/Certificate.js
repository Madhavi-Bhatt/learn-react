import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { saveCertificate } from '../data/quizAttempts';
import './Certificate.css';

const Certificate = ({ name, score, totalQuestions, date, certificateId }) => {
  const certificateRef = useRef(null);

  useEffect(() => {
    if (certificateId) {
      const certificate = {
        id: certificateId,
        name,
        score,
        totalQuestions,
        date,
        percentage: (score / totalQuestions) * 100
      };
      
      // Save certificate to localStorage
      const saved = saveCertificate(certificate);
      if (!saved) {
        console.error('Failed to save certificate');
      }
    }
  }, [certificateId, name, score, totalQuestions, date]);

  const generateWatermarks = () => {
    const watermarks = [];
    for (let i = 0; i < 20; i++) {
      watermarks.push(
        <div
          key={i}
          className="watermark"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            opacity: 0.03 + Math.random() * 0.02
          }}
        >
          {certificateId}
        </div>
      );
    }
    return watermarks;
  };

  const downloadCertificate = async () => {
    if (certificateRef.current) {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 297; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`certificate-${certificateId}.pdf`);
    }
  };

  const verificationUrl = `${window.location.origin}/verify-certificate/${certificateId}`;

  return (
    <Box className="certificate-container" ref={certificateRef}>
      {generateWatermarks()}
      <Paper className="certificate-content">
        <div className="certificate-border">
          <div className="certificate-hologram"></div>
          <div className="certificate-security-line"></div>
          
          <Typography variant="h4" className="certificate-title">
            Certificate of Achievement
          </Typography>
          
          <Typography variant="h5" className="certificate-name">
            {name}
          </Typography>
          
          <Typography variant="h6" className="certificate-score">
            Score: {score}/{totalQuestions} ({((score / totalQuestions) * 100).toFixed(1)}%)
          </Typography>
          
          <Typography variant="body1" className="certificate-date">
            Date: {date}
          </Typography>
          
          <Typography variant="body2" className="certificate-id">
            Certificate ID: {certificateId}
          </Typography>

          <div className="certificate-qr">
            <QRCode
              value={verificationUrl}
              size={100}
              level="H"
              includeMargin={true}
              style={{ background: 'white', padding: '8px' }}
            />
            <Typography variant="caption" className="qr-text">
              Scan to verify
            </Typography>
          </div>

          <div className="certificate-footer">
            <Typography variant="body2" className="verification-text">
              This certificate can be verified at {verificationUrl}
            </Typography>
          </div>
        </div>
      </Paper>

      <Button
        variant="contained"
        color="primary"
        onClick={downloadCertificate}
        className="download-button"
      >
        Download Certificate
      </Button>
    </Box>
  );
};

export default Certificate; 