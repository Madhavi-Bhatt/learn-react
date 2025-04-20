// Store quiz attempts and certificates in memory
let quizAttempts = [];
let certificates = [];

// Load data from localStorage on initialization
const loadData = () => {
  try {
    const savedAttempts = localStorage.getItem('quizAttempts');
    const savedCertificates = localStorage.getItem('certificates');
    
    if (savedAttempts) {
      quizAttempts = JSON.parse(savedAttempts);
    }
    if (savedCertificates) {
      certificates = JSON.parse(savedCertificates);
    }
  } catch (error) {
    console.error('Error loading data:', error);
  }
};

// Save data to localStorage
const saveData = () => {
  try {
    localStorage.setItem('quizAttempts', JSON.stringify(quizAttempts));
    localStorage.setItem('certificates', JSON.stringify(certificates));
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

// Load data when the module is imported
loadData();

export const saveQuizAttempt = (attempt) => {
  try {
    quizAttempts.push(attempt);
    saveData();
    return true;
  } catch (error) {
    console.error('Error saving quiz attempt:', error);
    return false;
  }
};

export const saveCertificate = (certificate) => {
  try {
    certificates.push(certificate);
    saveData();
    return true;
  } catch (error) {
    console.error('Error saving certificate:', error);
    return false;
  }
};

export const verifyCertificate = (certificateId) => {
  try {
    return certificates.find(cert => cert.id === certificateId) || null;
  } catch (error) {
    console.error('Error verifying certificate:', error);
    return null;
  }
};

export const getAllCertificates = () => {
  try {
    return certificates;
  } catch (error) {
    console.error('Error getting certificates:', error);
    return [];
  }
};

export const getQuizAttempts = () => {
  try {
    return quizAttempts;
  } catch (error) {
    console.error('Error getting quiz attempts:', error);
    return [];
  }
}; 