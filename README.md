# React Learning Platform

A comprehensive learning platform for mastering React concepts through interactive quizzes and practice questions.

## Features

### Interactive Quiz System
- 50 carefully curated React questions
- 25-minute time limit for completion
- Real-time progress tracking
- Certificate generation upon successful completion
- Anti-cheating measures:
  - Tab switching detection
  - Copy/paste prevention
  - Right-click blocking
  - Automatic quiz termination on rule violations

### Practice Questions
- Difficulty levels (Easy, Medium, Hard)
- Detailed explanations for each answer
- Code examples with syntax highlighting
- Interactive answer expansion

### Certificate System
- Unique certificate ID generation
- Score tracking and percentage calculation
- Local storage for certificate history
- Professional certificate design

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:
```bash
cd react-learning-platform
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

The application will open in your default browser at `http://localhost:3000`.

## Quiz Rules

Before starting the quiz, please familiarize yourself with the following rules:

1. **Time Limit**: You have 25 minutes to complete 50 questions
2. **Tab Switching**: Switching tabs or windows will result in immediate quiz termination
3. **Anti-Cheating**: 
   - Right-clicking is prohibited
   - Copying and pasting are not allowed
   - Any attempt to cheat will result in immediate quiz termination
4. **Passing Score**: You need to achieve a minimum score to receive a certificate

## Project Structure

```
react-learning-platform/
├── src/
│   ├── components/
│   │   ├── Quiz.js
│   │   ├── QuizStart.js
│   │   ├── QuizRules.js
│   │   ├── Certificate.js
│   │   └── PracticeQuestions.js
│   ├── data/
│   │   └── quizData.js
│   └── App.js
├── public/
└── package.json
```

## Technologies Used

- React.js
- Material-UI (MUI)
- React Syntax Highlighter
- React Markdown

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
