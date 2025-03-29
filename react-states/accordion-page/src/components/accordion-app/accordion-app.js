import { useState } from "react";
import "./accordion-app.css";
import data from "./data/accordion-data.json";

export function AccordionApp() {
  /* Remove sample code and start project */

  const [accordionData, setAccordionData] = useState(data);

  const sampleData = JSON.stringify(accordionData, null, 4);
  return <div id="accordion-app">{sampleData}</div>;
}
