import "../styles/EnquiryPage.css";

function EnquiryPage() {
  return (
    <section className="enquiry-page">

      <div className="enquiry-container">

        <h1>Admission Enquiry</h1>

        <p>
          Fill out the enquiry form and our admission team will contact you
          shortly.
        </p>

        <form className="enquiry-form">

          <input type="text" placeholder="Student Name" />

          <input type="text" placeholder="Parent Name" />

          <input type="email" placeholder="Email Address" />

          <input type="tel" placeholder="Phone Number" />

          <select>
            <option>Select Class</option>
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

          <textarea rows="5" placeholder="Message"></textarea>

          <button>Submit Enquiry</button>

        </form>

      </div>

    </section>
  );
}

export default EnquiryPage;  