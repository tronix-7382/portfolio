import React from "react";

import { Box, Button, Typography } from "@mui/material";
import { Helmet } from "react-helmet";

import Title from "../components/Title";
import headphone from "../assets/headphone2.png";
import ContactInfo from "../components/Contact/ContactInfo";

const Contact = () => (
  <>
    <Helmet>
      <title>Tronix | Contact 🤳</title>
    </Helmet>

    <Box
      sx={{
        border: "1px solid rgba(0,160,250,0.1)",
        backgroundColor: "primary.dark",
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        padding: { xs: ".3rem", md: "1rem" },
      }}
    >
      {/* Title */}
      <Box
        sx={{
          border: "1px solid rgba(0,160,250,0.1)",
          padding: ".5rem",
          backgroundColor: "primary.dark",
        }}
      >
        <Title>Contact Me</Title>
      </Box>

      {/* Contact */}
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "stretch", md: "flex-start" },
          justifyContent: "center",
          gap: "1rem",
          padding: { xs: "0", md: "1rem" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >

        {/* Form */}
        <Box
          sx={{
            border: "1px solid rgba(0,170,250,0.1)",
            padding: ".7rem",
            backgroundColor: "primary.dark",
            flexGrow: 1,
            "& form": {
              display: "flex",
              alignItems: "stretch",
              justifyContent: "center",
              flexDirection: "column",
              gap: ".4rem",
            },
            "& input, textarea": {
              border: "1px solid rgba(0,170,250,0.1)",
              padding: ".8rem",
              backgroundColor: "primary.dark",
              color: "#fff",
            },
            "& input:focus, textarea:focus": {
              border: "1px solid rgba(0,170,250,0.3)",
              outline: "none",
            },
            "& input::placeholder, textarea::placeholder": {
              padding: "0 .2rem",
            },
          }}
        >
          <Typography
            variant="caption"
            color="error"
            sx={{
              display: "block",
              textAlign: "center",
            }}
          >
            Form not working yet
          </Typography>
          <form
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <input required type="text" placeholder="Name" />
            <input required type="text" placeholder="Email" />
            <textarea required type="text" placeholder="Message" rows={8} />
            <Button
              variant="contained"
              sx={{
                color: "rgba(255,255,255,0.5)",
                "&:hover": { color: "rgba(255,255,255,.8)" },
              }}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Box>

        {/* Contact Info Section */}
        <ContactInfo icon={headphone}>
          <Typography variant="h6" color="rgba(255,255,255,.9)">
            Contact Info
          </Typography>
          <Typography variant="caption" color="rgba(255,255,255,.6)">
            Telegram : t.me/rnoorh7382 <br />
            Email : rnoorh.work@gmail.com <br />
            Linkedin : www.linkedin.com/in/reza7382 <br />
            Github : github.com/tronix-7382
          </Typography>
        </ContactInfo>
      </Box>
    </Box>
  </>
);

export default Contact;
