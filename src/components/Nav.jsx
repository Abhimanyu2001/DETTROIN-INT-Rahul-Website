import React from "react";
import "./Nav.css";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import logo from "../assets/school.png";

function Nav() {
  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="School Logo" />

          <div className="logo-text">
            <h2>Excellence</h2>
            <span>International School</span>
          </div>
        </div>

        {/* Navigation */}

        <nav>
          <ul className="nav-links">

            <li className="active">Home</li>

            <li>About Us</li>

            <li>
              Academics
              <FaChevronDown className="down-icon" />
            </li>

            <li>
              Admissions
              <FaChevronDown className="down-icon" />
            </li>

            <li>
              School Life
              <FaChevronDown className="down-icon" />
            </li>

            <li>Facilities</li>

            <li>Gallery</li>

            <li>Blog</li>

            <li>Contact</li>

          </ul>
        </nav>

        {/* Button */}

        <button className="enquire-btn">
          Enquire Now
          <FaArrowRight />
        </button>

      </div>
    </header>
  );
}

export default Nav;