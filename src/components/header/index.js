import React, { useState } from "react";
import "./header.css";
import Web from "./web";
import Mobile from "./mobile";

//test if the page is scrolled to show or hide the header
function Header() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("header").classList.add("header-down");
    } else {
      document.getElementById("header").classList.remove("header-down");
    }
  }
  //hook to open or close the mobile menu
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header" id="header">
      <div className="logo">
        <a href="https://jordanobaluz.github.io/portfolio2">
          <img src="./images/logo-out-bg.png" alt="Logo" className="logo" />
        </a>
      </div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i class="fi fi-rr-menu-burger menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
