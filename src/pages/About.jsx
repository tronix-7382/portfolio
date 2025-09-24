import React from "react";

import { Box } from "@mui/material";
import { Helmet } from "react-helmet";

import Hero from "../components/About/Hero/Hero";
import EduExp from "../components/About/EduExp/EduExp";
import Stats from "../components/About/Stats/Stats";

const About = () => {
  return (
    <>
    <Helmet>
        <title>Tronix | Home ✌️</title>
    </Helmet>
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
