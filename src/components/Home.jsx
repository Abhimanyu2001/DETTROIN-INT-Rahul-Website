import "../styles/Home.css";

import hero from "../assets/baby.png";
import { useNavigate } from "react-router-dom";

import {
  FaBookOpen,
  FaUserGraduate,
  FaShieldAlt,
  FaBrain,
  FaArrowRight,
  FaSchool,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaBaby,
} from "react-icons/fa";
import AboutSection from "./AboutSection";
import EnquiryForm from "./EnquiryForm";

function Home() {

  const navigate = useNavigate();
  return (
    <>

    <EnquiryForm/>
      {/* HERO */}

      <section className="hero">

        <div className="hero-left">

          <span className="hero-tag">
            BEST SCHOOL IN ALIGARH, UTTAR PRADESH
          </span>

          <h1>
            Shaping Future Leaders
            <br />
            Through Quality Education
          </h1>

          <p>
            Excellence International School nurtures confident, creative and
            future-ready students through world-class education, innovation and
            holistic development.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Discover More
              <FaArrowRight />
            </button>

           <button
          className="secondary-btn"
           onClick={() => navigate("/admission")}
           >
                Admissions Open
             </button>

          </div>

        </div>

       <div className="hero-right">

       <div className="hero-bg"></div>

       <img src={hero} alt="Baby" className="hero-image" />

       </div>

      </section>

      {/* FEATURE BAR */}

      <section className="feature-bar">

        <div className="feature-card">

          <FaBookOpen />

          <div>

            <h4>Strong Academics</h4>

            <p>Concept Based Learning</p>

          </div>

        </div>

        <div className="feature-card">

          <FaUserGraduate />

          <div>

            <h4>Experienced Faculty</h4>

            <p>Dedicated Educators</p>

          </div>

        </div>

        <div className="feature-card">

          <FaBrain />

          <div>

            <h4>Holistic Growth</h4>

            <p>Overall Personality</p>

          </div>

        </div>

        <div className="feature-card">

          <FaShieldAlt />

          <div>

            <h4>Safe Campus</h4>

            <p>Secure Environment</p>

          </div>

        </div>

      </section>

      {/* STAGES */}

      <section className="stages">

        <h2>Academic Stages</h2>

        <p>
          Learning pathways designed for every stage of your child's journey.
        </p>

        <div className="stage-grid">

          <div className="stage-card">

            <FaBaby />

            <h3>Pre Primary</h3>

            <ul>

              <li>Play Based Learning</li>

              <li>Creative Activities</li>

              <li>Social Skills</li>

            </ul>

          </div>

          <div className="stage-card">

            <FaSchool />

            <h3>Primary School</h3>

            <ul>

              <li>Strong Foundation</li>

              <li>Reading & Writing</li>

              <li>Moral Education</li>

            </ul>

          </div>

          <div className="stage-card">

            <FaChalkboardTeacher />

            <h3>Middle School</h3>

            <ul>

              <li>Critical Thinking</li>

              <li>Leadership Skills</li>

              <li>Communication</li>

            </ul>

          </div>

          <div className="stage-card">

            <FaGraduationCap />

            <h3>Senior Secondary</h3>

            <ul>

              <li>Career Guidance</li>

              <li>Competitive Exams</li>

              <li>Future Ready</li>

            </ul>

          </div>

        </div>

      </section>

      <AboutSection/>

    </>
  );
}

export default Home;