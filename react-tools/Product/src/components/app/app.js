import React from "react";
import "./app.css";
import { Header } from "../header/header";
import { GridBox } from "../gridBox/gridBox";
import productData from "../../data/products.json";

export function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <GridBox productData={productData} />
    </div>
  );
}
