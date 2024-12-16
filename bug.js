```javascript
// In a React 19 functional component:

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This is incorrect, it causes issues in React 19 and will result in infinite loop
    setCount(count + 1); 
  }, []);

  return <div>Count: {count}</div>;
};
```