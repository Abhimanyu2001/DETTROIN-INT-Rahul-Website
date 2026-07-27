import "../styles/ContactUs.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaPaperPlane,
  FaLocationArrow,
} from "react-icons/fa";

import contactHero from "../assets/contact-us.png";

function ContactUs() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className="contactHero">
        <img
          src={contactHero}
          alt="Contact Banner"
          className="heroBanner"
        />
      </section>

      {/* ================= CONTACT INFO ================= */}

      <section className="contactInfo">

        <div className="infoCard">
          <FaMapMarkerAlt />
          <h3>Our Location</h3>

          <p>
            Civil Lines,
            <br />
            Aligarh, Uttar Pradesh - 202001
          </p>
        </div>

        <div className="infoCard">
          <FaPhoneAlt />
          <h3>Phone Number</h3>

          <p>
            +91 9876543210
            <br />
            +91 9876543211
          </p>
        </div>

        <div className="infoCard">
          <FaEnvelope />
          <h3>Email Address</h3>

          <p>
            info@school.com
            <br />
            admissions@school.com
          </p>
        </div>

        <div className="infoCard">
          <FaClock />
          <h3>School Hours</h3>

          <p>
            Mon - Sat : 8:00 AM - 4:00 PM
            <br />
            Sunday : Closed
          </p>
        </div>

      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className="contactSection">

        {/* LEFT */}

        <div className="contactFormCard">

          <h2>Send Us a Message</h2>

          <div className="titleLine"></div>

          <p className="formText">
            Have a question or want to enroll your child?
            Fill out the form below and we'll get back to you shortly.
          </p>

          <form>

            <div className="inputRow">

              <input
                type="text"
                placeholder="Your Name *"
              />

              <input
                type="email"
                placeholder="Your Email *"
              />

            </div>

            <input
              type="text"
              placeholder="Phone Number *"
            />

            <input
              type="text"
              placeholder="Subject *"
            />

            <textarea
              rows="6"
              placeholder="Your Message *"
            ></textarea>

            <button>

              <FaPaperPlane />

              Send Message

            </button>

          </form>

        </div>

        {/* RIGHT */}

        <div className="mapCard">

          <h2>Find Us On Map</h2>

          <div className="titleLine"></div>

          <div className="mapBox">

            <iframe
              title="school-map"
              src="https://www.google.com/maps?q=Aligarh&output=embed"
              loading="lazy"
            ></iframe>

          </div>

          <div className="locationCard">

            <div className="locationLeft">

              <FaMapMarkerAlt className="locationIcon" />

              <div>

                <h3>Excellence International School</h3>

                <p>
                  Civil Lines,
                  Aligarh,
                  Uttar Pradesh - 202001
                </p>

              </div>

            </div>

            <button>

              Get Directions

              <FaLocationArrow />

            </button>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="contactCTA">

        <div className="ctaContent">

          <div>

            <h2>Ready to Begin Your Journey?</h2>

            <p>
              Admissions are now open for the academic year.
              Discover a place where your child can learn,
              grow and excel.
            </p>

          </div>

          <button>Enquire Now</button>

        </div>

      </section>

    </>
  );
}

export default ContactUs;