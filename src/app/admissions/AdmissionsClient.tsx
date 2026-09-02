"use client";

import Link from "next/link";
import { 
  intermediatePrograms, 
  alliedHealthPrograms, 
  diplomaPrograms, 
  medicalDegreePrograms, 
  freelancingCourses, 
  adBsProfessionalPrograms 
} from "@/lib/programs";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";

function TableRow({ 
  title, 
  duration, 
  requirement 
}: { 
  title: string; 
  duration: string; 
  requirement: string 
}) {
  return (
    <tr>
      <td>{title}</td>
      <td><span className={styles.durationBadge}>{duration}</span></td>
      <td>{requirement}</td>
    </tr>
  );
}

export default function AdmissionsClient() {
  const { isUrdu, t } = useLanguage();

  const admissionSteps = [
    {
      num: t("step1Num"),
      title: t("step1Title"),
      desc: t("step1Desc"),
    },
    {
      num: t("step2Num"),
      title: t("step2Title"),
      desc: t("step2Desc"),
    },
    {
      num: t("step3Num"),
      title: t("step3Title"),
      desc: t("step3Desc"),
    },
    {
      num: t("step4Num"),
      title: t("step4Title"),
      desc: t("step4Desc"),
    },
  ];

  return (
    <main>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>{t("admissionsPageTitle")}</h1>
        <p className={styles.heroSubtitle}>
          {t("admissionsPageSubtitle")}
        </p>
      </section>

      {/* ── ELIGIBILITY TABLE ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>{t("atAGlanceLabel")}</span>
          <h2 className={styles.sectionTitle}>{t("eligibilityTableTitle")}</h2>
          <div className={styles.divider} />

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th style={{ width: "40%" }}>{t("tableColProgram")}</th>
                  <th style={{ width: "18%" }}>{t("tableColDuration")}</th>
                  <th>{t("tableColRequirement")}</th>
                </tr>
              </thead>
              <tbody>
                {/* Intermediate */}
                <tr className={styles.tableGroupHeader}>
                  <td colSpan={3}>📚 {t("intermediateProgTitle")}</td>
                </tr>
                {intermediatePrograms.map((p) => (
                  <TableRow
                    key={p.id}
                    title={isUrdu && p.titleUr ? p.titleUr : p.title}
                    duration={isUrdu && p.durationUr ? p.durationUr : p.duration}
                    requirement={isUrdu && p.eligibilityUr ? p.eligibilityUr[0] : p.eligibility[0]}
                  />
                ))}

                {/* Allied Health */}
                <tr className={styles.tableGroupHeader}>
                  <td colSpan={3}>🏥 {t("alliedHealthProgTitle")}</td>
                </tr>
                {alliedHealthPrograms.map((p) => (
                  <TableRow
                    key={p.id}
                    title={isUrdu && p.titleUr ? p.titleUr : p.title}
                    duration={isUrdu && p.durationUr ? p.durationUr : p.duration}
                    requirement={isUrdu && p.eligibilityUr ? p.eligibilityUr[0] : p.eligibility[0]}
                  />
                ))}

                {/* Diploma */}
                <tr className={styles.tableGroupHeader}>
                  <td colSpan={3}>📜 {t("diplomaProgTitle")}</td>
                </tr>
                {diplomaPrograms.map((p) => (
                  <TableRow
                    key={p.id}
                    title={isUrdu && p.titleUr ? p.titleUr : p.title}
                    duration={isUrdu && p.durationUr ? p.durationUr : p.duration}
                    requirement={isUrdu && p.eligibilityUr ? p.eligibilityUr[0] : p.eligibility[0]}
                  />
                ))}

                {/* Medical Degree */}
                <tr className={styles.tableGroupHeader}>
                  <td colSpan={3}>🩺 {t("medicalDegreeProgTitle")}</td>
                </tr>
                {medicalDegreePrograms.map((p) => (
                  <TableRow
                    key={p.id}
                    title={isUrdu && p.titleUr ? p.titleUr : p.title}
                    duration={isUrdu && p.durationUr ? p.durationUr : p.duration}
                    requirement={isUrdu && p.eligibilityUr ? p.eligibilityUr[0] : p.eligibility[0]}
                  />
                ))}

                {/* Freelancing */}
                <tr className={styles.tableGroupHeader}>
                  <td colSpan={3}>💻 {t("freelancingCoursesTitle")}</td>
                </tr>
                {freelancingCourses.map((p) => (
                  <TableRow
                    key={p.id}
                    title={isUrdu && p.titleUr ? p.titleUr : p.title}
                    duration={isUrdu && p.durationUr ? p.durationUr : p.duration}
                    requirement={isUrdu && p.eligibilityUr ? p.eligibilityUr[0] : p.eligibility[0]}
                  />
                ))}

                {/* AD/BS & Professional */}
                <tr className={styles.tableGroupHeader}>
                  <td colSpan={3}>📖 {t("adBsProgTitle")}</td>
                </tr>
                {adBsProfessionalPrograms.map((p) => (
                  <TableRow
                    key={p.id}
                    title={isUrdu && p.titleUr ? p.titleUr : p.title}
                    duration={isUrdu && p.durationUr ? p.durationUr : p.duration}
                    requirement={isUrdu && p.eligibilityUr ? p.eligibilityUr[0] : p.eligibility[0]}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.noticeCard}>
            <span className={styles.noticeIcon}>ℹ️</span>
            <p className={styles.noticeText}>
              <strong>{isUrdu ? "نوٹ:" : "Note:"}</strong> {t("tableNote")}{" "}
              <Link href="/programs" style={{ color: "var(--primary-red)", fontWeight: 700 }}>
                {t("viewEligibilityLinkText")}
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── ADMISSION PROCESS ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>{t("howToApplyLabel")}</span>
          <h2 className={styles.sectionTitle}>{t("admissionProcessTitle")}</h2>
          <div className={styles.divider} />

          <div className={styles.stepsGrid}>
            {admissionSteps.map((step) => (
              <div key={step.num} className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.num}</div>
                <div className={styles.stepTitle}>{step.title}</div>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <h2>{t("startAppTodayTitle")}</h2>
        <p>{t("startAppTodayDesc")}</p>
        <div className={styles.ctaButtons}>
          <Link
            href="/programs"
            style={{
              background: "white",
              color: "var(--primary-red)",
              fontWeight: 700,
              padding: "1rem 2.5rem",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            {t("browseAllProgramsBtn")}
          </Link>
          <Link
            href="/contact"
            style={{
              color: "white",
              border: "2px solid white",
              padding: "1rem 2.5rem",
              borderRadius: "8px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            {t("contactAdmissionsBtn")}
          </Link>
        </div>
      </section>
    </main>
  );
}
