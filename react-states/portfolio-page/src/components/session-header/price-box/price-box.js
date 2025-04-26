import React from "react";
import "./price-box.css";

export function PriceBox() {
  return (
    <div className="price-box">
      <div>
        <div className="price">
          <div>$30</div>
          <div>15 minutes</div>
        </div>
        <div className="plan-box">
          <div className="plan-header">
            <div>SEED PLAN</div>
            <div>Edit</div>
          </div>
          <div>
            For the aspiring gardener who just needs someadvice or just has one
            question
          </div>
        </div>
      </div>
    </div>
  );
}
