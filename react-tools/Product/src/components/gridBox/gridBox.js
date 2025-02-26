import React from "react";
import "./gridBox.css";
import { Product } from "../product/product";

export function GridBox({ productData }) {
  return (
    <div className="grid-box">
      {productData.map((productInfo, index) => {
        return <Product productInfo={productInfo} />;
      })}
    </div>
  );
}
