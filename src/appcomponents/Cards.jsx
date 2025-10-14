// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap is imported
// import "./cd.css";

// const products = [
//   { id: 1, name: "Career Path Planning", image: "./public/c1.webp", desc: "We’ll visualize your potential career tracks, and the strategic moves needed to reach your goals." },
//   { id: 2, name: "Personalized Job Matches", image: "./public/c2.png", desc: "Discover opportunities that perfectly align with your experience, skills, and preferences. We'll help you target the positions where you'll thrive." },
//   { id: 3, name: "Real-Time Market Insights", image: "./public/c_3.jpeg", desc: "Get up-to-date information on industry trends, salary benchmarks, and in-demand skills - directly from the job market." },
//   { id: 4, name: "AI-Ready Career Planning", image: "./public/c4.jpeg", desc: "Understand how automation will transform your role. See how to develop skills that will make you indispensable in an AI-driven workplace." },
//   { id: 5, name: "Personalized Course Recommendations", image: "./public/c5.jpeg", desc: "Access tailored course recommendations from top education platforms to help you acquire the exact skills for your next career move, fast." },
//   { id: 6, name: "Bridge Your Skills Gaps", image: "./public/c6.jpeg", desc: "Explore the exact skills you need to acquire to qualify for higher-paying positions and advance faster in your career." },
//   { id: 7, name: "Resume Optimization", image: "./public/c7.png", desc: "Get expert recommendations on enhancing your CV to showcase your strengths to hiring managers and ATS systems." },
//   { id: 8, name: "Stand Out From the Crowd", image: "./public/c8.jpeg", desc: "Discover the unique strengths and rare skill combinations that make you the perfect candidate." },
//   { id: 9, name: 'Mentorship Matching', image: './public/c9.jpeg', desc: 'Connect with experienced professionals in your field for personalized guidance and support to navigate your career path and achieve your goals.'},
// ];

// const Cards = () => {
//   return (
//     <div className="container my-5">
//       <div className="row g-4">
//         {products.map((product) => (
//           <div className="col-md-3 col-sm-6" key={product.id}>
//             <div className="card h-100 shadow-sm">
//               <img src={product.image} className="card-img-top fixed-img" alt={product.name} />
//               <div className="card-body text-center">
//                 <h4 className="card-title fw-bold">{product.name}</h4>
//                 <p className="card-text text-muted">{product.desc}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cards;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cd.css";

const products = [
  { id: 1, name: "Career Path Planning", image: "./public/c1.webp", desc: "We’ll visualize your potential career tracks, and the strategic moves needed to reach your goals." },
  { id: 2, name: "Personalized Job Matches", image: "./public/c2.png", desc: "Discover opportunities that perfectly align with your experience, skills, and preferences. We'll help you target the positions where you'll thrive." },
  { id: 3, name: "Real-Time Market Insights", image: "./public/c_3.jpeg", desc: "Get up-to-date information on industry trends, salary benchmarks, and in-demand skills - directly from the job market." },
  { id: 4, name: "AI-Ready Career Planning", image: "./public/c4.jpeg", desc: "Understand how automation will transform your role. See how to develop skills that will make you indispensable in an AI-driven workplace." },
  { id: 5, name: "Personalized Course Recommendations", image: "./public/c5.jpeg", desc: "Access tailored course recommendations from top education platforms to help you acquire the exact skills for your next career move, fast." },
  { id: 6, name: "Bridge Your Skills Gaps", image: "./public/c6.jpeg", desc: "Explore the exact skills you need to acquire to qualify for higher-paying positions and advance faster in your career." },
  { id: 7, name: "Resume Optimization", image: "./public/c7.png", desc: "Get expert recommendations on enhancing your CV to showcase your strengths to hiring managers and ATS systems." },
  { id: 8, name: "Stand Out From the Crowd", image: "./public/c8.jpeg", desc: "Discover the unique strengths and rare skill combinations that make you the perfect candidate." },
  { id: 9, name: "Mentorship Matching", image: "./public/c9.jpeg", desc: "Connect with experienced professionals in your field for personalized guidance and support to navigate your career path and achieve your goals." },
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
