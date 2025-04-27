import React from "react";
import "./expertise.css";

export function ExpertiseBox({ portfolio }) {
  return (
    <div className="expertise-box">
      <div className="expertise-header">AREAS OF EXPERTISE</div>
      <div className="plant-box">
        {portfolio.expertise.map((plant, index) => {
          return <div key={index}>{plant}</div>;
        })}
      </div>
    </div>
  );
}
