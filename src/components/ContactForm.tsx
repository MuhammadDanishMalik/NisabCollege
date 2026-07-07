"use client";

import { useState } from "react";
import styles from "../app/page.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("✓ Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("✗ Error — please try again.");
      }
    } catch {
      setStatus("✗ Network error.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Your Name"
          className={styles.formInput}
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Your Email"
          className={styles.formInput}
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <textarea
        placeholder="Your Message"
        className={styles.formInput}
        rows={4}
        required
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <button type="submit" className={styles.formSubmit}>
        {status || "Send Message →"}
      </button>
    </form>
  );
}
