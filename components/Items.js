import React from "react";
import "./Items.css"
import Button from "./Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Items({
  title,
  desc,
  backgroundimg,
  leftbtntext,
  leftbtnLink,
  rightbtntext,
  twobtn,
  first,
}) {
  return (
    <div className="Item0" style={{backgroundImage: `url(${backgroundimg})`}}>
      <div className="Item_container">
        <div className="Item_text">
          <p>{title}</p>
          <div className="Item_textdesc">
            <p>{desc}</p>
          </div>
        </div>

        <div className="Item_lowerthird">
          <div className="Item_btn">
            <Button imp="primary" test={leftbtnLink} link={leftbtnLink} />
            {twobtn && (
              <Button imp="secondery" test={rightbtntext} link={rightbtntext} />
            )}
          </div>
          {first && (
            <div className="item_expand">
              <ExpandMoreIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Items;
