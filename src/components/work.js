import React from "react";
import "../main css/work.About.css";
import Resume from "../assets/Sam LaChapelle Resume.pdf";
import computerSVG from "../assets/work-svgrepo-com.svg";

function Work() {
  return (
    <div id="mainWork">
      <div id="workResume">
        <a href={Resume} download="Sam's Resume.PDF">
          <img id="compSVG" src={computerSVG} alt="computer svg" />
        </a>
        Download Resume
      </div>
      <div id="workCard">
        <p id="workDesc">
          While most of my work experience involves either coaching or
          hospitality, I have been involved in creative pursuits since high
          school. I’m excited to launch into a coding career where I can
          leverage not only my creative skills but also the leadership and
          teamwork skills I developed as a coach and team member. My
          communication skills include project and people dynamics, customer
          service, and presenting/entertaining. I thrive in innovative
          environments where everyone is encouraged to be themselves and do
          their best work.
        </p>
        <ul id="workList">
          <b>PROFESSIONAL EXPERIENCE</b>
          <br />
          <li>Yestermorrow Design & Build School | Aug 2021 - Oct 2021</li>
          <li>Sambo Sauce Portfolio | June 2022</li>
          <li>Esthetics With Alexandra Portfolio | Dec 2022 - Jan 2023</li>
        </ul>
      </div>
    </div>
  );
}

export default Work;

//Combine work and about (mainly work with about drizzled in)
