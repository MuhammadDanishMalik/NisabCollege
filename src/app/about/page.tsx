import { readdirSync } from "fs";
import { join } from "path";
import Image from "next/image";
import styles from "./page.module.css";

export default function AboutPage() {
  const mediaDir = join(process.cwd(), "Media-Images");
  let files: string[] = [];
  
  try {
    files = readdirSync(mediaDir);
  } catch (error) {
    console.error("Error reading media directory:", error);
  }

  const mediaFiles = files.filter(file => {
    const ext = file.split(".").pop()?.toLowerCase();
    return ["jpg", "jpeg", "png", "webp"].includes(ext || "");
  });

  const missionImage = mediaFiles[5] ? `/api/media/${encodeURIComponent(mediaFiles[5])}` : "";
  const visionImage = mediaFiles[6] ? `/api/media/${encodeURIComponent(mediaFiles[6])}` : "";

  return (
    <main className={styles.container}>
      <h1 className={`${styles.title} text-gradient animate-fade-in`}>About Nisab College</h1>
      
      <div className={styles.content}>
        <section className={`${styles.section} animate-fade-in`}>
          <div className={styles.textContent}>
            <h2>Our Mission</h2>
            <p>At Nisab College, our mission is to empower students with the knowledge, skills, and values required to excel in a rapidly changing world.</p>
            <p>We provide a nurturing environment where curiosity is encouraged, and innovation is cultivated, ensuring that every individual realizes their full potential.</p>
          </div>
          {missionImage && (
            <div className={styles.imageContent}>
              <img src={missionImage} alt="Mission" className={styles.image} />
            </div>
          )}
        </section>

        <section className={`${styles.section} ${styles.sectionReverse} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
          <div className={styles.textContent}>
            <h2>Our Vision</h2>
            <p>We envision a community of lifelong learners who are compassionate, responsible, and equipped to lead with integrity.</p>
            <p>Nisab College strives to be recognized globally for its commitment to academic excellence, inclusivity, and holistic development.</p>
          </div>
          {visionImage && (
            <div className={styles.imageContent}>
              <img src={visionImage} alt="Vision" className={styles.image} />
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
