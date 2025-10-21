
// import { useState, useEffect } from "react";
// import { Form, Button, Alert } from "react-bootstrap";

// export default function CareerFormWithResume() {
//   const [text, setText] = useState("");
//   const [resume, setResume] = useState(null);
//   const [error, setError] = useState("");
//   const [submitted, setSubmitted] = useState(null);
//   const [dragOver, setDragOver] = useState(false);

//   // Load saved data from localStorage
//   useEffect(() => {
//     const savedText = localStorage.getItem("careerText");
//     const savedResume = localStorage.getItem("careerResume");

//     if (savedText) setText(savedText);
//     if (savedResume) {
//       const parsedResume = JSON.parse(savedResume);
//       setResume(parsedResume);

//       if (savedText || parsedResume) {
//         const lines = savedText
//           ? savedText.trim().split("\n").filter(Boolean)
//           : [];
//         setSubmitted({ lines, resume: parsedResume });
//       }
//     }
//   }, []);

//   const fileToBase64 = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (err) => reject(err);
//     });

//   const handleChange = (e) => {
//     setText(e.target.value);
//     setError("");
//   };

//   const handleFile = async (file) => {
//     const allowedTypes = [
//       "application/pdf",
//       "application/msword",
//       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//     ];

//     if (!allowedTypes.includes(file.type)) {
//       setError("Only PDF or Word documents are allowed for resume.");
//       setResume(null);
//       return;
//     }

//     const base64File = await fileToBase64(file);
//     const newResume = { name: file.name, type: file.type, data: base64File };
//     setResume(newResume);
//     setError("");
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) handleFile(file);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setDragOver(true);
//   };

//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     setDragOver(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setDragOver(false);
//     const file = e.dataTransfer.files[0];
//     if (file) handleFile(file);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const lines = text.trim().split("\n").filter(Boolean);

//     // ❌ Cannot submit both
//     if (text && resume) {
//       setError("Please provide either text OR upload a resume, not both.");
//       setSubmitted(null);
//       return;
//     }

//     // ❌ Must provide at least one
//     if (!resume && !text) {
//       setError("Please enter text or upload a resume.");
//       setSubmitted(null);
//       return;
//     }

//     // ✅ Validate text only if entered
//     if (text) {
//       if (lines.length > 0 && lines.length <= 5) {
//         setError("Text must have more than 5 lines.");
//         setSubmitted(null);
//         return;
//       }

//       if (text.length > 0 && (text.length <= 1000 || text.length > 2000)) {
//         setError("Text length must be between 1000 and 2000 characters.");
//         setSubmitted(null);
//         return;
//       }
//     }

//     // Save to localStorage
//     if (text) localStorage.setItem("careerText", text);
//     else localStorage.removeItem("careerText");

//     if (resume) localStorage.setItem("careerResume", JSON.stringify(resume));
//     else localStorage.removeItem("careerResume");

//     setError("");
//     setSubmitted({ lines, resume });
//     console.log("Submitted Data:", { lines, resume });
//   };

//   const handleClear = () => {
//     setText("");
//     setResume(null);
//     setSubmitted(null);
//     setError("");
//     localStorage.removeItem("careerText");
//     localStorage.removeItem("careerResume");
//   };

//   return (
//     <div className="p-4 border rounded shadow-sm bg-light mt-5">
//       <Form onSubmit={handleSubmit}>
//         {/* Textarea */}
//         <Form.Group>
//           <Form.Label>
//             Enter Text (optional, greater than 5 lines, 1000-2000 chars)
//           </Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={10}
//             value={text}
//             onChange={handleChange}
//             placeholder="Type your lines here..."
//           />
//         </Form.Group>

//         {/* Drag-and-drop Resume Upload */}
//         <Form.Group className="mt-3">
//           <Form.Label>
//             <span style={{ color: "red" }}>[ OR ] </span> Upload Your Resume
//             (optional, PDF or Word)
//           </Form.Label>
//           <div
//             onDragOver={handleDragOver}
//             onDragLeave={handleDragLeave}
//             onDrop={handleDrop}
//             style={{
//               border: `2px dashed ${dragOver ? "#0d6efd" : "#ced4da"}`,
//               borderRadius: "5px",
//               padding: "20px",
//               textAlign: "center",
//               cursor: "pointer",
//               backgroundColor: dragOver ? "#e9f5ff" : "transparent",
//             }}
//             onClick={() => document.getElementById("resumeUpload").click()}
//           >
//             {resume
//               ? resume.name
//               : "Drag & Drop your resume here, or click to select"}
//             <Form.Control
//               type="file"
//               id="resumeUpload"
//               onChange={handleFileChange}
//               style={{ display: "none" }}
//             />
//           </div>
//         </Form.Group>

//         {error && (
//           <Alert variant="danger" className="mt-3">
//             {error}
//           </Alert>
//         )}

//         <Button type="submit" className="mt-3 me-2" >
//           Submit
//         </Button>
//         <Button
//           type="button"
//           variant="secondary"
//           className="mt-3"
//           onClick={handleClear}
//         >
//           Clear
//         </Button>
//       </Form>

//       {/* Preview Section */}
//       {submitted && (
//         <div className="mt-4">
//           {submitted.lines && submitted.lines.length > 0 && (
//             <>
//               <h5>Text Preview:</h5>
//               <ul>
//                 {submitted.lines.map((line, idx) => (
//                   <li key={idx}>{line}</li>
//                 ))}
//               </ul>
//             </>
//           )}
//           {submitted.resume && (
//             <p>
//               <strong>Uploaded Resume:</strong> {submitted.resume.name}
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CareerFormWithResume() {
  const [text, setText] = useState("");
  const [resume, setResume] = useState(null);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  const navigate = useNavigate(); // ✅ For redirecting

  // Load saved data
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
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError("Only PDF or Word documents are allowed for resume.");
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

    // ❌ Validation checks
    if (text && resume) {
      setError("Please provide either text OR upload a resume, not both.");
      setSubmitted(null);
      return;
    }

    if (!resume && !text) {
      setError("Please enter text or upload a resume.");
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

    // ✅ Save to localStorage
    if (text) localStorage.setItem("careerText", text);
    else localStorage.removeItem("careerText");

    if (resume) localStorage.setItem("careerResume", JSON.stringify(resume));
    else localStorage.removeItem("careerResume");

    setError("");
    setSubmitted({ lines, resume });
    console.log("Submitted Data:", { lines, resume });

    // ✅ Redirect to Result Page after 1 second
    setTimeout(() => {
      navigate("/results");
    }, 1000);
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
    <Container className="p-4 border rounded shadow-sm bg-light mt-5">
      <h2 className="text-center mb-4 text-primary fw-bold">
        Career Form Submission
      </h2>
      <Form onSubmit={handleSubmit}>
        {/* Textarea */}
        <Form.Group>
          <Form.Label>
            Enter Text (optional, greater than 5 lines, 1000–2000 chars)
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            value={text}
            onChange={handleChange}
            placeholder="Type your text here..."
            className="mb-3"
          />
        </Form.Group>

        {/* Resume Upload Section */}
        <Form.Group>
          <Form.Label>
            <span style={{ color: "red" }}>[ OR ] </span> Upload Your Resume
            (PDF or Word)
          </Form.Label>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{
              border: `2px dashed ${dragOver ? "#0d6efd" : "#ced4da"}`,
              borderRadius: "8px",
              padding: "25px",
              textAlign: "center",
              backgroundColor: dragOver ? "#e9f5ff" : "transparent",
              transition: "0.3s ease",
            }}
            onClick={() => document.getElementById("resumeUpload").click()}
          >
            {resume
              ? resume.name
              : "Drag & Drop your resume here, or click to select"}
            <Form.Control
              type="file"
              id="resumeUpload"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
        </Form.Group>

        {error && (
          <Alert variant="danger" className="mt-3 text-center">
            {error}
          </Alert>
        )}

        {/* Buttons */}
        <div className="d-flex justify-content-center flex-wrap mt-3">
          <Button
            type="submit"
            className="me-2 my-2"
            style={{
              background:
                "linear-gradient(90deg, #ed6494ff, #a3bfe3ff)",
              color: "#242021ff",
              border: "none",
            }}
          >
            Submit
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="my-2"
            onClick={handleClear}
          >
            Clear
          </Button>
        </div>
      </Form>

      {/* Preview */}
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
            <p>
              <strong>Uploaded Resume:</strong> {submitted.resume.name}
            </p>
          )}
        </div>
      )}
    </Container>
  );
}
