import React from "react";
import "./testimonial.css";
import { GoDotFill } from "react-icons/go";

export function Testimonial({ portfolio }) {
  const dots = new Array(4).fill(0);
  return (
    <div className="testimonial-box">
      <div className="testimonial-header">TESTIMONIAL</div>
      <div className="testimonial-info">{portfolio.testimonials.quote} </div>
      <div className="testimonial-footer">
        <div className="footer-profile">
          {portfolio.testimonials.name}, {portfolio.testimonials.location}
        </div>
        <div className="dot-switch">
          {dots.map((_, index) => {
            return (
              <GoDotFill key={index} color={index === 0 ? "black" : "orange"} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
