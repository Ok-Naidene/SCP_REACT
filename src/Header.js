import React from 'react';

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex align-items-center flex-wrap">
            <h1 className="navbar-brand mb-0">SCP FOUNDATION</h1>
            <h6 className="mb-0 ml-3">Secure, Contain, Protect</h6>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
