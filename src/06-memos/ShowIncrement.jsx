import React from "react";

export const ShowIncrement = ({ increment }) => {
    console.log('me volví a dibujar')
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment();
      }}
    >
      +1
    </button>
  );
};
