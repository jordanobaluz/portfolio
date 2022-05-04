import React from "react";
import "./contact.css";
import SeparatorSection from "../../common/separatorSections";
import SocialContact from "../../common/social-contact";

function Contact() {
  return (
    <div className="contact">
      <SeparatorSection />
      <label className="section-tittle">Contato</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>
            Deseja conversar comigo? Entre em contato através das plataformas
          </p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href="./resume/curriculo-likedin.pdf">
            <i class="fi fi-rr-download download-icon"></i>
            Download Curriculo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
