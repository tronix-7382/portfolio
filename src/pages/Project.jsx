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
      )?.content
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
              padding: "1.5rem",
              display: "flex",
              alignItems: "stretch",
              justifyContent: "stretch",
              gap: "1rem",
            }}
          >
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
                  padding: "1rem",
                  display: "inline-block",
                }}
              >
                <Title>Project - {project.title}</Title>
              </Box>
              <Box
                sx={{
                  border: "1px solid rgba(0,170,250,0.1)",
                  padding: "1.5rem 1rem",
                  mt: 2,
                  flexGrow:1
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    opacity: ".4",
                    fontSize: ".7rem",
                  }}
                >
                  {project.caption}
                </Typography>
                <Typography variant="h5" my={1}>
                  📌 {project.title}{" "}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    opacity: ".5",
                    fontSize: ".8rem",
                  }}
                >
                  - {project.desc}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                border: "1px solid rgba(0,170,250,0.1)",
                flexGrow: "1",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: ".7rem",
              }}
            >
              <ProjectInfoCard
                icon={
                  <PersonOutlineOutlinedIcon
                    sx={{ color: "rgba(0,150,255,0.7)" }}
                  />
                }
                title="Client"
                desc={project.client}
              />
              <ProjectInfoCard
                icon={
                  <CalendarMonthOutlinedIcon
                    sx={{ color: "rgba(0,150,255,0.7)" }}
                  />
                }
                title="Date"
                desc={project.date}
              />
              <ProjectInfoCard
                icon={
                  <HomeRepairServiceOutlinedIcon
                    sx={{ color: "rgba(0,150,255,0.7)" }}
                  />
                }
                title="Service"
                desc={project.service}
              />
              <ProjectInfoCard
                icon={
                  <WarehouseOutlinedIcon
                    sx={{ color: "rgba(0,150,255,0.7)" }}
                  />
                }
                title="Industry"
                desc={project.industry}
              />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Project;
