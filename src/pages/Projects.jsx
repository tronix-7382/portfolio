import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import ProjectCard from "../components/Projects/ProjectCard";
import { projectsData } from "../constants/projects";
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
      <Box
        sx={{
          border: "1px solid rgba(0,160,250,0.1)",
          backgroundColor: "primary.dark",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
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
          {reverseData.map(data => <ProjectCard {...data.card} />)}
        </Box>
      </Box>
    </>
  );
};

export default Projects;
