import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
const CareerBlueprint = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-6 mb-4 py-2">
          <h2 className="text-primary">How SocialHire Works</h2>
          <h1 className="fw-bold">
            Turn Your Resume into a Career Blueprint — in Minutes
          </h1>
          <p className="text-muted">
            Getting your personalized Career Report is simple and fast.
 Upload your resume, let our AI analyze it, and receive a <strong>custom roadmap </strong> 
 with insights, learning paths, and job matches — all in just a few minutes.
          </p>
          {/* <button className="btn btn-warning fw-bold">
            Get My Free Career Report
          </button> */}

          <NavLink 
        to="/CareerForm">
           <button 
  className="btn btn-lg fw-semibold py-3 ms-3"
  style={{
    background: "linear-gradient(90deg, #ed6494ff, #a3bfe3ff)",
    color: "#242021ff",
    transition: "transform 0.2s, box-shadow 0.2s"
  }}
  onMouseEnter={e => {
    e.target.style.transform = "scale(1.05)";
    e.target.style.boxShadow = "0 5px 15px rgba(22, 6, 247, 0.3)";
    e.target.style.color = "#f40808ff"; 
    e.target.style.background = "#e7d998ff";
}}
  onMouseLeave={e => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "none";
    e.target.style.color = "#242021ff"; 
    e.target.style.background= "linear-gradient(90deg, #ed6494ff, #a3bfe3ff)";
  }}
>
  Get My Free Career Report
</button>
</NavLink>
        </div>

         {/* Right Section */}
        <div className="col-md-6">


           <div className="d-flex">
            <div className="me-3">
              <span className="btn btn-pink rounded-circle">
                <i className="bi bi-sliders"></i>
              </span>
            </div>
            <div>
              <h6 className="text-danger">Step 1</h6>
              <h2 className="fw-bold">Upload or Create Your Resume with AI</h2>
              <p className="text-muted mb-0">
               Upload your existing resume or build a new one instantly using our <strong> AI-powered CV Builder. </strong>
                Our system intelligently reviews your skills, experience, and career history to understand where you stand today.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="d-flex">
            <div className="me-3">
              <span className="btn btn-pink rounded-circle">
                <i className="bi bi-sliders"></i>
              </span>
            </div>
            <div>
              <h6 className="text-danger">Step 2</h6>
              <h2 className="fw-bold"> Set Your Preferences </h2>
              <p className="text-muted mb-0">
                Share your <strong>desired job roles, locations, and career goals. </strong> 
                This helps us personalize your report with accurate salary benchmarks, role recommendations,
                 and learning pathways tailored just for you.
              </p>
            </div>
          </div>

           <div className="d-flex">
            <div className="me-3">
              <span className="btn btn-pink rounded-circle">
                <i className="bi bi-sliders"></i>
              </span>
            </div>
            <div>
              <h6 className="text-danger">Step 3</h6>
              <h2 className="fw-bold"> Receive Your Personalized Career Report</h2>
              <p className="text-muted mb-0">
Our advanced AI analyzes your profile against <strong>real-time market data </strong> to generate a 
<strong> detailed career roadmap </strong>
 packed with insights, upskilling suggestions, and growth strategies. 
              </p>
            </div>
          </div>

           <div className="d-flex">
            <div className="me-3">
              <span className="btn btn-pink rounded-circle">
                <i className="bi bi-sliders"></i>
              </span>
            </div>
            <div>
              <h6 className="text-danger">Step 4</h6>
              <h2 className="fw-bold">Take Action & Level Up</h2>
              <p className="text-muted mb-0">
                Put your <strong> SocialHire Report </strong> to work — follow the strategic recommendations,
                 take suggested courses, refine your resume, and start applying for job opportunities with confidence.
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default CareerBlueprint;

