import React, { useState } from "react";
import "./table.css";

function CellInput({
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

function TableCell({
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

export function EditableTable({ users }) {
  const columns = ["Id", "Name", "Email", "Role", "Status"];
  const [updatedUsers, setUpdatedUsers] = useState(users);

  const [targetCell, setTargetCell] = useState({ index: -1, key: "" });

  function handleChange(index, info, value) {
    setUpdatedUsers(
      updatedUsers.map((user, idx) =>
        index === idx ? { ...user, [info]: value } : user
      )
    );
  }

  function getCellState(rowIndex, name) {
    return targetCell.index === rowIndex && targetCell.key === name
      ? "input"
      : "display";
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th></th>
            {columns.map((colHead, index) => (
              <th key={index}>{colHead}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {updatedUsers.map(({ id, name, email, role, status }, rowIndex) => (
            <tr key={rowIndex}>
              <td>{rowIndex}</td>
              <td>{id} </td>
              <TableCell
                cellState={getCellState(rowIndex, "name")}
                cellValue={name}
                columnName="name"
                rowIndex={rowIndex}
                setTargetCell={setTargetCell}
                setUpdatedUsers={handleChange}
              />
              <TableCell
                cellState={getCellState(rowIndex, "email")}
                cellValue={email}
                columnName="email"
                rowIndex={rowIndex}
                setTargetCell={setTargetCell}
                setUpdatedUsers={handleChange}
              />
              <TableCell
                cellState={getCellState(rowIndex, "role")}
                cellValue={role}
                columnName="role"
                rowIndex={rowIndex}
                options={["Admin", "Editor", "Viewer"]}
                setTargetCell={setTargetCell}
                setUpdatedUsers={handleChange}
              />
              <TableCell
                cellState={getCellState(rowIndex, "status")}
                cellValue={status}
                columnName="status"
                rowIndex={rowIndex}
                options={["Active", "Inactive", "Pending", "Suspended"]}
                setTargetCell={setTargetCell}
                setUpdatedUsers={handleChange}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
