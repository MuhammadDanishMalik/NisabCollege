"use client";

import { useLanguage } from "@/context/LanguageContext";
import ShimmerImage from "@/components/ShimmerImage";
import styles from "./page.module.css";

interface AboutClientProps {
  missionImage: string;
  visionImage: string;
}

export default function AboutClient({ missionImage, visionImage }: AboutClientProps) {
  const { t } = useLanguage();

  return (
    <main className={styles.container}>
      <h1 className={`${styles.title} text-gradient animate-fade-in`}>{t("aboutPageTitle")}</h1>
      
      <div className={styles.content}>
        <section className={`${styles.section} animate-fade-in`}>
          <div className={styles.textContent}>
            <h2>{t("ourMissionTitle")}</h2>
            <p>{t("ourMissionP1")}</p>
            <p>{t("ourMissionP2")}</p>
          </div>
          {missionImage && (
            <div className={styles.imageContent} style={{ position: "relative", minHeight: "260px" }}>
              <ShimmerImage
                src={missionImage}
                alt="Mission"
                fill
                className={styles.image}
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
          )}
        </section>

        <section className={`${styles.section} ${styles.sectionReverse} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
          <div className={styles.textContent}>
            <h2>{t("ourVisionTitle")}</h2>
            <p>{t("ourVisionP1")}</p>
            <p>{t("ourVisionP2")}</p>
          </div>
          {visionImage && (
            <div className={styles.imageContent} style={{ position: "relative", minHeight: "260px" }}>
              <ShimmerImage
                src={visionImage}
                alt="Vision"
                fill
                className={styles.image}
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
