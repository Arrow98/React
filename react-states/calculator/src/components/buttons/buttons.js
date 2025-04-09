import React, { useState } from "react";
import "./button.css";
import { InputBox } from "../input/input";
import { evaluate } from "mathjs";

export function ButtonGrid() {
  const buttons = [
    "AC",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "−",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
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
        {buttons.map((buttonValue, index) => {
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
          } else if (
            buttonValue === "/" ||
            buttonValue === "*" ||
            buttonValue === "−" ||
            buttonValue === "+"
          ) {
            return (
              <button
                key={index}
                className="orange"
                onClick={() => handleClick(buttonValue)}
              >
                {buttonValue}
              </button>
            );
          } else if (
            buttonValue === "1" ||
            buttonValue === "2" ||
            buttonValue === "3" ||
            buttonValue === "4" ||
            buttonValue === "5" ||
            buttonValue === "6" ||
            buttonValue === "7" ||
            buttonValue === "8" ||
            buttonValue === "9" ||
            buttonValue === "."
          ) {
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
