import React from "react";
import "./work-card.css";

function WorkCard({ item }) {
  return (
    <div className="work-card">
      <img src={item.companyLogo} alt="work-logo" className="work-logo" />
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <div className="work-dates">
          <label>{item.dateStart}</label>-<label>{item.dataEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
