import Link from "next/link";
import type { Metadata } from "next";
import { medicalPrograms, adBsPrograms, professionalPrograms } from "@/lib/programs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Admissions | Nisab College",
  description:
    "Review eligibility requirements and the 4-step admission process for all programmes at Nisab College Wan Bhachran.",
};

const admissionSteps = [
  {
    num: "01",
    title: "Check Eligibility",
    desc: "Review the eligibility criteria for your chosen programme on the Programs page or in the table below.",
  },
  {
    num: "02",
    title: "Submit Application",
    desc: "Fill in the prescribed admission form and attach all required documents (certificates, CNIC, photos).",
  },
  {
    num: "03",
    title: "Entry Test",
    desc: "Appear in the entry test conducted by any recognized testing agency or the affiliated university.",
  },
  {
    num: "04",
    title: "Interview & Enrolment",
    desc: "Attend the selection interview. Successful candidates receive an offer letter and complete enrolment formalities.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Table row helper
// ─────────────────────────────────────────────────────────────────────────────
function TableRow({ title, duration, requirement }: { title: string; duration: string; requirement: string }) {
  return (
    <tr>
      <td>{title}</td>
      <td><span className={styles.durationBadge}>{duration}</span></td>
      <td>{requirement}</td>
    </tr>
  );
}

export default function AdmissionsPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Admissions</h1>
        <p className={styles.heroSubtitle}>
          Ready to take the next step? Review the eligibility requirements for each programme below,
          then follow the four-step process to secure your place at Nisab College.
        </p>
      </section>

      {/* ── ELIGIBILITY TABLE ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>At a Glance</span>
          <h2 className={styles.sectionTitle}>Eligibility Requirements by Programme</h2>
          <div className={styles.divider} />

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th style={{ width: "40%" }}>Programme</th>
                  <th style={{ width: "15%" }}>Duration</th>
                  <th>Minimum Requirement</th>
                </tr>
              </thead>
              <tbody>
                {/* Medical */}
                <tr className={styles.tableGroupHeader}>
                  <td colSpan={3}>🏥 Medical &amp; Allied Health Programs</td>
                </tr>
                {medicalPrograms.map((p) => (
                  <TableRow
                    key={p.id}
                    title={p.title}
                    duration={p.duration}
                    requirement={p.eligibility[0]}
                  />
                ))}

                {/* AD / BS */}
                <tr className={styles.tableGroupHeader}>
                  <td colSpan={3}>📖 AD / BS Programs (Arts, Social Sciences &amp; Education)</td>
                </tr>
                {adBsPrograms.map((p) => (
                  <TableRow
                    key={p.id}
                    title={p.title}
                    duration={p.duration}
                    requirement="HSSC / Intermediate or equivalent (12 years), minimum 45–50% marks."
                  />
                ))}

                {/* Professional */}
                <tr className={styles.tableGroupHeader}>
                  <td colSpan={3}>💼 Professional Degree Programs (Business &amp; Teacher Education)</td>
                </tr>
                {professionalPrograms.map((p) => (
                  <TableRow
                    key={p.id}
                    title={p.title}
                    duration={p.duration}
                    requirement={p.eligibility[0]}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.noticeCard}>
            <span className={styles.noticeIcon}>ℹ️</span>
            <p className={styles.noticeText}>
              <strong>Note:</strong> Minimum percentage thresholds may vary slightly depending on the
              affiliated university's annual policy. Contact our admissions office for the most
              up-to-date requirements before submitting your application. Click{" "}
              <Link href="/programs" style={{ color: "var(--primary-red)", fontWeight: 700 }}>
                View Eligibility
              </Link>{" "}
              on any programme card for full details.
            </p>
          </div>
        </div>
      </section>

      {/* ── ADMISSION PROCESS ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>How to Apply</span>
          <h2 className={styles.sectionTitle}>The Admission Process</h2>
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
        <h2>Start Your Application Today</h2>
        <p>Our admissions team is here to guide you every step of the way.</p>
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
            Browse All Programs →
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
            Contact Admissions
          </Link>
        </div>
      </section>
    </main>
  );
}
