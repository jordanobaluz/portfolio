import React from "react";
import "./skills.css";
import SeparatorSections from "../../common/separatorSections";
import { SkillsData } from "../../data/skills";
import SkillCard from "./skill-card";

function Skills() {
  const data = SkillsData;
  return (
    <div className="skills">
      <SeparatorSections />
      <label className="section-tittle">Habilidades</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-tittle">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
