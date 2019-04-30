import React from "react";
import Cookies from "js-cookie";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" id="nav-text" href="/">
        MidiGrams
      </a>
      <a className="navbar-brand" id="nav-text" href="/">
        Home
      </a>
      <a className="navbar-brand" id="nav-text" href="/info">
        Info
      </a>
      <a className="navbar-brand ml-auto" id="nav-text" href="/" onClick={() => {Cookies.remove('userId');}}>
        Logout
      </a>
    </nav>
  );
}

export default Nav;
