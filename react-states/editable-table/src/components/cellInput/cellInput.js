import React from "react";
import "./CellInput.css";

export function CellInput({
  columnName,
  initialValue,
  options = [],
  onCellInputChange,
  onChangeCellState,
}) {
  function handleKeyUp(e) {
    if (e.key === "Enter") {
      onChangeCellState();
    }
  }
  if (columnName === "name" || columnName == "email") {
    return (
      <input
        type="text"
        className="name-input"
        value={initialValue}
        onChange={(e) => onCellInputChange(e.target.value)}
        onKeyUp={handleKeyUp}
        onBlur={onChangeCellState}
      />
    );
  }

  if (columnName === "status" || columnName === "role") {
    return (
      <select
        value={initialValue}
        onChange={(e) => onCellInputChange(e.target.value)}
        onKeyUp={handleKeyUp}
      >
        {options.map((option) => (
          <option value={option}> {option} </option>
        ))}
      </select>
    );
  }
}
