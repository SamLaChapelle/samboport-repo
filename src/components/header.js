import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import samboLogo from "../assets/samboLogo.PNG";
import { BsFileCode } from "react-icons/bs";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { BsFillPhoneFill } from "react-icons/bs";

function Header() {
  return (
    <header className="header">
      <div id="headerInfo">
        <p id="headerIntro">
          I <span style={{ color: "#00bfff" }}>'</span> M
        </p>
        <p id="headerName">SAM</p>
        <p id="headerTitle">
          <b>FULL STACK SOFTWARE DEVELOPER</b>
        </p>
      </div>
      <div id="headerCircle">
        <img
          id="samboLogo"
          src={samboLogo}
          alt="cartoon logo of Sam LaChapelle"
        />
      </div>
      <div id="navBar">
        <BsFileCode
          className="navBarIcons"
          style={{ color: "#00bfff", minHeight: "2em", minWidth: "2em" }}
        />
        <BsBriefcaseFill
          className="navBarIcons"
          style={{ color: "#00bfff", minHeight: "2em", minWidth: "2em" }}
        />
        <BsFileEarmarkPerson
          className="navBarIcons"
          style={{ color: "#00bfff", minHeight: "2em", minWidth: "2em" }}
        />
        <BsFillPhoneFill
          className="navBarIcons"
          style={{ color: "#00bfff", minHeight: "2em", minWidth: "2em" }}
        />
      </div>
    </header>
  );
}

export default Header;
