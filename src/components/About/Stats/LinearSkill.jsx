import { useTheme } from "@emotion/react";
import { Box, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function LinearSkills({ skill }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = Math.random() * 10;
      setProgress((prevProgress) =>
        Math.min((prevProgress + randomNumber).toFixed(0), skill.learned)
      );
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, [skill.learned]);

  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignitems: "center",
        justifyContent: "center",
        gap: { xs: ".1rem", md: ".7rem" },
        width: "100%",
      }}
    >
      <Typography
        sx={{
          color: "rgba(255,255,255,0.7)",
          textTransform:"capitalize",
          width:'80px',
          fontSize:'1rem'
        }}
      >
        {skill.name}
      </Typography>
      (
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: "8px",
          flexGrow: ".9",
          mt: "10px",
          "& span": {
            borderRadius: "10px",
            backgroundColor:
              theme.palette.mode === "light"
                ? progress >= 40
                  ? "primary.main"
                  : "primary.light"
                : progress >= 40
                ? "rgba(0,150,255,0.15)"
                : "primary.dark",
          },
        }}
      />
      )
      <Typography
        sx={{
          color: "rgba(255,255,255,0.7)",
        }}
      >
        {progress}%
      </Typography>
    </Box>
  );
}

export default LinearSkills;
