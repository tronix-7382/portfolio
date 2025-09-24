import { Box } from "@mui/material";
import React from "react";
import Title from "../Title";

function ContactInfo({ icon, children }) {
  return (
    <>
      {/* Address */}
      <Box
        sx={{
          border: "1px solid rgba(0,170,250,0.1)",
          padding: ".5rem .8rem",
          backgroundColor: "primary.dark",
          minWidth: { xs: "unset", md: "350px" },
        }}
      >
        <Title>Address</Title>

        <Box
          sx={{
            border: "1px solid rgba(0,160,250,0.1)",
            backgroundColor: "primary.dark",
            padding: ".5rem",
            display: "flex",
            flexDirection: "column",
            gap: ".6rem",
            mt: ".5rem",
            ml: "4rem",
            position: "relative",

            "&::after": {
              content: '""',
              borderBottom: "2px dashed rgba(0,170,255,0.1)",
              borderLeft: "2px dashed rgba(0,170,255,0.1)",
              position: "absolute",
              width: "20px",
              height: "20px",
              left: "-37px",
              bottom: "20px",
            },
            "&::before": {
              content: '""',
              border: "1px solid rgba(0,160,250,0.1)",
              position: "absolute",
              left: "-62px",
              color: "#fff",
              background: `url(${icon}) no-repeat`,
              backgroundPosition: "center",
              backgroundSize: "60% 60%",
              width: "50px",
              height: "50px",
              backgroundColor: "primary.dark",
              opacity: ".5",
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}

export default ContactInfo;
