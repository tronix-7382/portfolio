import React from "react";
import Hero from "../components/About/Hero/Hero";
import { Box } from "@mui/material";
import EduExp from "../components/About/EduExp/EduExp";
import Stats from "../components/About/Stats/Stats";

const About = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        <Hero />
        <EduExp />
        <Stats/>
      </Box>
    </>
  );
};

export default About;
