import React from "react";
import { useState } from "react";
import pOnePic from "../assets/projectPics/yestermorrowPic.png";
import JS from "../assets/js-svgrepo-com.svg";
import HTML from "../assets/html-svgrepo-com.svg";
import CSS from "../assets/css-svgrepo-com.svg";
import FB from "../assets/firebase-svgrepo-com.svg";
import RLogo from "../assets/react-svgrepo-com.svg";
import EX from "../assets/express-svgrepo-com(1).svg";
import MUI from "../assets/material-ui-svgrepo-com.svg";
import HKU from "../assets/heroku-icon.svg";
import GH from "../assets/GitHub-Mark-64px.png";

function Code() {
  const [blur, setBlur] = useState(true);

  function handleImgBlur(e) {
    e.preventDefault();
    if (blur === true) {
      setBlur(false);
    } else if (blur === false) {
      setBlur(true);
    }
  }

  return (
    <div id="mainCode">
      <div className="projectCards">
        <p id="pOneTag">&lt;projectOne&gt;</p>
        <p className="projectTitles">YESTERMORROW ALUMNI NETWORK</p>
        <img
          className="projectPics"
          src={pOnePic}
          alt="project one preview"
          onClick={(e) => {
            handleImgBlur(e);
          }}
          style={blur === true ? { filter: "blur(3px)" } : { filter: "none" }}
        />
        <div className="projectInfos">
          <p className="projectDescs">
            Member of a five-person team tasked with building a social network
            platform from scratch where the school’s alumni network can connect
            and collaborate. Features include the ability to create and
            customize user profiles, login authentication, an alumni forum with
            the ability to create, share, and reply to posts, the ability to tag
            and filter, and email notifications.
          </p>
          <div className="projectTStacks">
            <img className="projectIcons" src={JS} alt="Javascript Logo" />
            <img className="projectIcons" src={HTML} alt="HTML Logo" />
            <img className="projectIcons" src={CSS} alt="CSS Logo" />
            <img className="projectIcons" src={FB} alt="Firebase Logo" />
            <img className="projectIcons" src={RLogo} alt="React Logo" />
            <img className="projectIcons" src={EX} alt="Express Logo" />
            <img className="projectIcons" src={MUI} alt="Material-UI Logo" />
            <img className="projectIcons" src={HKU} alt="Heroku Logo" />
            <img className="projectIcons" src={GH} alt="Github Logo" />
          </div>
        </div>
        <p id="pOneTagClose">&lt;/projectOne&gt;</p>
      </div>
      <div className="projectCards">
          {/* Project 2 */}
      </div>
      <div className="projectCards">
          {/* Project 3 */}
      </div>
      <div className="projectCards">
          {/* Github Card */}
      </div>
    </div>
  );
}

export default Code;
