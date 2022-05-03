import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          <i class="fi fi-rr-edit-alt option-icon"></i>
          Projetos
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fi fi-rr-computer option-icon"></i>
          Habilidades
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i class="fi fi-rr-briefcase option-icon"></i>
          Trabalho
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fi fi-rr-portrait option-icon"></i>
          Contato
        </a>
      </div>
    </div>
  );
}

export default Web;
