import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="navbar">
      {/* <header>
        <nav>
          <div className="logo">
            <a>COVID UPDATES</a>
          </div>
        </nav>
      </header> */}
      <h2>Covid19.</h2>
      <ul className="nav-links">
        <li>
          <button className="btn">
            <i className="bi bi-grid-1x2-fill" style={{ color: "#ffff" }}></i>
            <a href="https://akshay-vinod.github.io/CONSILIO/">Dashboard</a>
          </button>
        </li>
      </ul>
      <a
        title="Buy me a coffee"
        href="https://www.buymeacoffee.com/akshayvinod"
        rel="noreferrer"
        target="_blank"
      >
        <img
          alt="Buy me a coffee"
          src="https://cdn.dribbble.com/users/3349322/screenshots/14039201/media/616e4ae6995fb288e434c3f0927541ce.png"
        />
      </a>
    </div>
  );
};

export default Nav;
