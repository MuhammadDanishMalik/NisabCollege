"use client";

import Link from "next/link";
import ShimmerImage from "@/components/ShimmerImage";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";

interface FacilitiesClientProps {
  images: string[];
}

export default function FacilitiesClient({ images }: FacilitiesClientProps) {
  const { isUrdu, t } = useLanguage();

  const facilities = [
    {
      icon: "🔬",
      title: t("facility1Title"),
      desc: t("facility1Long"),
      image: images[1] || images[0] || "",
    },
    {
      icon: "📚",
      title: t("facility2Title"),
      desc: t("facility2Long"),
      image: images[2] || images[0] || "",
    },
    {
      icon: "🚌",
      title: t("facility3Title"),
      desc: t("facility3Long"),
      image: images[3] || images[0] || "",
    },
    {
      icon: "🏥",
      title: t("facility4Title"),
      desc: t("facility4Long"),
      image: images[4] || images[0] || "",
    },
    {
      icon: "🕌",
      title: t("facility5Title"),
      desc: t("facility5Long"),
      image: images[5] || images[0] || "",
    },
    {
      icon: "💻",
      title: t("facility6Title"),
      desc: t("facility6Long"),
      image: images[6] || images[0] || "",
    },
  ];

  return (
    <main>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <span className={styles.heroBadge}>{t("campusLifeLabel")}</span>
        <h1 className={styles.heroTitle}>{t("facilitiesPageTitle")}</h1>
        <p className={styles.heroSubtitle}>{t("facilitiesPageSubtitle")}</p>
      </section>

      {/* ── FACILITIES LIST ── */}
      <div className={styles.facilitiesContainer}>
        {facilities.map((fac, idx) => (
          <article
            key={idx}
            className={`${styles.facilityBlock} ${
              idx % 2 === 1 ? styles.facilityBlockReverse : ""
            }`}
          >
            <div className={styles.facilityContent}>
              <div className={styles.facilityHeader}>
                <div className={styles.facilityIcon}>{fac.icon}</div>
                <h2 className={styles.facilityTitle}>{fac.title}</h2>
              </div>
              <p className={styles.facilityDesc}>{fac.desc}</p>
              <Link href="/admissions" className="btn-primary">
                {t("applyNow")} →
              </Link>
            </div>

            {fac.image && (
              <div className={styles.facilityImageWrap}>
                <ShimmerImage
                  src={fac.image}
                  alt={fac.title}
                  fill
                  className={styles.facilityImage}
                />
              </div>
            )}
          </article>
        ))}
      </div>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <h2>{t("startAppTodayTitle")}</h2>
        <p>{t("startAppTodayDesc")}</p>
        <Link
          href="/contact"
          className="btn-primary"
          style={{ background: "white", color: "var(--primary-red)", fontWeight: 700 }}
        >
          {t("contactAdmissionsBtn")}
        </Link>
      </section>
    </main>
  );
}
