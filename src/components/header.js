import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import samboLogo from "../assets/samboLogo.PNG";
import { BsFileCode } from "react-icons/bs";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { BsFillPhoneFill } from "react-icons/bs";
import SkillCircle from "./skillCircle.js";

function Header() {
  return (
    <header className="header">
      <div id="headerInfo">
        <p id="headerIntro">
          I <span style={{ color: "#000000" }}>'</span> M
        </p>
        <p id="headerName">SAM</p>
        <p id="headerTitle">
          <b>FULL STACK SOFTWARE DEVELOPER</b>
        </p>
      </div>
      <SkillCircle />
      <div id="headerCircle">
        <img
          id="samboLogo"
          src={samboLogo}
          alt="cartoon logo of Sam LaChapelle"
        />
      </div>
      <div id="navBar">
        {/* 
          Needed: Event Listener
          To: Listen to window scroll
          Then: Based on scroll nav bar is fixed to the top of the window
         */}
        <div className="navButtons">
          <BsFileCode id="navCode" alt="Navigation Bar Button Code" />
        </div>
        <div className="navButtons">
          <BsBriefcaseFill id="navWork" alt="Navigation Bar Button Work" />
        </div>
        <div className="navButtons">
          <BsFillFileEarmarkPersonFill
            id="navAbout"
            alt="Navigation Bar Button About"
          />
        </div>
        <div className="navButtons">
          <BsFillPhoneFill
            id="navContact"
            alt="Navigation Bar Button Contact"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
