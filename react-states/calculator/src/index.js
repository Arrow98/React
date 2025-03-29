import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { CalculatorApp } from "./components/calculator-app/calculator-app";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CalculatorApp />
  </React.StrictMode>
);

reportWebVitals();
