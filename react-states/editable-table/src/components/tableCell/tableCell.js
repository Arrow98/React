import React from "react";
import { CellInput } from "../cellInput/cellInput";

export function TableCell({
  cellState,
  cellValue,
  rowIndex,
  columnName,
  options = [],
  setTargetCell,
  setUpdatedUsers,
}) {
  function handleDoubleClick() {
    setTargetCell({ index: rowIndex, key: columnName });
  }

  function handleCellInputChange(value) {
    setUpdatedUsers(rowIndex, columnName, value);
  }

  function onChangeCellState() {
    setTargetCell({ index: -1, key: "" });
  }

  return (
    <td className="ddd" onDoubleClick={handleDoubleClick}>
      {cellState === "display" && cellValue}
      {cellState === "input" && (
        <CellInput
          onCellInputChange={handleCellInputChange}
          columnName={columnName}
          initialValue={cellValue}
          options={options}
          onChangeCellState={onChangeCellState}
        />
      )}
    </td>
  );
}
