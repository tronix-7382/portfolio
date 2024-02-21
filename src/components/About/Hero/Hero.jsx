import { Box } from "@mui/material";
import React from "react";
import HeroHeader from "./HeroHeader/HeroHeader";
import HeroAboutMe from "./HeroAboutMe/HeroAboutMe";

function Hero() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          color: "rgba(255,255,255,.7)",
          border: "1px solid rgba(0,160,250,0.1)",
          padding:{md:"1.5rem"},
          display:'flex',
          flexWrap:"wrap",
          alignItems:'center',
          justifyContent:'center',
          gap:"1.2rem"
        }}
      >
        <HeroHeader/>
        <HeroAboutMe/>
      </Box>
    </>
  );
}

export default Hero;
