import React from "react";
import "./gridSwitchBox.css";
import { FiGrid } from "react-icons/fi";
import { TiThMenuOutline } from "react-icons/ti";

export function GridSwitchBox() {
  return (
    <div className="grid-switch-box">
      <div>
        <TiThMenuOutline size={30} />
      </div>
      <div className="box-2">
        <FiGrid size={30} />
      </div>
    </div>
  );
}
