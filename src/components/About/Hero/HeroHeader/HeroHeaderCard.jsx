import { Box, Typography } from "@mui/material";
import React from "react";

function HeroHeaderCard({ icon, text, link, blank, href }) {
  return (
    <>
      <a href={href && href} target={blank && "_blank"} style={{flexGrow: 1, width: "100%"}}>
          <Box
            sx={{
              border: "1px solid rgba(0,170,250,0.1)",
              backgroundColor: "primary.light",
              backdropFilter: "blur(10px)",
              padding: ".5rem 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: ".3rem",
              cursor: !link && "default",
              color: "rgba(255,255,255,.8)",

              borderRadius: "5px",
              "&:hover": {
                border: "1px solid rgba(0,170,250,0.2)",
              },
            }}
          >
            {icon}
            <Typography
              sx={{
                fontSize: ".8rem",
                color: "rgba(255,255,255,.8)",
                whiteSpace: "nowrap",
              }}
            >
              {text}
            </Typography>
          </Box>
      </a>
    </>
  );
}

export default HeroHeaderCard;
