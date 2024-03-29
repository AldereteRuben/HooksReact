import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setcounter] = useState(10);
  const incrementFather = useCallback(() => {
    setcounter((value) => value + 1);
  }, []);

  return (
    <>
      <h1>use callback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
