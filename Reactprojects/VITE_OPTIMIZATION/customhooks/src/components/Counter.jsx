import useCounter from "./useCounter";

const Counter = ({ initial, step }) => {
  const { count, increment, decrement, reset } = useCounter(initial, step);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Count: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
