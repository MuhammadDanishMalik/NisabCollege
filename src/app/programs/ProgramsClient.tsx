"use client";

import Link from "next/link";
import { useState } from "react";
import { medicalPrograms, adBsPrograms, professionalPrograms, type Program } from "@/lib/programs";
import styles from "./page.module.css";

const WA_NUMBER = "923076813575";

// ── WhatsApp icon (inline SVG) ──────────────────────────────────────────────
const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ── Single program card with accordion ─────────────────────────────────────
function ProgramCard({ program, imageUrl }: { program: Program; imageUrl: string }) {
  const [open, setOpen] = useState(false);
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(program.waMessage)}`;

  return (
    <article id={program.id} className={styles.programCard}>
      {/* Image */}
      {imageUrl && (
        <div className={styles.cardImageWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt={program.title} loading="lazy" />
          <div className={styles.cardImageOverlay} />
        </div>
      )}

      {/* Body */}
      <div className={styles.cardBody}>
        <span className={styles.cardBadge}>{program.badge}</span>
        <h3 className={styles.cardTitle}>{program.title}</h3>
        <div className={styles.cardMeta}>
          <span className={styles.cardMetaItem}>⏱ {program.duration}</span>
          <span className={styles.cardMetaItem}>📚 {program.category}</span>
        </div>
        <p className={styles.cardDesc}>{program.description}</p>

        {/* Eligibility accordion */}
        <button
          className={styles.accordionToggle}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span>📋 View Eligibility Criteria</span>
          <em className={`${styles.accordionChevron} ${open ? styles.accordionChevronOpen : ""}`}>
            ▾
          </em>
        </button>

        {open && (
          <div className={styles.accordionBody}>
            <ul className={styles.eligibilityList}>
              {program.eligibility.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA footer */}
        <div className={styles.cardFooter}>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className={styles.btnWhatsApp}>
            <WaIcon /> Inquire on WhatsApp
          </a>
          <Link href="/contact" className={styles.btnContact}>
            Contact Us
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
  images,
  startImageIdx = 0,
}: {
  label: string;
  title: string;
  programs: Program[];
  images: string[];
  startImageIdx?: number;
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
          {programs.map((prog, i) => (
            <ProgramCard
              key={prog.id}
              program={prog}
              imageUrl={images[(startImageIdx + i * 5) % images.length] || ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Page props: images passed from server ───────────────────────────────────
interface ProgramsClientProps {
  images: string[];
}

export default function ProgramsClient({ images }: ProgramsClientProps) {
  return (
    <main>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Our Academic Programs</h1>
        <p className={styles.heroSubtitle}>
          Nisab College offers a diverse portfolio of professional programmes in medical sciences,
          arts & social sciences, and business & education — each designed to open real career pathways.
          Click <strong>View Eligibility</strong> on any card to check if you qualify.
        </p>
      </section>

      {/* ── MEDICAL PROGRAMS ── */}
      <ProgramSection
        label="Medical & Allied Health"
        title="Medical Programs"
        programs={medicalPrograms}
        images={images}
        startImageIdx={0}
      />

      {/* ── AD/BS PROGRAMS ── */}
      <ProgramSection
        label="Arts, Social Sciences & Education"
        title="AD / BS Programs"
        programs={adBsPrograms}
        images={images}
        startImageIdx={3}
      />

      {/* ── PROFESSIONAL PROGRAMS ── */}
      <ProgramSection
        label="Business & Teacher Education"
        title="Professional Degree Programs"
        programs={professionalPrograms}
        images={images}
        startImageIdx={6}
      />

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner}>
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Admissions are open. Tap any program's WhatsApp button for an instant response, or reach
          our admissions desk directly.
        </p>
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
            Apply Now →
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
