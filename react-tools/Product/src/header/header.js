import React from "react";
import "./header.css";
import { Logo } from "../logo/logo";
import { Pages } from "../pages/pages";
import { InputBox } from "../inputBox/inputBox";
import { ProfileBox } from "../profileBox/profileBox";

export function Header() {
  return (
    <div className="header">
      <Logo />
      <Pages />
      <InputBox />
      <ProfileBox />
    </div>
  );
}
