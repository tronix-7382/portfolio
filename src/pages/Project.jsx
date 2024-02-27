import React, { useEffect, useState } from "react";
import { projectsData } from "../constants/projects";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ClipLoader } from "react-spinners";
import Title from "../components/Title";
import ProjectInfoCard from "../components/Project/ProjectInfoCard";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";

const Project = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setProject(
      projectsData.find(
        (data) => data.card.title.toLowerCase().split(" ").join("-") == id
      )
    );
  }, []);

  return (
    <>
      {!project ? (
        <ClipLoader color="#36d7b7" />
      ) : (
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
            {/* Content */}
            <Box
              flexGrow={3}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  border: "1px solid rgba(0,170,250,0.1)",
                  display: "inline-block",
                  padding: { xs: ".3rem", md: "1rem" },
                }}
              >
                <Title>Project - {project.content.title}</Title>
              </Box>
              <Box
                sx={{
                  border: "1px solid rgba(0,170,250,0.1)",
                  padding: { xs: "1rem .5rem", md: "1.5rem 1rem" },
                  mt: 2,
                  flexGrow: 1,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    opacity: ".4",
                    fontSize: ".7rem",
                  }}
                >
                  {project.content.caption}
                </Typography>
                <Typography variant="h5" my={1}>
                  📌 {project.content.title}{" "}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    opacity: ".5",
                    fontSize: ".8rem",
                  }}
                >
                  - {project.content.desc}
                </Typography>
              </Box>
            </Box>
            {/* info cards */}
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
              <ProjectInfoCard
                icon={
                  <PersonOutlineOutlinedIcon
                    sx={{ color: "rgba(0,150,255,0.7)" }}
                  />
                }
                title="Client"
                desc={project.content.client}
              />
              <ProjectInfoCard
                icon={
                  <CalendarMonthOutlinedIcon
                    sx={{ color: "rgba(0,150,255,0.7)" }}
                  />
                }
                title="Date"
                desc={project.content.date}
              />
              <ProjectInfoCard
                icon={
                  <HomeRepairServiceOutlinedIcon
                    sx={{ color: "rgba(0,150,255,0.7)" }}
                  />
                }
                title="Service"
                desc={project.content.service}
              />
              <ProjectInfoCard
                icon={
                  <WarehouseOutlinedIcon
                    sx={{ color: "rgba(0,150,255,0.7)" }}
                  />
                }
                title="Industry"
                desc={project.content.industry}
              />
            </Box>
          </Box>

          {/* Problem / Soloution */}
          <Box
            sx={{
              border: "1px solid rgba(0,170,250,.1)",
              backgroundColor: "primary.main",
              mt: 2,
              display: "flex",
              alignItems: "stretch",
              gap: "1rem",
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
              padding: { xs: ".5rem", md: "1.5rem" },
            }}
          >
            <Box
              sx={{
                border: "1px solid rgba(0,170,250,.1)",
                backgroundColor: "primary.main",
                padding: "0.7rem",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Title> Problem 💀 </Title>
              <Box
                sx={{
                  border: "1px solid rgba(0,170,250,0.1)",
                  padding: "1rem",
                  mt: 2,
                  flexGrow: 1,
                }}
              >
                <Typography
                  sx={{ fontSize: ".9rem", color: "rgba(255,255,255,0.7)" }}
                >
                  {project.content.problem}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                border: "1px solid rgba(0,170,250,.1)",
                backgroundColor: "primary.main",
                padding: "0.7rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                width: "100%",
              }}
            >
              <Title> Solution ✅ </Title>
              <Box
                sx={{
                  border: "1px solid rgba(0,170,250,0.1)",
                  padding: "1rem",
                  mt: 2,
                  flexGrow: 1,
                }}
              >
                <Typography
                  sx={{ fontSize: ".9rem", color: "rgba(255,255,255,0.7)" }}
                >
                  {project.content.solution}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Picture  */}
          {project.content.images &&
            project.content.images.map((data) => (
              <Box
                sx={{
                  border: "1px solid rgba(0,170,250,.1)",
                  backgroundColor: "primary.light",
                  padding: { xs: "", md: "1rem" },
                  overflow: "hidden",
                  width: "100%",
                  position: "relative",
                  mt: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "& img": {
                    width: "100%",
                    height: "100%",
                    border: "1px solid rgba(0,170,250,.1)",
                    padding: ".6rem",
                    backgroundColor: "primary.light",
                    objectFit: "cover",
                    maxWidth: "1000px",
                  },
                  "&::after": {
                    content: '" "',
                    position: "absolute",
                    backgroundColor: "rgba(0,0,0,0.3)",
                    display: "block",
                    inset: 0,
                    transition: "all .5s",
                  },
                  "&:hover": {
                    " &::after": {
                      backgroundColor: "rgba(0,0,0,0.1)",
                    },
                  },
                }}
              >
                <img src={data} alt="" />
              </Box>
            ))}
        </>
      )}
    </>
  );
};

export default Project;
