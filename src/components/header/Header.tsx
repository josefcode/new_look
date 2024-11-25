import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-wrapper">
        <h1>Welcome!</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
