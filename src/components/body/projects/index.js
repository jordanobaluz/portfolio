import React from "react";
import SeparatorSections from "../../common/separatorSections";
import { ProjectData } from "../../data/projects";
import ProjectCard from "./project-card";
import "./projects.css";

function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <SeparatorSections />
      <label className="section-tittle">Projetos</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
