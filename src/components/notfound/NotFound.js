import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-wrapper">
      <div className="notfound-text">
        <h1>Oops !!! Page not Found</h1>
        <Link to="/" className="notfount-link">
          Go to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
