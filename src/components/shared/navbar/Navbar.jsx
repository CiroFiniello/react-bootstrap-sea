import React from "react";
import sea from "../../../assets/sea.png";
import "./navbar.scss";
const Navbar = ({ avatar }) => {
  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-evenly w-100 align-items-center">
      <div className="container-left ">
        <figure className="d-flex align-items-center gap-1 mb-0">
          <img src={sea} alt="logo" className="logo" />
          <h1>SEA</h1>
        </figure>
      </div>
      <div className="container-center">
        <ul className="text-white navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              NEGOZIO
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              COMUNITÀ
            </a>
          </li>
          <li className="nav-item active">
            <a href="#" className="nav-link text-white">
              USER
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              CHAT
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white me-0">
              ASSISTENZA
            </a>
          </li>
        </ul>
      </div>
      <div className="container-right d-flex gap-1 align-items-start">
        <button>installa sea</button>
        <button>🔔</button>
        <a href="#">USER</a>
        <figure className="m-0">
          <img src={avatar} alt="logo" className="avatar" />
        </figure>
      </div>
    </nav>
  );
};

export default Navbar;
