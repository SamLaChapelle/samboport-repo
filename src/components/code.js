import React from "react";
import JS from "../assets/js-svgrepo-com.svg";
import HTML from "../assets/html-svgrepo-com.svg";
import CSS from "../assets/css-svgrepo-com.svg";
import FB from "../assets/firebase-svgrepo-com.svg";
import RLogo from "../assets/react-svgrepo-com.svg";
import EX from "../assets/express-svgrepo-com(1).svg";
import MUI from "../assets/material-ui-svgrepo-com.svg";
import BS from "../assets/bootstrap-svgrepo-com.svg";
import HKU from "../assets/heroku-icon.svg";
import GH from "../assets/GitHub-Mark-64px.png";

function Code() {

  return (
    <div id="mainCode">
      <div className="projectCards">
        <p className="projectTags">&lt;projectOne&gt;</p>
        <p className="projectTitles">YESTERMORROW ALUMNI NETWORK</p>
        <div className="projectInfos">
          <p className="projectDescs">
            {" "}
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
            <a href="https://github.com/bca-yestermorrow/bca-yestermorrow">
              <img className="projectIcons" src={GH} alt="Github Logo" />
            </a>
          </div>
        </div>
        <p className="projectTagsClosed">&lt;/projectOne&gt;</p>
      </div>
      <div className="projectCards">
        <p className="projectTags">&lt;projectTwo&gt;</p>
        <p className="projectTitles">ESTHETICS WITH ALEXANDRA</p>
        <div className="projectInfos" id="pTwoInfo">
          <p className="projectDescs">
            This beauty portfolio website is a one page layout showcasing my clients services, place of work information, contact info and a simple about me section. Starting from scratch, the entire website including the choice of layout, color pallet and creative ideas were implemented by yours truly.
            <br/>
            <br/>
            <a href="https://estheticswithalexandra.com/">ESTHETICS WITH ALEXANDRA</a>
          </p>
          <div className="projectTStacks">
            <img className="projectIcons" src={JS} alt="Javascript Logo" />
            <img className="projectIcons" src={HTML} alt="HTML Logo" />
            <img className="projectIcons" src={CSS} alt="CSS Logo" />
            <img className="projectIcons" src={RLogo} alt="React Logo" />
            <img className="projectIcons" src={MUI} alt="Material-UI Logo" />
            <img className="projectIcons" src={FB} alt="Firebase Logo" />
            <a href="https://github.com/SamLaChapelle/sns-webiste">
              <img className="projectIcons" src={GH} alt="Github Logo" />
            </a>
          </div>
        </div>
        <p className="projectTagsClosed">&lt;/projectTwo&gt;</p>
      </div>
      <div className="projectCards">
        <p className="projectTags">&lt;projectThree&gt;</p>
        <p className="projectTitles">SAMBOSAUCE.COM</p>
        <div className="projectInfos" id="pThreeInfo">
          <p className="projectDescs">
            This portfolio is a simplistic one page layout with aspects of HTML
            tags layered throughout the application used as component titles. In
            addition, there are multiple animations embedded within the website.
            This is only one example of a website I can create. Need a website
            of your own? Please scroll down to the contact section to inform me
            about your ideas!
          </p>
          <div className="projectTStacks">
            <img className="projectIcons" src={JS} alt="Javascript Logo" />
            <img className="projectIcons" src={HTML} alt="HTML Logo" />
            <img className="projectIcons" src={CSS} alt="CSS Logo" />
            <img className="projectIcons" src={RLogo} alt="React Logo" />
            <img className="projectIcons" src={BS} alt="Bootstrap Logo" />
            <img className="projectIcons" src={HKU} alt="Heroku Logo" />
            <a href="https://github.com/SamLaChapelle/samboport-repo">
              <img className="projectIcons" src={GH} alt="Github Logo" />
            </a>
          </div>
        </div>
        <p className="projectTagsClosed">&lt;/projectThree&gt;</p>
      </div>
      <div className="projectCards">
        <p className="projectTags">&lt;projectFour&gt;</p>
        <p className="projectTitles">GIT HUB</p>
        <div className="projectInfos" id="pFourInfo">
          <p className="projectDescs">
            For those unaware of Github. GitHub, Inc. is a provider of Internet
            hosting for software development and version control using Git. It
            offers the distributed version control and source code management
            functionality of Git, plus its own features. <br /> To see all of my
            projects and source code please click the github logo below.
          </p>
          <div className="projectTStacks">
            <a href="https://github.com/SamLaChapelle">
              <img className="projectIcons" src={GH} alt="Github Logo" />
            </a>
          </div>
        </div>
        <p className="projectTagsClosed">&lt;/projectFour&gt;</p>
      </div>
    </div>
  );
}

export default Code;
