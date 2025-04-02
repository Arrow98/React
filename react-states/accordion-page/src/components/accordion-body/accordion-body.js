import React, { useState } from "react";
import "./accordion-body.css";
import { FaCirclePlus, FaMinimize } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import data from "../../data/accordion-data.json";

export function AccordionBody() {
  const [switchId, setSwitchId] = useState(0);

  return (
    <div className="accordion-Body">
      {data.map((item, index) => {
        return (
          <div
            className={`accordion-list ${
              index === switchId ? "expanded" : "collapsed"
            }`}
            key={index}
          >
            <div className="accordion-list-title-box">
              <div className="accordion-list-title">{item.title}</div>

              {index === switchId ? (
                <FaCircleMinus size={25} />
              ) : (
                <FaCirclePlus
                  size={25}
                  onClick={() => setSwitchId(index)}
                  color="purple"
                />
              )}
            </div>
            {index === switchId && (
              <div className="accordion-list-body">{item.details}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
