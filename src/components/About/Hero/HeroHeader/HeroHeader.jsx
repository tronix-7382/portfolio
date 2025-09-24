import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeroHeaderCard from "./HeroHeaderCard";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const HeroHeader = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const date = new Date();
    setTime(date.toLocaleString());
  }, []);

  return (
    <>
      <Box
        sx={{
          border: "1px solid rgba(0,175,250,0.1)",
          backgroundColor: "primary.light",
          padding: ".7rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: ".5rem", xl: "1.5rem" },
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
          overflowX: "auto",
          maxWidth: { xs: "20rem", md: "none" },
          mt: ".5rem",
        }}
      >
        <HeroHeaderCard
          text={"Available for intership"}
          icon={
            <Box
              sx={{
                padding: ".2rem",
                borderRadius: "50%",
              }}
              className="animatedDot" //styled in styles/style.css
            />
          }
        />

        <HeroHeaderCard
          text={"Resume"}
          icon={<DocumentScannerOutlinedIcon sx={{ fontSize: "1.2rem" }} />}
          href={"/resume"}
        />

        <HeroHeaderCard
          text={time}
          icon={<AccessTimeOutlinedIcon sx={{ fontSize: "1.2rem" }} />}
        />

        <HeroHeaderCard
          text={"Contact Me"}
          href={"/contact"}
          icon={<PersonOutlineOutlinedIcon sx={{ fontSize: "1.2rem" }} />}
        />
      </Box>
    </>
  );
};

export default HeroHeader;
