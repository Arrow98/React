import "./accordion-app.css";

export function AccordionApp({ accordionData }) {
  /* Remove sample code and start project */

  const sampleData = JSON.stringify(accordionData, null, 4);
  return <div id="accordion-app">{sampleData}</div>;
}
