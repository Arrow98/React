import React from "react";
import "./portfolio-gallery.css";
import { FaSearchPlus } from "react-icons/fa";

export function PortfolioGallery({ portfolio }) {
  return (
    <div className="portfolio-gallery-box">
      <div className="porfolio-header-box">
        <div className="porfolio-header">PORTFOLIO</div>
        <FaSearchPlus color="pink" />
      </div>
      <div className="gallery1">
        {portfolio.portfolio.map((src, i) => (
          <img key={i} src={src} alt="" className="picture" />
        ))}
      </div>
    </div>
  );
}
