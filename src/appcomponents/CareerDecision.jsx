import React from "react";
import { Grid3x3Gap, LightningChargeFill, Cpu } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CareerDecision() {
  return (
    <div className="container text-center py-2">
      {/* Header Section */}
      <h2 className="text-primary mb-3">About SocialHire</h2>
      <h1 className="display-5 fw-bold mb-3">
        Still Making Career Choices Without Clarity?
      </h1>
      <p className="text-muted mx-auto mb-4" style={{ maxWidth: "700px" }}>
         SocialHire’s AI-powered Career Report evaluates your resume against real-time market trends and hiring data to create a personalized roadmap for your career growth.
 Thousands of professionals have already used SocialHire insights to land better roles, close skill gaps, and future-proof their careers — all for just ₹299.
      </p>
      {/* <a href="#" className="fw-semibold text-warning fs-5 mb-5 d-block text-decoration-none">
        View Sample Report
      </a> */}

      <a
  href="#"
  className="fw-semibold fs-5 mb-5 d-block text-decoration-none"
  style={{
    color: "#ffc107",
    transition: "color 0.3s, transform 0.3s"
  }}
  onMouseEnter={(e) => {
    e.target.style.color = "#ff4081"; // change to pink
    e.target.style.transform = "scale(1.1)";
  }}
  onMouseLeave={(e) => {
    e.target.style.color = "#ffc107"; // back to warning yellow
    e.target.style.transform = "scale(1)";
  }}
>
  View Sample Report
</a>


      {/* Features Section */}
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 rounded-4">
            <div className="card-body text-center p-4">
              <Grid3x3Gap className="text-info mb-3" size={40} />
              <p className="text-dark mb-0">
                Get Your Personalized Career Report in Just 10 Minutes <br />
                <span className="fw-semibold"> in 3 Easy Steps!</span>
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 rounded-4">
            <div className="card-body text-center p-4">
              <LightningChargeFill className="text-info mb-3" size={40} />
              <p className="text-dark mb-0">
                 Tailor your report based on your 
                <span className="fw-semibold">location, industry, and career goals,</span>
               and receive actionable insights designed just for you.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 rounded-4">
            <div className="card-body text-center p-4">
              <Cpu className="text-info mb-3" size={40} />
              <p className="text-dark mb-0">
                Discover
                <span className="fw-semibold">job opportunities and learning paths </span>
              across three potential career tracks that align perfectly with your growth journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}