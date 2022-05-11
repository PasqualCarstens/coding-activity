import React from "react";
import "./Header.css";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <img className="Logo" src={logo} alt="Logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/blanko">Blanko</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/slido">Slido</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/tetro">Tetro</Link>
        </li>
      </ul>
    </div>
  );
}
