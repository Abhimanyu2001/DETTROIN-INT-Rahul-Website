import React from "react";
import "../styles/Nav.css";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import logo from "../assets/school.png";
import { NavLink } from "react-router-dom";

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

            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>

            <li>
              <NavLink to="/academics">
                Academics
              </NavLink>
            </li>

            <li>
              <NavLink to="/admission">
                Admissions
              </NavLink>
            </li>

            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>

            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>

            <li>
              <NavLink to="/contactus">Contact Us</NavLink>
            </li>

          </ul>
        </nav>

        {/* Button */}

        <NavLink to="/enquiry" className="enquire-btn">
          Enquire Now
          <FaArrowRight />
        </NavLink>

      </div>
    </header>
  );
}

export default Nav;