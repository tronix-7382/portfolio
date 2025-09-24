import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

function StatsCard({ data }) {
  const [canSee, setCanSee] = useState(false);
  const box = useRef();

  useEffect(() => {
    document.addEventListener("scroll", StatsCanSeeHandler);

    return () => {
      document.removeEventListener("scroll", StatsCanSeeHandler);
    };
  }, []);

  function StatsCanSeeHandler() {
    setCanSee(
      ((box.current.offsetTop - window.innerHeight) / window.scrollY).toFixed(1)
    );
  }

  return (
    <>
      <Box
        sx={{
          border: "1px solid rgba(0,160,250,0.1)",
          padding: "1.5rem",
          backgroundColor: "primary.main",
          flexGrow: "1",
          transition: "all 1s",
        }}
        ref={box}
      >
        {canSee < 1 && (
          <Typography fontSize={"1.2rem"}>
            <CountUp end={data.value} duration={5} />+
          </Typography>
        )}
        <Typography
          sx={{
            color: "rgba(255,255,255,0.5)",
          }}
        >
          {data.caption}
        </Typography>
      </Box>
    </>
  );
}
export default StatsCard;
