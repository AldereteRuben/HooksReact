import React, { useEffect, useState } from "react";

const Message = () => {
  const [coords, setcoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      setcoords({ x, y });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h2>El usuario ya existe!!</h2>
      {JSON.stringify(coords)}
    </>
  );
};
export default Message;
