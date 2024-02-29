import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import samboLogo from "../assets/samboLogo.PNG";
import NavBar from "./navBar.js";
import "../main css/Header.css";
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

// Spice up Name / Title
// Make Nav Bar vertical and sticky to entire page (floating)
