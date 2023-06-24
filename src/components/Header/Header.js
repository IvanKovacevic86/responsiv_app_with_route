import React from "react";
import "./header.css";
import logo from "../../img/logo.svg";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Header = () => {
  return (
    <div>
      <div className="mainDiv">
        <div className="imgDiv">
          <img src={logo} alt="manage" />
        </div>

        <div className="linkDiv">
          <Link to="/">Home</Link>
          <Link to="/galery">Galery</Link>
          <Link to="/about">About Us</Link>
          <Link to="/videos"> Videos</Link>
          <Link to="/community">Community</Link>
        </div>

        <button className="orangeButton">Get Started</button>
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Header;
