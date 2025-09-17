import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Faqsection = () => {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How do I get started with a Social Prachar Report?",
      answer:"You can begin by uploading your CV, importing your Kalido or LinkedIn Profile data, or using the built-in Resume Builder. Then simply personalize your Report by specifying location or career preferences."
    },
    {
      id: 2,
      question: "Can I see a sample Social Prachar Report before purchasing?",
      answer:"Yes, you can view a sample Report to understand what’s included and how it works.View Sample Report "
    },
    {
      id: 3,
      question: "Is the Social Prachar Report suitable for all career stages?",
      answer:
        "Yes! The Report is designed to support professionals at any stage, whether you’re just starting out, looking to transition, or preparing for a leadership position.",
    },
    {
      id: 4,
      question: "How is the Report personalized to my career goals?",
      answer: "You can specify preferences like location, target industries, or specific career goals during setup. This ensures the guidance and recommendations are aligned with your ambitions.",
    },
    {
      id: 5,
      question: "How accurate is a Social Prachar Report?",
      answer:"A Social Prachar Report combines advanced analytics with industry insights to give you actionable career guidance. We analyse your professional history, current skill set, and potential growth trajectories against current market demands and future industry trends.While our analysis leverages powerful AI to process complex career data and market trends, we recommend using these insights as one of several inputs to your career planning. Our predictions and recommendations should be considered alongside your personal experience, professional judgment, and consultation with industry mentors.",
    },
    {
      id: 6,
      question: "How long does it take to generate my Social Prachar Report?",
      answer:"Once you upload your information and customise your preferences, the Report is generated within minutes.",
    },
    {
      id: 7,
      question: "Can I generate more than one Social Prachar Report?",
      answer:"Yes, you can generate multiple Social Prachar Reports. Update your information or preferences at any time to create a new Report with fresh insights and recommendations..",
    },
    {
      id: 8,
      question: "How can I get support if I have questions or issues?",
      answer:"You can get in touch with our friendly team via support@kalido.me.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center text-primary fw-bold">FAQs</h2>
        <h2 className="text-center fw-bold mb-4">Got Questions?</h2>
        <p className="text-center text-muted mb-5">
          Explore our FAQs or <a className="text-decoration-none text-warning" href="#">Get in touch</a>
        </p>

        <div className="accordion" id="faqAccordion">
          {faqs.map((faq) => (
            <div className="accordion-item mb-3" key={faq.id}>
              <h2 className="accordion-header" id={`heading${faq.id}`}>
                <button
                  className={`accordion-button ${
                    openId === faq.id ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${faq.id}`}
                className={`accordion-collapse collapse ${
                  openId === faq.id ? "show" : ""
                }`}
                aria-labelledby={`heading${faq.id}`}
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqsection;
