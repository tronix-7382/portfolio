import { Box } from "@mui/material";
import React from "react";
import Title from "../components/Title";
import { galleryData } from "../constants/gallery";
import ProjectCard from "../components/ProjectCard";
import { Helmet } from "react-helmet";

const Gallery = () => {
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
      <Title>Projects Picture</Title>
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
        {galleryData.map((data) => (
          <ProjectCard key={data.id} {...data} fw={true} />
        ))}
      </Box>
    </Box>
  );
};

export default Gallery;
