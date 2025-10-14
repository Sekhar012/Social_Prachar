import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img3 from "../../public/cs1.jpeg"
import img4 from "../../public/cs2.jpeg"
import img5 from "../../public/cs3.jpeg"
import img6 from "../../public/cs4.jpeg"
import img7 from "../../public/cs5.jpeg"


const CareerStages = () => {
  const stages = [
    {
      id: 1,
      label: "For Students & Graduates",
      title: "Launch Your Career With Confidence",
      desc: "Discover which entry-level skills are most valued by employers. Learn how to position your academic achievements for maximum impact in today's job market.",
      img: img3,
    },
    {
      id: 2,
      label: "For Early Professionals",
      title: "Accelerate Your Early Growth",
      desc: "Explore the skills and experiences that will differentiate you in the job market, uncover growth opportunities, and map your path to rapid success.",
      img: img4,
    },
    {
      id: 3,
      label: "For Mid-Career Professionals",
      title: "Break Through Career Plateaus",
      desc: "Discover opportunities for specialization, leadership roles, and strategic career pivots. Leverage your experience while identifying new skills for continued growth.",
      img: img5,
    },
    {
      id: 4,
      label: "For Senior Leaders",
      title: "Elevate Your Leadership Impact",
      desc: "Stay ahead of industry trends, identify emerging leadership competencies, and discover opportunities to leverage your expertise in new and evolving roles.",
      img: img6,
    },
    {
      id: 5,
      label: "For Career Changers",
      title: "Strategically Navigate Career Transitions",
      desc: "Identify transferable skills, uncover the shortest path to new industries, and position your background as a unique advantage in your new field.",
      img: img7,
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          {stages.map((stage) => (
            <div className="col-md-6" key={stage.id}>
              <div
                className={`card h-100 shadow-sm border-4 border-start border-top-0 border-bottom-0 border-end-0 border-danger`}              
              >
                <div className="row g-0 h-100">
                   
                  {/* Text */}
                  <div className="col-7 d-flex flex-column justify-content-center p-3">
                    <p className="text-danger fw-semibold mb-1">{stage.label}</p>
                    <h5 className="fw-bold">{stage.title}</h5>
                    <p className="text-muted small">{stage.desc}</p>
                  </div>
                   {/* Image */}
                  <div className="col-5 text-center d-flex align-items-center">
                    <img
                      src={stage.img}
                      alt={stage.title}
                      className="img-fluid rounded-start"
                      style={{ height: "100%", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerStages;
