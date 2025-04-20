export const practiceQuestions = {
  1: {
    title: 'Components & Props',
    questions: [
      {
        id: 1,
        question: 'What is the output of the following code?\n```jsx\nconst Greeting = ({ name }) => {\n  return <h1>Hello, {name}!</h1>;\n};\n\nconst App = () => {\n  const user = { name: "John" };\n  return <Greeting name={user.name} />;\n};\n```',
        answer: 'The output will be: "Hello, John!"\n\nExplanation: The Greeting component receives the name prop from the user object, which is then rendered inside the h1 tag.',
        difficulty: 'Easy'
      },
      {
        id: 2,
        question: 'Which of the following is NOT a valid way to pass props to a component?\n```jsx\n// Option A\n<Component prop1="value" prop2={value} />\n\n// Option B\n<Component {...props} />\n\n// Option C\n<Component props={props} />\n\n// Option D\n<Component prop1={prop1} prop2={prop2} />\n```',
        answer: 'Option C is not a valid way to pass props.\n\nExplanation: While you can spread props using {...props}, you cannot pass an object named "props" directly. Props should be passed as individual attributes or spread as separate properties.',
        difficulty: 'Medium'
      },
      {
        id: 3,
        question: 'What will happen if you try to modify props directly in a component?\n```jsx\nconst UserCard = (props) => {\n  props.name = "John"; // Attempting to modify props\n  return <div>{props.name}</div>;\n};\n```',
        answer: 'The code will throw an error because props are read-only in React.\n\nExplanation: React props are immutable and cannot be modified directly. If you need to modify a value, you should use state instead.',
        difficulty: 'Easy'
      },
      {
        id: 4,
        question: 'What is the difference between a controlled and uncontrolled component? Provide an example of each.',
        answer: 'A controlled component is one where React controls the form data through state, while an uncontrolled component lets the DOM handle the form data.\n\nControlled Example:\n```jsx\nconst ControlledInput = () => {\n  const [value, setValue] = useState("");\n  return <input value={value} onChange={(e) => setValue(e.target.value)} />;\n};\n```\n\nUncontrolled Example:\n```jsx\nconst UncontrolledInput = () => {\n  return <input defaultValue="initial" />;\n};\n```',
        difficulty: 'Medium'
      },
      {
        id: 5,
        question: 'What is the purpose of the children prop in React components? Show an example of how to use it.',
        answer: 'The children prop allows you to pass components or elements between the opening and closing tags of a component.\n\nExample:\n```jsx\nconst Card = ({ children }) => {\n  return <div className="card">{children}</div>;\n};\n\n// Usage:\n<Card>\n  <h2>Title</h2>\n  <p>Content</p>\n</Card>\n```\n\nExplanation: The children prop is special in React and contains whatever is between the opening and closing tags of a component.',
        difficulty: 'Medium'
      }
    ]
  },
  2: {
    title: 'State & Lifecycle',
    questions: [
      {
        id: 1,
        question: 'What is the difference between state and props in React?',
        answer: 'State is internal to a component and can be changed, while props are external and read-only.\n\nKey differences:\n1. State is mutable, props are immutable\n2. State is managed within a component, props are passed from parent\n3. State changes trigger re-renders, props changes come from parent re-renders\n4. State is initialized in the component, props are passed as attributes',
        difficulty: 'Easy'
      },
      {
        id: 2,
        question: 'What is the output of this code?\n```jsx\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    console.log("Count changed:", count);\n  }, []);\n\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n};\n```',
        answer: 'The button will show "0" and increment when clicked, but the console.log will only run once when the component mounts.\n\nExplanation: The empty dependency array [] means the effect only runs on mount, not when count changes.',
        difficulty: 'Medium'
      },
      {
        id: 3,
        question: 'What is the purpose of the cleanup function in useEffect? Show an example.',
        answer: 'The cleanup function in useEffect runs before the component unmounts or before the effect runs again.\n\nExample:\n```jsx\nuseEffect(() => {\n  const subscription = someAPI.subscribe();\n  return () => {\n    subscription.unsubscribe();\n  };\n}, []);\n```\n\nExplanation: This pattern is useful for cleaning up subscriptions, event listeners, or other side effects.',
        difficulty: 'Medium'
      },
      {
        id: 4,
        question: 'What is the difference between componentDidMount and useEffect with an empty dependency array?',
        answer: 'While they serve similar purposes, there are key differences:\n\n1. Timing: componentDidMount runs after the first render, while useEffect runs after the first render AND after every render where dependencies change\n2. Async operations: useEffect can handle async operations directly, while componentDidMount cannot\n3. Cleanup: useEffect provides a cleanup function, while componentDidMount does not\n4. Multiple effects: You can have multiple useEffect hooks, but only one componentDidMount',
        difficulty: 'Hard'
      },
      {
        id: 5,
        question: 'What is the purpose of the useReducer hook? Show an example of how to use it.',
        answer: 'useReducer is used for complex state logic that involves multiple sub-values or when the next state depends on the previous one.\n\nExample:\n```jsx\nconst initialState = { count: 0 };\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case "increment":\n      return { count: state.count + 1 };\n    case "decrement":\n      return { count: state.count - 1 };\n    default:\n      return state;\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, initialState);\n  return (\n    <div>\n      Count: {state.count}\n      <button onClick={() => dispatch({ type: "increment" })}>+</button>\n      <button onClick={() => dispatch({ type: "decrement" })}>-</button>\n    </div>\n  );\n}\n```',
        difficulty: 'Medium'
      }
    ]
  },
  3: {
    title: 'Hooks',
    questions: [
      {
        id: 1,
        question: 'What is the difference between useState and useReducer hooks? When would you choose one over the other?',
        answer: 'useState is simpler and better for independent state values, while useReducer is better for complex state logic or when state updates depend on multiple values.\n\nExample:\n```jsx\n// useState example\nconst [count, setCount] = useState(0);\n\n// useReducer example\nconst [state, dispatch] = useReducer(reducer, { count: 0 });\n```\n\nChoose useReducer when:\n1. State logic is complex\n2. State updates depend on multiple values\n3. State updates follow a predictable pattern\n4. You need to share state logic between components',
        difficulty: 'Medium'
      },
      {
        id: 2,
        question: 'What is the purpose of the useEffect cleanup function? Show an example.',
        answer: 'The cleanup function in useEffect runs before the component unmounts or before the effect runs again. It\'s used to clean up subscriptions, event listeners, or other side effects.\n\nExample:\n```jsx\nuseEffect(() => {\n  const subscription = someAPI.subscribe();\n  return () => {\n    subscription.unsubscribe();\n  };\n}, []);\n```\n\nThis prevents memory leaks and ensures proper cleanup of resources.',
        difficulty: 'Medium'
      },
      {
        id: 3,
        question: 'What is the purpose of the useMemo hook? When should you use it?',
        answer: 'useMemo is used to memoize expensive computations to prevent unnecessary recalculations on every render.\n\nExample:\n```jsx\nconst expensiveValue = useMemo(() => {\n  return computeExpensiveValue(a, b);\n}, [a, b]);\n```\n\nUse useMemo when:\n1. The computation is expensive\n2. The computed value is used by multiple child components\n3. The dependencies change infrequently\n\nNote: Don\'t use useMemo for simple calculations as it has its own overhead.',
        difficulty: 'Hard'
      },
      {
        id: 4,
        question: 'What is the difference between useCallback and useMemo?',
        answer: 'useCallback memoizes functions, while useMemo memoizes values.\n\nExample:\n```jsx\n// useCallback example\nconst memoizedCallback = useCallback(() => {\n  doSomething(a, b);\n}, [a, b]);\n\n// useMemo example\nconst memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n```\n\nUse useCallback when:\n1. Passing callbacks to optimized child components\n2. The callback is used as a dependency in other hooks\n\nUse useMemo when:\n1. Computing expensive values\n2. The value is used by multiple components',
        difficulty: 'Medium'
      },
      {
        id: 5,
        question: 'What is the purpose of the useRef hook? Show an example of both DOM refs and mutable values.',
        answer: 'useRef can be used for both DOM references and storing mutable values that persist between renders.\n\nExample:\n```jsx\nfunction TextInputWithFocusButton() {\n  const inputRef = useRef(null); // DOM ref\n  const renderCount = useRef(0); // Mutable value\n\n  useEffect(() => {\n    renderCount.current += 1;\n  });\n\n  return (\n    <div>\n      <input ref={inputRef} type="text" />\n      <button onClick={() => inputRef.current.focus()}>Focus</button>\n      <p>Renders: {renderCount.current}</p>\n    </div>\n  );\n}\n```\n\nKey points:\n1. DOM refs: Access DOM elements directly\n2. Mutable values: Store values that shouldn\'t trigger re-renders\n3. Values persist between renders\n4. Changes to refs don\'t trigger re-renders',
        difficulty: 'Medium'
      }
    ]
  },
  4: {
    title: 'Context',
    questions: [
      {
        id: 1,
        question: 'What is the purpose of React Context? When should you use it?',
        answer: 'React Context provides a way to pass data through the component tree without passing props manually at every level.\n\nUse Context when:\n1. You need to share data between many components\n2. You want to avoid prop drilling\n3. The data is global (theme, user authentication, etc.)\n\nExample:\n```jsx\nconst ThemeContext = React.createContext();\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value="dark">\n      <ThemedButton />\n    </ThemeContext.Provider>\n  );\n}\n```\n\nNote: Don\'t use Context for component-specific state or when props would work fine.',
        difficulty: 'Medium'
      },
      {
        id: 2,
        question: 'What is the difference between Context and Redux? When would you choose one over the other?',
        answer: 'Context is built into React and is simpler, while Redux is a full state management solution with more features.\n\nChoose Context when:\n1. You need simple state sharing\n2. The state updates are infrequent\n3. You want to avoid additional dependencies\n\nChoose Redux when:\n1. You need complex state management\n2. You need middleware for side effects\n3. You need time-travel debugging\n4. You need predictable state updates\n\nExample of Context vs Redux:\n```jsx\n// Context\nconst [state, setState] = useContext(MyContext);\n\n// Redux\nconst state = useSelector(state => state.myState);\ndispatch({ type: "UPDATE_STATE" });\n```',
        difficulty: 'Hard'
      },
      {
        id: 3,
        question: 'How do you optimize Context to prevent unnecessary re-renders?',
        answer: 'There are several ways to optimize Context:\n\n1. Split Context:\n```jsx\n// Instead of one large context\nconst ThemeContext = React.createContext();\n\n// Split into smaller contexts\nconst ThemeContext = React.createContext();\nconst UserContext = React.createContext();\n```\n\n2. Use memo:\n```jsx\nconst MemoizedComponent = React.memo(({ value }) => {\n  return <div>{value}</div>;\n});\n```\n\n3. Use useMemo for context value:\n```jsx\nconst value = useMemo(() => ({\n  theme: theme,\n  toggleTheme: toggleTheme\n}), [theme]);\n\nreturn (\n  <ThemeContext.Provider value={value}>\n    {children}\n  </ThemeContext.Provider>\n);\n```',
        difficulty: 'Hard'
      },
      {
        id: 4,
        question: 'What is the purpose of the useContext hook? Show an example of consuming multiple contexts.',
        answer: 'useContext is a hook that lets you subscribe to React Context without nesting.\n\nExample of multiple contexts:\n```jsx\nfunction App() {\n  return (\n    <ThemeContext.Provider value="dark">\n      <UserContext.Provider value={{ name: "John" }}>\n        <ThemedUserProfile />\n      </UserContext.Provider>\n    </ThemeContext.Provider>\n  );\n}\n\nfunction ThemedUserProfile() {\n  const theme = useContext(ThemeContext);\n  const user = useContext(UserContext);\n\n  return (\n    <div style={{ color: theme === "dark" ? "white" : "black" }}>\n      {user.name}\n    </div>\n  );\n}\n```',
        difficulty: 'Medium'
      },
      {
        id: 5,
        question: 'What are the limitations of Context? How can you work around them?',
        answer: 'Context limitations and solutions:\n\n1. Performance:\n- Problem: Context changes cause all consumers to re-render\n- Solution: Split into smaller contexts or use React.memo\n\n2. Testing:\n- Problem: Components using Context are harder to test\n- Solution: Mock the Context provider in tests\n\n3. Code Organization:\n- Problem: Context can make code harder to follow\n- Solution: Create custom hooks for context consumption\n\nExample of custom hook:\n```jsx\nfunction useTheme() {\n  const theme = useContext(ThemeContext);\n  if (!theme) {\n    throw new Error("useTheme must be used within ThemeProvider");\n  }\n  return theme;\n}\n```',
        difficulty: 'Hard'
      }
    ]
  },
  5: {
    title: 'Forms & Events',
    questions: [
      {
        id: 1,
        question: 'What is the difference between controlled and uncontrolled components? Show an example of each.',
        answer: 'Controlled components are managed by React state, while uncontrolled components are managed by the DOM.\n\nControlled Example:\n```jsx\nfunction ControlledInput() {\n  const [value, setValue] = useState("");\n  return (\n    <input\
      value={value}\
      onChange={(e) => setValue(e.target.value)}\
    />\n  );\n}\n```\n\nUncontrolled Example:\n```jsx\nfunction UncontrolledInput() {\n  const inputRef = useRef();\n  return (\n    <input\
      ref={inputRef}\
      defaultValue="initial"\
    />\n  );\n}\n```\n\nUse controlled components when you need:\n1. Form validation\n2. Dynamic form updates\n3. Form submission handling\n\nUse uncontrolled components when:\n1. You need to integrate with non-React code\n2. You want to handle form data with DOM APIs',
        difficulty: 'Medium'
      },
      {
        id: 2,
        question: 'How do you handle form submission in React? Show an example with validation.',
        answer: 'Here\'s an example of form handling with validation:\n\n```jsx\nfunction LoginForm() {\n  const [formData, setFormData] = useState({\n    email: "",\n    password: ""\n  });\n  const [errors, setErrors] = useState({});\n\n  const validate = () => {\n    const newErrors = {};\n    if (!formData.email) newErrors.email = "Email is required";\n    if (!formData.password) newErrors.password = "Password is required";\n    return newErrors;\n  };\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    const newErrors = validate();\n    if (Object.keys(newErrors).length === 0) {\n      // Submit form\n      console.log(formData);\n    } else {\n      setErrors(newErrors);\n    }\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\
        type="email"\
        value={formData.email}\
        onChange={(e) => setFormData({...formData, email: e.target.value})}\
      />\
      {errors.email && <span>{errors.email}</span>}\
      <input\
        type="password"\
        value={formData.password}\
        onChange={(e) => setFormData({...formData, password: e.target.value})}\
      />\
      {errors.password && <span>{errors.password}</span>}\
      <button type="submit">Submit</button>\
    </form>\
  );\
}\n```',
        difficulty: 'Medium'
      },
      {
        id: 3,
        question: 'What is the purpose of the useForm hook in React? Show an example using a form library.',
        answer: 'Form libraries like React Hook Form provide better form handling with less code and better performance.\n\nExample using React Hook Form:\n```jsx\nimport { useForm } from "react-hook-form";\n\nfunction Form() {\n  const { register, handleSubmit, errors } = useForm();\n\n  const onSubmit = (data) => {\n    console.log(data);\n  };\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <input\
        name="email"\
        ref={register({ required: true })}\
      />\
      {errors.email && <span>Email is required</span>}\
      <input\
        name="password"\
        type="password"\
        ref={register({ required: true })}\
      />\
      {errors.password && <span>Password is required</span>}\
      <button type="submit">Submit</button>\
    </form>\
  );\
}\n```\n\nBenefits:\n1. Less code\n2. Better performance\n3. Built-in validation\n4. Error handling',
        difficulty: 'Medium'
      },
      {
        id: 4,
        question: 'How do you handle file uploads in React forms?',
        answer: 'Here\'s how to handle file uploads in React:\n\n```jsx\nfunction FileUpload() {\n  const [file, setFile] = useState(null);\n\n  const handleFileChange = (e) => {\n    const selectedFile = e.target.files[0];\n    setFile(selectedFile);\n  };\n\n  const handleSubmit = async (e) => {\n    e.preventDefault();\n    if (!file) return;\n\n    const formData = new FormData();\n    formData.append("file", file);\n\n    try {\n      const response = await fetch("/upload", {\n        method: "POST",\n        body: formData\n      });\n      const data = await response.json();\n      console.log(data);\n    } catch (error) {\n      console.error("Upload failed:", error);\n    }\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\
        type="file"\
        onChange={handleFileChange}\
      />\
      <button type="submit">Upload</button>\
    </form>\
  );\
}\n```\n\nKey points:\n1. Use FormData for file uploads\n2. Handle file selection with onChange\n3. Use async/await for upload handling\n4. Consider file size and type validation',
        difficulty: 'Medium'
      },
      {
        id: 5,
        question: 'What is the purpose of the preventDefault() method in form handling?',
        answer: 'preventDefault() stops the default form submission behavior, which would refresh the page.\n\nExample:\n```jsx\nfunction Form() {\n  const handleSubmit = (e) => {\n    e.preventDefault(); // Prevents page refresh\n    // Handle form submission\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input type="text" />\n      <button type="submit">Submit</button>\n    </form>\n  );\n}\n```\n\nWithout preventDefault():\n1. Form submission would refresh the page\n2. All React state would be lost\n3. User experience would be disrupted\n\nWith preventDefault():\n1. Page stays on the same URL\n2. React state is preserved\n3. You can handle the submission with JavaScript',
        difficulty: 'Easy'
      }
    ]
  },
  8: {
    title: 'React Router',
    questions: [
      {
        id: 1,
        question: 'What is the difference between BrowserRouter and HashRouter? When would you use each?',
        answer: 'BrowserRouter uses HTML5 history API and creates clean URLs, while HashRouter uses URL hashes and works without server configuration.\n\nUse BrowserRouter when:\n1. You have server-side routing support\n2. You want clean URLs\n3. You need SEO-friendly URLs\n\nUse HashRouter when:\n1. You\'re deploying to a static file server\n2. You need client-side only routing\n3. You don\'t have server configuration access\n\nExample:\n```jsx\n// BrowserRouter\n<BrowserRouter>\n  <Routes>\n    <Route path="/users/:id" element={<UserProfile />} />\n  </Routes>\n</BrowserRouter>\n\n// HashRouter\n<HashRouter>\n  <Routes>\n    <Route path="/users/:id" element={<UserProfile />} />\n  </Routes>\n</HashRouter>\n```',
        difficulty: 'Medium'
      },
      {
        id: 2,
        question: 'How do you implement protected routes in React Router? Show an example.',
        answer: 'Protected routes check for authentication before rendering components.\n\nExample:\n```jsx\nfunction ProtectedRoute({ children }) {\n  const { isAuthenticated } = useAuth();\n  const location = useLocation();\n\n  if (!isAuthenticated) {\n    return <Navigate to="/login" state={{ from: location }} replace />;\n  }\n\n  return children;\n}\n\n// Usage\n<Routes>\n  <Route path="/login" element={<Login />} />\n  <Route\
    path="/dashboard"\
    element={\n      <ProtectedRoute>\n        <Dashboard />\n      </ProtectedRoute>\n    }\
  />\
</Routes>\n```',
        difficulty: 'Medium'
      },
      {
        id: 3,
        question: 'What is the purpose of the useNavigate hook? Show an example with different navigation methods.',
        answer: 'useNavigate provides programmatic navigation capabilities.\n\nExample:\n```jsx\nfunction NavigationExample() {\n  const navigate = useNavigate();\n\n  const handleNavigation = () => {\n    // Navigate to a new route\n    navigate("/users");\n\n    // Navigate with state\n    navigate("/users", { state: { from: "dashboard" } });\n\n    // Navigate and replace current history entry\n    navigate("/users", { replace: true });\n\n    // Navigate back\n    navigate(-1);\n\n    // Navigate forward\n    navigate(1);\n  };\n\n  return <button onClick={handleNavigation}>Navigate</button>;\n}\n```',
        difficulty: 'Medium'
      },
      {
        id: 4,
        question: 'How do you handle route parameters and query strings in React Router?',
        answer: 'Route parameters are handled with useParams, and query strings with useSearchParams.\n\nExample:\n```jsx\nfunction UserProfile() {\n  const { id } = useParams(); // Route parameter\n  const [searchParams] = useSearchParams(); // Query string\n\n  const tab = searchParams.get("tab");\n  const sort = searchParams.get("sort");\n\n  return (\n    <div>\n      <h1>User {id}</h1>\n      <p>Tab: {tab}</p>\n      <p>Sort: {sort}</p>\n    </div>\n  );\n}\n\n// Route definition\n<Route path="/users/:id" element={<UserProfile />} />\n\n// URL example\n// /users/123?tab=profile&sort=name\n```',
        difficulty: 'Medium'
      },
      {
        id: 5,
        question: 'What is the purpose of the Outlet component in React Router? Show an example of nested routes.',
        answer: 'Outlet renders child route elements within parent routes.\n\nExample:\n```jsx\nfunction Layout() {\n  return (\n    <div>\n      <nav>\n        <Link to="/dashboard">Dashboard</Link>\n        <Link to="/dashboard/profile">Profile</Link>\n      </nav>\n      <Outlet /> {/* Child routes render here */}\n    </div>\n  );\n}\n\n// Route configuration\n<Routes>\n  <Route path="/dashboard" element={<Layout />}>\n    <Route index element={<Dashboard />} />\n    <Route path="profile" element={<Profile />} />\n    <Route path="settings" element={<Settings />} />\n  </Route>\n</Routes>\n```',
        difficulty: 'Medium'
      }
    ]
  },
  10: {
    title: 'Additional Hooks',
    questions: [
      {
        id: 1,
        question: 'What is the purpose of the useCallback hook? Show an example of when to use it.',
        answer: 'useCallback memoizes functions to prevent unnecessary re-renders of child components.\n\nExample:\n```jsx\nfunction Parent() {\n  const [count, setCount] = useState(0);\n\n  // Without useCallback - function recreated on every render\n  const handleClick = () => console.log("clicked");\n\n  // With useCallback - function only recreated when dependencies change\n  const memoizedHandleClick = useCallback(() => {\n    console.log("clicked");\n  }, []);\n\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>\n        Count: {count}\n      </button>\n      <Child onClick={memoizedHandleClick} />\n    </div>\n  );\n}\n```\n\nUse useCallback when:\n1. Passing callbacks to optimized child components\n2. The callback is used as a dependency in other hooks\n3. The callback is computationally expensive',
        difficulty: 'Medium'
      },
      {
        id: 2,
        question: 'What is the purpose of the useMemo hook? Show an example of when to use it.',
        answer: 'useMemo memoizes computed values to prevent expensive calculations on every render.\n\nExample:\n```jsx\nfunction ExpensiveComponent({ data }) {\n  // Without useMemo - calculated on every render\n  const expensiveValue = calculateExpensiveValue(data);\n\n  // With useMemo - only recalculated when data changes\n  const memoizedValue = useMemo(() => {\n    return calculateExpensiveValue(data);\n  }, [data]);\n\n  return <div>{memoizedValue}</div>;\n}\n```\n\nUse useMemo when:\n1. The computation is expensive\n2. The value is used by multiple child components\n3. The dependencies change infrequently',
        difficulty: 'Medium'
      },
      {
        id: 3,
        question: 'What is the purpose of the useRef hook? Show an example of both DOM refs and mutable values.',
        answer: 'useRef can be used for both DOM references and storing mutable values that persist between renders.\n\nExample:\n```jsx\nfunction TextInputWithFocusButton() {\n  const inputRef = useRef(null); // DOM ref\n  const renderCount = useRef(0); // Mutable value\n\n  useEffect(() => {\n    renderCount.current += 1;\n  });\n\n  return (\n    <div>\n      <input ref={inputRef} type="text" />\n      <button onClick={() => inputRef.current.focus()}>Focus</button>\n      <p>Renders: {renderCount.current}</p>\n    </div>\n  );\n}\n```\n\nKey points:\n1. DOM refs: Access DOM elements directly\n2. Mutable values: Store values that shouldn\'t trigger re-renders\n3. Values persist between renders\n4. Changes to refs don\'t trigger re-renders',
        difficulty: 'Medium'
      },
      {
        id: 4,
        question: 'What is the purpose of the useImperativeHandle hook? Show an example.',
        answer: 'useImperativeHandle lets you customize the instance value that is exposed to parent components when using ref.\n\nExample:\n```jsx\nconst FancyInput = forwardRef((props, ref) => {\n  const inputRef = useRef();\n\n  useImperativeHandle(ref, () => ({\n    focus: () => {\n      inputRef.current.focus();\n    },\n    clear: () => {\n      inputRef.current.value = "";\n    }\n  }));\n\n  return <input ref={inputRef} {...props} />;\n});\n\n// Usage\nfunction Parent() {\n  const inputRef = useRef();\n\n  return (\n    <div>\n      <FancyInput ref={inputRef} />\n      <button onClick={() => inputRef.current.focus()}>Focus</button>\n      <button onClick={() => inputRef.current.clear()}>Clear</button>\n    </div>\n  );\n}\n```',
        difficulty: 'Hard'
      },
      {
        id: 5,
        question: 'What is the purpose of the useLayoutEffect hook? When should you use it instead of useEffect?',
        answer: 'useLayoutEffect runs synchronously after all DOM mutations, while useEffect runs asynchronously.\n\nExample:\n```jsx\nfunction MeasureElement() {\n  const [height, setHeight] = useState(0);\n  const elementRef = useRef();\n\n  // Use useLayoutEffect to measure before paint\n  useLayoutEffect(() => {\n    setHeight(elementRef.current.getBoundingClientRect().height);\n  }, []);\n\n  return (\n    <div ref={elementRef}>\n      Height: {height}px\n    </div>\n  );\n}\n```\n\nUse useLayoutEffect when:\n1. You need to measure DOM nodes\n2. You need to make DOM mutations\n3. You want to prevent visual flicker\n\nNote: useLayoutEffect can block visual updates, so prefer useEffect unless necessary.',
        difficulty: 'Hard'
      }
    ]
  },
  11: {
    title: 'Browser Storage',
    questions: [
      {
        id: 1,
        question: 'What is the difference between localStorage and sessionStorage? When would you use each?',
        answer: 'localStorage persists data even after browser is closed, while sessionStorage data is cleared when the session ends.\n\nUse localStorage when:\n1. You need persistent data\n2. Data should survive browser restarts\n3. Data is not sensitive\n\nUse sessionStorage when:\n1. Data should be temporary\n2. Data should be cleared when tab/window closes\n3. Data is sensitive\n\nExample:\n```jsx\n// localStorage\nlocalStorage.setItem("user", JSON.stringify({ id: 1, name: "John" }));\nconst user = JSON.parse(localStorage.getItem("user"));\n\n// sessionStorage\nsessionStorage.setItem("tempData", "value");\nconst tempData = sessionStorage.getItem("tempData");\n```',
        difficulty: 'Easy'
      },
      {
        id: 2,
        question: 'How do you handle storage events in React? Show an example.',
        answer: 'Storage events are fired when storage is modified in other tabs/windows.\n\nExample:\n```jsx\nfunction StorageListener() {\n  useEffect(() => {\n    const handleStorageChange = (e) => {\n      if (e.key === "theme") {\n        // Handle theme change\n        console.log("Theme changed:", e.newValue);\n      }\n    };\n\n    window.addEventListener("storage", handleStorageChange);\n    return () => window.removeEventListener("storage", handleStorageChange);\n  }, []);\n\n  return <div>Listening for storage changes...</div>;\n}\n```\n\nKey points:\n1. Events only fire in other tabs/windows\n2. Event contains oldValue and newValue\n3. Event contains key and storageArea\n4. Remember to clean up event listeners',
        difficulty: 'Medium'
      },
      {
        id: 3,
        question: 'What are the limitations of localStorage and sessionStorage? How can you work around them?',
        answer: 'Limitations and solutions:\n\n1. Storage Size:\n- Limitation: ~5-10MB depending on browser\n- Solution: Use IndexedDB for larger storage\n\n2. Synchronous API:\n- Limitation: Can block main thread\n- Solution: Use async storage libraries\n\n3. No Data Expiration:\n- Limitation: Data persists until manually cleared\n- Solution: Implement expiration logic\n\nExample with expiration:\n```jsx\nconst setItemWithExpiry = (key, value, ttl) => {\n  const item = {\n    value: value,\n    expiry: Date.now() + ttl\n  };\n  localStorage.setItem(key, JSON.stringify(item));\n};\n\nconst getItemWithExpiry = (key) => {\n  const itemStr = localStorage.getItem(key);\n  if (!itemStr) return null;\n\n  const item = JSON.parse(itemStr);\n  if (Date.now() > item.expiry) {\n    localStorage.removeItem(key);\n    return null;\n  }\n  return item.value;\n};\n```',
        difficulty: 'Medium'
      },
      {
        id: 4,
        question: 'How do you handle storage errors in React? Show an example.',
        answer: 'Storage errors can occur when storage is full or disabled.\n\nExample:\n```jsx\nfunction SafeStorage() {\n  const [error, setError] = useState(null);\n\n  const safeSetItem = (key, value) => {\n    try {\n      localStorage.setItem(key, JSON.stringify(value));\n      setError(null);\n    } catch (e) {\n      if (e.name === "QuotaExceededError") {\n        setError("Storage is full");\n      } else if (e.name === "SecurityError") {\n        setError("Storage is disabled");\n      } else {\n        setError("Unknown storage error");\n      }\n    }\n  };\n\n  return (\n    <div>\n      {error && <div className="error">{error}</div>}\n      <button onClick={() => safeSetItem("test", "value")}>\n        Set Item\n      </button>\n    </div>\n  );\n}\n```',
        difficulty: 'Medium'
      },
      {
        id: 5,
        question: 'What is the purpose of the storage event? Show an example of cross-tab communication.',
        answer: 'The storage event enables communication between different tabs/windows of the same origin.\n\nExample:\n```jsx\nfunction CrossTabCommunication() {\n  const [messages, setMessages] = useState([]);\n\n  useEffect(() => {\n    const handleStorage = (e) => {\n      if (e.key === "messages") {\n        setMessages(JSON.parse(e.newValue || "[]"));\n      }\n    };\n\n    window.addEventListener("storage", handleStorage);\n    return () => window.removeEventListener("storage", handleStorage);\n  }, []);\n\n  const sendMessage = (message) => {\n    const newMessages = [...messages, message];\n    localStorage.setItem("messages", JSON.stringify(newMessages));\n  };\n\n  return (\n    <div>\n      <input\
        type="text"\
        onKeyPress={(e) => {\n          if (e.key === "Enter") {\n            sendMessage(e.target.value);\n            e.target.value = "";\n          }\n        }}\
      />\
      <ul>\
        {messages.map((msg, i) => (\n          <li key={i}>{msg}</li>\n        ))}\
      </ul>\
    </div>\
  );\
}\n```',
        difficulty: 'Medium'
      }
    ]
  },
  12: {
    title: 'API Integration',
    questions: [
      {
        id: 1,
        question: 'What is the purpose of the useEffect hook in API calls? Show an example with error handling.',
        answer: 'useEffect is used to handle side effects like API calls in React components.\n\nExample:\n```jsx\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n  const [error, setError] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    const fetchUser = async () => {\n      try {\n        setLoading(true);\n        const response = await fetch(`/api/users/${userId}`);\n        if (!response.ok) {\n          throw new Error("Failed to fetch user");\n        }\n        const data = await response.json();\n        setUser(data);\n      } catch (err) {\n        setError(err.message);\n      }\n    };\n\n    fetchUser();\n  }, [userId]);\n\n  if (loading) return <div>Loading...</div>;\n  if (error) return <div>Error: {error}</div>;\n  if (!user) return <div>No user found</div>;\n\n  return <div>{user.name}</div>;\n}\n```',
        difficulty: 'Medium'
      },
      {
        id: 2,
        question: 'What is the purpose of the AbortController in API calls? Show an example.',
        answer: 'AbortController allows you to cancel ongoing fetch requests.\n\nExample:\n```jsx\nfunction SearchComponent() {\n  const [results, setResults] = useState([]);\n  const [query, setQuery] = useState("");\n\n  useEffect(() => {\n    const controller = new AbortController();\n\n    const search = async () => {\n      try {\n        const response = await fetch(\n          `/api/search?q=${query}`,\n          { signal: controller.signal }\n        );\n        const data = await response.json();\n        setResults(data);\n      } catch (err) {\n        if (err.name === "AbortError") {\n          console.log("Request cancelled");\n        }\n      }\n    };\n\n    if (query) {\n      search();\n    }\n\n    return () => controller.abort();\n  }, [query]);\n\n  return (\n    <div>\n      <input\
        value={query}\
        onChange={(e) => setQuery(e.target.value)}\
      />\
      <ul>\
        {results.map((result) => (\n          <li key={result.id}>{result.name}</li>\n        ))}\
      </ul>\
    </div>\
  );\
}\n```',
        difficulty: 'Medium'
      },
      {
        id: 3,
        question: 'How do you handle API authentication in React? Show an example with JWT.',
        answer: 'Here\'s how to handle JWT authentication in API calls:\n\n```jsx\nfunction useAuth() {\n  const [token, setToken] = useState(localStorage.getItem("token"));\n\n  const login = async (credentials) => {\n    try {\n      const response = await fetch("/api/login", {\n        method: "POST",\n        headers: { "Content-Type": "application/json" },\n        body: JSON.stringify(credentials)\n      });\n      const { token } = await response.json();\n      localStorage.setItem("token", token);\n      setToken(token);\n    } catch (error) {\n      console.error("Login failed:", error);\n      throw error;\n    }\n  };\n\n  const logout = () => {\n    localStorage.removeItem("token");\n    setToken(null);\n  };\n\n  const api = async (url, options = {}) => {\n    if (!token) throw new Error("No token");\n\n    const response = await fetch(url, {\n      ...options,\n      headers: {\n        ...options.headers,\n        Authorization: `Bearer ${token}`\n      }\n    });\n\n    if (response.status === 401) {\n      logout();\n      throw new Error("Unauthorized");\n    }\n\n    return response;\n  };\n\n  return { token, login, logout, api };\n}\n```',
        difficulty: 'Hard'
      },
      {
        id: 4,
        question: 'What is the purpose of request interceptors in API calls? Show an example.',
        answer: 'Request interceptors allow you to modify requests before they are sent.\n\nExample:\n```jsx\nfunction useApi() {\n  const [loading, setLoading] = useState(false);\n  const [error, setError] = useState(null);\n\n  const api = async (url, options = {}) => {\n    try {\n      setLoading(true);\n      setError(null);\n\n      // Request interceptor\n      const headers = {\n        ...options.headers,\n        "Content-Type": "application/json"\n      };\n\n      const response = await fetch(url, { ...options, headers });\n\n      // Response interceptor\n      if (!response.ok) {\n        throw new Error(`HTTP error! status: ${response.status}`);\n      }\n\n      const data = await response.json();\n      return data;\n    } catch (err) {\n      setError(err.message);\n      throw err;\n    } finally {\n      setLoading(false);\n    }\n  };\n\n  return { api, loading, error };\n}\n```',
        difficulty: 'Medium'
      },
      {
        id: 5,
        question: 'How do you handle API caching in React? Show an example.',
        answer: 'Here\'s how to implement API caching using a custom hook:\n\n```jsx\nfunction useApiCache() {\n  const cache = useRef(new Map());\n\n  const fetchWithCache = async (url, options = {}) => {\n    const cacheKey = `${url}-${JSON.stringify(options)}`;\n\n    // Check cache\n    if (cache.current.has(cacheKey)) {\n      const { data, timestamp } = cache.current.get(cacheKey);\n      const isExpired = Date.now() - timestamp > 5 * 60 * 1000; // 5 minutes\n\n      if (!isExpired) {\n        return data;\n      }\n    }\n\n    // Fetch new data\n    const response = await fetch(url, options);\n    const data = await response.json();\n\n    // Update cache\n    cache.current.set(cacheKey, {\n      data,\n      timestamp: Date.now()\n    });\n\n    return data;\n  };\n\n  const clearCache = () => {\n    cache.current.clear();\n  };\n\n  return { fetchWithCache, clearCache };\n}\n\n// Usage\nfunction UserList() {\n  const { fetchWithCache } = useApiCache();\n\n  useEffect(() => {\n    const loadUsers = async () => {\n      const users = await fetchWithCache("/api/users");\n      // Handle users data\n    };\n    loadUsers();\n  }, []);\n\n  return <div>User list</div>;\n}\n```',
        difficulty: 'Hard'
      }
    ]
  },
  18: {
    title: 'Testing',
    questions: [
      {
        id: 1,
        question: 'What is the difference between unit testing and integration testing in React? Show an example of each.',
        answer: 'Unit testing tests individual components in isolation, while integration testing tests how components work together.\n\nUnit Test Example:\n```jsx\nimport { render, screen } from "@testing-library/react";\nimport Button from "./Button";\n\ntest("button renders with correct text", () => {\n  render(<Button>Click me</Button>);\n  expect(screen.getByText("Click me")).toBeInTheDocument();\n});\n```\n\nIntegration Test Example:\n```jsx\nimport { render, screen, fireEvent } from "@testing-library/react";\nimport LoginForm from "./LoginForm";\n\ntest("login form submits with correct data", async () => {\n  render(<LoginForm />);\n  fireEvent.change(screen.getByLabelText(/email/i), {\n    target: { value: "test@example.com" }\n  });\n  fireEvent.change(screen.getByLabelText(/password/i), {\n    target: { value: "password123" }\n  });\n  fireEvent.click(screen.getByRole("button", { name: /submit/i }));\n  expect(await screen.findByText(/success/i)).toBeInTheDocument();\n});\n```',
        difficulty: 'Medium'
      },
      {
        id: 2,
        question: 'What is the purpose of mock functions in testing? Show an example.',
        answer: 'Mock functions allow you to test component behavior without executing actual functions.\n\nExample:\n```jsx\nimport { render, screen, fireEvent } from "@testing-library/react";\nimport { jest } from "@jest/globals";\n\nfunction Counter({ onIncrement }) {\n  return <button onClick={onIncrement}>Increment</button>;\n}\n\ntest("counter calls onIncrement when clicked", () => {\n  const mockIncrement = jest.fn();\n  render(<Counter onIncrement={mockIncrement} />);\n  fireEvent.click(screen.getByText("Increment"));\n  expect(mockIncrement).toHaveBeenCalledTimes(1);\n});\n```\n\nKey points:\n1. Mock functions track if and how they were called\n2. You can verify call arguments\n3. You can control mock return values\n4. You can reset mocks between tests',
        difficulty: 'Medium'
      },
      {
        id: 3,
        question: 'How do you test asynchronous code in React? Show an example.',
        answer: 'Async code testing requires handling promises and waiting for state updates.\n\nExample:\n```jsx\nimport { render, screen, waitFor } from "@testing-library/react";\nimport { act } from "react-dom/test-utils";\n\nfunction AsyncComponent() {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetchData().then(setData);\n  }, []);\n\n  if (!data) return <div>Loading...</div>;\n  return <div>{data.name}</div>;\n}\n\ntest("async component loads data", async () => {\n  render(<AsyncComponent />);\n  expect(screen.getByText("Loading...")).toBeInTheDocument();\n\n  await waitFor(() => {\n    expect(screen.getByText("John")).toBeInTheDocument();\n  });\n});\n```\n\nKey points:\n1. Use waitFor for async assertions\n2. Use act for state updates\n3. Mock async functions\n4. Handle loading states',
        difficulty: 'Hard'
      },
      {
        id: 4,
        question: 'What is the purpose of test coverage in React? How do you measure it?',
        answer: 'Test coverage measures how much of your code is tested.\n\nExample configuration in package.json:\n```json\n{\n  "jest": {\n    "collectCoverage": true,\n    "coverageThreshold": {\n      "global": {\n        "branches": 80,\n        "functions": 80,\n        "lines": 80,\n        "statements": 80\n      }\n    }\n  }\n}\n```\n\nExample test with coverage:\n```jsx\nfunction ConditionalRender({ isLoggedIn }) {\n  if (isLoggedIn) {\n    return <div>Welcome back!</div>;\n  }\n  return <div>Please log in</div>;\n}\n\ntest("renders different content based on login state", () => {\n  const { rerender } = render(<ConditionalRender isLoggedIn={false} />);\n  expect(screen.getByText("Please log in")).toBeInTheDocument();\n\n  rerender(<ConditionalRender isLoggedIn={true} />);\n  expect(screen.getByText("Welcome back!")).toBeInTheDocument();\n});\n```',
        difficulty: 'Medium'
      },
      {
        id: 5,
        question: 'What is the purpose of snapshot testing in React? Show an example.',
        answer: 'Snapshot testing captures the rendered output of a component and compares it to a stored snapshot.\n\nExample:\n```jsx\nimport { render } from "@testing-library/react";\nimport Card from "./Card";\n\ntest("card matches snapshot", () => {\n  const { container } = render(\n    <Card title="Test" content="Content" />\n  );\n  expect(container).toMatchSnapshot();\n});\n```\n\nSnapshot file:\n```jsx\n// __snapshots__/Card.test.js.snap\nexports[`card matches snapshot 1`] = `\n<div>\n  <div class="card">\n    <h2>Test</h2>\n    <p>Content</p>\n  </div>\n</div>\n`;\n```\n\nKey points:\n1. Snapshots detect unexpected changes in UI\n2. Use -u flag to update snapshots\n3. Review snapshot changes carefully\n4. Don\'t snapshot everything',
        difficulty: 'Medium'
      }
    ]
  },
  19: {
    title: 'Error Handling & Debugging',
    questions: [
      {
        id: 1,
        question: 'What is the purpose of Error Boundaries in React? Show an example.',
        answer: 'Error Boundaries catch JavaScript errors anywhere in their child component tree.\n\nExample:\n```jsx\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    console.error("Error caught by boundary:", error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h1>Something went wrong.</h1>;\n    }\n    return this.props.children;\n  }\n}\n\n// Usage\nfunction App() {\n  return (\n    <ErrorBoundary>\n      <MyComponent />\n    </ErrorBoundary>\n  );\n}\n```',
        difficulty: 'Medium'
      },
      {
        id: 2,
        question: 'How do you handle API errors in React? Show an example with retry logic.',
        answer: 'Here\'s how to handle API errors with retry logic:\n\n```jsx\nfunction useApiWithRetry(url, options = {}, maxRetries = 3) {\n  const [data, setData] = useState(null);\n  const [error, setError] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    let retryCount = 0;\n\n    const fetchData = async () => {\n      try {\n        setLoading(true);\n        const response = await fetch(url, options);\n        if (!response.ok) throw new Error("API Error");\n        const result = await response.json();\n        setData(result);\n        setError(null);\n      } catch (err) {\n        if (retryCount < maxRetries) {\n          retryCount++;\n          setTimeout(fetchData, 1000 * retryCount);\n        }\n        setError(err.message);\n      }\n    };\n\n    fetchData();\n  }, [url, JSON.stringify(options), maxRetries]);\n\n  return { data, error, loading };\n}\n```',
        difficulty: 'Hard'
      },
      {
        id: 3,
        question: 'What is the purpose of the React DevTools? Show examples of debugging techniques.',
        answer: 'React DevTools help debug React applications by inspecting components, state, and props.\n\nKey debugging techniques:\n\n1. Component Inspection:\n```jsx\n// Use React DevTools to:\n// - View component hierarchy\n// - Inspect props and state\n// - Check component source\n// - Profile renders\n```\n\n2. Performance Profiling:\n```jsx\n// Use the Profiler tab to:\n// - Record renders\n// - Analyze commit duration\n// - Identify slow components\n// - Track component updates\n```\n\n3. State Management:\n```jsx\n// Use the Components tab to:\n// - Monitor state changes\n// - Edit state values\n// - Track prop updates\n// - Debug context values\n```',
        difficulty: 'Medium'
      },
      {
        id: 4,
        question: 'How do you implement logging and debugging in React? Show an example.',
        answer: 'Here\'s how to implement comprehensive logging and debugging:\n\n```jsx\nfunction useDebugger(name) {\n  const debug = useCallback((message, data = null) => {\n    if (process.env.NODE_ENV === "development") {\n      console.log(`[${name}] ${message}`, data || "");\n    }\n  }, [name]);\n\n  const error = useCallback((message, error) => {\n    if (process.env.NODE_ENV === "development") {\n      console.error(`[${name}] ${message}:`, error);\n    }\n  }, [name]);\n\n  return { debug, error };\n}\n\n// Usage\nfunction UserProfile() {\n  const { debug, error } = useDebugger("UserProfile");\n\n  useEffect(() => {\n    debug("Component mounted");\n    return () => debug("Component unmounted");\n  }, []);\n\n  const handleSubmit = async (data) => {\n    try {\n      debug("Submitting form", data);\n      await submitData(data);\n      debug("Form submitted successfully");\n    } catch (err) {\n      error("Form submission failed", err);\n    }\n  };\n\n  return <div>...</div>;\n}\n```',
        difficulty: 'Medium'
      },
      {
        id: 5,
        question: 'What is the purpose of source maps in React debugging? How do you configure them?',
        answer: 'Source maps map minified code back to original source code for debugging.\n\nConfiguration in webpack.config.js:\n```js\nmodule.exports = {\n  devtool: "source-map", // or "eval-source-map" for development\n  // ... other config\n};\n```\n\nIn Create React App:\n```js\n// package.json\n{\n  "scripts": {\n    "start": "GENERATE_SOURCEMAP=true react-scripts start",\n    "build": "GENERATE_SOURCEMAP=true react-scripts build"\n  }\n}\n```\n\nBenefits:\n1. Debug original source code\n2. Better error stack traces\n3. Easier development experience\n4. Production debugging capability\n\nNote: Disable source maps in production for better performance.',
        difficulty: 'Hard'
      }
    ]
  },
  20: {
    title: 'Internationalization',
    questions: [
      {
        id: 1,
        question: 'What is the basic purpose of i18n in React applications?',
        answer: 'i18n (Internationalization) helps make React applications support multiple languages and formats. It allows you to display content in different languages, handle date formats, number formats, and other locale-specific content without changing the application code.',
        difficulty: 'Easy'
      },
      {
        id: 2,
        question: 'What is the difference between i18n and l10n?',
        answer: 'i18n (Internationalization) is the process of making your application ready for multiple languages, while l10n (Localization) is the actual process of translating and adapting the content for specific languages. Think of i18n as the infrastructure and l10n as the content.',
        difficulty: 'Easy'
      },
      {
        id: 3,
        question: 'What is the basic structure of a translation file in i18n?',
        answer: 'A basic translation file is a JSON object where keys are the same across all languages, but values are translated. Example:\n```json\n// en.json\n{\n  "welcome": "Welcome",\n  "hello": "Hello"\n}\n\n// es.json\n{\n  "welcome": "Bienvenido",\n  "hello": "Hola"\n}\n```',
        difficulty: 'Easy'
      },
      {
        id: 4,
        question: 'What is the basic way to use translations in a React component with i18n?',
        answer: 'The basic way is to use the useTranslation hook:\n```jsx\nimport { useTranslation } from "react-i18next";\n\nfunction Greeting() {\n  const { t } = useTranslation();\n  return <h1>{t("welcome")}</h1>;\n}\n```\nThis will display "Welcome" in English or "Bienvenido" in Spanish depending on the selected language.',
        difficulty: 'Easy'
      },
      {
        id: 5,
        question: 'What is the basic way to change languages in an i18n React application?',
        answer: 'You can change languages using the i18n instance:\n```jsx\nimport { useTranslation } from "react-i18next";\n\nfunction LanguageSwitcher() {\n  const { i18n } = useTranslation();\n\n  const changeLanguage = (lng) => {\n    i18n.changeLanguage(lng);\n  };\n\n  return (\n    <div>\n      <button onClick={() => changeLanguage("en")}>English</button>\n      <button onClick={() => changeLanguage("es")}>Español</button>\n    </div>\n  );\n}\n```',
        difficulty: 'Easy'
      }
    ]
  },
  17: {
    title: 'Redux',
    questions: [
      {
        id: 1,
        question: 'What is the difference between Redux and Context API? When would you choose one over the other?',
        answer: 'Redux is a full state management solution with middleware support, while Context API is built into React and simpler.\n\nChoose Redux when:\n1. You need complex state management\n2. You need middleware for side effects\n3. You need time-travel debugging\n4. You need predictable state updates\n\nChoose Context when:\n1. You need simple state sharing\n2. The state updates are infrequent\n3. You want to avoid additional dependencies\n\nExample of Redux setup:\n```jsx\n// store.js\nimport { createStore, applyMiddleware } from "redux";\nimport thunk from "redux-thunk";\nimport rootReducer from "./reducers";\n\nexport const store = createStore(rootReducer, applyMiddleware(thunk));\n\n// reducer.js\nexport default function rootReducer(state = {}, action) {\n  switch (action.type) {\n    case "SET_USER":\n      return { ...state, user: action.payload };\n    default:\n      return state;\n  }\n}\n```',
        difficulty: 'Hard'
      },
      {
        id: 2,
        question: 'How do you handle asynchronous actions in Redux? Show an example with Redux Thunk.',
        answer: 'Redux Thunk allows you to write action creators that return a function instead of an action object.\n\nExample:\n```jsx\n// action creators\nconst fetchUser = (id) => async (dispatch) => {\n  try {\n    dispatch({ type: "FETCH_USER_REQUEST" });\n    const response = await fetch(`/api/users/${id}`);\n    const data = await response.json();\n    dispatch({ type: "FETCH_USER_SUCCESS", payload: data });\n  } catch (error) {\n    dispatch({ type: "FETCH_USER_ERROR", payload: error.message });\n  }\n};\n\n// reducer\nconst userReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case "FETCH_USER_REQUEST":\n      return { ...state, loading: true, error: null };\n    case "FETCH_USER_SUCCESS":\n      return { ...state, loading: false, user: action.payload };\n    case "FETCH_USER_ERROR":\n      return { ...state, loading: false, error: action.payload };\n    default:\n      return state;\n  }\n};\n```',
        difficulty: 'Medium'
      },
      {
        id: 3,
        question: 'What is the purpose of Redux middleware? Show an example of a custom middleware.',
        answer: 'Redux middleware provides a way to interact with actions before they reach the reducer.\n\nExample of a custom logging middleware:\n```jsx\nconst logger = (store) => (next) => (action) => {\n  console.group(action.type);\n  console.info("dispatching", action);\n  const result = next(action);\n  console.log("next state", store.getState());\n  console.groupEnd();\n  return result;\n};\n\n// Usage\nconst store = createStore(rootReducer, applyMiddleware(logger));\n```\n\nExample of a custom API middleware:\n```jsx\nconst api = (store) => (next) => async (action) => {\n  if (action.type !== "API_REQUEST") {\n    return next(action);\n  }\n\n  const { url, onSuccess, onError } = action.payload;\n\n  try {\n    const response = await fetch(url, options);\n    const data = await response.json();\n    store.dispatch({ type: onSuccess, payload: data });\n  } catch (err) {\n    store.dispatch({ type: onError, payload: err.message });\n  }\n};\n```',
        difficulty: 'Hard'
      },
      {
        id: 4,
        question: 'How do you handle form state in Redux? Show an example.',
        answer: 'Here\'s how to handle form state in Redux:\n\n```jsx\n// actions\nconst updateField = (field, value) => ({\n  type: "UPDATE_FIELD",\n  payload: { field, value }\n});\n\n// reducer\nconst formReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case "UPDATE_FIELD":\n      return {\n        ...state,\n        [action.payload.field]: action.payload.value\n      };\n    case "RESET_FORM":\n      return initialState;\n    default:\n      return state;\n  }\n};\n\n// component\nfunction LoginForm() {\n  const dispatch = useDispatch();\n  const formData = useSelector(state => state.form);\n\n  const handleChange = (e) => {\n    dispatch(updateField(e.target.name, e.target.value));\n  };\n\n  return (\n    <form>\n      <input\
        name="email"\
        value={formData.email}\
        onChange={handleChange}\
      />\n      <input\
        name="password"\
        type="password"\
        value={formData.password}\
        onChange={handleChange}\
      />\n    </form>\n  );\n}\n```',
        difficulty: 'Medium'
      },
      {
        id: 5,
        question: 'What is the purpose of Redux Toolkit? Show an example of using createSlice.',
        answer: 'Redux Toolkit simplifies Redux development with utilities like createSlice.\n\nExample:\n```jsx\nimport { createSlice, configureStore } from "@reduxjs/toolkit";\n\nconst counterSlice = createSlice({\n  name: "counter",\n  initialState: { value: 0 },\n  reducers: {\n    increment: (state) => {\n      state.value += 1;\n    },\n    decrement: (state) => {\n      state.value -= 1;\n    }\n  }\n});\n\nconst store = configureStore({\n  reducer: {\n    counter: counterSlice.reducer\n  }\n});\n\n// Usage in component\nfunction Counter() {\n  const count = useSelector((state) => state.counter.value);\n  const dispatch = useDispatch();\n\n  return (\n    <div>\n      <button onClick={() => dispatch(counterSlice.actions.increment())}>+</button>\n      <span>{count}</span>\n      <button onClick={() => dispatch(counterSlice.actions.decrement())}>-</button>\n    </div>\n  );\n}\n```',
        difficulty: 'Medium'
      }
    ]
  },
  16: {
    title: 'WebSocket',
    questions: [
      {
        id: 1,
        question: 'How do you implement WebSocket connections in React? Show an example with reconnection logic.',
        answer: 'Here\'s how to implement WebSocket with reconnection logic:\n\n```jsx\nfunction useWebSocket(url) {\n  const [isConnected, setIsConnected] = useState(false);\n  const [messages, setMessages] = useState([]);\n  const ws = useRef(null);\n  const reconnectTimeout = useRef(null);\n\n  const connect = useCallback(() => {\n    ws.current = new WebSocket(url);\n\n    ws.current.onopen = () => {\n      setIsConnected(true);\n    };\n\n    ws.current.onmessage = (event) => {\n      setMessages(prev => [...prev, JSON.parse(event.data)]);\n    };\n\n    ws.current.onclose = () => {\n      setIsConnected(false);\n      // Attempt to reconnect after 3 seconds\n      reconnectTimeout.current = setTimeout(connect, 3000);\n    };\n\n    ws.current.onerror = (error) => {\n      console.error("WebSocket error:", error);\n    };\n  }, [url]);\n\n  useEffect(() => {\n    connect();\n    return () => {\n      if (ws.current) ws.current.close();\n      if (reconnectTimeout.current) clearTimeout(reconnectTimeout.current);\n    };\n  }, [connect]);\n\n  const sendMessage = useCallback((message) => {\n    if (ws.current?.readyState === WebSocket.OPEN) {\n      ws.current.send(JSON.stringify(message));\n    }\n  }, []);\n\n  return { isConnected, messages, sendMessage };\n}\n```',
        difficulty: 'Hard'
      },
      {
        id: 2,
        question: 'How do you handle WebSocket authentication? Show an example.',
        answer: 'Here\'s how to implement WebSocket authentication:\n\n```jsx\nfunction useAuthenticatedWebSocket(url, token) {\n  const [isAuthenticated, setIsAuthenticated] = useState(false);\n  const ws = useRef(null);\n\n  const connect = useCallback(() => {\n    ws.current = new WebSocket(url);\n\n    ws.current.onopen = () => {\n      // Send authentication message immediately after connection\n      ws.current.send(JSON.stringify({\n        type: "auth",\n        token: token\n      }));\n    };\n\n    ws.current.onmessage = (event) => {\n      const data = JSON.parse(event.data);\n      if (data.type === "auth_success") {\n        setIsAuthenticated(true);\n      }\n    };\n\n    ws.current.onclose = () => {\n      setIsAuthenticated(false);\n    };\n  }, [url, token]);\n\n  useEffect(() => {\n    connect();\n    return () => ws.current?.close();\n  }, [connect]);\n\n  return { isAuthenticated };\n}\n```',
        difficulty: 'Medium'
      },
      {
        id: 3,
        question: 'How do you implement real-time chat using WebSocket? Show an example.',
        answer: 'Here\'s how to implement a real-time chat component:\n\n```jsx\nfunction ChatRoom() {\n  const [messages, setMessages] = useState([]);\n  const [input, setInput] = useState("");\n  const ws = useRef(null);\n\n  useEffect(() => {\n    ws.current = new WebSocket("ws://your-server/chat");\n\n    ws.current.onmessage = (event) => {\n      const message = JSON.parse(event.data);\n      setMessages(prev => [...prev, message]);\n    };\n\n    return () => ws.current?.close();\n  }, []);\n\n  const sendMessage = (e) => {\n    e.preventDefault();\n    if (!input.trim()) return;\n\n    const message = {\n      type: "message",\n      content: input,\n      timestamp: Date.now()\n    };\n\n    ws.current.send(JSON.stringify(message));\n    setInput("");\n  };\n\n  return (\n    <div>\n      <div className="messages">\n        {messages.map((msg, index) => (\n          <div key={index} className="message">\n            {msg.content}\n          </div>\n        ))}\n      </div>\n      <form onSubmit={sendMessage}>\n        <input\
          type="text"\
          value={input}\
          onChange={(e) => setInput(e.target.value)}\
          placeholder="Type a message..."\
        />\
        <button type="submit">Send</button>\
      </form>\
    </div>\
  );\
}\n```',
        difficulty: 'Medium'
      },
      {
        id: 4,
        question: 'How do you handle WebSocket connection status and errors? Show an example.',
        answer: 'Here\'s how to handle WebSocket connection status and errors:\n\n```jsx\nfunction useWebSocketStatus(url) {\n  const [status, setStatus] = useState("disconnected");\n  const [error, setError] = useState(null);\n  const ws = useRef(null);\n\n  useEffect(() => {\n    ws.current = new WebSocket(url);\n\n    ws.current.onopen = () => {\n      setStatus("connected");\n      setError(null);\n    };\n\n    ws.current.onclose = (event) => {\n      setStatus("disconnected");\n      if (!event.wasClean) {\n        setError("Connection closed unexpectedly");\n      }\n    };\n\n    ws.current.onerror = (event) => {\n      setStatus("error");\n      setError("WebSocket error occurred");\n    };\n\n    return () => ws.current?.close();\n  }, [url]);\n\n  return { status, error };\n}\n\n// Usage\nfunction WebSocketStatus() {\n  const { status, error } = useWebSocketStatus("ws://your-server");\n\n  return (\n    <div>\n      <div>Status: {status}</div>\n      {error && <div className="error">{error}</div>}\n    </div>\n  );\n}\n```',
        difficulty: 'Medium'
      },
      {
        id: 5,
        question: 'How do you implement WebSocket heartbeat to keep the connection alive? Show an example.',
        answer: 'Here\'s how to implement WebSocket heartbeat:\n\n```jsx\nfunction useWebSocketWithHeartbeat(url) {\n  const ws = useRef(null);\n  const heartbeatInterval = useRef(null);\n  const [isConnected, setIsConnected] = useState(false);\n\n  const startHeartbeat = () => {\n    heartbeatInterval.current = setInterval(() => {\n      if (ws.current?.readyState === WebSocket.OPEN) {\n        ws.current.send(JSON.stringify({ type: "ping" }));\n      }\n    }, 30000); // Send ping every 30 seconds\n  };\n\n  const stopHeartbeat = () => {\n    if (heartbeatInterval.current) {\n      clearInterval(heartbeatInterval.current);\n      heartbeatInterval.current = null;\n    }\n  };\n\n  useEffect(() => {\n    ws.current = new WebSocket(url);\n\n    ws.current.onopen = () => {\n      setIsConnected(true);\n      startHeartbeat();\n    };\n\n    ws.current.onclose = () => {\n      setIsConnected(false);\n      stopHeartbeat();\n    };\n\n    ws.current.onmessage = (event) => {\n      const data = JSON.parse(event.data);\n      if (data.type === "pong") {\n        // Connection is alive\n        console.log("Received pong");\n      }\n    };\n\n    return () => {\n      stopHeartbeat();\n      ws.current?.close();\n    };\n  }, [url]);\n\n  return { isConnected };\n}\n```',
        difficulty: 'Hard'
      }
    ]
  },
  13: {
    title: 'Higher-Order Components',
    questions: [
      {
        id: 1,
        question: 'What is a Higher-Order Component (HOC) in React?',
        answer: 'A Higher-Order Component is a function that takes a component and returns a new component with additional functionality. It\'s a pattern derived from React\'s compositional nature.\n\nExample:\n```jsx\nconst withLoading = (WrappedComponent) => {\n  return function WithLoadingComponent({ isLoading, ...props }) {\n    if (isLoading) {\n      return <div>Loading...</div>;\n    }\n    return <WrappedComponent {...props} />;\n  };\n};\n\n// Usage\nconst UserList = ({ users }) => <div>{users.map(user => <div>{user.name}</div>)}</div>;\nconst UserListWithLoading = withLoading(UserList);\n```',
        difficulty: 'Medium'
      },
      {
        id: 2,
        question: 'What are the common use cases for HOCs?',
        answer: 'Common use cases for HOCs include:\n1. Authentication/Authorization\n2. Logging\n3. Data fetching\n4. State management\n5. Styling\n\nExample:\n```jsx\nconst withAuth = (WrappedComponent) => {\n  return function WithAuthComponent(props) {\n    const isAuthenticated = checkAuth();\n    if (!isAuthenticated) {\n      return <Navigate to="/login" />;\n    }\n    return <WrappedComponent {...props} />;\n  };\n};\n\n// Usage\nconst ProtectedPage = withAuth(MyPage);\n```',
        difficulty: 'Medium'
      },
      {
        id: 3,
        question: 'What are the best practices when creating HOCs?',
        answer: 'Best practices for HOCs include:\n1. Always spread props to the wrapped component\n2. Use a display name for debugging\n3. Don\'t modify the wrapped component\'s prototype\n4. Keep HOCs pure\n\nExample:\n```jsx\nconst withLogging = (WrappedComponent) => {\n  function WithLoggingComponent(props) {\n    console.log(`Rendering ${WrappedComponent.name}`);\n    return <WrappedComponent {...props} />;\n  }\n\n  WithLoggingComponent.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;\n  return WithLoggingComponent;\n};\n\nconst getDisplayName = (WrappedComponent) => {\n  return WrappedComponent.displayName || WrappedComponent.name || "Component";\n};\n```',
        difficulty: 'Medium'
      },
      {
        id: 4,
        question: 'What is the difference between HOCs and custom hooks?',
        answer: 'Key differences:\n1. HOCs wrap components, hooks are used inside components\n2. HOCs can add props, hooks can\'t\n3. HOCs can modify component behavior, hooks can only use existing React features\n4. HOCs can be harder to test, hooks are easier to test\n\nExample:\n```jsx\n// HOC\nconst withData = (WrappedComponent) => {\n  return function WithDataComponent(props) {\n    const [data, setData] = useState(null);\n    useEffect(() => {\n      fetchData().then(setData);\n    }, []);\n    return <WrappedComponent data={data} {...props} />;\n  };\n};\n\n// Custom Hook\nconst useData = () => {\n  const [data, setData] = useState(null);\n  useEffect(() => {\n    fetchData().then(setData);\n  }, []);\n  return data;\n};\n```',
        difficulty: 'Hard'
      },
      {
        id: 5,
        question: 'How do you compose multiple HOCs?',
        answer: 'You can compose HOCs using function composition or by nesting them.\n\nExample:\n```jsx\n// Method 1: Function composition\nconst compose = (...hocs) => (Component) =>\n  hocs.reduce((acc, hoc) => hoc(acc), Component);\n\nconst EnhancedComponent = compose(\n  withAuth,\n  withLogging,\n  withData\n)(MyComponent);\n\n// Method 2: Nesting\nconst EnhancedComponent = withAuth(withLogging(withData(MyComponent)));\n\n// Usage\nfunction App() {\n  return <EnhancedComponent />;\n}\n```',
        difficulty: 'Medium'
      }
    ]
  },
  14: {
    title: 'JWT Authentication',
    questions: [
      {
        id: 1,
        question: 'What is JWT and how does it work in React applications?',
        answer: 'JWT (JSON Web Token) is a compact, URL-safe means of representing claims between parties. In React applications, it\'s commonly used for authentication.\n\nExample:\n```jsx\n// Login function\nconst login = async (credentials) => {\n  const response = await fetch("/api/login", {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify(credentials)\n  });\n  const { token } = await response.json();\n  localStorage.setItem("token", token);\n  return token;\n};\n\n// Using token in API calls\nconst fetchProtectedData = async () => {\n  const token = localStorage.getItem("token");\n  const response = await fetch("/api/protected", {\n    headers: {\n      Authorization: `Bearer ${token}`\n    }\n  });\n  return response.json();\n};\n```',
        difficulty: 'Medium'
      },
      {
        id: 2,
        question: 'How do you handle token expiration in React?',
        answer: 'Here\'s how to handle token expiration:\n\n```jsx\nconst useAuth = () => {\n  const [isAuthenticated, setIsAuthenticated] = useState(false);\n  const [isLoading, setIsLoading] = useState(true);\n\n  const checkToken = useCallback(() => {\n    const token = localStorage.getItem("token");\n    if (!token) {\n      setIsAuthenticated(false);\n      return;\n    }\n\n    try {\n      const payload = JSON.parse(atob(token.split(".")[1]));\n      if (payload.exp * 1000 < Date.now()) {\n        localStorage.removeItem("token");\n        setIsAuthenticated(false);\n      } else {\n        setIsAuthenticated(true);\n      }\n    } catch (error) {\n      setIsAuthenticated(false);\n    } finally {\n      setIsLoading(false);\n    }\n  }, []);\n\n  useEffect(() => {\n    checkToken();\n  }, [checkToken]);\n\n  return { isAuthenticated, isLoading };\n};\n```',
        difficulty: 'Medium'
      },
      {
        id: 3,
        question: 'How do you implement protected routes with JWT?',
        answer: 'Here\'s how to implement protected routes:\n\n```jsx\nfunction ProtectedRoute({ children }) {\n  const { isAuthenticated, isLoading } = useAuth();\n  const navigate = useNavigate();\n\n  useEffect(() => {\n    if (!isLoading && !isAuthenticated) {\n      navigate("/login");\n    }\n  }, [isAuthenticated, isLoading, navigate]);\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return isAuthenticated ? children : null;\n}\n\n// Usage\nfunction App() {\n  return (\n    <Routes>\n      <Route path="/login" element={<Login />} />\n      <Route\
        path="/dashboard"\
        element={\n          <ProtectedRoute>\n            <Dashboard />\n          </ProtectedRoute>\n        }\\n      />\n    </Routes>\n  );\n}\n```',
        difficulty: 'Medium'
      },
      {
        id: 4,
        question: 'How do you handle token refresh in React?',
        answer: 'Here\'s how to implement token refresh:\n\n```jsx\nconst useTokenRefresh = () => {\n  const refreshToken = async () => {\n    try {\n      const response = await fetch("/api/refresh", {\n        method: "POST",\n        headers: {\n          Authorization: `Bearer ${localStorage.getItem("token")}`\n        }\n      });\n      const { token } = await response.json();\n      localStorage.setItem("token", token);\n      return token;\n    } catch (error) {\n      // Handle refresh failure (e.g., logout user)\n      localStorage.removeItem("token");\n      window.location.href = "/login";\n      throw error;\n    }\n  };\n\n  const api = async (url, options = {}) => {\n    try {\n      const response = await fetch(url, options);\n      if (response.status === 401) {\n        // Token expired, try to refresh\n        const newToken = await refreshToken();\n        // Retry with new token\n        return fetch(url, {\n          ...options,\n          headers: {\n            ...options.headers,\n            Authorization: `Bearer ${newToken}`\n          }\n        });\n      }\n      return response;\n    } catch (error) {\n      throw error;\n    }\n  };\n\n  return { api };\n};\n```',
        difficulty: 'Hard'
      },
      {
        id: 5,
        question: 'What are the security best practices for JWT in React?',
        answer: 'Security best practices for JWT in React include:\n\n1. Store tokens in HttpOnly cookies when possible\n2. Use HTTPS for all API calls\n3. Implement token expiration\n4. Use refresh tokens for long-term sessions\n5. Clear tokens on logout\n\nExample:\n```jsx\nconst useSecureAuth = () => {\n  const login = async (credentials) => {\n    const response = await fetch("/api/login", {\n      method: "POST",\n      credentials: "include", // For cookies\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify(credentials)\n    });\n    return response.json();\n  };\n\n  const logout = async () => {\n    await fetch("/api/logout", {\n      method: "POST",\n      credentials: "include"\n    });\n    // Clear any client-side state\n    setIsAuthenticated(false);\n  };\n\n  return { login, logout };\n};\n```',
        difficulty: 'Hard'
      }
    ]
  },
  
   
}; 