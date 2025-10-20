import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    alert("Message sent! (Connect this form to email or backend later.)");
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-5">📞 Contact</h2>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form onSubmit={handleSubmit} className="card shadow-sm p-4 border-0 rounded-3">
            <div className="mb-3">
              <label className="form-label fw-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="form-control"
                rows="4"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 fw-semibold">
              Send Message
            </button>
          </form>
          <div className="text-center mt-4">
            <p>
              📍 <strong>Lee Lab</strong>, Department of Biology, University Campus
            </p>
            <p>✉️ contact@leelab.edu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
