import React from "react";
import "./profileBox.css";
import { ProfileCageImage1 } from "../profile1/profile1";
import { ProfileCageImage2 } from "../profile2/profile2";

export function ProfileBox() {
  return (
    <div className="profile-box">
      <ProfileCageImage1 />
      <div className="profile-name">Arrow</div>
      <div className="profile-pic"></div>
      <ProfileCageImage2 />
    </div>
  );
}
