"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ShimmerImage from "@/components/ShimmerImage";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./HeroSlider.module.css";

interface HeroSliderProps {
  bannerImages?: string[];
}

export default function HeroSlider({ bannerImages = [] }: HeroSliderProps) {
  const { isUrdu, t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Fallbacks and exact Cloudinary URLs for banners
  const kashmirImg =
    "https://res.cloudinary.com/gviwofgz/image/upload/v1788290474/nisab-college/banners/kashmir_day_banner.jpg";
  const livestockImg =
    "https://res.cloudinary.com/gviwofgz/image/upload/v1788290475/nisab-college/banners/livestock_diploma_banner.jpg";
  const facultyImg =
    "https://res.cloudinary.com/gviwofgz/image/upload/v1788290476/nisab-college/banners/faculty_event_photo.png";
  const campusImg = bannerImages[0] || "/banners/livestock-diploma.jpg";

  const slides = [
    {
      id: "admissions-medical",
      badge: t("slide1Badge"),
      title: t("slide1Title"),
      subtitle: t("slide1Subtitle"),
      desc: t("slide1Desc"),
      btn1Text: t("slide1Btn1"),
      btn1Href: "/admissions",
      btn2Text: t("slide1Btn2"),
      btn2Href: "/programs",
      pills: [t("slide1Pill1"), t("slide1Pill2"), t("slide1Pill3")],
      image: campusImg,
      floatingIcon: "🎓",
      floatingTitle: isUrdu ? "100% کامیابی" : "100% Pass Rate",
      floatingSub: isUrdu ? "ماہر فیکلٹی" : "Expert Faculty",
    },
    {
      id: "livestock-diploma",
      badge: t("slide2Badge"),
      title: t("slide2Title"),
      subtitle: t("slide2Subtitle"),
      desc: t("slide2Desc"),
      btn1Text: t("slide2Btn1"),
      btn1Href: "/admissions",
      btn2Text: t("slide2Btn2"),
      btn2Href: "https://wa.me/923076813575?text=I%20am%20interested%20in%20Livestock%20Assistant%20Diploma",
      isExternalBtn2: true,
      pills: [t("slide2Pill1"), t("slide2Pill2"), t("slide2Pill3")],
      image: livestockImg,
      floatingIcon: "🐄",
      floatingTitle: isUrdu ? "لائیو سٹاک ڈپلومہ" : "LAD Diploma",
      floatingSub: isUrdu ? "ڈی وی ایم ڈاکٹرز" : "DVM Mentorship",
    },
    {
      id: "kashmir-solidarity",
      badge: t("slide3Badge"),
      title: t("slide3Title"),
      subtitle: t("slide3Subtitle"),
      desc: t("slide3Desc"),
      btn1Text: t("slide3Btn1"),
      btn1Href: "/about",
      btn2Text: t("slide3Btn2"),
      btn2Href: "/gallery",
      pills: [t("slide3Pill1"), t("slide3Pill2"), t("slide3Pill3")],
      image: kashmirImg,
      floatingIcon: "🇵🇰",
      floatingTitle: isUrdu ? "قومی یکجہتی" : "National Values",
      floatingSub: isUrdu ? "اخلاقی تربیت" : "Moral Integrity",
    },
    {
      id: "academic-faculty",
      badge: t("slide4Badge"),
      title: t("slide4Title"),
      subtitle: t("slide4Subtitle"),
      desc: t("slide4Desc"),
      btn1Text: t("slide4Btn1"),
      btn1Href: "/admissions",
      btn2Text: t("slide4Btn2"),
      btn2Href: "https://wa.me/923076813575?text=Please%20send%20me%20Nisab%20College%20Prospectus",
      isExternalBtn2: true,
      pills: [t("slide4Pill1"), t("slide4Pill2"), t("slide4Pill3")],
      image: facultyImg,
      floatingIcon: "📜",
      floatingTitle: isUrdu ? "سرگودھا یونیورسٹی" : "UOS Affiliated",
      floatingSub: isUrdu ? "تسلیم شدہ اسناد" : "Accredited Degrees",
    },
  ];

  const total = slides.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const activeSlide = slides[current];

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? (isUrdu ? -80 : 80) : (isUrdu ? 80 : -80),
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 260, damping: 30 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? (isUrdu ? 80 : -80) : (isUrdu ? -80 : 80),
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring" as const, stiffness: 260, damping: 30 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <section
      className={styles.sliderWrapper}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Campus Banners and Highlights"
    >
      {/* Navigation Arrows */}
      <button
        type="button"
        className={`${styles.arrowBtn} ${styles.arrowLeft}`}
        onClick={prevSlide}
        aria-label={t("heroSlidePrev")}
      >
        ‹
      </button>

      <button
        type="button"
        className={`${styles.arrowBtn} ${styles.arrowRight}`}
        onClick={nextSlide}
        aria-label={t("heroSlideNext")}
      >
        ›
      </button>

      {/* Slide Content */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={activeSlide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className={styles.slideInner}
        >
          {/* Left Column: Text & CTAs */}
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <div className={styles.badge}>{activeSlide.badge}</div>
            <h1 className={styles.slideTitle}>{activeSlide.title}</h1>
            <div className={styles.slideSubtitle}>{activeSlide.subtitle}</div>
            <p className={styles.slideDesc}>{activeSlide.desc}</p>

            {/* Feature Pills */}
            <div className={styles.pillsRow}>
              {activeSlide.pills.map((pill, i) => (
                <span key={i} className={styles.pillItem}>
                  {pill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className={styles.actionsRow}>
              <Link href={activeSlide.btn1Href} className="btn-primary">
                {activeSlide.btn1Text}
              </Link>
              {activeSlide.isExternalBtn2 ? (
                <a
                  href={activeSlide.btn2Href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  {activeSlide.btn2Text}
                </a>
              ) : (
                <Link href={activeSlide.btn2Href} className="btn-outline">
                  {activeSlide.btn2Text}
                </Link>
              )}
            </div>
          </motion.div>

          {/* Right Column: Visual Frame */}
          <motion.div
            className={styles.imageContent}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            <div className={styles.imageFrame}>
              <ShimmerImage
                src={activeSlide.image}
                alt={activeSlide.title}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Floating Glassmorphic Badge */}
            <div className={styles.floatingCard}>
              <div className={styles.floatingCardIcon}>
                {activeSlide.floatingIcon}
              </div>
              <div>
                <div className={styles.floatingCardText}>
                  {activeSlide.floatingTitle}
                </div>
                <div className={styles.floatingCardSub}>
                  {activeSlide.floatingSub}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Dot Navigation */}
      <div className={styles.dotsWrapper}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`${styles.dot} ${
              current === idx ? styles.dotActive : ""
            }`}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
        <span className={styles.counter}>
          0{current + 1} / 0{total}
        </span>
      </div>
    </section>
  );
}
