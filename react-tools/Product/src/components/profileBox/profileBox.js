import React from "react";
import "./profileBox.css";
import { ShopIcon } from "../profile1/profile1";
import { DropDownIcon } from "../profile2/profile2";

export function ProfileBox() {
  return (
    <div className="profile-box">
      <ShopIcon />
      <div className="profile-name">Arrow</div>
      <div className="profile-pic"></div>
      <DropDownIcon />
    </div>
  );
}
