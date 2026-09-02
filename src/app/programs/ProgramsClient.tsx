"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  intermediatePrograms, 
  alliedHealthPrograms, 
  diplomaPrograms, 
  medicalDegreePrograms, 
  freelancingCourses, 
  adBsProfessionalPrograms, 
  type Program 
} from "@/lib/programs";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";

const WA_NUMBER = "923076813575";

// ── WhatsApp icon ──────────────────────────────────────────────
const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" style={{ marginInlineEnd: "6px" }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ── Single program card with accordion ─────────────────────────────────────
function ProgramCard({ program }: { program: Program }) {
  const { isUrdu, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const title = isUrdu && program.titleUr ? program.titleUr : program.title;
  const badge = isUrdu && program.badgeUr ? program.badgeUr : program.badge;
  const category = isUrdu && program.categoryUr ? program.categoryUr : program.category;
  const duration = isUrdu && program.durationUr ? program.durationUr : program.duration;
  const description = isUrdu && program.descriptionUr ? program.descriptionUr : program.description;
  const eligibility = isUrdu && program.eligibilityUr ? program.eligibilityUr : program.eligibility;

  const waMsgUr = `السلام علیکم! میں نصاب کالج واں بھچراں کے پروگرام (${title}) کے بارے میں مزید معلومات، فیس اور داخلے کی شرائط جاننا چاہتا/چاہتی ہوں۔`;
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(isUrdu ? waMsgUr : program.waMessage)}`;

  return (
    <article id={program.id} className={styles.programCard}>
      {/* Body */}
      <div className={styles.cardBody}>
        <span className={styles.cardBadge}>{badge}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardMeta}>
          <span className={styles.cardMetaItem}>⏱ {duration}</span>
          <span className={styles.cardMetaItem}>📚 {category}</span>
        </div>
        <p className={styles.cardDesc}>{description}</p>

        {/* Eligibility accordion */}
        <button
          className={styles.accordionToggle}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{ fontFamily: "inherit" }}
        >
          <span>📋 {t("viewEligibilityBtn")}</span>
          <em className={`${styles.accordionChevron} ${open ? styles.accordionChevronOpen : ""}`}>
            ▾
          </em>
        </button>

        {open && (
          <div className={styles.accordionBody}>
            <ul className={styles.eligibilityList}>
              {eligibility.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA footer */}
        <div className={styles.cardFooter}>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className={styles.btnWhatsApp}>
            <WaIcon /> {t("inquireWhatsAppBtn")}
          </a>
          <Link href="/contact" className={styles.btnContact}>
            {t("navContact")}
          </Link>
        </div>
      </div>
    </article>
  );
}

// ── Section block helper ────────────────────────────────────────────────────
function ProgramSection({
  label,
  title,
  programs,
}: {
  label: string;
  title: string;
  programs: Program[];
}) {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderLine} />
          <div className={styles.sectionHeaderContent}>
            <span className={styles.sectionLabel}>{label}</span>
            <h2 className={styles.sectionTitle}>{title}</h2>
          </div>
          <div className={styles.sectionHeaderLine} />
        </div>
        <div className={styles.cardGrid}>
          {programs.map((prog) => (
            <ProgramCard
              key={prog.id}
              program={prog}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProgramsClient() {
  const { t } = useLanguage();

  return (
    <main>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>{t("programsPageTitle")}</h1>
        <p className={styles.heroSubtitle}>
          {t("programsPageSubtitle")}
        </p>
      </section>

      {/* ── INTERMEDIATE PROGRAMS ── */}
      <ProgramSection
        label={t("foundationalEduLabel")}
        title={t("intermediateProgTitle")}
        programs={intermediatePrograms}
      />

      {/* ── ALLIED HEALTH PROGRAMS ── */}
      <ProgramSection
        label={t("practicalHealthcareLabel")}
        title={t("alliedHealthProgTitle")}
        programs={alliedHealthPrograms}
      />

      {/* ── DIPLOMA PROGRAMS ── */}
      <ProgramSection
        label={t("specializedCertLabel")}
        title={t("diplomaProgTitle")}
        programs={diplomaPrograms}
      />

      {/* ── MEDICAL DEGREE PROGRAMS ── */}
      <ProgramSection
        label={t("advancedMedSciencesLabel")}
        title={t("medicalDegreeProgTitle")}
        programs={medicalDegreePrograms}
      />

      {/* ── FREELANCING COURSES ── */}
      <ProgramSection
        label={t("skillDevLabel")}
        title={t("freelancingCoursesTitle")}
        programs={freelancingCourses}
      />

      {/* ── AD/BS & PROFESSIONAL PROGRAMS ── */}
      <ProgramSection
        label={t("artsBusinessEduLabel")}
        title={t("adBsProgTitle")}
        programs={adBsProfessionalPrograms}
      />

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner}>
        <h2>{t("readyToStartJourneyTitle")}</h2>
        <p>{t("readyToStartJourneyDesc")}</p>
        <div className={styles.ctaButtons}>
          <Link
            href="/contact"
            style={{
              background: "white",
              color: "var(--primary-red)",
              fontWeight: 700,
              padding: "1rem 2.5rem",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            {t("applyNowArrow")}
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
