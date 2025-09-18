
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Ctasection = () => {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f5427b, #ff8ba0) ",
         borderRadius: "30px" 
      }}
    >
      <div className="container text-white py-5">
        <div className="row align-items-center">
          {/* Left side content */}
          <div className="col-md-8 mb-4 mb-md-0">
            <h2 className="fw-bold mb-3">
              Ready to <span className="text-warning">Level Up</span> Your Career?
            </h2>
            <p className="mb-4 fs-5">
              🚀 Join <span className="fw-semibold">thousands of professionals</span> 
              who have transformed their careers with 
              <span className="fw-semibold"> data-driven insights</span>, 
              tailored to their unique qualities.
            </p>
          </div>

          {/* Right side buttons */}
          <div className="col-md-4 d-flex flex-column gap-3 text-md-end text-center">
            <button className=" btn btn-light fw-bold rounded-4 shadow-sm py-3 ms-3">
              
              Get My Free Career Report
            </button>
            <button className=" btn btn-outline-light fw-bold rounded-4 shadow-sm py-3 ms-3">
              View Sample Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ctasection;
