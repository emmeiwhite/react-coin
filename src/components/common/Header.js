import React from "react";
import logo from "./../../logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import Search from "./../search/Search";

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} alt="react logo" height={80} />
      <Link
        to="/"
        style={{ display: "inline", textDecoration: "none", color: "#fff" }}
      >
        <h1>Cryptocoin</h1>
      </Link>

      <Search />
    </header>
  );
}
