import React from "react";
import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Blog Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="About/">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Contact/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
