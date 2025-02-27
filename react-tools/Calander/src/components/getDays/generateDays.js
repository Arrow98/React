import React from "react";

export function generateDays(monthIndex, year) {
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  let days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(<div className="iactive-day"></div>);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, monthIndex, i);
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    days.push(
      <div className={`day ${isWeekend ? "inactive-day" : ""}`}>{i}</div>
    );
  }

  return days;
}
