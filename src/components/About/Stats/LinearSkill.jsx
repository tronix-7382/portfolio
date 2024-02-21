import { useTheme } from "@emotion/react";
import { Box, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

function LinearSkills({ skill }) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = Math.random() * 10;
      setProgress((prevProgress) =>
        Math.min((prevProgress + randomNumber).toFixed(0), skill.learned)
      );
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignitems: "center",
        justifyContent: "center",
        gap: {xs:'.1rem',md:".7rem"},
        width: "100%",
      }}
    >
      <Typography
        fontSize={"1.1rem"}
        width={"80px"}
        sx={{
          color: "rgba(255,255,255,0.7)",
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
          borderRadius: "5px",
          flexGrow: ".9",
          mt: "10px",
          "& span": {
            backgroundColor:
              theme.palette.mode == "light"
                ? progress >= 40
                  ? "primary.dark"
                  : "primary.light"
                : progress >= 40
                ? "primary.light"
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
