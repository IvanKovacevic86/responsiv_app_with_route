import React from "react";
import "./pictures.css";
import pic1 from "../../img/picture1.jpg";
import pic2 from "../../img/picture2.jpg";
import pic3 from "../../img/picture3.jpg";
import pic4 from "../../img/picture4.jpg";
import pic5 from "../../img/picture5.jpg";
import pic6 from "../../img/picture6.jpg";
import pic7 from "../../img/picture7.jpg";
import pic8 from "../../img/picture8.jpg";
import pic9 from "../../img/picture9.jpg";

const Pictures = () => {
  return (
    <div className="picDiv">
      <img src={pic1} alt="picture1" className="divImg" />
      <img src={pic2} alt="picture1" className="divImg" />
      <img src={pic3} alt="picture1" className="divImg" />
      <img src={pic4} alt="picture1" className="divImg" />
      <img src={pic5} alt="picture1" className="divImg" />
      <img src={pic6} alt="picture1" className="divImg" />
      <img src={pic7} alt="picture1" className="divImg" />
      <img src={pic8} alt="picture1" className="divImg" />
      <img src={pic9} alt="picture1" className="divImg" />
    </div>
  );
};

export default Pictures;
