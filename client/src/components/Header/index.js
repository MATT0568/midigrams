import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" id="nav-text" href="/">
        MidiGrams
      </a>
      <a className="navbar-brand" id="nav-text" href="/signup">
        Create Account
      </a>
    </nav>
  );
}

export default Header;
