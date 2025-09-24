import { Box } from "@mui/material";
import React from "react";

// material icon
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import CopyrightIcon from "@mui/icons-material/Copyright";

import resume from '../../assets/resume.pdf'

function NavbarSocial() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* socials */}
        <Box
          sx={{
            cursor: "pointer",
            "& a": {
              color: "#444",
              mr: ".5rem",
              "&:hover": {
                color: "#0ff",
                opacity: "0.5",
                transition: "all .3s",
              },
            },
            border: "1px solid rgba(0,160,250,0.1)",
            padding: ".2rem 1rem",
            backgroundColor: "primary.dark",
            display: { md: "none", xl: "block" },
          }}
        >
          <a
            href="https://www.linkedin.com/in/reza7382"
            alt="linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://t.me/rnoorh7382"
            rel="noreferrer"
            alt="telegram"
            target="_blank"
          >
            <TelegramIcon />
          </a>
          <a
            href="https://github.com/tronix-7382"
            rel="noreferrer"
            alt="github"
            target="_blank"
          >
            <GitHubIcon />
          </a>
          <a
            href={resume}
            alt="resume"
            rel="noreferrer"
            target="_blank"
          >
            <ArticleIcon />
          </a>
        </Box>

        {/* copyright */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(0,160,250,0.1)",
            color: "#444",
            padding: "0 1rem",
            backgroundColor: "primary.dark",
            height: "100%",
            cursor: "default",
          }}
        >
          <CopyrightIcon style={{ marginRight: ".2rem" }} />
          2024
        </Box>
      </Box>
    </>
  );
}

export default NavbarSocial;
