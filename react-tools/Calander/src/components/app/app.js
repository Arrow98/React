import React from "react";
import { Header } from "../header/header";
import { Calendar } from "../calander/calander";
import "./app.css";
import months from "../../data/months.json";
import days from "../../data/days.json";

export function MainPage() {
  return (
    <div>
      <Header />
      <Calendar months={months} days={days} />
    </div>
  );
}
