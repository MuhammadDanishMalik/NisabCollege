"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";

export default function ContactPage() {
  const { isUrdu, t } = useLanguage();
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
        setErrorMessage(data.error || (isUrdu ? "کچھ غلط ہو گیا، دوبارہ کوشش کریں۔" : "Something went wrong."));
      }
    } catch {
      setStatus("error");
      setErrorMessage(isUrdu ? "پیغام بھیجنے میں ناکامی ہوئی۔ برائے مہربانی دوبارہ کوشش کریں۔" : "Failed to send message. Please try again later.");
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={`${styles.title} text-gradient animate-fade-in`}>{t("getInTouchLabel")}</h1>
      <p className={`${styles.subtitle} animate-fade-in`}>
        {t("contactPageSubtitle")}
      </p>

      <div className={`glass-panel ${styles.formCard} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
        {status === "success" && (
          <div className={styles.successMessage}>
            {t("contactSuccessAlert")}
          </div>
        )}

        {status === "error" && (
          <div className={styles.errorMessage}>
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>{t("contactFullNameLabel")}</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={styles.input}
              value={formData.name}
              onChange={handleChange}
              disabled={status === "submitting"}
              placeholder={t("formNamePlaceholder")}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>{t("contactEmailLabelField")}</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
              disabled={status === "submitting"}
              placeholder={t("formEmailPlaceholder")}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>{t("contactYourMessageLabel")}</label>
            <textarea
              id="message"
              name="message"
              required
              className={styles.textarea}
              value={formData.message}
              onChange={handleChange}
              disabled={status === "submitting"}
              placeholder={t("formMessagePlaceholder")}
            />
          </div>

          <button 
            type="submit" 
            className={`btn-primary ${styles.submitBtn}`}
            disabled={status === "submitting"}
          >
            {status === "submitting" ? t("formSending") : t("formSendBtn")}
          </button>
        </form>
      </div>
    </main>
  );
}
