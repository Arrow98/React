import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { GalleryApp } from "./components/gallery-app/gallery-app";
import photos from "./data/photos.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GalleryApp photos={photos} />
  </React.StrictMode>
);

reportWebVitals();
