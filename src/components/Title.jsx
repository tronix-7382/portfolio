import { Box, Typography } from "@mui/material";
import React from "react";

function Title({ children }) {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.light",
          border: "1px solid rgba(0,160,250,0.1)",
          padding: ".5rem .9rem",
          display: "inline-block",
        }}
      >
        <Typography
          sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: ".8rem",
          }}
        >
          {children}
        </Typography>
      </Box>
    </>
  );
}

export default Title;
