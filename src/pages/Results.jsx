import React from "react";

export default function Results() {
  const savedText = localStorage.getItem("careerText");
  const savedResume = localStorage.getItem("careerResume");

  const resume = savedResume ? JSON.parse(savedResume) : null;

  return (
    <div className="container text-center py-5">
      <h2 className="text-success fw-bold mb-4">Your Career Report</h2>
      {savedText && (
        <div className="text-start mx-auto" style={{ maxWidth: "600px" }}>
          <h5>Submitted Text:</h5>
          <pre
            style={{
              background: "#f8f9fa",
              padding: "15px",
              borderRadius: "10px",
              whiteSpace: "pre-wrap",
            }}
          >
            {savedText}
          </pre>
        </div>
      )}

      {resume && (
        <div className="mt-4">
          <h5>Uploaded Resume:</h5>
          <p>{resume.name}</p>
          <a
            href={resume.data}
            download={resume.name}
            className="btn btn-outline-primary"
          >
            Download Resume
          </a>
        </div>
      )}
    </div>
  );
}

