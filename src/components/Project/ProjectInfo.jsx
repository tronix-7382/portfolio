import React from "react";
import Title from "../Title";
import { Box, Typography } from "@mui/material";
import ProjectInfoCard from "./ProjectInfoCard";

// ======== material icons ========
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
// ======== snoci lairetam ========

function ProjectInfo({
  title,
  desc,
  caption,
  client,
  date,
  service,
  industry,
}) {
  return (
    <>
      {/* Project Info Section */}
      <Box
        sx={{
          border: "1px solid rgba(0,160,255,.1)",
          backgroundColor: "primary.main",
          padding: { xs: ".5rem", md: "1.5rem" },
          display: "flex",
          alignItems: "stretch",
          justifyContent: "stretch",
          gap: "1rem",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          flexGrow={3}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Title */}
          <Box
            sx={{
              border: "1px solid rgba(0,170,250,0.1)",
              display: "inline-block",
              padding: { xs: ".3rem", md: "1rem" },
            }}
          >
            <Title>Project - {title}</Title>
          </Box>

          {/* Content */}
          <Box
            sx={{
              border: "1px solid rgba(0,170,250,0.1)",
              padding: { xs: "1rem .5rem", md: "1.5rem 1rem" },
              mt: 2,
              flexGrow: 1,
            }}
          >
            {/* caption */}
            <Typography
              variant="caption"
              sx={{
                opacity: ".4",
                fontSize: ".7rem",
              }}
            >
              {caption}
            </Typography>

            {/* title */}
            <Typography variant="h5" my={1}>
              📌 {title}{" "}
            </Typography>

            {/* description */}
            <Typography
              variant="caption"
              sx={{
                opacity: ".5",
                fontSize: ".8rem",
              }}
            >
              - {desc}
            </Typography>
          </Box>
        </Box>

        {/* Info cards */}
        <Box
          sx={{
            border: "1px solid rgba(0,170,250,0.1)",
            flexGrow: "1",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: ".7rem",
            minWidth: "360px",
          }}
        >
          {/* Client */}
          <ProjectInfoCard
            icon={
              <PersonOutlineOutlinedIcon
                sx={{ color: "rgba(0,150,255,0.7)" }}
              />
            }
            title="Client"
            desc={client}
          />

          {/* Date */}
          <ProjectInfoCard
            icon={
              <CalendarMonthOutlinedIcon
                sx={{ color: "rgba(0,150,255,0.7)" }}
              />
            }
            title="Date"
            desc={date}
          />

          {/* Service */}
          <ProjectInfoCard
            icon={
              <HomeRepairServiceOutlinedIcon
                sx={{ color: "rgba(0,150,255,0.7)" }}
              />
            }
            title="Service"
            desc={service}
          />

          {/* Industry */}
          <ProjectInfoCard
            icon={
              <WarehouseOutlinedIcon sx={{ color: "rgba(0,150,255,0.7)" }} />
            }
            title="Industry"
            desc={industry}
          />
        </Box>
      </Box>
    </>
  );
}

export default ProjectInfo;
