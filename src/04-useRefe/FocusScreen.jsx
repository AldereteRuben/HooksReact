import React, { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef();
  const onClick = () => {
    console.log(inputRef);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1>Focus Screen</h1>
            <hr />
            <input
              ref={inputRef}
              type="text"
              placeholder="Input your name"
              className="form-control"
            />
            <button className="btn btn-dark mt-3" onClick={onClick}>
              Set Focus
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FocusScreen;
