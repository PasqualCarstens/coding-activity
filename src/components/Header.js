import React from "react";
import "./Header.css";
import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <div className="Header">
      <img className="Logo" src={logo} alt="Logo" />
    </div>
  );
}
