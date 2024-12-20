```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldIncrement, setShouldIncrement] = useState(true);

  useEffect(() => {
    if (shouldIncrement) {
      setCount(count + 1);
      setShouldIncrement(false);
    }
  }, [shouldIncrement, count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setShouldIncrement(true)}>Increment</button>
    </div>
  );
}
```