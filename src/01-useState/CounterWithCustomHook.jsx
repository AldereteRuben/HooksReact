import React from "react";

const CounterWithCustomHook = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1>counter with Hook: xxx</h1>
            <hr />
            <button className="btn btn-primary">+1</button>
            <button className="btn btn-primary">Reset</button>
            <button className="btn btn-primary">-1</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterWithCustomHook;
