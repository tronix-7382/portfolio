import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function Footer() {
  const handleScrollTop = () => {
    window.scrollTo(0,0)
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          mt: 2,
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
        onClick={() => {
          handleScrollTop();
        }}
      >
        <Typography
          sx={{
            color: "rgba(255,255,255,.5)",
            display: "flex",
            alignItems: "center",
          cursor: "pointer",
          justifyContent: "flex-end",
            fontSize: ".8rem",
            transition: "all .3s",
            gap: ".2rem",
            padding: ".3rem .7rem",
            "&:hover": {
              color: "rgba(255,255,255,.2)",
            },
          }}
        >
          Scroll to top <ArrowUpwardIcon fontSize="small" />
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
