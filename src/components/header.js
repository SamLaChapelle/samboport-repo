import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import samboLogo from "../assets/samboLogo.PNG";
import NavBar from "./navBar.js";
import "../main css/Header.css";
// import { BsFileCode } from "react-icons/bs";
// import { BsBriefcaseFill } from "react-icons/bs";
// import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import SkillCircle from "./skillCircle.js";

function Header() {
  return (
    <header id="header" className="header">
      <div id="headerNav">
        <div id="divText">
          <p id="htmlTextOne" className="divText">
            &lt;html&gt;
          </p>
          <p id="bodyTextOne" className="divText">
            &lt;body&gt;
          </p>
          <p id="headerTextOne" className="divText">
            &lt;header&gt;
          </p>
        </div>
        <NavBar />
      </div>
      <div id="headerMain">
        <div id="headerInfo">
          {/* <p id="headerIntro">
          I <span style={{ color: "#ffffff" }}>'</span> M
        </p> */}
          <p id="name">
            <b id="headerName">SAM</b>
            <b id="headerName2">LACHAPELLE</b>
          </p>
          <p>
            <b id="headerTitle">&lt;CODER&gt; |</b>
            <b id="headerTitle2">DESIGN</b>
          </p>
        </div>
        <div id="headerCircle">
          <SkillCircle />
          <img
            id="samboLogo"
            src={samboLogo}
            alt="cartoon logo of Sam LaChapelle"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
