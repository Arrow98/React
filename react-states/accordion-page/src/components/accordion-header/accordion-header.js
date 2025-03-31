import React from "react";
import "./accordion-header.css";
import { PiStarFourFill } from "react-icons/pi";

export function AccordionHeader() {
  return (
    <div className="header">
      <div className="star">
        <PiStarFourFill size={70} color="purple" />
      </div>
      <div className="header-text">FAQs</div>
    </div>
  );
}
