import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
const CareerBlueprint = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-6 mb-4 py-2">
          <h2 className="text-primary">How Social Prachar works</h2>
          <h1 className="fw-bold">
            From CV to <br /> Career Blueprint <br /> in Minutes
          </h1>
          <p className="text-muted">
            Getting your personalized career Report is quick and easy — just
            follow these simple steps.
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
              <h2 className="fw-bold">Upload Your CV or Build One with AI</h2>
              <p className="text-muted mb-0">
                Start by uploading your current resume or building a new one with our AI-powered CV builder. Our intelligent system analyzes your experience, skills, and career trajectory.
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
              <h2 className="fw-bold">Add Your Preferences</h2>
              <p className="text-muted mb-0">
                Tell us about your preferred locations and the types of roles
                you're interested in to help us tailor your Report in terms of
                salary expectations and suggested paths.
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
              <h2 className="fw-bold">Get Your Personalized Report</h2>
              <p className="text-muted mb-0">
                Our advanced AI analyzes your information against current market data to generate a comprehensive Report with actionable insights
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
                Use your LvLUP Report's strategic recommendations and course suggestions to enhance your skills, update your resume, and apply for job opportunities.
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default CareerBlueprint;

