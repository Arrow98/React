import React from "react";
import "./aboutMe.css";

export function AboutMe({ portfolio }) {
  return (
    <div className="aboutme-box">
      <div className="aboutme-name">About Me</div>
      <div className="aboutme-info">{portfolio.about} </div>
    </div>
  );
}
