import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <h4>Olá, sou Jordano Baluz</h4>
          Sou programador web, atualmente estudando frontend com ReactJS
        </div>
        <div className="about-photo">
          <img
            src={"images/web-coding.png"}
            alt="web-coding"
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
