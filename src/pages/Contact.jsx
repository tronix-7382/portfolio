import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Title from "../components/Title";
import headphone from "../assets/headphone2.png";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
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
          padding: {xs:'.3rem',md:"1rem"},
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

          {/* Address */}
          <Box
            sx={{
              border: "1px solid rgba(0,170,250,0.1)",
              padding: ".5rem .8rem",
              backgroundColor: "primary.dark",
              minWidth: {xs:'unset',md:"350px"},
                
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
                  background: `url(${headphone}) no-repeat`,
                  backgroundPosition: "center",
                  backgroundSize: "60% 60%",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "primary.dark",
                  opacity: ".5",
                },
              }}
            >
              <Typography variant="h6" color="rgba(255,255,255,.9)">
                Contact Info
              </Typography>
              <Typography variant="caption" color="rgba(255,255,255,.6)">
                Telegram : @Rnoorh7382 <br />
                Email : rnoorh.work@gmail.com <br />
                Linkedin : www.linkedin.com/in/reza7382 <br/>
                Github : https://github.com/tronix-7382
              </Typography>
              
            </Box>
            
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
