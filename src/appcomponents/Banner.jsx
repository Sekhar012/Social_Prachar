
import React from "react";
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div className="text-center py-5 bg-white">
      {/* Heading */}
      <h1 className="display-4 fw-bold text-danger">
        Receive a <span className="text-warning">Customized Career Report in </span>
        <br></br><span className="text-success">10 Minutes 🚀</span>
      </h1>

      {/* Description */}
      <p className="lead mx-auto text-muted w-75 fw-bold fs-4 py-4">
        Our platform converts your resume into a step-by-step growth plan.
        We review your career journey, suggest learning paths to strengthen
        weak areas, provide guidance to stay ahead in the AI era, and connect
        you with job opportunities tailored to your current stage.
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
            src="/src/assets/1.jpg"
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
