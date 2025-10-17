
import React from "react";
import { NavLink } from "react-router-dom";
import img2 from "../../public/career.png"

const Banner = () => {
  return (
    <div className="text-center py-5 bg-white">
      {/* Heading */}
      <h1 className="display-4 fw-bold text-danger">
        Get Your Personalized <span className="text-warning">Career Growth Report in </span>
        <br></br><span className="text-success">Just 10 Minutes </span>
      </h1>

      {/* Description */}
      <p className="lead mx-auto text-muted w-75 fw-bold fs-4 py-4">
       Transform your resume into a clear, step-by-step roadmap for success.
        Our AI-powered platform analyzes your current career profile, identifies skill gaps,
         recommends targeted learning paths, and guides you on how to stay ahead in the AI-driven
         job market — all while matching you with roles that fit your journey.
      </p>

      {/* Button */}
      <div className="mt-4 ">
        {/* <button className="btn btn-warning btn-lg fw-semibold">
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
  }}>

  Get My Free Career Report
</button>
</NavLink>
          <img
            src={img2}
            // height="600px"
            // width="90%"
            alt="Social Prachar"
            className="img-fluid w-100"
            />
      </div>
    </div>
  );
};

export default Banner;
