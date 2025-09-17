import React from "react";
import { Grid3x3Gap, LightningChargeFill, Cpu } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CareerDecision() {
  return (
    <div className="container text-center py-2">
      {/* Header Section */}
      <h2 className="text-primary mb-3">About Social Prachar</h2>
      <h1 className="display-5 fw-bold mb-3">
        Making Career Decisions in the Dark?
      </h1>
      <p className="text-muted mx-auto mb-4" style={{ maxWidth: "700px" }}>
        The Social prachar Report analyzes your CV against real-time market data to deliver a
        personalized career roadmap. Thousands of professionals have used these insights to
        secure better opportunities and future-proof their careers—all for just INR 299.
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
                Get your personalized Report in just <br />
                <span className="fw-semibold">10 minutes with 3 simple steps.</span>
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
                Personalize your results based on <br />
                <span className="fw-semibold">location, industry, and career goals.</span>
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
                Explore job matches and courses <br />
                <span className="fw-semibold">across 3 potential career tracks.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}