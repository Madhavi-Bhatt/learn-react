export const quizData = {
  totalQuestions: 50,
  passingScore: 43,
  
  
  
  
  
  
  
  questions : [
    {
      id: 1,
      question: "What is React?",
      options: [
        "A programming language",
        "A JavaScript library for building user interfaces",
        "A database management system",
        "An operating system"
      ],
      correctAnswer: 1,
      explanation: "React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications. It's used for handling the view layer and allows you to create reusable UI components."
    },
    {
      id: 2,
      question: "What is JSX?",
      options: [
        "A new programming language",
        "A syntax extension for JavaScript",
        "A database query language",
        "A styling framework"
      ],
      correctAnswer: 1,
      explanation: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes the code more readable and helps in creating React elements."
    },
    {
      id: 3,
      question: "What is the virtual DOM in React?",
      options: [
        "A browser extension",
        "A lightweight copy of the actual DOM",
        "A database system",
        "A programming language"
      ],
      correctAnswer: 1,
      explanation: "The virtual DOM is a programming concept where a virtual representation of the UI is kept in memory and synced with the 'real' DOM. It's a step that happens between the render function being called and the display of elements on the screen."
    },
    {
      id: 4,
      question: "What is the purpose of useState hook?",
      options: [
        "To create global variables",
        "To manage component state",
        "To create database connections",
        "To handle API calls"
      ],
      correctAnswer: 1,
      explanation: "useState is a Hook that lets you add state to functional components. It returns an array with two elements: the current state value and a function to update that state."
    },
    {
      id: 5,
      question: "What is the purpose of useEffect hook?",
      options: [
        "To create global variables",
        "To handle component mounting and unmounting",
        "To create database connections",
        "To handle API calls"
      ],
      correctAnswer: 1,
      explanation: "useEffect is a Hook that lets you perform side effects in function components. It's used for handling component mounting, unmounting, and updates."
    },
    {
      id: 6,
      question: "What is the purpose of props in React?",
      options: [
        "To store global state",
        "To pass data between components",
        "To handle API calls",
        "To create database connections"
      ],
      correctAnswer: 1,
      explanation: "Props (properties) are a way of passing data from parent to child components in React. They are read-only and help in making components reusable."
    },
    {
      id: 7,
      question: "What is the purpose of Redux?",
      options: [
        "To create UI components",
        "To manage application state",
        "To handle API calls",
        "To create database connections"
      ],
      correctAnswer: 1,
      explanation: "Redux is a predictable state container for JavaScript applications. It helps you write applications that behave consistently and run in different environments."
    },
    {
      id: 8,
      question: "What is the purpose of React Router?",
      options: [
        "To manage state",
        "To handle navigation in React applications",
        "To create database connections",
        "To handle API calls"
      ],
      correctAnswer: 1,
      explanation: "React Router is a standard library for routing in React. It enables the navigation between views of different components in a React Application."
    },
    {
      id: 9,
      question: "What is the purpose of Context API?",
      options: [
        "To handle API calls",
        "To share data between components without prop drilling",
        "To create database connections",
        "To handle routing"
      ],
      correctAnswer: 1,
      explanation: "Context API provides a way to pass data through the component tree without having to pass props manually at every level."
    },
    {
      id: 10,
      question: "What is the purpose of useMemo hook?",
      options: [
        "To create global variables",
        "To optimize performance by memoizing values",
        "To handle API calls",
        "To create database connections"
      ],
      correctAnswer: 1,
      explanation: "useMemo is a Hook that lets you cache the result of a computation between re-renders. It's used to optimize performance by preventing expensive calculations on every render."
    },
    {
      id: 11,
      question: "What is the purpose of useCallback hook?",
      options: [
        "To memoize functions to prevent unnecessary re-renders",
        "To handle API calls",
        "To create database connections",
        "To manage component styles"
      ],
      correctAnswer: 0,
      explanation: "useCallback is a Hook that returns a memoized version of a callback function, preventing unnecessary re-renders by caching the function."
    },
    {
      id: 12,
      question: "Which of the following is true about React components?",
      options: [
        "They must be class components",
        "They must be functional components",
        "They can be either class or functional components",
        "They cannot manage state"
      ],
      correctAnswer: 2,
      explanation: "React components can be written as class components or functional components. With React Hooks, functional components can manage state as well."
    },
    {
      id: 13,
      question: "What is the purpose of keys in React lists?",
      options: [
        "To identify elements uniquely",
        "To apply styles to elements",
        "To store component data",
        "To optimize API requests"
      ],
      correctAnswer: 0,
      explanation: "Keys help React identify which items have changed, been added, or removed. They are important for optimizing re-rendering in lists."
    },
    {
      id: 14,
      question: "What is React Fragment?",
      options: [
        "A library for API calls",
        "A special component that groups multiple elements without adding extra nodes to the DOM",
        "A debugging tool",
        "A styling library"
      ],
      correctAnswer: 1,
      explanation: "React.Fragment lets you group multiple elements without introducing extra DOM nodes, making your code cleaner and improving performance."
    },
    {
      id: 15,
      question: "What is the difference between state and props in React?",
      options: [
        "State is read-only, props are mutable",
        "Props are read-only, state is mutable",
        "State and props are both mutable",
        "State and props are both read-only"
      ],
      correctAnswer: 1,
      explanation: "Props are read-only and passed from parent to child components. State is mutable and managed within a component using the useState hook or class component state."
    },
    {
      id: 16,
      question: "What is a controlled component in React?",
      options: [
        "A component that controls external APIs",
        "A component that manages its state using props",
        "A component whose state is managed by React",
        "A component that uses Redux for state management"
      ],
      correctAnswer: 2,
      explanation: "A controlled component is a form element whose value is controlled by React state using the useState or other state management methods."
    },
    {
      id: 17,
      question: "What is an uncontrolled component in React?",
      options: [
        "A component that is not connected to a router",
        "A component that manages its state using Redux",
        "A component that stores its state using refs",
        "A component without any props"
      ],
      correctAnswer: 2,
      explanation: "Uncontrolled components store their state using refs instead of React state. They are useful for integrating non-React code or third-party libraries."
    },
    {
      id: 18,
      question: "What is the purpose of the useRef hook?",
      options: [
        "To manage component state",
        "To reference DOM elements or persist values without re-rendering",
        "To manage global state",
        "To handle API calls"
      ],
      correctAnswer: 1,
      explanation: "useRef is a hook that creates a mutable object which persists across renders. It is commonly used to reference DOM elements or store values without triggering a re-render."
    },
    {
      id: 19,
      question: "Which lifecycle method is called when a component is removed from the DOM in class components?",
      options: [
        "componentDidMount",
        "componentDidUpdate",
        "componentWillUnmount",
        "shouldComponentUpdate"
      ],
      correctAnswer: 2,
      explanation: "componentWillUnmount is called just before a component is removed from the DOM. It is often used to clean up subscriptions or timers."
    },
    {
      id: 20,
      question: "What does the React.StrictMode component do?",
      options: [
        "It provides extra debugging checks and warnings in development mode",
        "It optimizes performance in production mode",
        "It enables Redux state management",
        "It restricts API calls in a component"
      ],
      correctAnswer: 0,
      explanation: "React.StrictMode is a development tool that activates additional checks and warnings for detecting potential problems in a React application."
    },
    
    {
      id: 21,
      question: "What is the primary purpose of ReactDOM in a React application?",
      options: [
        "To manage state",
        "To render React components to the browser",
        "To handle API requests",
        "To create database connections"
      ],
      correctAnswer: 1,
      explanation: "ReactDOM provides methods to render React components into the DOM, typically using `ReactDOM.render()` or `createRoot().render()` in React 18."
    },
    {
      id: 22,
      question: "What is the difference between React and React Native?",
      options: [
        "React is for web apps, React Native is for mobile apps",
        "React is a database management system, React Native is not",
        "React Native supports class components, React does not",
        "React uses Java, while React Native uses Python"
      ],
      correctAnswer: 0,
      explanation: "React is used for building web applications, while React Native is a framework for building mobile applications using JavaScript."
    },
    {
      id: 23,
      question: "What is the purpose of the useReducer hook?",
      options: [
        "To handle complex state logic",
        "To fetch data from an API",
        "To navigate between pages",
        "To manage component lifecycle"
      ],
      correctAnswer: 0,
      explanation: "useReducer is an alternative to useState for managing complex state logic using reducers, similar to Redux."
    },
    {
      id: 24,
      question: "Which of the following statements about React keys is true?",
      options: [
        "Keys should be unique only within their sibling elements",
        "Keys should be globally unique",
        "Keys are optional in React lists",
        "Keys are used for styling components"
      ],
      correctAnswer: 0,
      explanation: "Keys in React should be unique among siblings to help React identify which items have changed, been added, or removed."
    },
    {
      id: 25,
      question: "What is the purpose of the `children` prop in React?",
      options: [
        "To pass data between components",
        "To access the child components nested inside a parent component",
        "To create global state variables",
        "To handle API calls"
      ],
      correctAnswer: 1,
      explanation: "The `children` prop allows components to render any nested elements or components placed inside them."
    },
    {
      id: 26,
      question: "What is the primary advantage of using React Hooks?",
      options: [
        "They eliminate the need for functional components",
        "They allow using state and lifecycle methods in functional components",
        "They replace Redux for state management",
        "They prevent code errors"
      ],
      correctAnswer: 1,
      explanation: "React Hooks, like useState and useEffect, allow developers to use state and lifecycle methods inside functional components without converting them to class components."
    },
    {
      id: 27,
      question: "How do you pass data from a parent component to a child component in React?",
      options: [
        "Using Redux",
        "Using Context API",
        "Using Props",
        "Using State"
      ],
      correctAnswer: 2,
      explanation: "Props are used to pass data from parent components to child components in React, making components reusable and manageable."
    },
    {
      id: 28,
      question: "What is the purpose of the `defaultProps` in a React component?",
      options: [
        "To set default state values",
        "To set fallback values for props if no value is provided",
        "To manage routing",
        "To handle component unmounting"
      ],
      correctAnswer: 1,
      explanation: "defaultProps is used to define default values for props when no specific value is provided by the parent component."
    },
    {
      id: 29,
      question: "What is the primary purpose of PropTypes in React?",
      options: [
        "To validate the props passed to components",
        "To handle API requests",
        "To style components",
        "To create global state"
      ],
      correctAnswer: 0,
      explanation: "PropTypes is a library used to validate the types of props passed to a component, ensuring type safety in React applications."
    },
    {
      id: 30,
      question: "What is the purpose of the `componentDidMount` lifecycle method in class components?",
      options: [
        "To update the state before rendering",
        "To fetch data or run side effects after a component is rendered",
        "To remove a component from the DOM",
        "To validate props"
      ],
      correctAnswer: 1,
      explanation: "componentDidMount is invoked immediately after a component is mounted in the DOM. It is often used for API calls or initializing third-party libraries."
    },
    {
      id: 31,
      question: "What is the purpose of the `React.createElement()` function?",
      options: [
        "To create a new HTML element",
        "To render components into the DOM",
        "To create a React element without using JSX",
        "To validate React components"
      ],
      correctAnswer: 2,
      explanation: "React.createElement() is a core method used to create React elements without using JSX. JSX is syntactic sugar for this function."
    },
    {
      id: 32,
      question: "Which command is used to create a new React app using Create React App (CRA)?",
      options: [
        "npm start",
        "npx create-react-app my-app",
        "react-init my-app",
        "node create-react my-app"
      ],
      correctAnswer: 1,
      explanation: "You can create a new React application using Create React App (CRA) with the command `npx create-react-app my-app`."
    },
    {
      id: 33,
      question: "What is the purpose of the `useLayoutEffect` hook?",
      options: [
        "To manage state",
        "To run side effects after all DOM mutations",
        "To create database connections",
        "To manage global variables"
      ],
      correctAnswer: 1,
      explanation: "useLayoutEffect is similar to useEffect but runs synchronously after all DOM mutations, which is useful for layout updates."
    },
    {
      id: 34,
      question: "How can you conditionally render components in React?",
      options: [
        "Using if-else statements",
        "Using ternary operators",
        "Using logical && operators",
        "All of the above"
      ],
      correctAnswer: 3,
      explanation: "All of the listed options can be used for conditional rendering in React components."
    },
    {
      id: 35,
      question: "What is JSX in React?",
      options: [
        "A data management library",
        "A syntax extension that allows writing HTML in JavaScript",
        "A state management tool",
        "A debugging tool"
      ],
      correctAnswer: 1,
      explanation: "JSX (JavaScript XML) allows writing HTML elements and components directly within JavaScript, making UI development easier in React."
    },
    {
      id: 36,
      question: "Which hook is used to perform side effects in React?",
      options: [
        "useState",
        "useEffect",
        "useRef",
        "useCallback"
      ],
      correctAnswer: 1,
      explanation: "useEffect is used to perform side effects such as data fetching, DOM manipulation, or setting up subscriptions in functional components."
    },
    {
      id: 37,
      question: "How can you prevent re-renders using useMemo?",
      options: [
        "By using it to memoize values",
        "By converting components to class components",
        "By using Redux for state management",
        "By applying CSS styles"
      ],
      correctAnswer: 0,
      explanation: "useMemo memoizes the result of a computation, preventing unnecessary recalculations and re-renders."
    },
    {
      id: 38,
      question: "What does the `useState` hook return?",
      options: [
        "A function and an object",
        "An array with two values: current state and a function to update it",
        "A string and a number",
        "A promise and a callback"
      ],
      correctAnswer: 1,
      explanation: "useState returns an array with the current state value and a function to update it."
    },
    {
      id: 39,
      question: "How can you pass a function as a prop in React?",
      options: [
        "Using the useRef hook",
        "By passing it directly as a prop",
        "By using the context API",
        "By using Redux"
      ],
      correctAnswer: 1,
      explanation: "Functions can be passed as props by defining them in the parent component and passing them like `<ChildComponent onClick={handleClick} />`."
    },
    {
      id: 40,
      question: "What is the purpose of the Context API?",
      options: [
        "To manage API calls",
        "To manage and share global state without prop drilling",
        "To handle routing",
        "To optimize database queries"
      ],
      correctAnswer: 1,
      explanation: "Context API provides a way to share state across components without having to pass props manually through every level of the component tree."
    },
    {
      id: 41,
      question: "Which component in React is used for routing?",
      options: [
        "RouteProvider",
        "NavLink",
        "BrowserRouter",
        "ReactRoute"
      ],
      correctAnswer: 2,
      explanation: "BrowserRouter is used to enable routing in a React application using the React Router library."
    },
    {
      id: 42,
      question: "How do you create a custom hook in React?",
      options: [
        "By using the `use` prefix and writing a function that uses other hooks",
        "By using Redux",
        "By installing external libraries",
        "By writing class components"
      ],
      correctAnswer: 0,
      explanation: "A custom hook is a JavaScript function that starts with `use` and allows reuse of stateful logic across components."
    },
    {
      id: 43,
      question: "What does the `StrictMode` component do?",
      options: [
        "Improves performance in production",
        "Adds additional checks and warnings in development",
        "Creates global variables",
        "Handles API errors"
      ],
      correctAnswer: 1,
      explanation: "StrictMode is a development tool that highlights potential issues by adding extra checks and warnings."
    },
    {
      id: 44,
      question: "What is the purpose of the `useImperativeHandle` hook?",
      options: [
        "To expose functions or values to parent components using refs",
        "To manage API calls",
        "To update global state",
        "To handle form submission"
      ],
      correctAnswer: 0,
      explanation: "useImperativeHandle customizes the values exposed when using refs in functional components."
    },
    {
      id: 45,
      question: "What is lazy loading in React?",
      options: [
        "Loading components only when they are required",
        "Rendering all components at once",
        "Using API requests for data fetching",
        "Optimizing state management"
      ],
      correctAnswer: 0,
      explanation: "Lazy loading is a technique to load components only when they are needed using `React.lazy` and `Suspense`, reducing initial load time."
    },
    {
      id: 46,
      question: "What is the purpose of Error Boundaries in React?",
      options: [
        "To debug API requests",
        "To catch JavaScript errors in the component tree",
        "To improve performance",
        "To manage global state"
      ],
      correctAnswer: 1,
      explanation: "Error Boundaries are components that catch JavaScript errors in their child component tree and display a fallback UI instead of crashing the app."
    },
    {
      id: 47,
      question: "What is the difference between `React.memo` and `useMemo`?",
      options: [
        "React.memo memoizes components, useMemo memoizes values",
        "React.memo manages state, useMemo handles API requests",
        "React.memo is used in class components, useMemo in functional components",
        "React.memo is for API requests, useMemo is for routing"
      ],
      correctAnswer: 0,
      explanation: "React.memo is a higher-order component that memoizes functional components, while useMemo memoizes computation results."
    },
    {
      id: 48,
      question: "What is hydration in React?",
      options: [
        "A hydration library for data fetching",
        "A technique to optimize state management",
        "The process of attaching event listeners to server-rendered HTML",
        "A method to manage API responses"
      ],
      correctAnswer: 2,
      explanation: "Hydration is the process of attaching event listeners and making server-rendered HTML interactive using React on the client side."
    },
    {
      id: 49,
      question: "How do you handle forms in React?",
      options: [
        "Using controlled components with state",
        "Using uncontrolled components with refs",
        "Using external form libraries like Formik",
        "All of the above"
      ],
      correctAnswer: 3,
      explanation: "Forms in React can be handled using controlled components, uncontrolled components with refs, or using external libraries like Formik."
    },
    {
      id: 50,
      question: "What is the purpose of the `useContext` hook?",
      options: [
        "To create custom hooks",
        "To fetch data from APIs",
        "To access values from a Context without using Consumer",
        "To manage global state using Redux"
      ],
      correctAnswer: 2,
      explanation: "useContext allows direct access to Context values without using Context.Consumer, simplifying the consumption of context data."
    },
    {
      id: 51,
      question: "What is the purpose of the `useReducer` hook in React?",
      options: [
        "To handle complex state management",
        "To manage API requests",
        "To create class components",
        "To handle animations"
      ],
      correctAnswer: 0,
      explanation: "useReducer is a hook used for managing more complex state logic in React components, typically as an alternative to useState."
    },
    {
      id: 52,
      question: "What is a higher-order component (HOC) in React?",
      options: [
        "A component that renders another component",
        "A component that manages API requests",
        "A library for state management",
        "A component that only works with Redux"
      ],
      correctAnswer: 0,
      explanation: "A higher-order component (HOC) is a function that takes a component and returns a new component with additional functionality."
    },
    {
      id: 53,
      question: "How do you optimize performance in React applications?",
      options: [
        "Using React.memo",
        "Using useCallback and useMemo",
        "Lazy loading components",
        "All of the above"
      ],
      correctAnswer: 3,
      explanation: "Performance in React can be optimized using techniques like memoization, lazy loading, and preventing unnecessary re-renders using React.memo and hooks."
    },
    {
      id: 54,
      question: "Which lifecycle method is used for side effects in class components?",
      options: [
        "componentDidMount",
        "componentWillUnmount",
        "componentDidUpdate",
        "All of the above"
      ],
      correctAnswer: 3,
      explanation: "In class components, componentDidMount, componentWillUnmount, and componentDidUpdate are commonly used for side effects."
    },
    {
      id: 55,
      question: "What is the purpose of `useRef` in React?",
      options: [
        "To access DOM elements directly",
        "To store mutable values without causing re-renders",
        "To handle form inputs",
        "Both A and B"
      ],
      correctAnswer: 3,
      explanation: "useRef is used to access DOM nodes directly and store mutable values without triggering re-renders."
    },
    {
      id: 56,
      question: "What is the significance of keys in React lists?",
      options: [
        "They act as unique identifiers for list items",
        "They improve the application's security",
        "They are used for API calls",
        "They create a new state"
      ],
      correctAnswer: 0,
      explanation: "Keys are used in React to uniquely identify list items, which helps React efficiently update and render items."
    },
    {
      id: 57,
      question: "What is Prop Drilling in React?",
      options: [
        "Passing data from parent to child components via props",
        "Accessing state without props",
        "Storing state globally",
        "Creating server-side components"
      ],
      correctAnswer: 0,
      explanation: "Prop Drilling refers to passing data through multiple levels of components using props, which can be avoided using Context API or Redux."
    },
    {
      id: 58,
      question: "How do you handle conditional rendering in React?",
      options: [
        "Using ternary operators",
        "Using logical AND (&&) operators",
        "Using if-else statements",
        "All of the above"
      ],
      correctAnswer: 3,
      explanation: "Conditional rendering can be done using ternary operators, logical operators, or standard if-else statements in React components."
    },
    {
      id: 59,
      question: "What is Fragment in React?",
      options: [
        "A component for displaying images",
        "A wrapper component used to group multiple elements without adding extra nodes to the DOM",
        "A state management library",
        "A debugging tool"
      ],
      correctAnswer: 1,
      explanation: "Fragments let you group multiple elements without adding extra nodes to the DOM, using `<></>` or `<React.Fragment>`."
    },
    {
      id: 60,
      question: "Which of the following is true about React?",
      options: [
        "React is only for front-end development",
        "React is a complete framework like Angular",
        "React can be used for both front-end and back-end development",
        "React supports two-way data binding by default"
      ],
      correctAnswer: 0,
      explanation: "React is a front-end JavaScript library for building user interfaces. Unlike Angular, it is not a complete framework."
    },
    {
      id: 61,
      question: "How does React handle events?",
      options: [
        "Using inline HTML event handlers",
        "Using camelCase event handlers like `onClick`",
        "Using external libraries only",
        "Using Redux actions"
      ],
      correctAnswer: 1,
      explanation: "React handles events using camelCase event handlers like `onClick`, `onSubmit`, and `onChange`, instead of using traditional HTML event names."
    },
    {
      id: 62,
      question: "What is the purpose of `ReactDOM.createRoot` in React 18?",
      options: [
        "To create the root of a React application for concurrent rendering",
        "To manage state globally",
        "To handle form validation",
        "To build APIs"
      ],
      correctAnswer: 0,
      explanation: "In React 18, `ReactDOM.createRoot` is used to enable concurrent rendering features for improved UI responsiveness."
    },
    {
      id: 63,
      question: "What is a controlled component in React?",
      options: [
        "A component that manages its own state using refs",
        "A component that is controlled by parent components using props and state",
        "A class-based component",
        "A component that has no state"
      ],
      correctAnswer: 1,
      explanation: "A controlled component is one where the form data is controlled by React state rather than the DOM."
    },
    {
      id: 64,
      question: "What is the role of the `useCallback` hook in React?",
      options: [
        "To memoize callback functions to prevent unnecessary renders",
        "To handle side effects",
        "To manage API requests",
        "To update global state"
      ],
      correctAnswer: 0,
      explanation: "useCallback memoizes callback functions, preventing them from being re-created on each render."
    },
    {
      id: 65,
      question: "What is a Portal in React?",
      options: [
        "A virtual DOM node",
        "A component that allows rendering children into a DOM node outside the parent hierarchy",
        "A database connection manager",
        "A tool for CSS animations"
      ],
      correctAnswer: 1,
      explanation: "React Portals allow rendering child components into a different DOM node, useful for modals, tooltips, and pop-ups."
    },
    {
      id: 66,
      question: "What is the purpose of `useImperativeHandle` in React?",
      options: [
        "To manage state globally",
        "To expose a custom ref from a child component to its parent",
        "To handle API requests",
        "To create context providers"
      ],
      correctAnswer: 1,
      explanation: "useImperativeHandle is used with forwardRef to customize the instance value that is exposed when using refs in parent components."
    },
    {
      id: 67,
      question: "What is the role of `forwardRef` in React?",
      options: [
        "To forward a ref from parent to child components",
        "To handle error boundaries",
        "To manage state globally",
        "To apply animations"
      ],
      correctAnswer: 0,
      explanation: "forwardRef is a React function that passes refs from parent components to child components, allowing direct access to child DOM nodes."
    },
    {
      id: 68,
      question: "What is the significance of the `key` prop in React lists?",
      options: [
        "To ensure unique identification of list elements",
        "To improve component performance",
        "To trigger re-renders",
        "All of the above"
      ],
      correctAnswer: 3,
      explanation: "Keys help React identify which items have changed, are added, or removed, thus optimizing rendering performance."
    },
    {
      id: 69,
      question: "How do you handle errors in React applications?",
      options: [
        "Using try-catch blocks",
        "Using Error Boundaries",
        "Using async-await",
        "Using Redux"
      ],
      correctAnswer: 1,
      explanation: "Error Boundaries are React components that catch JavaScript errors in their child components, logging errors and displaying fallback UIs."
    },
    {
      id: 70,
      question: "What is the purpose of `lazy()` in React?",
      options: [
        "To implement lazy loading for components",
        "To create asynchronous API calls",
        "To delay rendering on user interaction",
        "To manage state"
      ],
      correctAnswer: 0,
      explanation: "React.lazy() enables lazy loading of components using dynamic imports, improving application performance by splitting code."
    },
    {
      id: 71,
      question: "What is the primary purpose of `Suspense` in React?",
      options: [
        "To display a fallback while loading components lazily",
        "To manage state in class components",
        "To track component errors",
        "To create animations"
      ],
      correctAnswer: 0,
      explanation: "Suspense allows components to wait for asynchronous operations like lazy-loaded components and show a fallback UI while loading."
    },
    {
      id: 72,
      question: "What is the difference between `React.Component` and `React.PureComponent`?",
      options: [
        "PureComponent prevents unnecessary re-renders using shallow comparison",
        "Component allows state management, but PureComponent doesn't",
        "Component is only used in functional components",
        "PureComponent supports lifecycle methods while Component doesn't"
      ],
      correctAnswer: 0,
      explanation: "React.PureComponent performs a shallow comparison of state and props to prevent unnecessary renders."
    },
    {
      id: 73,
      question: "What is the purpose of `React.StrictMode`?",
      options: [
        "To detect potential problems in an application",
        "To enable concurrent rendering",
        "To handle component errors",
        "To manage routing"
      ],
      correctAnswer: 0,
      explanation: "React.StrictMode helps find bugs in an application by detecting unsafe lifecycle methods, legacy features, and other potential issues."
    },
    {
      id: 74,
      question: "Which hook is used to access context in functional components?",
      options: [
        "useState",
        "useEffect",
        "useContext",
        "useReducer"
      ],
      correctAnswer: 2,
      explanation: "useContext is a React hook that provides access to the nearest value from a matching Context.Provider component."
    },
    {
      id: 75,
      question: "What is the main advantage of using React Context API over Prop Drilling?",
      options: [
        "Improves performance",
        "Reduces the need to pass props through multiple components",
        "Provides state management capabilities",
        "None of the above"
      ],
      correctAnswer: 1,
      explanation: "Context API allows components to directly access data without passing props through multiple levels, reducing prop drilling."
    },
    {
      id: 76,
      question: "Which of the following is NOT a valid React hook?",
      options: [
        "useState",
        "useEffect",
        "useEvent",
        "useMemo"
      ],
      correctAnswer: 2,
      explanation: "useEvent is not a valid hook in React. Hooks like useState, useEffect, and useMemo are used for managing state and effects."
    },
    {
      id: 77,
      question: "What is the purpose of `useLayoutEffect`?",
      options: [
        "To run side effects after all DOM mutations",
        "To run asynchronous functions",
        "To manage state in functional components",
        "To handle API calls"
      ],
      correctAnswer: 0,
      explanation: "useLayoutEffect runs synchronously after all DOM mutations, before the browser paints the screen, which is useful for layout-related calculations."
    },
    {
      id: 78,
      question: "What is the use of `memo` in React?",
      options: [
        "To memoize the result of a computation",
        "To optimize component rendering by preventing unnecessary re-renders",
        "To manage side effects",
        "To fetch API data"
      ],
      correctAnswer: 1,
      explanation: "React.memo is a higher-order component used to prevent unnecessary re-renders by memoizing components."
    },
    {
      id: 79,
      question: "How do you create a custom hook in React?",
      options: [
        "By using the useHook function",
        "By writing a function starting with 'use' and using other hooks inside it",
        "By importing from the React library",
        "By using the class component lifecycle methods"
      ],
      correctAnswer: 1,
      explanation: "A custom hook is a reusable function in React that uses built-in hooks and follows the naming convention of starting with 'use'."
    },
    {
      id: 80,
      question: "What is the primary role of `useEffect` in React?",
      options: [
        "To handle asynchronous operations and side effects",
        "To create global variables",
        "To manage local component state",
        "To handle routing"
      ],
      correctAnswer: 0,
      explanation: "useEffect is used for performing side effects such as data fetching, subscriptions, or manually changing the DOM."
    },
    {
      id: 81,
      question: "What is the purpose of `useReducer` in React?",
      options: [
        "To fetch data from APIs",
        "To manage complex state logic",
        "To handle component lifecycle events",
        "To create reusable components"
      ],
      correctAnswer: 1,
      explanation: "useReducer is an alternative to useState that is used for managing more complex state logic in React applications."
    },
    {
      id: 82,
      question: "Which method is used to prevent re-renders in functional components?",
      options: [
        "useMemo",
        "React.memo",
        "useCallback",
        "All of the above"
      ],
      correctAnswer: 3,
      explanation: "All of the listed methods help prevent unnecessary re-renders by optimizing the rendering behavior in React."
    },
    {
      id: 83,
      question: "What is the correct way to pass data to a component using props?",
      options: [
        "<Component data='Hello' />",
        "<Component data={Hello} />",
        "<Component data>Hello</Component>",
        "<Component data>Hello</Component data>"
      ],
      correctAnswer: 0,
      explanation: "Props can be passed using the syntax `<Component data='Hello' />` where 'data' is the prop name."
    },
    {
      id: 84,
      question: "How can you handle form submissions in React?",
      options: [
        "Using the `onSubmit` event handler",
        "Using the `onClick` handler",
        "Using the `onChange` handler",
        "Using the `useEffect` hook"
      ],
      correctAnswer: 0,
      explanation: "The `onSubmit` event handler is used to capture and process form submissions in React components."
    },
    {
      id: 85,
      question: "Which lifecycle method is called once after the component is mounted?",
      options: [
        "componentWillMount",
        "componentDidUpdate",
        "componentDidMount",
        "componentWillUnmount"
      ],
      correctAnswer: 2,
      explanation: "componentDidMount is invoked once after a component is mounted, commonly used for data fetching or initializing resources."
    },
    {
      id: 86,
      question: "What is React Fragments used for?",
      options: [
        "To add global state management",
        "To wrap multiple children elements without adding extra nodes to the DOM",
        "To optimize API calls",
        "To manage animations"
      ],
      correctAnswer: 1,
      explanation: "React Fragments (`<> </>`) allow grouping of multiple elements without adding extra nodes to the DOM, reducing unnecessary rendering."
    },
    {
      id: 87,
      question: "What is the purpose of `useRef` in React?",
      options: [
        "To manage state",
        "To persist values across renders without causing re-renders",
        "To fetch data from APIs",
        "To navigate between routes"
      ],
      correctAnswer: 1,
      explanation: "useRef is used to reference DOM elements or store mutable values without causing re-renders in functional components."
    },
    {
      id: 88,
      question: "How do you perform conditional rendering in React?",
      options: [
        "Using `if-else` statements",
        "Using ternary operators",
        "Using logical `&&` operators",
        "All of the above"
      ],
      correctAnswer: 3,
      explanation: "Conditional rendering can be done using `if-else`, ternary operators, or logical `&&` operators based on the application's requirements."
    },
    {
      id: 89,
      question: "What does `props.children` refer to in React?",
      options: [
        "It refers to the child components or elements passed between opening and closing tags of a component.",
        "It refers to a custom event in React.",
        "It refers to a state variable.",
        "It refers to an external API call."
      ],
      correctAnswer: 0,
      explanation: "props.children refers to the content between the opening and closing tags of a component, which can include other components or elements."
    },
    {
      id: 90,
      question: "Which of the following is true about state management in React?",
      options: [
        "State can only be managed using class components.",
        "State can be managed using both class and functional components.",
        "State cannot be used in functional components.",
        "State is managed using Redux only."
      ],
      correctAnswer: 1,
      explanation: "State can be managed using both class components (using `this.setState`) and functional components (using `useState`)."
    },
    {
      id: 91,
      question: "What is the purpose of `componentWillUnmount` in React?",
      options: [
        "To clean up resources when a component is removed from the DOM.",
        "To initialize state variables.",
        "To fetch data from an API.",
        "To render a component."
      ],
      correctAnswer: 0,
      explanation: "componentWillUnmount is a lifecycle method in class components used for cleanup tasks like clearing timers or unsubscribing from events."
    },
    {
      id: 92,
      question: "How can you pass data from a child component to its parent in React?",
      options: [
        "Using props",
        "Using state",
        "Using callback functions",
        "Using Context API"
      ],
      correctAnswer: 2,
      explanation: "Data can be passed from child to parent using callback functions, where the parent provides a function for the child to call."
    },
    {
      id: 93,
      question: "Which statement is true about `useEffect` with no dependency array?",
      options: [
        "It runs only once when the component mounts.",
        "It runs on every render.",
        "It runs before the component unmounts.",
        "It never runs."
      ],
      correctAnswer: 1,
      explanation: "When `useEffect` has no dependency array, it runs after every render, including the initial render."
    },
    {
      id: 94,
      question: "What is the purpose of `useCallback` in React?",
      options: [
        "To memoize functions and prevent unnecessary re-creations.",
        "To optimize API calls.",
        "To handle asynchronous operations.",
        "To manage state."
      ],
      correctAnswer: 0,
      explanation: "useCallback is used to memoize functions, ensuring they are not re-created unnecessarily during re-renders."
    },
    {
      id: 95,
      question: "Which of the following is a correct way to create a functional component in React?",
      options: [
        "function MyComponent() { return <div>Hello</div>; }",
        "const MyComponent = () => <div>Hello</div>;",
        "Both A and B",
        "None of the above"
      ],
      correctAnswer: 2,
      explanation: "Functional components can be created using both regular functions and arrow functions."
    },
    {
      id: 96,
      question: "What is the purpose of `hydrate()` in React?",
      options: [
        "To add hydration to the application state.",
        "To render server-side rendered HTML into the DOM and attach event listeners.",
        "To fetch data from APIs.",
        "To manage routing."
      ],
      correctAnswer: 1,
      explanation: "ReactDOM.hydrate() is used to render server-side HTML into the browser and attach event handlers to it."
    },
    {
      id: 97,
      question: "Which of the following tools is commonly used for state management in large React applications?",
      options: [
        "Redux",
        "React Router",
        "Axios",
        "CSS Modules"
      ],
      correctAnswer: 0,
      explanation: "Redux is a state management library often used in large-scale React applications to manage complex state."
    },
    {
      id: 98,
      question: "What is the default behavior of `useEffect` with an empty dependency array?",
      options: [
        "It runs once when the component mounts.",
        "It runs every time the component renders.",
        "It runs before the component unmounts.",
        "It never runs."
      ],
      correctAnswer: 0,
      explanation: "With an empty dependency array, `useEffect` runs only once when the component mounts."
    },
    {
      id: 99,
      question: "Which hook is commonly used for performance optimization in React?",
      options: [
        "useMemo",
        "useState",
        "useEffect",
        "useRef"
      ],
      correctAnswer: 0,
      explanation: "useMemo is used to optimize performance by memoizing the result of expensive calculations."
    },
    {
      id: 100,
      question: "What does the `defaultProps` property do in React?",
      options: [
        "Provides default values for props.",
        "Handles API calls.",
        "Manages component state.",
        "Creates context providers."
      ],
      correctAnswer: 0,
      explanation: "defaultProps provides default values for props in case they are not passed by the parent component."
    },// Continue adding until 300 questions
]


};















export const generateQuiz = () => {
  // Randomly select 50 questions from the pool
  const shuffled = [...quizData.questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 50);
};

export const calculateScore = (answers) => {
  let correct = 0;
  answers.forEach((answer, index) => {
    if (answer === quizData.questions[index].correctAnswer) {
      correct++;
    }
  });
  return correct;
};

export const getFailedQuestions = (answers) => {
  return answers.map((answer, index) => {
    if (answer !== quizData.questions[index].correctAnswer) {
      return {
        question: quizData.questions[index].question,
        yourAnswer: quizData.questions[index].options[answer],
        correctAnswer: quizData.questions[index].options[quizData.questions[index].correctAnswer],
        explanation: quizData.questions[index].explanation
      };
    }
    return null;
  }).filter(Boolean);
}; 