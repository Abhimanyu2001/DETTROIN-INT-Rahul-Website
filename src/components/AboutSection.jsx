import "../styles/AboutSection.css";

import aboutImg from "../assets/about-school.png";

import {
  FaBullseye,
  FaEye,
  FaAward,
  FaUsers,
  FaBookReader,
  FaLeaf,
} from "react-icons/fa";

function AboutSection() {
  return (
    <>
    <section className="about">

      <div className="about-left">

        <span className="section-tag">
          ABOUT OUR SCHOOL
        </span>

        <h2>
          Inspiring Young Minds
          <br />
          Building Bright Futures
        </h2>

        <p>
          Excellence International School is committed to providing an
          exceptional educational experience where every student is encouraged
          to discover their potential. Our focus is on academic excellence,
          creativity, discipline, leadership, and character development.
        </p>

        <div className="about-features">

          <div className="about-item">
            <FaAward />
            <div>
              <h4>Academic Excellence</h4>
              <p>Innovative curriculum with modern teaching methods.</p>
            </div>
          </div>

          <div className="about-item">
            <FaUsers />
            <div>
              <h4>Experienced Faculty</h4>
              <p>Dedicated educators committed to student success.</p>
            </div>
          </div>

          <div className="about-item">
            <FaBookReader />
            <div>
              <h4>Holistic Learning</h4>
              <p>Sports, arts, leadership and life skills.</p>
            </div>
          </div>

          <div className="about-item">
            <FaLeaf />
            <div>
              <h4>Safe Environment</h4>
              <p>A secure and nurturing campus for every learner.</p>
            </div>
          </div>

        </div>

      </div>

      <div className="about-right">

        <img src={aboutImg} alt="School" />

        <div className="experience-card">

          <h3>15+</h3>

          <p>Years of Excellence</p>

        </div>

      </div>

    </section>





   {/* Vision Mission */}

    <section className="vision-section">

      <div className="vision-card">

        <div className="vision-icon">
          <FaEye />
        </div>

        <h3>Our Vision</h3>

        <p>
          To empower every child with knowledge, confidence, integrity and
          leadership skills to become responsible global citizens.
        </p>

      </div>



      <div className="vision-card">

        <div className="vision-icon">
          <FaBullseye />
        </div>

        <h3>Our Mission</h3>

        <p>
          Deliver quality education through innovation, discipline,
          creativity, modern technology and student-centered learning.
        </p>

      </div>

    </section>

    </>

  );
}

export default AboutSection;