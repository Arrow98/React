import { useState } from "react";
import "./accordion-app.css";
import { AccordionHeader } from "../accordion-header/accordion-header";
import { AccordionBody } from "../accordion-body/accordion-body";

export function AccordionApp() {
  /* Remove sample code and start project */

  return (
    <div className="body">
      <div className="image-box"></div>
      <div id="accordion-app">
        <AccordionHeader />
        <AccordionBody />
      </div>
      ;
    </div>
  );
}
