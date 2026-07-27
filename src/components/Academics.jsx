import "../styles/Academics.css";

import { FaArrowRight } from "react-icons/fa";

import hero from "../assets/school-building.png";



function Academics() {
  return (
    <>


      {/* Hero */}

      <section className="academicHero">

        <div className="academicContent">

          <span>ACADEMIC EXCELLENCE</span>

          <h1>
            Building Future
            <br />
            Leaders Through
            <br />
            Quality Education
          </h1>

          <p>
            Excellence International School provides modern learning
            from Pre Primary to Middle School with experienced
            teachers, smart classrooms and holistic development.
          </p>

          <button>
            Explore Academics
            <FaArrowRight />
          </button>

        </div>

<div className="academicImage">

  <div className="heroCard">

    <div className="yellowCircle"></div>

    <img
      src={hero}
      alt="School Building"
    />

    <div className="dot dot1"></div>
    <div className="dot dot2"></div>
    <div className="dot dot3"></div>

  </div>

</div>

      </section>





    </>
  );
}

export default Academics;