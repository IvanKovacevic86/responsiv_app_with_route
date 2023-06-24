import React from "react";
import "./hero.css";
import illustration from "../../img/illustration-intro.svg";

const Hero = () => {
  return (
    <div className="heroDiv">
      <div className="heroLeftDiv">
        <h1>Bring everyone together to build better products</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <div className="heroButton">
          <button>Get Start</button>
        </div>
      </div>
      <div className="heroRightDiv">
        <img src={illustration} alt="illustration" />
      </div>
    </div>
  );
};

export default Hero;
