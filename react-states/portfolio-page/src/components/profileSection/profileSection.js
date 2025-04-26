import React from "react";
import "./profileSection.css";
import { Profile } from "../profile/profile";
import { AboutMe } from "../aboutMe/aboutMe";
import { PortfolioGallery } from "../portfolio-gallery/portfolio-gallery";
import { Testimonial } from "../testimonial/testimonial";
import { ExpertiseBox } from "../expertise/expertise";
import { SessionHeader } from "../session-header/session-header";
import { PriceBox } from "../session-header/price-box/price-box";
import { CalenderBox } from "../calender-box/calander-box";

export function ProfileSection({ portfolio }) {
  return (
    <div className="profile">
      <div className="info-box">
        <div className="info">
          <Profile portfolio={portfolio} />
          <AboutMe portfolio={portfolio} />
        </div>
        <div className="gallery">
          <PortfolioGallery portfolio={portfolio} />
          <Testimonial portfolio={portfolio} />
          <ExpertiseBox portfolio={portfolio} />
        </div>
      </div>
      <div className="session">
        <SessionHeader />
        <PriceBox />
        <CalenderBox />
      </div>
    </div>
  );
}
