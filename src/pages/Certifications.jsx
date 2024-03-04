import React, { useState } from "react";

import { Box } from "@mui/material";
import { Helmet } from "react-helmet";

import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import { certificationsData } from "../constants/certificationsData";

const Certifications = () => {
  const [picture, setPicture] = useState(null);

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
          <Box
            sx={{
              maxWidth: {
                xs: "350px",
                md: "390px",
                xl: "510px",
              },
              width: "100%",
            }}
            onClick={()=> {
               setPicture(data.card.url)
            }}
          >
            <ProjectCard key={data.id} {...data.card} fw={true} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Certifications;
