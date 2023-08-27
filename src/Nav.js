import React from 'react';
import { Link } from 'react-router-dom';
import SCP from './SCP.json';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <h1 className="navbar-brand mb-4">TOP SECRET FILES</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              {SCP.map((scp) => (
                <Link
                  key={scp.id}
                  to={`/scp/${scp.id}`}
                  className="nav-link"
                >
                  {scp.subject}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-4">
        <div className="d-flex justify-content-center">
          <img
            src="/images/scp-logo.png"
            alt="SCP Foundation Logo"
            className="img-fluid"
            style={{ maxWidth: "70%", height: "70%" }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
