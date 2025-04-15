import React from "react";
import "./input.css";
import { ALLOWED_CHAR } from "../../libs/constants";
export function InputBox({ initialValue, setInitialValue }) {
  function handleInput(e) {
    const input = e.target.value;

    const isValid = input
      .split("")
      .every((char) => ALLOWED_CHAR.includes(char));

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
