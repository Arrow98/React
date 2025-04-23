import React, { useState } from "react";
import "./checkBox.css";

export function CheckBox({ setAllowTagsInput }) {
  function handleCheck(e) {
    setAllowTagsInput(e.target.checked);
  }
  return (
    <div className="check-box">
      <input type="checkbox" onChange={handleCheck} />
      <p>Search in SubFolders</p>
    </div>
  );
}
