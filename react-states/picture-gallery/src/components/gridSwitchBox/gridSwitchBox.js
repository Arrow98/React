import React, { useState } from "react";
import "./gridSwitchBox.css";
import { FiGrid } from "react-icons/fi";
import { TiThMenuOutline } from "react-icons/ti";

export function GridSwitchBox({ isList, isGrid, setIsList, setIsGrid }) {
  function handleListSwitch() {
    setIsList(true);
    setIsGrid(false);
  }
  function handleGridSwitch() {
    setIsGrid(true);
    setIsList(false);
  }
  return (
    <div className="grid-switch-box">
      <div onClick={handleListSwitch} className={` ${isList ? "box-2" : ""}`}>
        <TiThMenuOutline size={20} />
      </div>
      <div onClick={handleGridSwitch} className={` ${isGrid ? "box-2" : ""}`}>
        <FiGrid size={20} />
      </div>
    </div>
  );
}
