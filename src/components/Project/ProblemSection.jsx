import { Box, Typography } from "@mui/material";
import React from "react";
import Title from "../Title";

function ProblemSection({problem,solution}) {
  return (
    <>
      {/* Problem / Soloution */}
      <Box
        sx={{
          border: "1px solid rgba(0,170,250,.1)",
          backgroundColor: "primary.main",
          mt: 2,
          display: "flex",
          alignItems: "stretch",
          gap: "1rem",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          padding: { xs: ".5rem", md: "1.5rem" },
        }}
      >
        {/* Problem */}
        <Box
          sx={{
            border: "1px solid rgba(0,170,250,.1)",
            backgroundColor: "primary.main",
            padding: "0.7rem",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Title> Problem 💀 </Title>
          <Box
            sx={{
              border: "1px solid rgba(0,170,250,0.1)",
              padding: "1rem",
              mt: 2,
              flexGrow: 1,
            }}
          >
            <Typography
              sx={{ fontSize: ".9rem", color: "rgba(255,255,255,0.7)" }}
            >
              {problem}
            </Typography>
          </Box>
        </Box>

        {/* Solution */}
        <Box
          sx={{
            border: "1px solid rgba(0,170,250,.1)",
            backgroundColor: "primary.main",
            padding: "0.7rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            width: "100%",
          }}
        >
          <Title> Solution ✅ </Title>
          <Box
            sx={{
              border: "1px solid rgba(0,170,250,0.1)",
              padding: "1rem",
              mt: 2,
              flexGrow: 1,
            }}
          >
            <Typography
              sx={{ fontSize: ".9rem", color: "rgba(255,255,255,0.7)" }}
            >
              {solution}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProblemSection;
