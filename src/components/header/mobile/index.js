import React from "react";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi fi-rr-cross"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects" onClick={() => setIsOpen(!isOpen)}>
            <i class="fi fi-rr-edit-alt option-icon"></i>
            Projetos
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills" onClick={() => setIsOpen(!isOpen)}>
            <i class="fi fi-rr-computer option-icon"></i>
            Habilidades
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work" onClick={() => setIsOpen(!isOpen)}>
            <i class="fi fi-rr-briefcase option-icon"></i>
            Trabalho
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact" onClick={() => setIsOpen(!isOpen)}>
            <i class="fi fi-rr-portrait option-icon"></i>
            Contato
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
