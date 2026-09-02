"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Footer.module.css";

const WA_NUMBER = "923076813575";

export default function Footer() {
  const { isUrdu, t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Brand Column */}
        <div className={styles.column}>
          <div className={styles.brand}>
            <img src="/logo.png" alt="Nisab College Logo" className={styles.logoImg} />
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>{t("collegeName")}</span>
              <span className={styles.logoSubtitle}>{t("collegeSubName")}</span>
            </div>
          </div>
          <p className={styles.tagline}>{t("footerTagline")}</p>
          <p>{t("footerAbout")}</p>

          {/* Social Media */}
          <div className={styles.socials}>
            <a
              href="https://www.facebook.com/nisabcollege"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.socialFb}`}
              aria-label="Facebook"
            >f</a>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.socialWa}`}
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@nisabcollege"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.socialYt}`}
              aria-label="YouTube"
            >▶</a>
            <a
              href="https://www.instagram.com/nisabcollege"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.socialIg}`}
              aria-label="Instagram"
            >◈</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.column}>
          <h3>{t("quickLinks")}</h3>
          <Link href="/">{t("navHome")}</Link>
          <Link href="/about">{t("navAbout")}</Link>
          <Link href="/programs">{t("navPrograms")}</Link>
          <Link href="/admissions">{t("navAdmissions")}</Link>
          <Link href="/facilities">{t("navFacilities")}</Link>
          <Link href="/principal-message">{t("navPrincipalMessage")}</Link>
          <Link href="/faqs">{t("navFaqs")}</Link>
          <Link href="/gallery">{t("navGallery")}</Link>
          <Link href="/jobs">{t("careersFooter")}</Link>
          <Link href="/contact">{t("navContact")}</Link>
        </div>

        {/* Programs */}
        <div className={styles.column}>
          <h3>{t("ourProgramsLabel")}</h3>
          <Link href="/programs#dpt">{isUrdu ? "ڈی پی ٹی — فزیوتھراپی" : "DPT — Physiotherapy"}</Link>
          <Link href="/programs#ad-mlt">{isUrdu ? "ایسوسی ایٹ ڈگری (ایم ایل ٹی)" : "Associate Deg. (MLT)"}</Link>
          <Link href="/programs#bs-radiology">{isUrdu ? "بی ایس سی ریڈیالوجی" : "B.Sc Radiology"}</Link>
          <Link href="/programs#bs-surgical">{isUrdu ? "بی ایس سی سرجیکل ٹیکنالوجی" : "B.Sc Surgical Tech."}</Link>
          <Link href="/programs#bs-mlt">{isUrdu ? "بی ایس میڈیکل لیب ٹیکنالوجی" : "B.Sc Medical Lab Tech"}</Link>
          <Link href="/programs#ad-bs-education">{isUrdu ? "اے ڈی / بی ایس ایجوکیشن" : "AD/BS Education"}</Link>
          <Link href="/programs#ad-bs-arts">{isUrdu ? "اے ڈی / بی ایس اردو، انگلش" : "AD/BS English & Urdu"}</Link>
          <Link href="/programs#bba">{isUrdu ? "بی بی اے" : "BBA"}</Link>
          <Link href="/programs#bed">{isUrdu ? "بی ایڈ 1.5 / 2.5 سال" : "B.Ed 1.5 / 2.5"}</Link>
        </div>

        {/* Contact */}
        <div className={styles.column}>
          <h3>{t("contactInfoFooter")}</h3>
          <p>{t("locationText")}</p>
          <p>0307-6813575</p>
          <p>03314215165</p>
          <p>info@nisabcollege.edu.pk</p>
          <p>{t("contactHoursValue")}</p>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>&copy; {year} {t("collegeName")}. {t("allRightsReserved")}</p>
        <p>
          {t("designedWithLove")}{" "}
          <a href={`https://wa.me/${WA_NUMBER}`} className={styles.bottomLink} target="_blank" rel="noopener noreferrer">
            {t("chatWithUs")}
          </a>
        </p>
      </div>
    </footer>
  );
}
