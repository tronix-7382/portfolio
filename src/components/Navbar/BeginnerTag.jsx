import { Box } from "@mui/material";
import React from "react";

const BeginnerTag = () => {
  return (
    <Box
      component="span"
      sx={{
        bgcolor: "#115a96ff",
        color: "#fff",
        fontSize: "0.6rem",
        fontWeight: "bold",
        borderRadius: "4px",
        px: 0.6,
        py: 0.2,
        ml: 0.5,
        textTransform: "uppercase",
        lineHeight: 1.2,
      }}
    >
      Beginner
    </Box>
  );
};

export default BeginnerTag;
