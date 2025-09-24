import React from "react";

import { Box } from "@mui/material";
import { Helmet } from "react-helmet";

import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import { certificationsData } from "../constants/certificationsData";

const Certifications = () => {
  return (
    <Box
      sx={{
        padding: "1rem",
        border: "1px solid rgba(0,160,255,0.1)",
        backgroundColor: "primary.dark",
      }}
    >
      <Helmet>
        <title>Tronix | Gallery 🖼️</title>
      </Helmet>

      <Title>Certifications</Title>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: ".5rem",
          mt: "1rem",
        }}
      >
        {certificationsData.map((data) => (
          <ProjectCard key={data.id} {...data.card} fw={true} />
        ))}
      </Box>
    </Box>
  );
};

export default Certifications;
