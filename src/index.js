import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import HooksApp from "./HooksApp";
import FormWithSimpleCustomHook from "./02-useEffect/FormWithSimpleCustomHook";
import MultipleCustomHooks from "./03-examples/MultipleCustomHooks";
import FocusScreen from "./04-useRefe/FocusScreen";
import Layout from "./05-useLayoutEffect/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //  <React.StrictMode>
  // <FocusScreen></FocusScreen>
  <Layout />
  // </React.StrictMode>
);
