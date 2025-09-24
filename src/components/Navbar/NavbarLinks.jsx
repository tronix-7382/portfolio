import React from "react";

import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import { sidebarData } from "../../constants";

function NavbarLinks({ setDrawerOpen }) {
  const { pathname } = useLocation();

  return (
    <>
      <Box sx={{ mb: 2 }}>
        {sidebarData.map((data, index) => (
          <Link
            key={index}
            to={`/${data.title}`}
            onClick={() => {
              setDrawerOpen(false);
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: ".8rem",
                padding: ".7rem 1rem",
                opacity: ".5",
                fontSize: ".8rem",
                "&.active": {
                  backgroundColor: "primary.main",
                  border: "1px solid rgba(0,160,255,.1)",
                  opacity: ".9",
                },
                "&:hover": {
                  opacity: "1",
                  transition: "all .3s",
                },
              }}
              className={
                pathname.split("/")[1] === data.title
                  ? "active"
                  : pathname === "/" && data.title === "home" && "active"
              }
            >
              <Box color={"rgba(0,160,255,.8)"}>{data.icon}</Box>
              <Typography
                display={{ md: "none", xl: "block" }}
                textTransform={"capitalize"}
                fontSize={".9rem"}
              >
                {data.title}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </>
  );
}

export default NavbarLinks;
