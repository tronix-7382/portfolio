import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { ClipLoader } from "react-spinners";

function ProjectCard({ title, caption, year, url, fw, button, hoverUrl }) {
  const [loading, setLoading] = useState(true);
  const [hover, setHover] = useState(hoverUrl);
  const hoveredimage = useRef();

  useEffect(() => {
    const image = new Image();
    image.src = url;

    image.onload = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          border: "1px solid rgba(0,160,250,0.1)",
          backgroundColor: "primary.dark",
          padding: !fw ? ".5rem" : ".2rem",
          maxWidth: { xs: "350px", md: "390px", xl: "510px" },
          transition: "all .5s",
          position: "relative",
          width: "100%",

          "&:hover": {
            border: "1px solid rgba(0,160,250,0.3)",
            "&  .button": {
              top: "-22px",
              color: "rgba(0,170,250,0.5)",
            },
            "&  .title": {
              color: "rgba(0,170,250,0.5)",
            },
            "&  .year": {
              top: "-17px",
            },
            "&  .yearParent": {
              opacity: 1,
            },
            "&  .hoverUrl": {
              md: { opacity: 1, visibility: "visible" },
            },
          },
        }}
        onClick={(e) => {
          hoveredimage.current.style.opacity = 1;
          hoveredimage.current.style.visibility = "visible";

          setTimeout(() => {
            hoveredimage.current.style.opacity = 0;
          hoveredimage.current.style.visibility = "hidden";
          }, 2000);
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "270px",
            overflow: "hidden",
            minWidth: { xs: "280px", md: "320px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Image */}

          {loading ? (
            <ClipLoader color="#36d7b7" />
          ) : (
            <img
              src={url}
              alt={title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                border: "1px solid rgba(0,70,250,.1)",
                opacity: "0.8",
              }}
            />
          )}
        </Box>

        {/* Content */}
        <Box
          sx={{
            padding: ".5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Title */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                transition: "all .5s",
                color: "rgba(255,255,255,.8)",
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
              className="title"
            >
              {title}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "rgba(255,255,255,.3)",
                fontSize: { xs: ".6rem", md: ".8rem" },
              }}
            >
              {caption}
            </Typography>
          </Box>

          {/* Button */}
          {button && (
            <Box
              sx={{
                border: "1px solid rgba(0,170,250,0.1)",
                backgroundColor: "primary.dark",
                overflow: "hidden",
                width: "25px",
                height: "25px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  display: "flex",
                  alignItems: "center",
                  transition: "all .5s",
                  color: "rgba(255,255,255,.4)",
                  flexDirection: "column",
                }}
                className="button"
              >
                <ChevronRightOutlinedIcon />
                <EastOutlinedIcon fontSize="small" />
              </Box>
            </Box>
          )}
        </Box>

        {/* Year */}
        <Box
          sx={{
            border: "1px solid rgba(255,255,255,.1)",
            position: "absolute",
            top: "20px",
            right: "20px",
            padding: ".2rem .6rem",
            overflow: "hidden",
            transition: "all .5s",
            height: "25px",
            opacity: 0,
          }}
          className="yearParent"
        >
          <Box
            sx={{
              position: "relative",
              transition: "all .5s",
              top: 0,
            }}
            className="year"
          >
            <Typography
              sx={{
                color: "rgba(255,255,255,0.5)",
                fontSize: ".7rem",
              }}
            >
              {year}
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.5)",
                fontSize: ".7rem",
              }}
            >
              {year}
            </Typography>
          </Box>
        </Box>

        {hover && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.6)",
              opacity: "0",
              visibility: "hidden",
              transition: "all .5s",
              height: "275px",
            }}
            className="hoverUrl"
            ref={hoveredimage}
          >
            <img
              src={hover}
              alt={title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                border: "1px solid rgba(0,70,250,.1)",
                opacity: "1",
              }}
            />
          </Box>
        )}
      </Box>
    </>
  );
}

export default ProjectCard;