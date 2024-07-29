import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

// icon
import LocationOnIcon from "@mui/icons-material/LocationOn";
import icon from "../../assets/logo.svg";

import { RandomReveal } from "react-random-reveal";
import TextTransition, { presets } from "react-text-transition";

function NavbarInfo() {
  const [index, setIndex] = useState(0);

  const TEXTS = ["Front-End Developer", "Programmer", "Engineering Student", "Computer Lover", "ReactJs Developer", "Web Developer"];
 
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <Box
        sx={{
          border: "1px solid rgba(150,150,150,.1)",
          mt: 2,
          backgroundColor: "primary.light",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          padding: { md: "0", xl: "1.3rem" },
        }}
      >
        {/* ========= img ========== */}
        <Box
          sx={{
            border: { md: "none", xl: "1px solid rgba(0,170,170,.1)" },
            width: "70px",
            height: "70px",
          }}
        >
          <img
            src={icon}
            alt="Me"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
        {/* ======== content ========== */}
        <Box sx={{ display: { md: "none", xl: "block" } }}>
          <Typography variant="h6" sx={{ opacity: ".9", fontSize: "1rem" }}>
            <RandomReveal
              isPlaying
              duration={2}
              characters="Reza NourMohammadi"
              revealEasing="easeInQuad"
            />
          </Typography>
          <Typography
            sx={{
              opacity: ".4",
              fontSize: ".7rem",
              display:"flex",
               gap:'.2rem'
            }}
          >
            I'm a{" "}
            <TextTransition springConfig={presets.wobbly}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </Typography>

          <Typography
            sx={{
              opacity: ".4",
              fontSize: ".7rem",
            }}
          >
            <a
              href="https://B2n.ir/z27336"
              target="_blank"
              alt="mashhad"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "#fff",
                marginTop: ".4rem",
                display: "block",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <LocationOnIcon
                  sx={{ color: "rgba(0,170,170,.8)", fontSize: "1rem" }}
                />
                Iran - Mashhad
              </Box>
            </a>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default NavbarInfo;
