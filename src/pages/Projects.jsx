import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../constants/projects";
import { Helmet } from "react-helmet";

const Projects = () => {
  const [reverseData, setReverseData] = useState([]);

  useEffect(() => {
    reverseDataFunc(setReverseData, projectsData);
  }, []);

  const reverseDataFunc = (setReverseData, data) => {
    const newData = [];
    for (let i = data.length - 1; i >= 0; i--) {
      newData.push(data[i]);
    }
    setReverseData(newData);
  };
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
            padding: ".5rem",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {reverseData.map((data) => (
            <ProjectCard {...data.card} button={true} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Projects;
