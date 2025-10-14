import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaLock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-4 my-5" style={{ background: "#f7f9fbff" }}>
      <div className="container">
        <div className="row text-dark">
          {/* Logo & Secure Payments */}
          <div className="col-md-3 mb-4">
            
            <img
                src="/public/logo.webp"
                alt="Razorpay"
                width="150"
                height="50"
              />

            <p className="small text-success py-3">
              Empowering careers with data-driven insights.
            </p>
            <p className="fw-semibold mt-2">
              <FaLock className="me-2 text-success" /> 100% Secure Payments:
            </p>
            <div className="d-flex py-0 m-0 gap-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
                alt="Razorpay"
                width="80"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/archive/b/ba/20180209124436%21Stripe_Logo%2C_revised_2016.svg"
                alt="Stripe"
                width="80"
              />
            </div>
          </div>

          {/* Features */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-primary">Features</h6>
            <ul className="list-unstyled text-muted">
              <li>AI Powered Resume Builder</li>
              <li>Social Prachar Report</li>
              <li>AOL Partner Program</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-primary">Resources</h6>
            <ul className="list-unstyled text-muted">
              <li>About the Program</li>
              <li>AOL Compliance Documents</li>
              <li>AOL Partner Agreement</li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-primary">Support & Legal</h6>
            <ul className="list-unstyled text-muted">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <hr />

        {/* Bottom Section */}
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-6 small text-muted">
           <p className="mb-0">
    SocialTech.in , KPHB, Kukatpally, <br />
    Hyderabad, Telangana 500072
  </p>
  <p className="mb-0">©2025 Kalido. All rights reserved.</p>
          </div>

          {/* Right Side Social Icons */}
          <div className="col-md-6 text-md-end text-center mt-3 mt-md-0">
            <div className="d-flex justify-content-md-end justify-content-center gap-3">
              <a
                href="https://facebook.com"
                className="text-primary fs-5"
                style={{ transition: "0.3s" }}
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                className="text-info fs-5"
                style={{ transition: "0.3s" }}
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                className="text-primary fs-5"
                style={{ transition: "0.3s" }}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com"
                className="text-danger fs-5"
                style={{ transition: "0.3s" }}
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                className="text-danger fs-5"
                style={{ transition: "0.3s" }}
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
