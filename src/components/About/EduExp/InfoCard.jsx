import { Box, Typography } from "@mui/material";

function InfoCard({ data }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: ".8rem",
          m: "1.5rem 2rem",
          "& img": {
            width: "60px",
          },
          "&::after": {
            content: "''",
            width: "8px",
            left: "7px",
            height: "8px",
            marginBottom: "40px",
            backgroundColor: "rgb(150,150,150)",
            position: "absolute",
          },
        }}
      >
        <img
          src={data.img}
          alt={data.title}
          style={{
            objectFit: "contain",
            width: "50px",
          }}
        />
        <Box>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.25)",
              fontSize: ".8rem",
            }}
          >
            {data.time}
          </Typography>
          <Typography sx={{}}>{data.title}</Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.25)",
              fontSize: ".8rem",
            }}
          >
            {data.caption}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default InfoCard;
