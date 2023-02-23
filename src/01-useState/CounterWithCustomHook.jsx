import React from "react";
import useCounter from "../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col text-center">
            <h1>counter with Hook: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => increment(2)}>
              +1
            </button>
            <button className="btn btn-primary" onClick={reset}>
              Reset
            </button>
            <button className="btn btn-primary" onClick={decrement}>
              -1
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterWithCustomHook;
