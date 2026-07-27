import "../styles/Admission.css";
import {
  FaPhoneAlt,
  FaFileAlt,
  FaFolderOpen,
  FaUsers,
  FaFemale,
  FaAward,
  FaClipboardCheck,
  FaUniversity,
  FaEnvelope,
} from "react-icons/fa";

function Admission() {
  const overview = [
    {
      icon: <FaPhoneAlt />,
      title: "Contact the School",
      text: "Contact the School front desk for the registration.",
    },
    {
      icon: <FaFileAlt />,
      title: "Take the Admission Forms",
      text: "Take the admission forms and attach the necessary documents of the student and parents.",
    },
    {
      icon: <FaFolderOpen />,
      title: "Direct Admission",
      text: "Kindly approach the school with your previous school documents.",
    },
    {
      icon: <FaUsers />,
      title: "First Come First Basis",
      text: "Admission is taken on first come first basis.",
    },
    {
      icon: <FaFemale />,
      title: "Special Term",
      text: "There is a special term in case of single girl child of parents.",
    },
  ];

  const infoCards = [
    {
      icon: <FaAward />,
      title: "Direct Admission",
      text: "Direct admission for class Play Group to VIII is also offered to meritorious students. For more details please contact us with all the necessary documents.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Entrance Test",
      text: "All the applications undergo a standard entrance test to prepare and counsel parents and students for a bright future.",
    },
    {
      icon: <FaUniversity />,
      title: "Payment Method",
      text: "Payment can be done either in Bank directly or in the school office. All modes of payment are accepted.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}

      <section className="admissionHero">
        <div className="heroOverlay">

          <h1>Admission Enquiry</h1>

          <div className="breadcrumb">
            Home
            <span>›</span>
            Admissions
            <span>›</span>
            <strong>Admission Enquiry</strong>
          </div>

        </div>
      </section>

      {/* MAIN SECTION */}

      <section className="admissionSection">

        <div className="admissionContainer">

          {/* LEFT */}

          <div className="overviewSection">

            <div className="sectionHeading">

              <h2>Admission Overview</h2>

              <div className="headingLine"></div>

            </div>

            {overview.map((item, index) => (
              <div className="overviewCard" key={index}>

                <div className="overviewIcon">
                  {item.icon}
                </div>

                <div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </div>

              </div>
            ))}

            {infoCards.map((item, index) => (
              <div className="infoCard" key={index}>

                <div className="overviewIcon">
                  {item.icon}
                </div>

                <div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </div>

              </div>
            ))}

            <div className="emailCard">

              <div className="overviewIcon">

                <FaEnvelope />

              </div>

              <div>

                <p>
                  For any admission related query you can reach our school
                  or email us at
                </p>

                <h4>
                  excellenceinternationalschool@gmail.com
                </h4>

              </div>

            </div>

          </div>



{/* RIGHT FORM */}

<div className="formSection">

  <div className="formCard">

    <div className="formHeader">
      <FaClipboardCheck />
      <h2>Admission Enquiry Form</h2>
    </div>

    <form className="admissionForm">

      <div className="formGroup">
        <label>Academic Year *</label>
        <select>
          <option>2026-2027</option>
          <option>2025-2026</option>
        </select>
      </div>

      <div className="formGroup">
        <label>Board *</label>
        <select>
          <option>CBSE</option>
          <option>ICSE</option>
          <option>State Board</option>
        </select>
      </div>

      <div className="formGroup">
        <label>Scholar Type *</label>
        <select>
          <option>Day Scholar</option>
          <option>Hosteller</option>
        </select>
      </div>

      <div className="formGroup">
        <label>Parent Name *</label>
        <input
          type="text"
          placeholder="Enter Parent Name"
        />
      </div>

      <div className="formGroup">
        <label>Parent Email ID *</label>
        <input
          type="email"
          placeholder="Enter Parent Email"
        />
      </div>

      <div className="formGroup">
        <label>Parent Mobile Number *</label>
        <input
          type="tel"
          placeholder="Enter Mobile Number"
        />
      </div>

      <div className="formGroup">
        <label>Select Grade *</label>
        <select>
          <option>Select Grade</option>
          <option>Play Group</option>
          <option>Nursery</option>
          <option>LKG</option>
          <option>UKG</option>
          <option>Class I</option>
          <option>Class II</option>
          <option>Class III</option>
          <option>Class IV</option>
          <option>Class V</option>
          <option>Class VI</option>
          <option>Class VII</option>
          <option>Class VIII</option>
          <option>Class IX</option>
          <option>Class X</option>
          <option>Class XI</option>
          <option>Class XII</option>
        </select>
      </div>

      <div className="formGroup">
        <label>Select Gender *</label>
        <select>
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      <div className="formGroup">
        <label>Date of Birth *</label>
        <input type="date" />
      </div>

      <div className="formGroup">
        <label>Message (Optional)</label>
        <textarea
          rows="5"
          placeholder="Write your message here..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="submitBtn"
      >
        Submit Enquiry
      </button>

    </form>



</div>

  </div>

</div>

      </section>

    </>
  );
}

export default Admission;