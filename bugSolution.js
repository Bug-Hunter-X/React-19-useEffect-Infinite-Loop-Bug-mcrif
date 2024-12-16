```javascript
// Correct implementation in React 19:

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correctly updates the state only once
    setCount((prevCount) => prevCount + 1); 
  }, []); // Empty dependency array ensures it runs only once

  return <div>Count: {count}</div>;
};
```