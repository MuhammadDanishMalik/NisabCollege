"use client";

import Link from "next/link";
import ShimmerImage from "@/components/ShimmerImage";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";

interface PrincipalClientProps {
  principalImage: string;
}

export default function PrincipalClient({ principalImage }: PrincipalClientProps) {
  const { isUrdu, t } = useLanguage();

  return (
    <main>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <span className={styles.heroBadge}>{t("leadershipLabel")}</span>
        <h1 className={styles.heroTitle}>{t("principalPageTitle")}</h1>
        <p className={styles.heroSubtitle}>{t("principalPageSubtitle")}</p>
      </section>

      {/* ── CONTENT ── */}
      <div className={styles.container}>
        <article className={styles.profileCard}>
          <div>
            {principalImage && (
              <div className={styles.imageWrap}>
                <ShimmerImage
                  src={principalImage}
                  alt="Dr. Muhammad Imran - Principal"
                  fill
                  className={styles.principalImage}
                />
              </div>
            )}
            <div className={styles.profileMeta}>
              <div className={styles.principalName}>{t("principalName")}</div>
              <div className={styles.principalRole}>{t("principalRole")}</div>
            </div>
          </div>

          <div className={styles.letterContent}>
            <h2 className={styles.letterHeading}>{t("principalLetterHeading")}</h2>
            <p>{t("principalLetterP1")}</p>
            <p>{t("principalLetterP2")}</p>
            <p>{t("principalLetterP3")}</p>
            <p>{t("principalLetterP4")}</p>

            <div style={{ marginTop: "2rem" }}>
              <Link href="/admissions" className="btn-primary">
                {t("applyNow")} →
              </Link>
            </div>
          </div>
        </article>

        {/* ── PILLARS ── */}
        <div className={styles.pillarsGrid}>
          <div className={styles.pillarCard}>
            <h3 className={styles.pillarTitle}>🎓 {t("principalPillar1Title")}</h3>
            <p className={styles.pillarDesc}>{t("principalPillar1Desc")}</p>
          </div>
          <div className={styles.pillarCard}>
            <h3 className={styles.pillarTitle}>🔬 {t("principalPillar2Title")}</h3>
            <p className={styles.pillarDesc}>{t("principalPillar2Desc")}</p>
          </div>
          <div className={styles.pillarCard}>
            <h3 className={styles.pillarTitle}>🤝 {t("principalPillar3Title")}</h3>
            <p className={styles.pillarDesc}>{t("principalPillar3Desc")}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
