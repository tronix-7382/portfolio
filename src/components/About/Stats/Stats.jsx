import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Title from "../../Title";
import Technology from "./Technology";
import StatsCard from "./StatsCard";
import { coreStats, statsData } from "../../../constants/statsIcon";
import LinearSkills from "./LinearSkill";

function Stats() {
  const [canSee, setCanSee] = useState(false);
  const box = useRef();

  useEffect(() => {
    document.addEventListener("scroll", canSeeHandler);

    return () => {
        document.removeEventListener("scroll", canSeeHandler);
      };
  }, []);

  function canSeeHandler(){
    setCanSee(
        ((box.current.offsetTop - window.innerHeight) / window.scrollY).toFixed(
          1
        )
      );
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          width: "100%",
          padding: {xs:'1rem .5rem',md:"1rem 1.2rem"},
          border: "1px solid rgba(0,160,250,0.1)",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Title>Stats</Title>

        <Technology />

        <Box ref={box} width='100%'>
          {canSee < 1 && coreStats.map((skill) => (
            <LinearSkills skill={skill} />
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: "1rem", md: "1.5rem" },
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {statsData.map((stat) => (
            <StatsCard data={stat} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Stats;
