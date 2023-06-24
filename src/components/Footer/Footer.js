import React from "react";
import "./footer.css";
import facebook from "../../img/icon-facebook.svg";
import instagram from "../../img/icon-instagram.svg";
import twitter from "../../img/icon-twitter.svg";
import youtube from "../../img/icon-youtube.svg";
import pinterest from "../../img/icon-pinterest.svg";
import logo from "../../img/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerDiv">
        <div className="footerDivSec">
          <div className="copyright">
            Copyright &copy; 2023, All Rights Reserved
          </div>

          <div className="footerLogo">
            <img src={logo} alt="logo" style={{ height: "2rem" }} />
          </div>

          <div className="footerImg">
            <a href="/some/valid/uri#right">
              <img
                src={facebook}
                alt="facebook"
                style={{ height: "2rem", marginRight: "1rem" }}
              />
            </a>

            <a href="/some/valid/uri#right">
              <img
                src={youtube}
                alt="youtube"
                style={{ height: "2rem", marginRight: "1rem" }}
              />
            </a>

            <a href="/some/valid/uri#right">
              <img
                src={twitter}
                alt="twitter"
                style={{ height: "2rem", marginRight: "1rem" }}
              />
            </a>

            <a href="/some/valid/uri#right">
              <img
                src={pinterest}
                alt="pinterest"
                style={{ height: "2rem", marginRight: "1rem" }}
              />
            </a>

            <a href="/some/valid/uri#right">
              <img
                src={instagram}
                alt="instagram"
                style={{ height: "2rem", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>

        <div className="listContainer">
          <div
            className="footerList"
            style={{ marginRight: "4rem", textAlign: "left" }}
          >
            <a href="/some/valid/uri#back">Home</a>
            <a href="/some/valid/uri#top">Pricing</a>
            <a href="/some/valid/uri#bottom">Products</a>
            <a href="/some/valid/uri#left">About</a>
          </div>
          <div className="footerList" style={{ textAlign: "left" }}>
            <a href="/some/valid/uri#right">Careers</a>
            <a href="/some/valid/uri#pfc">Community</a>
            <a href="/some/valid/uri#kk">Privacy Policy</a>
          </div>
        </div>

        <div className="footerform">
          <form>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                placeholder="Updated in your inbox"
                className="footerInput"
              />
              <button className="goButton">Go</button>
            </div>
          </form>
          <div className="secondCopyright">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
