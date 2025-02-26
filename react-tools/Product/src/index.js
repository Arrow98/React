import React from "react";
import { createRoot } from "react-dom/client";
import { MainPage } from "../src/components/app/app";

const root = createRoot(document.getElementById("root"));
root.render(<MainPage />);
