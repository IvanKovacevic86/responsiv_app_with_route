import React from "react";
import "./comButtons.css";

const ComButtons = () => {
  return (
    <div className="community">
      <div className="comButtons">
        <div>
          <button className="firstButton">GET STARTED</button>
        </div>
        <div>
          <button className="secondButton">MORE INFO</button>
        </div>
        <div>
          <button className="thirdButton">CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default ComButtons;
