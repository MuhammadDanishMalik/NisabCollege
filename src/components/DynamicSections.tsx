"use client";

import { useState, useEffect } from "react";
import styles from "../app/page.module.css";
import Image from "next/image";

// ── TESTIMONIAL GRID (Matched to Screenshot Design) ──
const testimonials = [
  {
    title: "Confidence bloomed beautifully",
    quote: "From day one, the faculty made me feel like family. My clinical skills have blossomed—my confidence has soared beautifully. The daily practicals and labs bring such peace of mind and joy.",
    name: "Sara Ahmed",
    initial: "S",
    image: "/images/avatar-sara.jpg" // We'll use initials fallback for now
  },
  {
    title: "Expertise met with genuine care",
    quote: "The professionalism at Nisab College is truly outstanding. The teachers have incredible patience, and their individualized approach has been absolutely remarkable and life changing for my career.",
    name: "Muhammad Ali",
    initial: "M",
  },
  {
    title: "Safe, happy, learning every day",
    quote: "Choosing a college felt overwhelming until we discovered Nisab College. The beautiful environment and qualified staff are extraordinary. We have thrived—making friends and learning through practice.",
    name: "Zainab Khan",
    initial: "Z",
  }
];

export function TestimonialSlider() {
  return (
    <div>
      <p style={{ color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto 3rem", fontSize: "1.05rem", lineHeight: 1.6 }}>
        Hear from students who've experienced the Nisab College difference where exceptional education and care come together to support every student's journey.
      </p>
      
      <div className={styles.testimonialsGrid}>
        {testimonials.map((t, idx) => (
          <div key={idx} className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <h3 className={styles.testimonialCardTitle}>{t.title}</h3>
            <p className={styles.testimonialText}>{t.quote}</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>
                {t.image ? (
                  <img src={t.image} alt={t.name} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
                ) : (
                  t.initial
                )}
              </div>
              <div>
                <div className={styles.authorName}>{t.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── DYNAMIC NOTICE BOARD ──
const notices = [
  { day: "15", month: "Aug", badge: "New", badgeClass: styles.new, title: "Fall 2026 Admissions Open", desc: "Admissions are now open for all Medical and AD/BS programs. Last date to apply is August 31st. Forms are available at the admission office.", fullDetails: "Eligibility criteria include a minimum of 50% marks in FSc Pre-Medical. Students awaiting results may also apply on a provisional basis." },
  { day: "05", month: "Sep", badge: "Update", badgeClass: "", title: "Merit List Display", desc: "The first merit list for DPT and BS Radiology will be displayed on the campus notice board.", fullDetails: "Selected candidates must submit their original documents and first-semester fee within 3 days of the merit list display." },
  { day: "15", month: "Sep", badge: "Event", badgeClass: "", title: "Commencement of Classes", desc: "Regular classes for the Fall 2026 semester will officially begin. Orientation schedule to follow.", fullDetails: "Orientation starts at 9:00 AM in the main auditorium. Attendance is mandatory for all new students." },
  { day: "20", month: "Sep", badge: "Alert", badgeClass: "", title: "Fee Submission Deadline", desc: "Last date for submission of semester fees without late charges.", fullDetails: "A late fee of Rs. 500 per day will be charged after the deadline. Please ensure timely payment at the accounts office." },
];

export function DynamicNoticeBoard() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className={styles.noticeBoard}>
      <div className={styles.noticeBoardHeader}>
        <span>📌</span> Notice Board & Updates
      </div>
      <ul className={styles.noticeList}>
        {notices.map((notice, idx) => (
          <li key={idx} className={styles.noticeItem} style={{ flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", gap: "1.5rem", width: "100%", alignItems: "flex-start", cursor: "pointer" }} onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}>
              <div className={styles.noticeDate}>
                <div className={styles.noticeDay}>{notice.day}</div>
                <div className={styles.noticeMonth}>{notice.month}</div>
              </div>
              <div className={styles.noticeContent} style={{ flex: 1 }}>
                <span className={`${styles.noticeBadge} ${notice.badgeClass}`}>{notice.badge}</span>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h4>{notice.title}</h4>
                  <span style={{ color: "var(--primary-red)", fontSize: "0.8rem", fontWeight: "bold" }}>{expandedIndex === idx ? "Hide Details ▴" : "View Details ▾"}</span>
                </div>
                <p>{notice.desc}</p>
                {expandedIndex === idx && (
                  <div style={{ marginTop: "1rem", padding: "1rem", background: "rgba(163,21,21,0.05)", borderRadius: "8px", borderLeft: "3px solid var(--primary-red)" }}>
                    <p style={{ margin: 0, color: "var(--text-main)", fontSize: "0.85rem", fontWeight: 500 }}>{notice.fullDetails}</p>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── FAQ ACCORDION ──
const faqs = [
  { question: "What are the eligibility criteria for DPT?", answer: "Candidates must have completed FSc (Pre-Medical) or A-Levels with at least 60% marks. A college entrance test and interview are also required." },
  { question: "Is there a hostel facility for female students?", answer: "Yes! Nisab College offers a secure, dedicated hostel facility for female students with 24/7 security, mess facilities, and transportation to the campus." },
  { question: "What is the fee structure for AD/BS programs?", answer: "The fee structure is highly affordable and varies by program. Scholarships and financial aid are also available for deserving students on a merit and need basis." },
  { question: "Are your programs recognized by the HEC?", answer: "Yes, all our degree programs are affiliated with the University of Sargodha and fully recognized by the Higher Education Commission (HEC) of Pakistan." },
  { question: "How can I apply for admission online?", answer: "Currently, you can download the admission form from our website or visit the campus in person. Online application submissions will be available very soon!" },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
      {faqs.map((faq, idx) => (
        <div 
          key={idx} 
          style={{ 
            background: "white", 
            border: "1px solid var(--border-color)", 
            borderRadius: "8px", 
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
          }}
        >
          <button 
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            style={{ 
              width: "100%", 
              textAlign: "left", 
              padding: "1.25rem 1.5rem", 
              background: openIndex === idx ? "rgba(163,21,21,0.03)" : "transparent",
              border: "none", 
              borderBottom: openIndex === idx ? "1px solid rgba(163,21,21,0.1)" : "none",
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: openIndex === idx ? "var(--primary-red)" : "var(--text-main)",
              transition: "all 0.2s"
            }}
          >
            {faq.question}
            <span style={{ fontSize: "1.2rem", color: "var(--primary-red)" }}>{openIndex === idx ? "−" : "+"}</span>
          </button>
          {openIndex === idx && (
            <div style={{ padding: "1.25rem 1.5rem", color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ── INTERACTIVE FEATURES (KINDERHEAVEN STYLE) ──
const interactiveFeaturesData = [
  { 
    id: 1, 
    icon: "👥", 
    title: "Qualified Practitioners", 
    desc: "Learn from highly qualified and dedicated teaching staff with years of clinical and academic experience to guide your professional journey.",
  },
  { 
    id: 2, 
    icon: "🏥", 
    title: "Individual Care Plans", 
    desc: "Every student receives personalized attention and mentorship, ensuring they develop the precise skills needed for the healthcare industry.",
  },
  { 
    id: 3, 
    icon: "🤝", 
    title: "Safe & Nurturing Environment", 
    desc: "Purpose-built with secure facilities, dedicated female spaces, and strict protocols. Our comprehensive safety measures create an atmosphere where students flourish.",
  },
  { 
    id: 4, 
    icon: "📚", 
    title: "Evidence-Based Learning", 
    desc: "Our industry-relevant curriculum is strictly designed around modern medical evidence to meet the high demands of top hospitals.",
  },
  { 
    id: 5, 
    icon: "🎓", 
    title: "Seamless Partnership", 
    desc: "Nationally recognized programs affiliated with top universities and hospitals, delivering exceptional academic standards and immediate job placements.",
  }
];

export function InteractiveFeatures({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(2); // Default to Safe & Nurturing

  // Map 5 images from the passed props safely
  const activeImage = images[activeIndex % images.length] || "/images/placeholder.jpg";
  const activeFeature = interactiveFeaturesData[activeIndex];

  return (
    <div className={styles.interactiveFeaturesSection}>
      <div className={styles.interactiveContainer}>
        
        {/* Left Side: Tabs */}
        <div className={styles.interactiveList}>
          {interactiveFeaturesData.map((feat, idx) => (
            <div 
              key={feat.id} 
              className={`${styles.interactiveTab} ${activeIndex === idx ? styles.active : ""}`}
              onClick={() => setActiveIndex(idx)}
            >
              <div className={styles.tabIcon}>{feat.icon}</div>
              <div className={styles.tabTitle}>{feat.title}</div>
            </div>
          ))}
        </div>

        {/* Right Side: Image and Floating Card */}
        <div className={styles.interactiveImageSide}>
          <div className={styles.interactiveImageWrap}>
            <Image 
              src={activeImage} 
              alt={activeFeature.title} 
              fill 
              style={{ objectFit: "cover", transition: "opacity 0.5s ease-in-out" }} 
            />
          </div>
          <div className={styles.interactiveDescCard}>
            {activeFeature.desc}
          </div>
        </div>

      </div>
    </div>
  );
}
