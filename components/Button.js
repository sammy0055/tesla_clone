import React from "react";
import './Button.css'
function Button({ imp, test, link }) {
  return (
    <div className={`buttons ${imp == "secondery" ? "button_white" : ""}`}>
      {" "}
      <a href={link}>{test}</a>
    </div>
  );
}

export default Button;
