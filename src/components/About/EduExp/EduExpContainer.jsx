import React from "react";
import Title from "../../Title";
import { Box, Typography } from "@mui/material";
import { educationData, experienceData } from "../../../constants/EduExpData";

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
            {title == 'Education' ? 
            educationData.map(data => <InfoCard data={data} />)
            :
            experienceData.map(data => <InfoCard data={data} />)

            }
        </Box>
      </Box>
    </>
  );
}

export default EduExpContainer;

function InfoCard({data}) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: ".8rem",
          m: "1.5rem 2rem",
          "& img": {
            width: "60px",
          },
          "&::after": {
            content: "''",
            width: "8px",
            left: "7px",
            height: "8px",
            marginBottom: "40px",
            backgroundColor: "rgb(150,150,150)",
            position: "absolute",
          },
        }}
      >
        <img
          src={data.img}
          alt={data.title}
        />
        <Box>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.25)",
              fontSize: ".8rem",
            }}
          >
            {data.time}
          </Typography>
          <Typography sx={{}}>{data.title}</Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.25)",
              fontSize: ".8rem",
            }}
          >
            {data.caption}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
