import React from "react";
import "./notfound.css";

const NotFound = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
          <h2>404 - The Page can't be found</h2>
        </div>
        <a className="bg-primary hover:bg-primary" href="/">
          Go TO Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
