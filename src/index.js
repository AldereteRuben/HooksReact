import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import HooksApp from "./HooksApp";
import FormWithSimpleCustomHook from "./02-useEffect/FormWithSimpleCustomHook";
import MultipleCustomHooks from "./03-examples/MultipleCustomHooks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //  <React.StrictMode>
  <MultipleCustomHooks></MultipleCustomHooks>
  // </React.StrictMode>
);
