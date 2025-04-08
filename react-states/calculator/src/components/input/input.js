import React from "react";
import "./input.css";

export function InputBox({ initialValue }) {
  return (
    <div className="input-box">
      <input type="text" value={initialValue} />
    </div>
  );
}
