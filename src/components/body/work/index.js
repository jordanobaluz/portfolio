import React from "react";
import "./work.css";
import SeparatorSection from "../../common/separatorSections";
import { WorkData } from "../../data/work";
import WorkCard from "./work-card";

function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <SeparatorSection />
      <label className="section-tittle">Trabalhos</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;
