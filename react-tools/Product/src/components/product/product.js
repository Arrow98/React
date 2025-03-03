import React from "react";
import "./product.css";

export function Product({ productInfo }) {
  return (
    <div className="product-box">
      <div className="product">
        <img src={productInfo.image} className="product-image" />
      </div>
      <div className="product-name">{productInfo.name}</div>
      <div className="product-type">{productInfo.type}</div>
      <div className="product-price">{productInfo.amount}</div>
    </div>
  );
}
