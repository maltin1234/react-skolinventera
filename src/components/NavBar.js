import React from "react";
import "../components/navigation.css";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="navbar-brand"></div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav"></div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
