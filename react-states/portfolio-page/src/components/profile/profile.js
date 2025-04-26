import React from "react";
import "./profile.css";
import { FaInfoCircle } from "react-icons/fa";

export function Profile({ portfolio }) {
  return (
    <div className="profile-box">
      <div className="profile-pic">
        <img src={portfolio.avatar} alt="" className="avatar" />
      </div>
      <div className="profile-name">{portfolio.name}</div>
      <div className="location-box">
        <div className="location-name-box">
          <div className="location">LOCATION</div>
          <FaInfoCircle color="#48a860" />
        </div>
        <div className="location-name">
          {portfolio.location.zone}, {portfolio.location.region}{" "}
        </div>
      </div>
    </div>
  );
}
