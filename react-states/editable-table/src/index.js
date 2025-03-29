import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { EditableTableApp } from "./components/editable-table-app/editable-table-app";
import "./index.css";
import users from "./data/table-data.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EditableTableApp users={users} />
  </React.StrictMode>
);

reportWebVitals();
