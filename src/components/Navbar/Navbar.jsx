import { Box } from "@mui/material";
import React, { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarSocial from "./NavbarSocial";
import NavbarHeader from "./NavbarHeader";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          border: "0.1px solid rgba(155,155,155,.1)",
          position: {md:"fixed"},
          top: { md: "5px", xl: "15px" },
          bottom: { md: "5px", xl: "15px" },
          right:{xs:'5px',md:'unset'},
          left:{xs:'5px',md: "5px", xl: "15px" },
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          color: "#fff",
          padding: {xs:'0 .5rem .5rem',md:'.2rem',xl:"2.2rem 2rem"},
          gap: "1rem",
          overflow: {xs:'hidden',md:"auto"},
          alignItems:{md:'center', xl:'unset'},
          height:{xs: drawerOpen ? '550px' : '80px',md:'auto'},
          transition:'all .3s',
          zIndex:'1000',
          backdropFilter:'blur(30px)',
          
        }}
      >
        <NavbarHeader setDrawerOpen={setDrawerOpen}/>
        <NavbarLinks setDrawerOpen={setDrawerOpen} />
        <NavbarSocial />
      </Box>
    </>
  );
}

export default Navbar;
