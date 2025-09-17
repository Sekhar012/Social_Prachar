import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CareerStages = () => {
  const stages = [
    {
      id: 1,
      label: "For Students & Graduates",
      title: "Launch Your Career With Confidence",
      desc: "Discover which entry-level skills are most valued by employers. Learn how to position your academic achievements for maximum impact in today's job market.",
      img: "/src/assets/cs1.jpeg",
    },
    {
      id: 2,
      label: "For Early Professionals",
      title: "Accelerate Your Early Growth",
      desc: "Explore the skills and experiences that will differentiate you in the job market, uncover growth opportunities, and map your path to rapid success.",
      img: "/src/assets/cs2.jpeg",
    },
    {
      id: 3,
      label: "For Mid-Career Professionals",
      title: "Break Through Career Plateaus",
      desc: "Discover opportunities for specialization, leadership roles, and strategic career pivots. Leverage your experience while identifying new skills for continued growth.",
      img: "/src/assets/cs3.jpeg",
    },
    {
      id: 4,
      label: "For Senior Leaders",
      title: "Elevate Your Leadership Impact",
      desc: "Stay ahead of industry trends, identify emerging leadership competencies, and discover opportunities to leverage your expertise in new and evolving roles.",
      img: "/src/assets/cs4.jpeg",
    },
      {
      id: 5,
      label: "For Career Changers",
      title: "Strategically Navigate Career Transitions",
      desc: "Identify transferable skills, uncover the shortest path to new industries, and position your background as a unique advantage in your new field.",
      img: "/src/assets/cs5.jpeg",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        {stages.map((stage, index) => (
          <div className="row align-items-center mb-5" key={stage.id}>
            {/* Text Block */}
            <div
              className={`col-md-6 ${
                index % 2 === 1 ? "order-md-2" : ""
              }`}
            >
              <p className="text-danger fw-semibold">{stage.label}</p>
              <h4 className="fw-bold">{stage.title}</h4>
              <p className="text-muted">{stage.desc}</p>
            </div>

            {/* Image Block */}
            <div
              className={`col-md-6 text-center ${
                index % 2 === 1 ? "order-md-1" : ""
              }`}
            >
              <img
                src={stage.img}
                alt={stage.title}
                className="img-fluid rounded"
                style={{ width: "100px", height: "250px", objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerStages;
