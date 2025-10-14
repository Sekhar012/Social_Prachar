
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cd.css";
import img11 from "../../public/c1.webp"
import img12 from "../../public/c2.png"
import img13 from "../../public/c_3.jpeg"
import img14 from "../../public/c4.jpeg"
import img15 from "../../public/c5.jpeg"
import img16 from "../../public/c6.jpeg"
import img17 from "../../public/c7.png"
import img18 from "../../public/c8.jpeg"
import img19 from "../../public/c9.jpeg"

const products = [
  { id: 1, name: "Career Path Planning", image: img11, desc: "We'll visualize your potential career tracks, and the strategic moves needed to reach your goals." },
  { id: 2, name: "Personalized Job Matches", image: img12, desc: "Discover opportunities that perfectly align with your experience, skills, and preferences. We'll help you target the positions where you'll thrive." },
  { id: 3, name: "Real-Time Market Insights", image: img13, desc: "Get up-to-date information on industry trends, salary benchmarks, and in-demand skills - directly from the job market." },
  { id: 4, name: "AI-Ready Career Planning", image: img14, desc: "Understand how automation will transform your role. See how to develop skills that will make you indispensable in an AI-driven workplace." },
  { id: 5, name: "Personalized Course Recommendations", image: img15, desc: "Access tailored course recommendations from top education platforms to help you acquire the exact skills for your next career move, fast." },
  { id: 6, name: "Bridge Your Skills Gaps", image: img16, desc: "Explore the exact skills you need to acquire to qualify for higher-paying positions and advance faster in your career." },
  { id: 7, name: "Resume Optimization", image: img17, desc: "Get expert recommendations on enhancing your CV to showcase your strengths to hiring managers and ATS systems." },
  { id: 8, name: "Stand Out From the Crowd", image: img18, desc: "Discover the unique strengths and rare skill combinations that make you the perfect candidate." },
  { id: 9, name: "Mentorship Matching", image: img19, desc: "Connect with experienced professionals in your field for personalized guidance and support to navigate your career path and achieve your goals." },
];

const Cards = () => {
  return (
    <div className="container my-5 py-2">
      <h2 className="text-center fw-bold mb-5 text-primary">Social Prachar Features</h2>
      <div className="row g-4 py-2">
        {products.map((product) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
            <div className="card h-100 shadow-lg border-0 rounded-4 card-hover">
              <img
                src={product.image}
                className="card-img-top fixed-img rounded-top"
                alt={product.name}
              />
              <div className="card-body d-flex flex-column py-4">
                <h5 className="card-title fw-bold text-center py-4">{product.name}</h5>
                <p className="card-text text-muted text-center flex-grow-1 py-1">
                  {product.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
