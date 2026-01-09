import { useState } from "react";

const useCounter = (initial = 0, step = 1) => {
  const [count, setCount] = useState(initial);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(initial);

  return { count, increment, decrement, reset };
};

export default useCounter;
