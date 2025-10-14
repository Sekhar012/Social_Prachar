
import { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

export default function CareerFormWithResume() {
  const [text, setText] = useState("");
  const [resume, setResume] = useState(null);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(null);
  const [dragOver, setDragOver] = useState(false);

 // Load saved data from localStorage
  useEffect(() => {
    const savedText = localStorage.getItem("careerText");
    const savedResume = localStorage.getItem("careerResume");
    if (savedText) setText(savedText);
    if (savedResume) {
      const parsedResume = JSON.parse(savedResume);
      setResume(parsedResume);
      if (savedText || parsedResume) {
        const lines = savedText
          ? savedText.trim().split("\n").filter(Boolean)
          : [];
        setSubmitted({ lines, resume: parsedResume });
      }
    }
  }, []);

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

  const handleChange = (e) => {
    setText(e.target.value);
    setError("");
  };

  const handleFile = async (file) => {
    // ✅ Updated allowed types
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError("Only PDF, Word, or image files (JPG/PNG) are allowed.");
      setResume(null);
      return;
    }

    const base64File = await fileToBase64(file);
    const newResume = { name: file.name, type: file.type, data: base64File };
    setResume(newResume);
    setError("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = text.trim().split("\n").filter(Boolean);

    if (text && resume) {
      setError("Please provide either text OR upload a resume/image, not both.");
      setSubmitted(null);
      return;
    }

    if (!resume && !text) {
      setError("Please enter text or upload a file.");
      setSubmitted(null);
      return;
    }

    if (text) {
      if (lines.length > 0 && lines.length <= 5) {
        setError("Text must have more than 5 lines.");
        setSubmitted(null);
        return;
      }

      if (text.length > 0 && (text.length <= 1000 || text.length > 2000)) {
        setError("Text length must be between 1000 and 2000 characters.");
        setSubmitted(null);
        return;
      }
    }

    if (text) localStorage.setItem("careerText", text);
    else localStorage.removeItem("careerText");

    if (resume) localStorage.setItem("careerResume", JSON.stringify(resume));
    else localStorage.removeItem("careerResume");

    setError("");
    setSubmitted({ lines, resume });
    console.log("Submitted Data:", { lines, resume });
  };

  const handleClear = () => {
    setText("");
    setResume(null);
    setSubmitted(null);
    setError("");
    localStorage.removeItem("careerText");
    localStorage.removeItem("careerResume");
  };

  return (
    <div className="p-4 border rounded shadow-sm bg-light mt-5">
      <Form onSubmit={handleSubmit}>
        {/* Textarea */}
        <Form.Group>
          <Form.Label>
            Enter Text (optional, greater than 5 lines, 1000–2000 chars)
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            value={text}
            onChange={handleChange}
            placeholder="Type your lines here..."
          />
        </Form.Group>

        {/* File Upload Section */}
        <Form.Group className="mt-3">
          <Form.Label>
            <span style={{ color: "red" }}>[ OR ] </span> Upload Resume / Image
            (PDF, Word, JPG, PNG)
          </Form.Label>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{
              border: `2px dashed ${dragOver ? "#0d6efd" : "#ced4da"}`,
              borderRadius: "5px",
              padding: "20px",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: dragOver ? "#e9f5ff" : "transparent",
            }}
            onClick={() => document.getElementById("resumeUpload").click()}
          >
            {resume
              ? resume.name
              : "Drag & Drop your file here, or click to select"}
            <Form.Control
              type="file"
              id="resumeUpload"
              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
        </Form.Group>

        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}

        <Button type="submit" className="mt-3 me-2">
          Submit
        </Button>
        <Button
          type="button"
          variant="secondary"
          className="mt-3"
          onClick={handleClear}
        >
          Clear
        </Button>
      </Form>

      {/* Preview Section */}
      {submitted && (
        <div className="mt-4">
          {submitted.lines && submitted.lines.length > 0 && (
            <>
              <h5>Text Preview:</h5>
              <ul>
                {submitted.lines.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </>
          )}
          {submitted.resume && (
            <div>
              <p>
                <strong>Uploaded File:</strong> {submitted.resume.name}
              </p>
              {/* ✅ Show image preview if image file */}
              {submitted.resume.type.startsWith("image/") && (
                <img
                  src={submitted.resume.data}
                  alt="Uploaded Preview"
                  style={{
                    maxWidth: "200px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
