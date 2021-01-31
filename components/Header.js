import React from "react";
import "./Header.css";
import teslalogo from "../assets/teslaLogoSmall.svg";

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <img src={teslalogo} alt="Tesla_logo" />
      </div>

      <div className="header_center">
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model x</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panel</p>
      </div>

      <div className="header_right">
        <p>Shop</p>
        <p>Tesla Account</p>
      </div>
    </div>
  );
}

export default Header;
