import React from "react";
import "./calender-box.css";

export function CalenderBox() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInApril = 30;

  const startDay = 1;

  const blanks = new Array(startDay).fill(null);

  const days = Array.from({ length: daysInApril }, (_, i) => i + 1);

  const calendarDays = [...blanks, ...days];
  return (
    <div className="calender-box">
      <div>Choose your session date</div>
      <div className="calendar-container">
        <p>April 2019</p>
        <div className="calendar-grid">
          {daysOfWeek.map((day) => (
            <div key={day} className="calendar-header">
              {day}
            </div>
          ))}
          {calendarDays.map((day, index) => (
            <div key={index} className="calendar-cell">
              {day ? day : ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
