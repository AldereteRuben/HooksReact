import React, { useLayoutEffect, useRef, useState } from "react";

const Quote = ({ author, quote }) => {
  const pRef = useRef();
  const [boxSize, setboxSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setboxSize({ height, width });
  }, []);
  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer mt-2">{author}</footer>
      </blockquote>
      <br></br>
      <code>{JSON.stringify(boxSize)}</code>
      <br></br>
    </>
  );
};
export default Quote;
