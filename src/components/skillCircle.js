import React from "react";
import JS from "../assets/js-svgrepo-com.svg";
import HTML from "../assets/html-svgrepo-com.svg";
import CSS from "../assets/css-svgrepo-com.svg";
import REACT from "../assets/react-svgrepo-com.svg";
import MUI from "../assets/material-ui-svgrepo-com.svg";
import BS from "../assets/bootstrap-svgrepo-com.svg";
import FB from "../assets/firebase-svgrepo-com.svg";
import MDB from "../assets/mongodb-svgrepo-com.svg";

function skillCircle() {
  return (
    <div id="skillCircle">
      <div id="JSLogo">
        <img className="skillLogos" src={JS} alt="Javascript Logo" />
      </div>
      <img className="skillLogos" id="HTMLLogo" src={HTML} alt="HTML Logo" />
      <img className="skillLogos" id="CSSLogo" src={CSS} alt="CSS Logo" />
      <img className="skillLogos" id="reactLogo" src={REACT} alt="React Logo" />
      <div></div>
      <img
        className="skillLogos"
        id="MUILogo"
        src={MUI}
        alt="Material-UI Logo"
      />
      <img className="skillLogos" id="BSLogo" src={BS} alt="Bootstrap Logo" />
      <img className="skillLogos" id="FBLogo" src={FB} alt="Firebase Logo" />
      <img className="skillLogos" id="MDBLogo" src={MDB} alt="Mongo DB Logo" />
    </div>
  );
}

export default skillCircle;
