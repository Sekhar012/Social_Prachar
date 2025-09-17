import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Features() {
  return (
    <div className="container text-center py-5">
      {/* Header Section */}
      <h2 className="text-primary mb-3 py-3">Features of Social Prachar</h2>
      <h1 className="display-4 fw-bold mb-4">
        Why Social Prachar ? Career Clarity <br /> When You Need It Most
      </h1>
      <p className="text-muted mb-3 mx-auto" style={{ maxWidth: "750px" }}>
        Social Prachar offers comprehensive insights - built from real-time market data - to help you
        navigate your career with confidence. All for a one-time fee of just INR 299!
      </p>
      <p className="text-muted mb-4">
        Curious about what you'll get? <a href="#" className="text-warning fw-semibold text-decoration-none">View Sample Report</a>
      </p>
      {/* <button className="btn btn-warning text-white fw-semibold px-4 py-2 rounded-3">
        Get My Free Career Report
      </button> */}

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

    </div>
  );
}
