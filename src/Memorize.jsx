import React, { useState } from "react";
import useCounter from "./../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setshow] = useState(true);
  return (
    <>
      <h1>
        Counter <Small value={counter} />
      </h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>
      <button className="btn btn-secondary" onClick={() => setshow(!show)}>
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default Memorize;
