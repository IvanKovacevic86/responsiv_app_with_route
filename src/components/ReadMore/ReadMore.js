import React from "react";
import "./readMore.css";
import img17 from "../../img/img17.jpg";

const ReadMore = () => {
  return (
    <div className="readMore">
      <div className="readLeftDiv">
        <h1>BUILT TO BRING BEST RESULT</h1>
        <p>
          Enjoy an extensive cardio zone, use our exercise equipment, or join a
          group program!
        </p>
        <div className="readButton">
          <button className="firstButton">READ MORE</button>
        </div>
      </div>
      <div className="readRightDiv">
        <img src={img17} alt="pic" />
      </div>
    </div>
  );
};

export default ReadMore;
