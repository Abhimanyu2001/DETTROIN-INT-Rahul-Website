import "../styles/Aboutus.css";
import school from "../assets/school-building.png";

import {
  FaGraduationCap,
  FaUsers,
  FaAward,
  FaShieldAlt,
  FaBullseye,
  FaEye,
  FaCheckCircle,
} from "react-icons/fa";

function Aboutus() {
  return (
    <>
    

      <section className="aboutHero">

        <div className="heroLeft">

          <span className="heroTag">
            ABOUT EXCELLENCE INTERNATIONAL SCHOOL
          </span>

          <h1>
            Building Bright
            <span> Futures</span>
          </h1>

          <h3>
            A Leading School in Aligarh
          </h3>

          <p>
            Excellence International School is committed to delivering
            world-class education that combines academic excellence,
            character building, innovation, and holistic development.
            We nurture confident learners who become responsible
            leaders of tomorrow.
          </p>

          <div className="heroButtons">

            <button className="primaryBtn">
              Explore Campus
            </button>

            <button className="secondaryBtn">
              Admissions Open
            </button>

          </div>

        </div>

        <div className="heroRight">

          <div className="imageBox">
            <img src={school} alt="School" />
          </div>

          <div className="floatingCard card1">

            <FaGraduationCap />

            <div>
              <h3>20+</h3>
              <p>Years Experience</p>
            </div>

          </div>

          <div className="floatingCard card2">

            <FaUsers />

            <div>
              <h3>2500+</h3>
              <p>Students</p>
            </div>

          </div>

          <div className="floatingCard card3">

            <FaAward />

            <div>
              <h3>100%</h3>
              <p>Academic Excellence</p>
            </div>

          </div>

        </div>

      </section>

      {/*VISION & MISSION*/}

      <section className="visionSection">

        <div className="sectionHeading">

          <span>OUR PURPOSE</span>

          <h2>
            Vision & Mission
          </h2>

          <p>
            Excellence International School believes education is more
            than academics. We shape responsible citizens with strong
            values, leadership skills and lifelong learning habits.
          </p>

        </div>

        <div className="visionGrid">

          <div className="visionCard">

            <div className="cardIcon">
              <FaEye />
            </div>

            <h3>Our Vision</h3>

            <p>
              To become one of the most respected educational
              institutions by nurturing knowledge, innovation,
              leadership and moral values.
            </p>

            <ul>

              <li>
                <FaCheckCircle />
                Think Independently
              </li>

              <li>
                <FaCheckCircle />
                Respect Others
              </li>

              <li>
                <FaCheckCircle />
                Build Leadership
              </li>

              <li>
                <FaCheckCircle />
                Serve Society
              </li>

            </ul>

          </div>

          <div className="visionCard">

            <div className="cardIcon gold">
              <FaBullseye />
            </div>

            <h3>Our Mission</h3>

            <p>
              Deliver quality education through modern teaching,
              technology integration, discipline and continuous
              student development.
            </p>

            <ul>

              <li>
                <FaCheckCircle />
                High Academic Standards
              </li>

              <li>
                <FaCheckCircle />
                Modern Learning Environment
              </li>

              <li>
                <FaCheckCircle />
                Safe & Secure Campus
              </li>

              <li>
                <FaCheckCircle />
                Holistic Development
              </li>

            </ul>

          </div>

        </div>

      </section>
    </>
  );
}

export default Aboutus;