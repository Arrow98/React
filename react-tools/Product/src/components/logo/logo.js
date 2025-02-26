import React from "react";
import "./logo.css";

export function Logo({ logoData }) {
  const { alt, src } = logoData;

  return (
    <div className="logo">
      <img alt={alt} src={src} />
    </div>
  );
}
