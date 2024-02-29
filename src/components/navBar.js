import React from "react";
import "../main css/navBar.css";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import TerminalIcon from "@mui/icons-material/Terminal";
import ArticleIcon from "@mui/icons-material/Article";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  return (
    <div id="mainNav">
      <div id="navButtonsBox">
        <Stack direction="column" spacing={4}>
          <div className="navButtons">
            <IconButton aria-label="projects" color="primary" href="#mainCode">
              <TerminalIcon />
            </IconButton>
          </div>
          <div className="navButtons">
            {" "}
            <IconButton aria-label="work" color="primary" href="#mainWork">
              <ArticleIcon />
            </IconButton>
          </div>
          <div className="navButtons">
            {" "}
            <IconButton aria-label="about" color="primary" href="#mainAbout">
              <AccountCircleIcon />
            </IconButton>
          </div>
        </Stack>
        {/* Add light and dark mode switch */}
      </div>
    </div>
  );
}

export default Navbar;
