import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavbarInfo from "./NavbarInfo";

import MenuIcon from "@mui/icons-material/Menu";

import icon from '../../assets/logo.png'

const NavbarHeader = ({ setDrawerOpen }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const date = new Date();

    setTime(
      `${date.getHours().toString().length === 1
        ? "0" + date.getHours().toString()
        : date.getHours()}:${
        date.getMinutes().toString().length === 1
          ? "0" + date.getMinutes().toString()
          : date.getMinutes()
      } `
    );

    setInterval(() => {
      const date = new Date();
      setTime(
        `${date.getHours().toString().length === 1
          ? "0" + date.getHours().toString()
          : date.getHours()}:${
          date.getMinutes().toString().length === 1
            ? "0" + date.getMinutes().toString()
            : date.getMinutes()
        } `
      );
    }, 30000);
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
      >
        {/* ============== Head */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "space-between",
              md: "center",
              xl: "space-between",
            },
            m: { xs: ".5rem 1.1rem", md: "0" },
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: { xs: "flex", md: "none", xl: "flex" },
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid rgba(150,150,150,.1)",
                backgroundColor: "primary.light",
                p: ".6rem",
                width:"60px",
                height:"60px"
              }}
            >
              <img src={icon} alt="Me" style={{width:"100%", height:"100%"}} />
            </Box>
            <Typography
              sx={{
                opacity: ".8",
                pl: 1,
                letterSpacing: "2px",
                fontSize: "1.1rem",
              }}
            >
              TRONIX
            </Typography>
          </Box>
          
          {/* Time & icon */}
          <Box>
            <Typography
              sx={{
                opacity: ".8",
                fontSize: "1.3rem",
                border: { md: "1px solid rgba(0,170,255,.1)", xl: "none" },
                padding: { md: ".2rem .5rem", xl: "none" },
                backgroundColor: { md: "primary.main", xl: "rgba(0,0,0,0)" },
                display: { xs: "none", md: "block" },
              }}
            >
              {time}
            </Typography>
            <MenuIcon
              sx={{ opacity: "0.8", display: { xs: "block", md: "none" } }}
              onClick={() => {
                setDrawerOpen((prev) => !prev);
              }}
            />
          </Box>
        </Box>

        {/* ============== Info */}
        <NavbarInfo />
      </Box>
    </>
  );
};

export default NavbarHeader;
