import React from "react";
import "./header.css";
import { Logo } from "../logo/logo";
import { Pages } from "../pages/pages";
import { InputBox } from "../inputBox/inputBox";
import { ProfileBox } from "../profileBox/profileBox";

const logoData = {
  alt: "Logo",
  src: "	https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png",
};

export function Header() {
  return (
    <div className="header">
      <Logo logoData={logoData} />
      <Pages />
      <InputBox />
      <ProfileBox />
    </div>
  );
}
