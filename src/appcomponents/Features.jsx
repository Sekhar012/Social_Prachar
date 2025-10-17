import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

export default function Features() {
  return (
    <div className="container text-center py-5">
      {/* Header Section */}
      <h2 className="text-primary mb-3 py-3">Features of SocialHire</h2>
      <h1 className="display-4 fw-bold mb-4">
        Why SocialHire? Get Career Clarity When It Matters Most
      </h1>
      <p className="text-muted mb-3 mx-auto" style={{ maxWidth: "750px" }}>
       SocialHire provides <span className="fw-semibold"> data-backed career insights </span> tailored to your unique journey.
 Our AI-driven analysis uses <span className="fw-semibold"> real-time market data </span> to guide you toward the right opportunities, skills, and learning paths — empowering you to make confident career moves.
 All this, for a <span className="fw-semibold"> one-time fee of just ₹299.</span>
      </p>
      <p className="text-muted mb-4">
        👉 Curious to see what your report looks like? <a href="#" className="text-warning fw-semibold text-decoration-none">View Sample Report</a>
      </p>
      {/* <button className="btn btn-warning text-white fw-semibold px-4 py-2 rounded-3">
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
            e.target.style.background = "linear-gradient(90deg, #ed6494ff, #a3bfe3ff)";
          }}
        >
          Get My Free Career Report
        </button>
      </NavLink>

    </div>
  );
}
