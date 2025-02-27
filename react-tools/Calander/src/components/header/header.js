import React from "react";
import "./header.css";

export function Header() {
  return (
    <div className="header">
      <div className="header-year">
        <div>+</div>
        <div className="this-year">2025</div>
      </div>
      <div className="header-season">
        <div className="season-box">
          <div>Day</div>
          <div className="week">Week</div>
          <div>Month</div>
          <div className="year">Year</div>
        </div>
      </div>
      <div className="search-box">
        <input type="text" className="input" placeholder="Search" />
        <div className="switch-box">
          <div className="left-arrow">{"<"}</div>
          <div className="middle-box">Today</div>
          <div className="right-arrow">{">"}</div>
        </div>
      </div>
    </div>
  );
}
