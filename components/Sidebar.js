import React from "react";
import "./Sidebar.css";
import { AiOutlineClose } from "react-icons/ai";

function Sidebar({ state, setstate }) {
  const hid_nav = () => {
    setstate(!state);
  };
  return (
    <>
      <div className={state ? "Sidebar" : "Sidebar active"}>
        <div className="Closeicon">{<AiOutlineClose onClick={hid_nav} />}</div>
        <div className="Navlist">
          <p>Model S</p>
          <p>Model 3</p>
          <p>Model X</p>
          <p>Model Y</p>
          <p>Solar Roof</p>
          <p>Solar Panel</p>
          <p>Shop</p>
          <p>Tesla Account</p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
