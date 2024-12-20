```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the component re-renders
    // every time the count changes, and this effect runs again, causing
    // another re-render, ad infinitum.
    setCount(count + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```