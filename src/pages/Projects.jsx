import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import { projectsData } from "../constants/projects";
import { Helmet } from "react-helmet";

import reverseDataFunc from "../utility/reverseDataFunc";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";

const Projects = () => {
  const [reverseData, setReverseData] = useState([]);

  useEffect(() => {
    // {reverseDataFunc} on utility folder
    reverseDataFunc(setReverseData, projectsData);
  }, []);

  return (
    <>
      <Helmet>
        <title>Tronix | Projects 🎒</title>
      </Helmet>
      <Box
        sx={{
          border: "1px solid rgba(0,160,250,0.1)",
          backgroundColor: "primary.dark",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: ".5rem",
          alignItems: "start",
          gap: "1rem",
        }}
      >
        <Title>Projects</Title>
        {/* Card Container */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
            padding: ".5rem ",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {reverseData.map((data) => (
            <ProjectCard key={data.id} {...data.card} button={true} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Projects;
