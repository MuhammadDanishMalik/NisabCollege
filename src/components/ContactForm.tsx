"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "../app/page.module.css";

export default function ContactForm() {
  const { isUrdu, t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(t("formSending"));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus(t("formSuccess"));
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(t("formError"));
      }
    } catch {
      setStatus(isUrdu ? "✗ نیٹ ورک کا مسئلہ پیش آیا ہے۔" : "✗ Network error.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder={t("formNamePlaceholder")}
          className={styles.formInput}
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder={t("formEmailPlaceholder")}
          className={styles.formInput}
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <textarea
        placeholder={t("formMessagePlaceholder")}
        className={styles.formInput}
        rows={4}
        required
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <button type="submit" className={styles.formSubmit}>
        {status || t("formSendBtn")}
      </button>
    </form>
  );
}
