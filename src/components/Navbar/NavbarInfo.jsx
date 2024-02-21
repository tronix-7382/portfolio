import { Box, Typography } from "@mui/material";
import React from "react";
// icon
import LocationOnIcon from "@mui/icons-material/LocationOn";
import icon from '../../assets/logo.svg'

function NavbarInfo() {
  return (
    <>
      <Box
        sx={{
          border: "1px solid rgba(150,150,150,.1)",
          mt: 2,
          backgroundColor: "primary.light",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          padding: { md: "0", xl: "1.3rem" },
        }}
      >
        {/* ========= img ========== */}
        <Box
          sx={{
            border: { md: "none", xl: "1px solid rgba(0,170,170,.1)" },
            width: "70px",
            height: "70px",
          }}
        >
          <img
            src={icon}
            alt="Me"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
        {/* ======== content ========== */}
        <Box sx={{display:{md:'none',xl:'block'}}}>
          <Typography variant="h6" sx={{ opacity: ".9", fontSize: "1rem" }}>
            Reza NourMohammadi
          </Typography>
          <Typography
            sx={{
              opacity: ".4",
              fontSize: ".7rem",
            }}
          >
            Front End Developer
            <br />
            <a href="https://B2n.ir/z27336" target="_blank" alt='mashhad' style={{textDecoration:'none', color:'#fff'}}>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <LocationOnIcon
                sx={{ color: "rgba(0,170,170,.8)", fontSize: "1rem" }}
              />
              Iran - Mashhad
            </Box>
            </a>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default NavbarInfo;
