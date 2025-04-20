// This is a simple service that uses localStorage for demonstration
// In a real application, you would use a backend API

const VISITOR_COUNT_KEY = 'visitor_count';
const FEEDBACK_KEY = 'user_feedback';

export const statsService = {
  // Visitor count methods
  incrementVisitorCount: () => {
    const count = parseInt(localStorage.getItem(VISITOR_COUNT_KEY) || '0');
    localStorage.setItem(VISITOR_COUNT_KEY, (count + 1).toString());
    return count + 1;
  },

  getVisitorCount: () => {
    return parseInt(localStorage.getItem(VISITOR_COUNT_KEY) || '0');
  },

  // Feedback methods
  addFeedback: (feedback) => {
    const feedbacks = JSON.parse(localStorage.getItem(FEEDBACK_KEY) || '[]');
    feedbacks.push({
      ...feedback,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedbacks));
    return feedbacks;
  },

  getFeedbacks: () => {
    return JSON.parse(localStorage.getItem(FEEDBACK_KEY) || '[]');
  },

  // Get average rating
  getAverageRating: () => {
    const feedbacks = JSON.parse(localStorage.getItem(FEEDBACK_KEY) || '[]');
    if (feedbacks.length === 0) return 0;
    const sum = feedbacks.reduce((acc, curr) => acc + curr.rating, 0);
    return (sum / feedbacks.length).toFixed(1);
  },
}; 