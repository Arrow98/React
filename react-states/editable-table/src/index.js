import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { EditableTableApp } from "./components/editable-table-app/editable-table-app";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EditableTableApp />
  </React.StrictMode>
);

reportWebVitals();
