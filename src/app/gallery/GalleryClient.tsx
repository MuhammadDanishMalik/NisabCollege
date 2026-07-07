"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
};

interface GalleryClientProps {
  images: string[];
}

const categories = ["All", "Campus", "Students", "Lab", "Events", "Faculty"];

export default function GalleryClient({ images }: GalleryClientProps) {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [activeCategory] = useState("All");

  const openLightbox = (img: string, idx: number) => {
    setLightboxImg(img);
    setLightboxIdx(idx);
  };

  const closeLightbox = () => setLightboxImg(null);

  const prevImg = () => {
    const newIdx = (lightboxIdx - 1 + images.length) % images.length;
    setLightboxIdx(newIdx);
    setLightboxImg(images[newIdx]);
  };

  const nextImg = () => {
    const newIdx = (lightboxIdx + 1) % images.length;
    setLightboxIdx(newIdx);
    setLightboxImg(images[newIdx]);
  };

  return (
    <>
      {/* Hero */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className={styles.heroTitle}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Campus Gallery
        </motion.h1>
        <motion.p
          className={styles.heroSubtitle}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          A visual tour of student life, campus facilities, and memorable moments at Nisab College Wan Bhachran.
        </motion.p>
        <motion.div
          className={styles.heroStats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span>{images.length}+ Photos</span>
          <span>|</span>
          <span>Real Campus Life</span>
          <span>|</span>
          <span>Nisab College</span>
        </motion.div>
      </motion.section>

      {/* Count bar */}
      <div className={styles.countBar}>
        <span>Showing <strong>{images.length}</strong> photos from our campus</span>
      </div>

      {/* Masonry Grid */}
      <div className={styles.galleryContainer}>
        <motion.div
          className={styles.masonryGrid}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={styles.masonryItem}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(163,21,21,0.2)" }}
              onClick={() => openLightbox(img, i)}
              tabIndex={0}
              role="button"
              aria-label={`View photo ${i + 1}`}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(img, i)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt={`Campus photo ${i + 1}`} loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.overlayIcon}>🔍</span>
                <span className={styles.overlayText}>Photo {i + 1}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            className={styles.lightboxBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close">✕</button>
              <button className={styles.lightboxPrev} onClick={prevImg} aria-label="Previous">‹</button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={lightboxImg} alt={`Campus photo ${lightboxIdx + 1}`} className={styles.lightboxImg} />
              <button className={styles.lightboxNext} onClick={nextImg} aria-label="Next">›</button>
              <div className={styles.lightboxCaption}>
                Photo {lightboxIdx + 1} of {images.length} — Nisab College Campus
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
