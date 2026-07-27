import React from "react";
import "../styles/Footer.css";
import logo from "../assets/school.png";
import { useNavigate } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaGraduationCap,
  FaUsers,
  FaShieldAlt,
  FaTrophy,
  FaArrowRight,
  FaChevronRight,
} from "react-icons/fa";

function Footer() {

  const navigate = useNavigate();
  return (
    <footer className="footer">

      {/* Top Footer */}

      <div className="footer-top">

        {/* Left */}

        <div className="footer-about">

          <div className="footer-logo">
            <img src={logo} alt="School Logo" />

            <div>
              <h2>Excellence</h2>
              <span>International School</span>
            </div>
          </div>

          <p>
            Excellence International School is committed to nurturing young
            minds through academic excellence, character building, innovation,
            and holistic development.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>


             <li onClick={() => navigate("/")}>
              <FaChevronRight />
              <span>Home</span>
             </li>

              <li onClick={() => navigate("/aboutus")}>
             <FaChevronRight />
            <span>About Us</span>
             </li>

            <li onClick={() => navigate("/admission")}>
             <FaChevronRight />
            <span>Admissions</span>
             </li>

              <li onClick={() => navigate("/gallery")}>
               <FaChevronRight />
             <span>Gallery</span>
              </li>
          <li onClick={() => navigate("/blog")}>
    <FaChevronRight />
    <span>Blog</span>
  </li>
             <li onClick={() => navigate("/contactus")}>
    <FaChevronRight />
    <span>Contact</span>
  </li>

          </ul>

        </div>

        {/* Academics */}

        <div className="footer-links">

          <h3>Academics</h3>

          <ul>
            <li><FaChevronRight /> Pre Primary</li>
            <li><FaChevronRight /> Primary</li>
            <li><FaChevronRight /> Middle School</li>
            <li><FaChevronRight /> Senior Secondary</li>
            <li><FaChevronRight /> Co-Curricular</li>
            <li><FaChevronRight /> Career Guidance</li>
          </ul>

        </div>

        {/* Contact */}

        <div className="footer-contact">

          <h3>Contact Us</h3>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <div>
              <h4>Address</h4>
              <p>Ramghat Road, Aligarh, Uttar Pradesh 202001</p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <p>+91 5687956820</p>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>info@excellenceinternationalschool.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FaClock />
            <div>
              <h4>Working Hours</h4>
              <p>Mon - Sat : 8:00 AM - 4:00 PM</p>
            </div>
          </div>

        </div>

      </div>

      {/* Newsletter */}

      <div className="newsletter">

        <div className="newsletter-left">

          <h2>Stay Updated</h2>

          <p>
            Subscribe to receive the latest news, events and admission updates.
          </p>

        </div>

        <div className="newsletter-right">

          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button>
            Subscribe
            <FaArrowRight />
          </button>

        </div>

      </div>

      {/* Features */}

      <div className="footer-features">

        <div className="feature">
          <FaGraduationCap />
          <div>
            <h4>Academic Excellence</h4>
            <p>Quality education for a brighter future.</p>
          </div>
        </div>

        <div className="feature">
          <FaUsers />
          <div>
            <h4>Holistic Development</h4>
            <p>Overall growth of every student.</p>
          </div>
        </div>

        <div className="feature">
          <FaShieldAlt />
          <div>
            <h4>Safe Campus</h4>
            <p>Secure learning environment.</p>
          </div>
        </div>

        <div className="feature">
          <FaTrophy />
          <div>
            <h4>Years of Trust</h4>
            <p>Trusted by thousands of parents.</p>
          </div>
        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        <p>
          © 2026 Excellence International School. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
