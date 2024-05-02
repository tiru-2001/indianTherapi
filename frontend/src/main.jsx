import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UseAuth from "./statemanagement/UseAuth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <UseAuth>
      <App />
    </UseAuth>
  </>
);
