import { Box } from "@mui/material";
import React from "react";

function ProjectPicture({ url }) {
  return (
    <Box
      sx={{
        border: "1px solid rgba(0,170,250,.1)",
        backgroundColor: "primary.light",
        padding: { xs: "", md: "1rem" },
        overflow: "hidden",
        width: "100%",
        position: "relative",
        mt: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& img": {
          width: "100%",
          height: "100%",
          padding: { xs: ".1rem", md: ".7rem" },
          border: "1px solid rgba(0,170,250,.1)",
          backgroundColor: "primary.light",
          objectFit: "cover",
          maxWidth: "1000px",
        },
        "&::after": {
          content: '" "',
          position: "absolute",
          backgroundColor: "rgba(0,0,0,0.3)",
          display: "block",
          inset: 0,
          transition: "all .5s",
        },
        "&:hover": {
          " &::after": {
            backgroundColor: "rgba(0,0,0,0.1)",
          },
        },
      }}
    >
      <img src={url} alt="" />
    </Box>
  );
}

export default ProjectPicture;
