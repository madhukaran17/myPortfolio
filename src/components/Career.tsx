import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Analyst</h4>
                <h5>Capgemini Technology Services Limited</h5>
              </div>
            </div>
            <p>
              Managed technical operations and data systems. Developed backend
              data processing scripts using Python and built interactive SPAs
              using React.js. Worked with GCP, Azure, and Big Data technologies
              to optimize data workflows and analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
