import React, { useState } from "react";
import "./button.css";
import { InputBox } from "../input/input";
import { evaluate } from "mathjs";
import { BUTTONS } from "../../libs/constants";
import { NUMBERS } from "../../libs/constants";
import { SYMBOLS } from "../../libs/constants";

export function ButtonGrid() {
  const [initialValue, setInitialValue] = useState("");
  function handleClick(InputValue) {
    setInitialValue((previousValue) => previousValue + InputValue);
  }
  function clearInput() {
    setInitialValue("");
  }

  function evaluateInput() {
    setInitialValue(evaluate(initialValue));
  }
  return (
    <div>
      <InputBox initialValue={initialValue} setInitialValue={setInitialValue} />
      <div className="button-grid">
        {BUTTONS.map((buttonValue, index) => {
          if (buttonValue === "0") {
            return (
              <button
                key={index}
                className="zero"
                onClick={() => handleClick(buttonValue)}
              >
                {buttonValue}
              </button>
            );
          } else if (SYMBOLS.includes(buttonValue)) {
            return (
              <button
                key={index}
                className="orange"
                onClick={() => handleClick(buttonValue)}
              >
                {buttonValue}
              </button>
            );
          } else if (NUMBERS.includes(buttonValue)) {
            return (
              <button
                key={index}
                className="black"
                onClick={() => handleClick(buttonValue)}
              >
                {buttonValue}
              </button>
            );
          } else if (buttonValue === "AC") {
            return (
              <button key={index} onClick={clearInput}>
                {buttonValue}
              </button>
            );
          } else if (buttonValue === "=") {
            return (
              <button key={index} className="orange" onClick={evaluateInput}>
                {buttonValue}
              </button>
            );
          } else {
            return (
              <button key={index} onClick={() => handleClick(buttonValue)}>
                {buttonValue}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
}
