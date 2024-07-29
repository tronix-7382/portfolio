import React from "react";
import Title from "../../Title";
import { Box } from "@mui/material";
import { educationData, experienceData } from "../../../constants/EduExpData";
import InfoCard from "./InfoCard";

function EduExpContainer({ title, data }) {
  return (
    <>
      <Box
        sx={{
          border: "1px solid rgba(0,160,250,0.1)",
          backgroundColor: "primary.light",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          padding: "1rem",
          flexGrow: 1,
          maxWidth:'510px'
        }}
      >
        <Title>{title}</Title>

        {/* items */}
        <Box
          sx={{
            position: "relative",

            "&::after": {
              content: "''",
              display: "block",
              border: "1px dashed rgba(0,170,255,.1)",
              position: "absolute",
              left: "10px",
              top: "15px",
              bottom: "15px",
            },
          }}
        >
            {title === 'Education' ? 
            educationData.map((data,index) => <InfoCard key={index} data={data} />)
            :
            experienceData.map((data,index) => <InfoCard key={index} data={data} />)

            }
        </Box>
      </Box>
    </>
  );
}

export default EduExpContainer;

