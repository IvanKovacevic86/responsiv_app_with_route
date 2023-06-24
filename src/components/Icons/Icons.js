import React from "react";
import "./icons.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Icons = () => {
  return (
    <div className="icons">
      <h1> INFORMATION :</h1>

      <div className="iconsDiv">
        <h3>
          <AiOutlineUser className="icon" /> Ivan Kovacevic
        </h3>
        <h3>
          <AiOutlineHome className="icon" /> Veljka Vlahovica 51, Pozarevac
        </h3>
        <h3>
          <AiFillPhone className="icon" /> 0691935170
        </h3>
        <h3>
          <AiOutlineMail className="icon" /> kovacevicivan012@gmail.com
        </h3>
      </div>
    </div>
  );
};

export default Icons;
