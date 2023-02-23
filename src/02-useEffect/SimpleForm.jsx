import React, { useEffect, useState } from "react";
const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "ruben",
    email: "ruben@correo.com",
  });

  const { username, email } = formState;
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({ ...formState, [name]: value });
  };

  useEffect(() => {
    console.log("useEffect called!!");
  }, []);

  useEffect(() => {
    console.log("form changed!!");
  }, [formState]);

  useEffect(() => {
    console.log("email changed!!");
  }, [email]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1>Simple Form</h1>

            <input
              type="text"
              className="form-control mt-4"
              placeholder="Username"
              name="username"
              value={username}
              onChange={onInputChange}
            />

            <input
              type="email"
              className="form-control mt-3"
              placeholder="email"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleForm;
