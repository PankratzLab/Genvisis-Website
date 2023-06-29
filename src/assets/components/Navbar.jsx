import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <ul>
          <li className="logo">
            <Link to="/">
              <img src="/images/Genvisis_Logo_Full.png" />
            </Link>
          </li>
          <li>
            <Link to="/download">Download</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/tutorials">Tutorials</Link>
          </li>
          <li>
            <Link to="/documentation/home">Documentation</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
