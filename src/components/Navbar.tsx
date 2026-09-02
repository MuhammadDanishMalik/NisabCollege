"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const { toggleLanguage, setLang, isUrdu, t } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const mainLinks = [
    { href: "/", label: t("navHome") },
    { href: "/about", label: t("navAbout") },
    { href: "/programs", label: t("navPrograms") },
    { href: "/admissions", label: t("navAdmissions") },
    { href: "/jobs", label: t("navJobs") },
  ];

  const moreLinks = [
    { href: "/facilities", label: t("navFacilities"), icon: "🔬" },
    { href: "/principal-message", label: t("navPrincipalMessage"), icon: "🎓" },
    { href: "/faqs", label: t("navFaqs"), icon: "❓" },
    { href: "/gallery", label: t("navGallery"), icon: "🖼️" },
  ];

  const isMoreActive = moreLinks.some((l) => pathname === l.href);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.headerWrapper}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContent}`}>
          <div className={styles.topBarInfo}>
            <span>📍 {t("locationText")}</span>
            <span>📞 {t("phoneNumbers")}</span>
          </div>
          <div className={styles.topBarRight}>
            {/* Top Bar Cupertino Switch */}
            <div className={styles.cupertinoSwitchWrapperTop}>
              <span
                className={`${styles.topLangLabel} ${
                  !isUrdu ? styles.topLangLabelActive : ""
                }`}
                onClick={() => setLang("en")}
              >
                EN
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={isUrdu}
                onClick={toggleLanguage}
                className={`${styles.cupertinoSwitchTop} ${
                  isUrdu ? styles.cupertinoSwitchTopActive : ""
                }`}
                title={isUrdu ? "Switch to English" : "اردو میں دیکھیں"}
                aria-label="Switch Language (English / Urdu)"
              >
                <span className={styles.cupertinoThumbTop} />
              </button>
              <span
                className={`${styles.topLangLabel} ${
                  isUrdu ? styles.topLangLabelActive : ""
                }`}
                onClick={() => setLang("ur")}
              >
                اردو
              </span>
            </div>

            <div className={styles.topBarSocials}>
              <a
                href="https://www.facebook.com/nisabcollege"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://wa.me/923076813575"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="12"
                  height="12"
                  style={{ verticalAlign: "middle" }}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/nisabcollege"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                ig
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`container ${styles.navbar}`}>
        <Link href="/" className={styles.logo}>
          <img
            src="/logo.png"
            alt="Nisab College Logo"
            className={styles.logoImg}
            style={{ objectFit: "contain", background: "white" }}
          />
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>{t("collegeName")}</span>
            <span className={styles.logoSubtitle}>{t("collegeSubName")}</span>
          </div>
        </Link>
        <div className={styles.navLinks}>
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${
                pathname === link.href ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* More Dropdown */}
          <div
            className={styles.dropdownWrapper}
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className={`${styles.dropdownTrigger} ${
                isMoreActive ? styles.dropdownActive : ""
              }`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
            >
              <span>{t("navMore")}</span>
              <span style={{ fontSize: "0.75rem", transition: "transform 0.2s" }}>
                {dropdownOpen ? "▴" : "▾"}
              </span>
            </button>

            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                {moreLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${styles.dropdownItem} ${
                      pathname === item.href ? styles.dropdownItemActive : ""
                    }`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`${styles.link} ${
              pathname === "/contact" ? styles.active : ""
            }`}
          >
            {t("navContact")}
          </Link>

          <div className={styles.navActions}>
            {/* Cupertino iOS-style Language Toggle Switch */}
            <div className={styles.cupertinoSwitchWrapper}>
              <span
                className={`${styles.langLabel} ${
                  !isUrdu ? styles.langLabelActive : ""
                }`}
                onClick={() => setLang("en")}
              >
                EN
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={isUrdu}
                onClick={toggleLanguage}
                className={`${styles.cupertinoSwitch} ${
                  isUrdu ? styles.cupertinoSwitchActive : ""
                }`}
                title={isUrdu ? "Switch to English" : "اردو میں دیکھیں"}
                aria-label="Switch Language (English / Urdu)"
              >
                <span className={styles.cupertinoThumb} />
              </button>
              <span
                className={`${styles.langLabel} ${
                  isUrdu ? styles.langLabelActive : ""
                }`}
                onClick={() => setLang("ur")}
              >
                اردو
              </span>
            </div>

            <Link href="/contact" className="btn-primary">
              {t("applyNow")}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
