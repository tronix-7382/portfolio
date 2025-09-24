import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function HeroHeaderCard({ icon, text, href }) {
  return (
    <>
      <Link
        to={href || ""}
        style={{ flexGrow: 1, width: "100%", maxWidth: "300px"}}
      >
        <Box
          sx={{
            border: "1px solid rgba(0,170,250,0.1)",
            backgroundColor: "primary.light",
            backdropFilter: "blur(10px)",
            padding: ".5rem 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: ".3rem",
            cursor: !href && "default",
            color: "rgba(255,255,255,.8)",

            borderRadius: "5px",
            "&:hover": {
              border: "1px solid rgba(0,170,250,0.2)",
            },
          }}
        >
          {icon}
          <Typography
            sx={{
              fontSize: ".8rem",
              color: "rgba(255,255,255,.8)",
              whiteSpace: "nowrap",
            }}
          >
            {text}
          </Typography>
        </Box>
      </Link>
    </>
  );
}

export default HeroHeaderCard;
