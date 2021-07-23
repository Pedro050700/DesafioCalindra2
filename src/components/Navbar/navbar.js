import React from "react";

function Click() {
  var navbar = document.querySelector(".main-nav ul");
  navbar.classList.toggle("active");
}

function Navbar() {
  return (
    <header className="main-header">
      <div className="logoMobile">
        <img src="./assets/img/logo.png" width="40" alt="logo" />
      </div>

      <div className="main-logo">
        <img src="./assets/img/logo2.png" width="80%" alt="logo" />
      </div>

      <div href="#" className="toggle-button" onClick={Click}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a></a>
          </li>
          <li>
            <a href="#">MODELS</a>
          </li>
          <li>
            <a></a>
          </li>
          <li>
            <a href="#">GUARANTE</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
