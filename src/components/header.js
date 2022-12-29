import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import samboLogo from "../assets/samboLogo.PNG";
import { BsFileCode } from "react-icons/bs";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import SkillCircle from "./skillCircle.js";

function Header() {
  return (
    <header id="header" className="header">
      <div id="headerInfo">
        <p id="headerIntro">
          I <span style={{ color: "#000000" }}>'</span> M
        </p>
        <p id="headerName">SAM</p>
        <p id="headerTitle">
          <b>FULL STACK SOFTWARE DEVELOPER</b>
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
    </header>
  );
}

export default Header;
