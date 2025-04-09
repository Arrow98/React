import React from "react";
import "./input.css";

export function InputBox({ initialValue, setInitialValue }) {
  function handleInput(e) {
    const input = e.target.value;
    const allowedChars = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      ".",
      "+",
      "-",
      "*",
      "/",
      "(",
      ")",
    ];

    const isValid = input
      .split("")
      .every((char) => allowedChars.includes(char));

    if (isValid) {
      setInitialValue(input);
    }
  }
  return (
    <div className="input-box">
      <input type="text" value={initialValue} onChange={handleInput} />
    </div>
  );
}
