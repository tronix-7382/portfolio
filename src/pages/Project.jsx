import React, { useEffect, useState } from "react";

import { projectsData } from "../constants/projects";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Helmet } from "react-helmet";

import ProjectInfo from "../components/Project/ProjectInfo";
import ProblemSection from "../components/Project/ProblemSection";
import ProjectPicture from "../components/Project/ProjectPicture";

const Project = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // find project from ProjectsData
    setProject(
      projectsData.find(
        (data) => data.card.title.toLowerCase().split(" ").join("-") === id
      )
    );
  }, [id]);

  return (
    <>
      {!project ? (
        <ClipLoader color="#36d7b7" />
      ) : (
        <>
          <Helmet>
            <title>Tronix | {project.card.title} 💻</title>
          </Helmet>

          {/* header */}
          <ProjectInfo {...project.content} />

          {/* Problem / Solutin */}
          <ProblemSection
            problem={project.content.problem}
            solution={project.content.solution}
          />

          {/* Picture  */}
          {project.content.images &&
            project.content.images.map((data) => (
              <ProjectPicture url={data} />
            ))}
        </>
      )}
    </>
  );
};

export default Project;
