import { useState } from "react";

const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value) => setCounter(counter + value);

  const decrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  const reset = () => setCounter(initialValue);

  return { counter, increment, decrement, reset };
};

export default useCounter;