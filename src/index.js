import ReactDOM from "react-dom/client";
import "./index.css";
// import HooksApp from "./HooksApp";
import "./08-useReducer/intro-reducer";
import { MainApp } from "./09-context/MainApp";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
