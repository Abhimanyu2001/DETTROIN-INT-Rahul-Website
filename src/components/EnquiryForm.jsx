import { useEffect, useState } from "react";
import "../styles/EnquiryForm.css";
import { FaTimes } from "react-icons/fa";

function EnquiryForm() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem("popupShown");

    // If popup has already been shown, don't show it again
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setShow(true);
      localStorage.setItem("popupShown", "true");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="close-btn" onClick={handleClose}>
          <FaTimes />
        </button>

        <h2>Admission Enquiry</h2>

        <p>
          We'd love to help you choose the best education for your child.
        </p>

        <form>
          <input
            type="text"
            placeholder="Student Name"
            required
          />

          <input
            type="text"
            placeholder="Parent Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
          />

          <select required defaultValue="">
            <option value="" disabled>
              Select Class
            </option>
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

          <textarea
            rows="4"
            placeholder="Message"
          ></textarea>

          <button type="submit">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}

export default EnquiryForm;