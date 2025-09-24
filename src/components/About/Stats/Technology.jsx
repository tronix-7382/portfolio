import { Box } from "@mui/material";
import React from "react";
import { statsIcon } from "../../../constants/statsIcon";

// Logo Swipers
function Technology() {
  return (
    <>
      <Box
        sx={{
          border: "1px solid rgba(0,160,250,0.1)",
          width: "95%",
          margin: "0 auto",
          padding: "1rem",
          opacity: "0.8",
          overflow: "hidden",
          boxShadow: "0 0 10px 4px black inset",
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 5%, rgb(0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%)",
        }}
      >
        <Box
          //styled in styles/style.css
          className="statsAnimation"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            justifyContent: "center",
          }}
        >
          {statsIcon.map((stats, index) => (
            <IconCard
              key={index}
              name={stats.name}
              icon={stats.icon}
              learned={stats.learned}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Technology;

function IconCard({ icon, name, learned }) {
  return (
    <>
      <Box
        sx={{
          borderTop: "1px solid",
          borderBottom: "1px solid",
          borderColor:
            learned <= 30 ? "rgba(0,160,250,0)" : "rgba(0,160,250,.3)",
          backgroundColor: "primary.light",
          padding: ".7rem 2.5rem",
        }}
      >
        <img
          src={icon}
          alt={name}
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            opacity: learned <= 30 && ".4",
            filter: learned > 30 && "brightness(1.2)" 
          }}
        />
      </Box>
    </>
  );
}
