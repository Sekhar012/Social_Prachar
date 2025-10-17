// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const About = () => {
//   const supporters = [
//     { id: 1, logo: "https://www.ltts.com/sites/default/files/media/media-kit/stacked.jpg", name: "LTTech" },
//     { id: 2, logo: "https://wtm-kolachi.github.io/WTM-Kolachi-Website/static/WTM-Main-6d61d484c7a6ecbd56ff9b6d88e9f4f3.svg", name: "Women Techmakers" },
//     { id: 3, logo: "https://t3.ftcdn.net/jpg/03/99/98/60/240_F_399986042_9iSLYUNyDv8npaKP31xsIpDVFjfqGLDF.jpg", name: "Google" },
//     { id: 4, logo: "https://upload.wikimedia.org/wikipedia/commons/d/d2/HerZindagi.png", name: "HerZindagi" },
//     { id: 5, logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGUfCG652wHIg/company-logo_200_200/company-logo_200_200/0/1630505325297?e=1761177600&v=beta&t=7dvJC_KVbbbE6ftTXueuv_qUXe-V4MPAFj6N41UOJc8", name: "SHEROES" },
//   ];

//   return (
//     <div className="container text-center my-5">
//       {/* Section Heading */}
//       <h2 className="text-primary fw-bold">Who Are We</h2>
//       <h2 className="fw-bold mt-2">
//         From the Team Behind <br />
//         <span className="text-dark">SAWiT (South Asian Women in Tech Network)</span>
//       </h2>
//       <p className="text-muted mt-3">
//         Social Prachar advances our mission of empowerment through technology, and
//         delivering innovative solutions designed to make a real impact.
//       </p>

//       {/* Supporters Section */}
//       <h6 className="mt-5 text-secondary fw-bold tracking-wide">
//         S A W I T &nbsp; S U P P O R T E R S :
//       </h6>

//       <div className="row justify-content-center mt-4 g-4">
//         {supporters.map((supporter) => (
//           <div className="col-6 col-md-4 col-lg-2" key={supporter.id}>
//             <div className="border rounded bg-light p-3 shadow-sm h-100 d-flex align-items-center justify-content-center">
//               <img
//                 src={supporter.logo}
//                 alt={supporter.name}
//                 className="img-fluid"
//                 style={{ maxHeight: "50px", objectFit: "contain" }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;
