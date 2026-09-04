"use client";

import Link from "next/link";
import ShimmerImage from "@/components/ShimmerImage";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./HeroSlider.module.css";

interface HeroSliderProps {
  bannerImages?: string[];
}

export default function HeroSlider({ bannerImages: _unused = [] }: HeroSliderProps) {
  const { isUrdu, t } = useLanguage();

  // The actual photo of Nisab College building (cache-busted path)
  const collegeBuildingImg = "/banners/nisab-campus-building.jpg";

  const badgeText = isUrdu ? "🔥 داخلے جاری ہیں 2026-2027" : "🔥 ADMISSIONS OPEN 2026-2027";
  const titleText = isUrdu ? "نصاب کالج واں بھچراں" : "Nisab College Wan Bhachran";
  const subtitleText = isUrdu ? "سیکھنے کے لیے بہترین اذہان کا انتخاب — وان بھچراں، میانوالی" : "Great Minds To Learn With — Wan Bhachran, Mianwali";
  const descText = isUrdu
    ? "میانوالی اور واں بھچراں کا صفِ اول کا ادارہ۔ جدید تشخیصی لیبارٹریز، ڈی ایچ کیو ہسپتال میں پریکٹیکل ٹریننگ، تجربہ کار فیکلٹی اور یونیورسٹی الحاق کے ساتھ اپنے محفوظ اور روشن مستقبل کا آغاز کریں۔"
    : "Mianwali's premier institute for healthcare and professional higher education. Offering recognized degree and diploma programs with modern laboratories, hospital rotations, and dedicated faculty mentorship.";

  const pills = [
    isUrdu ? "🏛️ یونیورسٹی الحاق" : "🏛️ UOS Affiliated",
    isUrdu ? "🏆 HEC تسلیم شدہ" : "🏆 HEC Recognized",
    isUrdu ? "🏥 ہسپتال کلینیکل ٹریننگ" : "🏥 Hospital Rotations",
    isUrdu ? "🚌 ٹرانسپورٹ سہولت" : "🚌 Transport Available",
  ];

  return (
    <section className={styles.heroSection} aria-label="Nisab College Wan Bhachran">
      <div className={styles.heroContainer}>
        {/* Promotional Text Column */}
        <div className={styles.textContent}>
          <div className={styles.badge}>{badgeText}</div>
          
          <h1 className={styles.heroTitle}>{titleText}</h1>
          <p className={styles.heroSubtitle}>{subtitleText}</p>
          <p className={styles.heroDesc}>{descText}</p>

          {/* Promotional Feature Pills */}
          <div className={styles.pillsRow}>
            {pills.map((pill, i) => (
              <span key={i} className={styles.pillItem}>
                {pill}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className={styles.actionsRow}>
            <Link href="/admissions" className="btn-primary">
              {isUrdu ? "ابھی داخلہ لیں ←" : "Apply for Admission →"}
            </Link>
            <Link href="/programs" className="btn-outline">
              {isUrdu ? "پروگرامز دیکھیں" : "Explore Programs"}
            </Link>
            <a
              href="https://wa.me/923076813575?text=Hello%2C%20I%20want%20to%20inquire%20about%20admissions%20at%20Nisab%20College"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waButton}
            >
              💬 {isUrdu ? "واٹس ایپ رابطہ" : "WhatsApp Inquire"}
            </a>
          </div>
        </div>

        {/* College Building Image Column */}
        <div className={styles.imageContent}>
          <div className={styles.imageFrame}>
            <ShimmerImage
              src={collegeBuildingImg}
              alt="Nisab College Wan Bhachran Campus Building"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Floating Campus Badge */}
          <div className={styles.floatingCard}>
            <div className={styles.floatingCardIcon}>🏛️</div>
            <div>
              <div className={styles.floatingCardText}>
                {isUrdu ? "نصاب کالج کیمپس" : "Nisab College Campus"}
              </div>
              <div className={styles.floatingCardSub}>
                {isUrdu ? "موسیٰ خیل روڈ، واں بھچراں" : "Musa Khel Road, Wan Bhachran"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
