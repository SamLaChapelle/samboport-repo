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
      <div id="navButtons">
        <Stack direction="row" spacing={4}>
          <IconButton
            aria-label="projects"
            color="primary"
            sx={{
              ":hover": {
                bgcolor: "primary.main", // theme.palette.primary.main
                color: "#f0ead6",
              },
            }}
          >
            <TerminalIcon />
          </IconButton>
          <IconButton
            aria-label="work"
            color="primary"
            sx={{
              ":hover": {
                bgcolor: "primary.main", // theme.palette.primary.main
                color: "#f0ead6",
              },
            }}
          >
            <ArticleIcon />
          </IconButton>
          <IconButton
            aria-label="about"
            color="primary"
            sx={{
              ":hover": {
                bgcolor: "primary.main", // theme.palette.primary.main
                color: "#f0ead6",
              },
            }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Stack>
      </div>
    </div>
  );
}

export default Navbar;
