import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar__logo">Redux Query Demo</h2>
      <ul className="navbar__links">
        <li className="navbar__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__item">
          <Link to="/users">Users</Link>
        </li>
        <li className="navbar__item">
          <Link to="/posts">Posts</Link>
        </li>
        <li className="navbar__item">
          <Link to="/comments">Comments</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
