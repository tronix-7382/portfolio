import { Box, Typography } from "@mui/material";
import React from "react";

function ProjectInfoCard({ icon, title, desc }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "2rem",
      }}
    >
      {/* icon */}
      <Box
        sx={{
          border: "1px solid rgba(0,170,250,0.1)",
          padding: ".5rem",
        }}
      >
        {icon}
      </Box>

      {/* info */}
      <Box
        sx={{
          border: "1px solid rgba(0,170,250,0.1)",
          padding: ".5rem",
          flexGrow: "1",
          display: "flex",
          color: "#fff",
          gap: ".3rem",
          alignItems: "center",
          position: "relative",
          "&::after": {
            content: '""',
            border: "2px dashed rgba(0,170,255,0.2)",
            position: "absolute",
            width: "20px",
            display: "block",
            left: "-29px",
          },
        }}
      >
        <Typography variant="subtitle2" sx={{ color: "rgba(255,255,255,.7)" }}>
          {title} -
        </Typography>

        <Typography variant="subtitle2" sx={{ color: "rgba(255,255,255,.4)" }}>
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProjectInfoCard;
