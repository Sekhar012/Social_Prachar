
import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

export default function CareerForm() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setText(e.target.value);
    setError(""); // clear error on typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = text.trim().split("\n").filter(Boolean);

    // Check line count
    if (lines.length <= 5) {
      setError("You must be enter more than 5 lines.");
      setSubmitted(null);
      return;
    }

    // Check text length
    if (text.length <= 1000 || text.length > 2000) {
      setError(
        "Text must be above 1000 characters and under 2000 characters."
      );
      setSubmitted(null);
      return;
    }

    // If valid
    setError(""); // clear error
    setSubmitted(lines);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>
            Enter more than 5 lines (text length: 1000-2000 chars)
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            value={text}
            onChange={handleChange}
            placeholder="Type your lines here..."
          />
        </Form.Group>

        {/* Show error next to field */}
        {error && (
          <div style={{ color: "red", marginTop: "5px" }}>{error}</div>
        )}

        <Button type="submit" className="mt-3">
          Submit
        </Button>
      </Form>

      {submitted && (
        <div className="mt-4">
          <h5>Preview:</h5>
          <ul>
            {submitted.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
