import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import ExtraNeeded from './Components/ExtraNeeded/ExtraNeeded';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ExtraNeeded />
    <App />
  </React.StrictMode>,
);
