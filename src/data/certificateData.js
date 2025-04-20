import certificatesData from './certificates.json';

// Helper function to save certificates to file
const saveCertificatesToFile = (certificates) => {
  // In a real application, this would be an API call to your backend
  // For now, we'll just log the certificates
  console.log('Saving certificates:', certificates);
  return true;
};

export const saveCertificate = (certificate) => {
  try {
    const certificates = [...certificatesData.certificates, certificate];
    return saveCertificatesToFile(certificates);
  } catch (error) {
    console.error('Error saving certificate:', error);
    return false;
  }
};

export const verifyCertificate = (certificateId) => {
  try {
    return certificatesData.certificates.find(cert => cert.id === certificateId) || null;
  } catch (error) {
    console.error('Error verifying certificate:', error);
    return null;
  }
};

export const getAllCertificates = () => {
  try {
    return certificatesData.certificates;
  } catch (error) {
    console.error('Error getting certificates:', error);
    return [];
  }
}; 