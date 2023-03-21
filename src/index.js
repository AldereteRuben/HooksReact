import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import HooksApp from "./HooksApp";
import FormWithSimpleCustomHook from "./02-useEffect/FormWithSimpleCustomHook";
import MultipleCustomHooks from "./03-examples/MultipleCustomHooks";
import FocusScreen from "./04-useRefe/FocusScreen";
import Layout from "./05-useLayoutEffect/Layout";
import Memorize from "./06-memos/Memorize";
import { CallbackHook } from "./06-memos/CallbackHook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //  <React.StrictMode>
  <CallbackHook />
  // </React.StrictMode>
);
