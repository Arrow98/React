import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import portfolioData from "./data/portfolio-data.json";
import { PortfolioApp } from "./components/portfolio-app/portfolio-app";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PortfolioApp portfolio={portfolioData} />
  </React.StrictMode>
);

reportWebVitals();
