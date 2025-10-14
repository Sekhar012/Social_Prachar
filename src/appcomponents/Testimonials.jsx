import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import img20 from "../../public/Test_imgs.jpeg";
import img21 from "../../public/test_imgs1.jpeg"
const Testimonials = () => {
  const feedbacks = [
    {
      id: 1,
      text: "The Future Career Mapping section was especially valuable. Some paths were new to me, but seeing their potential in real-world contexts made them relevant and exciting. It broadened my perspective. The AI Impact Analysis gave me deep insight into which skills will stay relevant and where transformation is inevitable. The best part? The Actionable Career Development Plan was practical, realistic, and felt like something I could start using right away to guide my career. This Report didn't just inform — it inspired.",
      
      name: "Mahesh Channa",
      role: "AI Digital Creator & Online Content Strategist | Content Developer at Heartfulness Institute",
      image: img20, // replace with real image
    },
    {
      id: 2,
      text:"I didn't expect my Report to be this clear and helpful! Learning which skills might be replaced by AI and the new skills I should learn really made me think about upskilling. The suggested career path matched well with my resume, and showed the potential salary I could expect for different roles — which was super useful! The Report gave me a focused plan that highlighted the challenges I might face. I had been unsure about my future, but now I feel confident about what to do next. I’m excited about my growth and learning journey! If you're looking for career guidance, I recommend LvLUP - it feels like having a mentor.",
      
      name: "Rajasekhar Gondu",
      role: "Software Engineer",
      image: img21, // replace with real image
    },
   
  ];

  return (
    <div className="container text-center my-5">
      {/* Section Heading */}
      <h2 className="text-primary fw-bold">Social Prachar Testimonials</h2>
      <h1 className="fw-bold mt-2">
        What <span className="text-dark">Social Prachar Customers are </span > <span> Saying </span>
      </h1>
      <p className="text-muted mt-3">
        Real experiences from people who have used LvLUP to transform their
        careers.
      </p>

      {/* CTA Button */}
      <div className="my-4">
        {/* <button className="btn btn-warning text-white fw-semibold px-4 py-2">
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
  }}
>
  Get My Free Career Report
</button>
</NavLink>
      </div>

      {/* Testimonials Grid */}
      <div className="row justify-content-center mt-4 g-4">
        {feedbacks.map((fb) => (
          <div className="col-md-6 col-lg-4" key={fb.id}>
            <div className="card shadow-sm border-0 h-100 p-4 text-start">
              <div className="text-warning fs-1">“</div>
              <p className="text-muted fst-italic">{fb.text}</p>
            
              <div className="d-flex align-items-center mb-3">
  {/* Left: Profile Image */}
  <div className="me-3">
    <img
      src={fb.image}
      alt={fb.name}
      className="rounded-circle"
      style={{ width: "80px", height: "80px", objectFit: "cover" }}
    />
  </div>

  {/* Right: Name & Role */}
  <div className="text-start">
    <h5 className="fw-bold mb-1">{fb.name}</h5>
    <p className="text-muted small mb-0">{fb.role}</p>
  </div>
</div>


             {/* Rating */}
      <div className="text-left text-warning">
        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
