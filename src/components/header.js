import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import samboLogo from "../assets/samboLogo.PNG";
import JS from "../assets/js-svgrepo-com.svg";
import HTML from "../assets/html-svgrepo-com.svg";
import CSS from "../assets/css-svgrepo-com.svg";
import REACT from "../assets/react-svgrepo-com.svg";
import MUI from "../assets/material-ui-svgrepo-com.svg";
import BS from "../assets/bootstrap-svgrepo-com.svg";
import NJS from "../assets/nodejs-icon-logo-svgrepo-com.svg";
import EX from "../assets/express-svgrepo-com(1).svg";
import FB from "../assets/firebase-svgrepo-com.svg";
import MDB from "../assets/mongodb-svgrepo-com.svg";

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
      <div id="headerBio">
        <p id="bioTitle">
          S A M <span style={{ color: "#00bfff" }}>|</span> L A C H A P E L L E
        </p>
        <div id="bioSkillStats">
          <div className="bioSkills">
            LANGUAGES
            <b />
            <div className="skillNums">3</div>
            <img className="skillLogos" src={JS} alt="Javascript Logo" />
            <img className="skillLogos" src={HTML} alt="HTML Logo" />
            <img className="skillLogos" src={CSS} alt="CSS Logo" />
          </div>
          <div className="bioSkills">
            FRAMEWORKS
            <b />
            <div className="skillNums">5</div>
            <img className="skillLogos" src={REACT} alt="React Logo" />
            <img className="skillLogos" src={MUI} alt="Material-UI Logo" />
            <img className="skillLogos" src={BS} alt="Bootstrap Logo" />
            <img className="skillLogos" src={NJS} alt="Node JS Logo" />
            <img className="skillLogos" src={EX} alt="Express JS Logo" />
          </div>
          <div className="bioSkills">
            DATABASES
            <b />
            <div className="skillNums">2</div>
            <img className="skillLogos" src={FB} alt="Firebase Logo" />
            <img className="skillLogos" src={MDB} alt="Mongo DB Logo" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
