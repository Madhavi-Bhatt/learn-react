// Sample quiz questions
const quizQuestions = [
  {
    question: "What is React?",
    options: [
      "A JavaScript library for building user interfaces",
      "A programming language",
      "A database",
      "A web server"
    ],
    correctAnswer: "A JavaScript library for building user interfaces"
  },
  {
    question: "What is JSX?",
    options: [
      "A JavaScript extension",
      "A new programming language",
      "A database query language",
      "A web framework"
    ],
    correctAnswer: "A JavaScript extension"
  },
  {
    question: "What is a component in React?",
    options: [
      "A database table",
      "A reusable piece of UI",
      "A programming language",
      "A web server"
    ],
    correctAnswer: "A reusable piece of UI"
  },
  {
    question: "What is state in React?",
    options: [
      "A database",
      "A programming language",
      "A way to store and manage data in a component",
      "A web server"
    ],
    correctAnswer: "A way to store and manage data in a component"
  },
  {
    question: "What is props in React?",
    options: [
      "A database",
      "A way to pass data between components",
      "A programming language",
      "A web server"
    ],
    correctAnswer: "A way to pass data between components"
  }
];

export const quizService = {
  // Get quiz questions
  getQuestions: async () => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(quizQuestions);
      }, 500);
    });
  },

  // Generate certificate
  generateCertificate: (data) => {
    const certificate = {
      id: `CERT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: data.name,
      score: data.score,
      totalQuestions: data.totalQuestions,
      date: data.date,
      percentage: (data.score / data.totalQuestions) * 100
    };

    // Store certificate in localStorage
    const certificates = JSON.parse(localStorage.getItem('certificates') || '[]');
    certificates.push(certificate);
    localStorage.setItem('certificates', JSON.stringify(certificates));

    return certificate;
  },

  // Verify certificate
  verifyCertificate: (certificateId) => {
    const certificates = JSON.parse(localStorage.getItem('certificates') || '[]');
    return certificates.find(cert => cert.id === certificateId);
  }
}; 