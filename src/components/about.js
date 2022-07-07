import React from "react";
import aboutPic from "../assets/aboutPic.png";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsPhoneFill } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";

function About() {
  return (
    <div id="mainAbout">
      <div id="aboutTop">
        <img id="aboutPic" src={aboutPic} alt="Sam LaChapelle" />
        <div className="aboutStats">
          <p className="statTitles">LANG'S</p>
          <div className="statNumbers">3</div>
        </div>
        <div className="aboutStats">
          <p className="statTitles">DB'S</p>
          <div className="statNumbers">2</div>
        </div>
        <div className="aboutStats">
          <p className="statTitles">FWK'S</p>
          <div className="statNumbers">5</div>
        </div>
      </div>
      <p id="aboutName">SAM LACHAPELLE</p>
      <p id="aboutMe">
        To whomever may be reading this, let me introduce myself. Hello, and my
        name is Sam LaChapelle. I am a outgoing, personable, creative driven, go
        with the flow gentleman. I am 23 years old with the ambition to become
        the best version of myself. I never walk in to a room thinking I am the
        smartest one there. There is always something to be learned or another
        perspective to be seen. I love meeting new people, so please contact me
        below at any one of my socials, email or personal phone number.
      </p>
      <div id="aboutIconsDiv">
        <a href="https://www.instagram.com/sambo_sauce/">
          <BsInstagram className="aboutIcons" />
        </a>
        <a href="https://www.linkedin.com/in/samuel-lachapelle-050a4b196/">
          <BsLinkedin className="aboutIcons" />
        </a>

        <a href="mailto:sambosauce@gmail.com">
          <BsEnvelope className="aboutIcons" />
        </a>
        <a href="tel:804-549-3887">
          <BsPhoneFill className="aboutIcons" />
        </a>
      </div>
      <div id="bttDiv">
        <a href="/#header">
          <BsArrowUpCircle id="bttArrow" />
        </a>
        <p id="bttP">Back To Top</p>
      </div>
    </div>
  );
}

export default About;
