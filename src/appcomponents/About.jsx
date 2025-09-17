import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  const supporters = [
    { id: 1, logo: "https://via.placeholder.com/150x60?text=LTTech", name: "LTTech" },
    { id: 2, logo: "https://via.placeholder.com/150x60?text=Women+Techmakers", name: "Women Techmakers" },
    { id: 3, logo: "https://via.placeholder.com/150x60?text=Google", name: "Google" },
    { id: 4, logo: "https://via.placeholder.com/150x60?text=Her+Zindagi", name: "HerZindagi" },
    { id: 5, logo: "https://via.placeholder.com/150x60?text=SHEROES", name: "SHEROES" },
  ];

  return (
    <div className="container text-center my-5">
      {/* Section Heading */}
      <h2 className="text-primary fw-bold">Who Are We</h2>
      <h2 className="fw-bold mt-2">
        From the Team Behind <br />
        <span className="text-dark">SAWiT (South Asian Women in Tech Network)</span>
      </h2>
      <p className="text-muted mt-3">
        Social Prachar advances our mission of empowerment through technology, and
        delivering innovative solutions designed to make a real impact.
      </p>

      {/* Supporters Section */}
      <h6 className="mt-5 text-secondary fw-bold tracking-wide">
        S A W I T &nbsp; S U P P O R T E R S :
      </h6>

      <div className="row justify-content-center mt-4 g-4">
        {supporters.map((supporter) => (
          <div className="col-6 col-md-4 col-lg-2" key={supporter.id}>
            <div className="border rounded bg-light p-3 shadow-sm h-100 d-flex align-items-center justify-content-center">
              <img
                src={supporter.logo}
                alt={supporter.name}
                className="img-fluid"
                style={{ maxHeight: "50px", objectFit: "contain" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
