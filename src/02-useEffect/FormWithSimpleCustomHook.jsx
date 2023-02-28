import React, { useEffect } from "react";
import useForm from "./../hooks/useForm";

const FormWithSimpleCustomHook = () => {
  const { formState, onInputChange } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formState;
  useEffect(() => {
    // console.log("useEffect called!!");
  }, []);

  useEffect(() => {
    // console.log("form changed!!");
  }, [formState]);

  useEffect(() => {
    // console.log("email changed!!");<<<
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
            <input
              type="password"
              className="form-control mt-3"
              placeholder="password"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormWithSimpleCustomHook;
