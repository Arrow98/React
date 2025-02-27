import React from "react";
import "./calander.css";
import { generateDays } from "../getDays/generateDays";

const year = new Date().getFullYear();

export function Calendar(props) {
  const { months } = props;
  const { days } = props;

  return (
    <div className="calendar-container">
      {months.map((month, index) => (
        <div className="month">
          <div className="month-title">{month}</div>
          <div className="day-title">
            {days.map((day) => (
              <div className="each-day">{day}</div>
            ))}
          </div>
          <div className="days-container">{generateDays(index, year)}</div>
        </div>
      ))}
    </div>
  );
}
