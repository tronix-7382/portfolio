import { Box, Typography } from "@mui/material";
import React from "react";
import signature from "../../../../assets/signature.png";
import TextLink from "./TextLink";

function HeroAboutMe() {
  return (
    <Box
      sx={{
        border: "1px solid rgba(0,175,250,0.1)",
        backgroundColor: "primary.light",
        padding: "1.5rem 2rem 4.5rem",
        position: "relative",
        textAlign: { xs: "justify", md: "left" },
        textAlignLast: { xs: "center", md: "left" },
      }}
    >
      <Typography variant="caption" color={"#777"} fontWeight={"bold"}>
        A FRONT-END DEVELOPER
      </Typography>
      <Typography variant="h6">Reza NourMohammadi ✌️</Typography> <br />
      <Typography
        color={"#666"}
        fontSize={".8rem"}
        fontWeight={"bold"}
        lineHeight={"1.4rem"}
      >
        I am a front-end developer from Mashhad, Iran. Currenly pursuing a
        degree in computer engineering at{" "}
        <TextLink link={"https://en.iau.ir/"}>
          "Islamic Azad University of Mashhad"
        </TextLink>
        . I'm a self-taught coder,
        I love the feeling of figuring out a solution to a problem.
        currently, I am working with
        <TextLink link={"https://react.dev/"}> "React"</TextLink>, but I'm going
        to learn <TextLink link={"https://nextjs.org/"}> 'NextJs'</TextLink>,{" "}
        <TextLink link={"https://www.typescriptlang.org/"}>
          {" "}
          'TypeScript'
        </TextLink>
        . I'm also familiar with MaterialUi & Bootstrap and always looking to
        learn new technologies.
        <br />" When I'm not coding, I enjoy learning new things. "
      </Typography>
      <img
        src={signature}
        alt=""
        style={{
          width: "150px",
          position: "absolute",
          bottom: "0",
          right: "-20px",
        }}
      />
    </Box>
  );
}

export default HeroAboutMe;
