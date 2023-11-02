import React, { useState } from "react";
import "../component-style/Header.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header id="head">
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <img
            src={isOpen ? "/path-to-close-icon.png" : "/path-to-open-icon.png"}
            alt="menu"
          />
        </div>
        <ul id="navbar" className={isOpen ? "open" : ""}>
          <li>
            <a href="" className="home-nav">
              Home
            </a>
          </li>
          <li>
            <a href="" className="portfolio-nav">
              Portfolio
            </a>
          </li>
          <li>
            <a href="" className="about-nav">
              About
            </a>
          </li>
          <li>
            <a href="" className="contact-nav">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}
