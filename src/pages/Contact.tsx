import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div style={{
      background: "#fff", borderRadius: "8px", boxShadow: "0 2px 8px #1976d233",
      padding: "32px", maxWidth: "400px", margin: "32px auto"
    }}>
      <h2>Contact Us</h2>
      {sent ? (
        <div style={{ color: "#1976d2" }}>Thank you for contacting us!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            style={{ width: "100%", marginBottom: "8px", padding: "8px", borderRadius: "4px", border: "1px solid #1976d2" }}
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            style={{ width: "100%", marginBottom: "8px", padding: "8px", borderRadius: "4px", border: "1px solid #1976d2" }}
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            style={{ width: "100%", marginBottom: "8px", padding: "8px", borderRadius: "4px", border: "1px solid #1976d2" }}
            name="message"
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            style={{ background: "#1976d2", color: "#fff", border: "none", borderRadius: "4px", padding: "8px 16px", cursor: "pointer", width: "100%" }}
            type="submit"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}
    