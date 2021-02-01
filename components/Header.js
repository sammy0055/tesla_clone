import React from "react";
import "./Header.css";
import {  FaBars } from "react-icons/fa";
import teslalogo from "../assets/teslaLogoSmall.svg";

const width = window.innerWidth;
const breakpoint = 425;

function Header({state, setstate}) {
  

  const show_nav = () => {
    setstate(!state);
  };
  return (
    <>
      <div className="header">
        {width > breakpoint ? (
          <>
            {" "}
            <div className="header_logo">
              <img src={teslalogo} alt="Tesla_logo" />
            </div>{" "}
            <div className="header_center">
              <p>Model S</p>
              <p>Model 3</p>
              <p>Model x</p>
              <p>Model Y</p>
              <p>Solar Roof</p>
              <p>Solar Panel</p>
            </div>{" "}
            <div className="header_right">
              <p>Shop</p>
              <p>Tesla Account</p>
              <p className="Fabar">{<FaBars />}</p>
            </div>{" "}
          </>
        ) : (
          <>
            <div className="header_logo">
              <img src={teslalogo} alt="Tesla_logo" />
            </div>
            <div className="header_right">
              <p className="Fabar">{<FaBars onClick={show_nav} />}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Header;
