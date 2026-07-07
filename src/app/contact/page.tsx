"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={`${styles.title} text-gradient animate-fade-in`}>Get in Touch</h1>
      <p className={`${styles.subtitle} animate-fade-in`}>
        We would love to hear from you. Fill out the form below and our admissions team will get back to you shortly.
      </p>

      <div className={`glass-panel ${styles.formCard} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
        {status === "success" && (
          <div className={styles.successMessage}>
            Thank you! Your message has been successfully sent.
          </div>
        )}

        {status === "error" && (
          <div className={styles.errorMessage}>
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={styles.input}
              value={formData.name}
              onChange={handleChange}
              disabled={status === "submitting"}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
              disabled={status === "submitting"}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Your Message</label>
            <textarea
              id="message"
              name="message"
              required
              className={styles.textarea}
              value={formData.message}
              onChange={handleChange}
              disabled={status === "submitting"}
            />
          </div>

          <button 
            type="submit" 
            className={`btn-primary ${styles.submitBtn}`}
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </main>
  );
}
