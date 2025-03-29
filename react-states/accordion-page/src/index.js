import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { AccordionApp } from "./components/accordion-app/accordion-app";
import data from "./data/accordion-data.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AccordionApp accordionData={data} />
  </React.StrictMode>
);

reportWebVitals();
