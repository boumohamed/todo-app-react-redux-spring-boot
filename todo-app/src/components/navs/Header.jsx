import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="text-center text-primay">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            BzrDo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/deleted" className="nav-link" aria-current="page">
                  Deleted Tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users" className="nav-link" aria-current="page">
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
