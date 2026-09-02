"use client";

import { useState } from "react";
import styles from "../app/page.module.css";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// ── TESTIMONIAL GRID ──
const testimonialsEn = [
  {
    title: "Confidence bloomed beautifully",
    quote: "From day one, the faculty made me feel like family. My clinical skills have blossomed—my confidence has soared beautifully. The daily practicals and labs bring such peace of mind and joy.",
    name: "Sara Ahmed",
    initial: "S",
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

const testimonialsUr = [
  {
    title: "اعتماد اور صلاحیتوں میں بے مثال اضافہ",
    quote: "پہلے دن سے ہی اساتذہ نے مجھے اپنے خاندان جیسا محسوس کرایا۔ روزانہ کی عملی تربیت اور جدید لیبز نے میری کلینیکل مہارتوں کو جلا بخشی اور مجھے اپنے شعبے میں مکمل اعتماد دیا۔",
    name: "سارہ احمد",
    initial: "س",
  },
  {
    title: "ماہرانہ رہنمائی اور خلوص",
    quote: "نصاب کالج کی پیشہ ورانہ تربیت واقعی بے مثال ہے۔ اساتذہ کا رویہ انتہائی مشفقانہ ہے اور ہر طالب علم پر انفرادی توجہ میرے کیریئر کے لیے انقلاب آفریں ثابت ہوئی۔",
    name: "محمد علی",
    initial: "م",
  },
  {
    title: "محفوظ، پُرسکون اور معیاری تعلیمی ماحول",
    quote: "کالج کا انتخاب ایک مشکل مرحلہ تھا لیکن نصاب کالج آ کر ہمارا فیصلہ بہترین ثابت ہوا۔ طالبات کے لیے انتہائی محفوظ ماحول اور تجربہ کار فیکلٹی اس ادارے کی سب سے بڑی خوبی ہے۔",
    name: "زینب خان",
    initial: "ز",
  }
];

export function TestimonialSlider() {
  const { isUrdu, t } = useLanguage();
  const list = isUrdu ? testimonialsUr : testimonialsEn;

  return (
    <div>
      <p style={{ color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto 3rem", fontSize: "1.05rem", lineHeight: isUrdu ? 2.0 : 1.6 }}>
        {t("testimonialsSubtitle")}
      </p>
      
      <div className={styles.testimonialsGrid}>
        {list.map((item, idx) => (
          <div key={idx} className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <h3 className={styles.testimonialCardTitle}>{item.title}</h3>
            <p className={styles.testimonialText}>{item.quote}</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>
                {item.initial}
              </div>
              <div>
                <div className={styles.authorName}>{item.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── DYNAMIC NOTICE BOARD ──
const noticesEn = [
  { day: "15", month: "Aug", badge: "New", badgeClass: styles.new, title: "Fall 2026 Admissions Open", desc: "Admissions are now open for all Medical and AD/BS programs. Last date to apply is August 31st. Forms are available at the admission office.", fullDetails: "Eligibility criteria include a minimum of 50% marks in FSc Pre-Medical. Students awaiting results may also apply on a provisional basis." },
  { day: "05", month: "Sep", badge: "Update", badgeClass: "", title: "Merit List Display", desc: "The first merit list for DPT and BS Radiology will be displayed on the campus notice board.", fullDetails: "Selected candidates must submit their original documents and first-semester fee within 3 days of the merit list display." },
  { day: "15", month: "Sep", badge: "Event", badgeClass: "", title: "Commencement of Classes", desc: "Regular classes for the Fall 2026 semester will officially begin. Orientation schedule to follow.", fullDetails: "Orientation starts at 9:00 AM in the main auditorium. Attendance is mandatory for all new students." },
  { day: "20", month: "Sep", badge: "Alert", badgeClass: "", title: "Fee Submission Deadline", desc: "Last date for submission of semester fees without late charges.", fullDetails: "A late fee of Rs. 500 per day will be charged after the deadline. Please ensure timely payment at the accounts office." },
];

const noticesUr = [
  { day: "15", month: "اگست", badge: "نیا", badgeClass: styles.new, title: "فال 2026 داخلے جاری ہیں", desc: "تمام میڈیکل اور اے ڈی / بی ایس پروگرامز کے لیے داخلے کھلے ہیں۔ فارم ایڈمیشن آفس میں دستیاب ہیں۔", fullDetails: "اہلیت کے لیے ایف ایس سی پری میڈیکل میں کم از کم مطلوبہ نمبر ضروری ہیں۔ رزلٹ کے منتظر طلباء بھی اپلائی کر سکتے ہیں۔" },
  { day: "05", month: "ستمبر", badge: "اپڈیٹ", badgeClass: "", title: "پہلی میرٹ لسٹ کا اجراء", desc: "ڈی پی ٹی اور بی ایس ریڈیالوجی کی پہلی میرٹ لسٹ کالج نوٹس بورڈ پر آویزاں کی جائے گی۔", fullDetails: "کامیاب امیدوار میرٹ لسٹ لگنے کے 3 دن کے اندر اصل اسناد اور فیس جمع کروانے کے پابند ہوں گے۔" },
  { day: "15", month: "ستمبر", badge: "تقریب", badgeClass: "", title: "ریگولر کلاسز کا آغاز", desc: "فال 2026 سمسٹر کے نئے سیشن کی باقاعدہ کلاسز اور اورینٹیشن کا آغاز ہوگا۔", fullDetails: "اورینٹیشن صبح 9:00 بجے مین آڈیٹوریم میں شروع ہوگی۔ تمام نئے طلباء کے لیے شرکت لازمی ہے۔" },
  { day: "20", month: "ستمبر", badge: "اہم", badgeClass: "", title: "فیس جمع کروانے کی آخری تاریخ", desc: "بغیر لیٹ فائن کے سمسٹر فیس جمع کروانے کی آخری تاریخ۔", fullDetails: "مقررہ تاریخ کے بعد لیٹ فیس لاگو ہوگی۔ برائے مہربانی وقت پر اکاونٹس آفس میں فیس جمع کروائیں۔" },
];

export function DynamicNoticeBoard() {
  const { isUrdu, t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const list = isUrdu ? noticesUr : noticesEn;

  return (
    <div className={styles.noticeBoard}>
      <div className={styles.noticeBoardHeader}>
        <span>📌</span> {t("noticeBoardTitle")}
      </div>
      <ul className={styles.noticeList}>
        {list.map((notice, idx) => (
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
                  <span style={{ color: "var(--primary-red)", fontSize: "0.8rem", fontWeight: "bold" }}>
                    {expandedIndex === idx ? t("hideDetails") : t("viewDetails")}
                  </span>
                </div>
                <p>{notice.desc}</p>
                {expandedIndex === idx && (
                  <div style={{ marginTop: "1rem", padding: "1rem", background: "rgba(163,21,21,0.05)", borderRadius: "8px", borderLeft: isUrdu ? "none" : "3px solid var(--primary-red)", borderRight: isUrdu ? "3px solid var(--primary-red)" : "none" }}>
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
const faqsEn = [
  { question: "What are the eligibility criteria for DPT?", answer: "Candidates must have completed FSc (Pre-Medical) or A-Levels with at least 60% marks. A college entrance test and interview are also required." },
  { question: "Is there a hostel facility for female students?", answer: "Yes! Nisab College offers a secure, dedicated hostel facility for female students with 24/7 security, mess facilities, and transportation to the campus." },
  { question: "What is the fee structure for AD/BS programs?", answer: "The fee structure is highly affordable and varies by program. Scholarships and financial aid are also available for deserving students on a merit and need basis." },
  { question: "Are your programs recognized by the HEC?", answer: "Yes, all our degree programs are affiliated with the University of Sargodha and fully recognized by the Higher Education Commission (HEC) of Pakistan." },
  { question: "How can I apply for admission online?", answer: "Currently, you can download the admission form from our website or visit the campus in person. Online application submissions will be available very soon!" },
];

const faqsUr = [
  { question: "ڈی پی ٹی (DPT) پروگرام میں داخلے کے لیے کیا شرائط ہیں؟", answer: "امیدوار کے لیے ایف ایس سی (پری میڈیکل) یا اے لیولز میں کم از کم 60 فیصد نمبر ہونا لازمی ہے۔ اس کے علاوہ انٹری ٹیسٹ اور انٹرویو پاس کرنا ضروری ہے۔" },
  { question: "کیا طالبات کے لیے ہاسٹل اور ٹرانسپورٹ کی سہولت موجود ہے؟", answer: "جی ہاں! نصاب کالج طالبات کے لیے مکمل طور پر محفوظ ہاسٹل فراہم کرتا ہے جس میں 24 گھنٹے سیکیورٹی، بہترین کھانا اور کیمپس کے لیے خصوصی ٹرانسپورٹ دستیاب ہے۔" },
  { question: "اے ڈی اور بی ایس پروگرامز کی فیس کا کیا شیڈول ہے؟", answer: "فیس کا ڈھانچہ انتہائی مناسب اور آسان اقساط میں ہے۔ مستحق اور پوزیشن ہولڈر طلباء کے لیے میرٹ اور نیڈ بیسڈ اسکالرشپس بھی دستیاب ہیں۔" },
  { question: "کیا تمام پروگرامز ایچ ای سی (HEC) سے تسلیم شدہ ہیں؟", answer: "جی ہاں! ہمارے تمام ڈگری پروگرامز یونیورسٹی آف سرگودھا سے الحاق شدہ اور ہائر ایجوکیشن کمیشن (HEC) پاکستان سے مکمل طور پر تسلیم شدہ ہیں۔" },
  { question: "داخلے کے لیے آن لائن یا بالمشافہ کس طرح رابطہ کیا جا سکتا ہے؟", answer: "آپ ہماری ویب سائٹ سے فارم حاصل کر سکتے ہیں یا واٹس ایپ اور ایڈمیشن آفس میں تشریف لا کر باآسانی داخلہ فارم جمع کروا سکتے ہیں۔" },
];

export function FAQAccordion() {
  const { isUrdu } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const list = isUrdu ? faqsUr : faqsEn;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
      {list.map((faq, idx) => (
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
              textAlign: isUrdu ? "right" : "left", 
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
              transition: "all 0.2s",
              fontFamily: "inherit"
            }}
          >
            <span>{faq.question}</span>
            <span style={{ fontSize: "1.2rem", color: "var(--primary-red)", marginInlineStart: "1rem" }}>
              {openIndex === idx ? "−" : "+"}
            </span>
          </button>
          {openIndex === idx && (
            <div style={{ padding: "1.25rem 1.5rem", color: "var(--text-secondary)", lineHeight: isUrdu ? 2.0 : 1.6, fontSize: "0.95rem" }}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ── INTERACTIVE FEATURES (KINDERHEAVEN STYLE) ──
const interactiveFeaturesEn = [
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

const interactiveFeaturesUr = [
  { 
    id: 1, 
    icon: "👥", 
    title: "ماہر اور تجربہ کار اساتذہ", 
    desc: "برسوں کے کلینیکل اور تدریسی تجربے کے حامل فیکلٹی ممبران سے تعلیم حاصل کریں جو ہر موڑ پر آپ کی رہنمائی کرتے ہیں۔",
  },
  { 
    id: 2, 
    icon: "🏥", 
    title: "انفرادی توجہ کا نظام", 
    desc: "ہر طالب علم پر خصوصی توجہ دی جاتی ہے تاکہ وہ میڈیکل اور پروفیشنل فیلڈ کے عین مطابق عملی مہارتیں حاصل کر سکیں۔",
  },
  { 
    id: 3, 
    icon: "🤝", 
    title: "محفوظ اور پُرسکون ماحول", 
    desc: "طالبات کے لیے مکمل پردے دار، محفوظ اور جدید کیمپس جہاں طلباء مکمل اعتماد اور تحفظ کے ساتھ اپنی تعلیم جاری رکھتے ہیں۔",
  },
  { 
    id: 4, 
    icon: "📚", 
    title: "عملی اور سائنسی تعلیم", 
    desc: "جدید سائنسی و میڈیکل بنیادوں پر تیار کردہ نصاب جو نامور ہسپتالوں اور اداروں کے عالمی معیار کے عین مطابق ہے۔",
  },
  { 
    id: 5, 
    icon: "🎓", 
    title: "اعلیٰ الحاق اور روزگار", 
    desc: "معروف یونیورسٹیوں اور ہسپتالوں سے الحاق شدہ پروگرامز جو شاندار مستقبل اور فوری روزگار کی ضمانت فراہم کرتے ہیں۔",
  }
];

export function InteractiveFeatures({ images }: { images: string[] }) {
  const { isUrdu } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(2); // Default to Safe & Nurturing
  const data = isUrdu ? interactiveFeaturesUr : interactiveFeaturesEn;

  const activeImage = images[activeIndex % (images.length || 1)] || "/images/placeholder.jpg";
  const activeFeature = data[activeIndex] || data[0];

  return (
    <div className={styles.interactiveFeaturesSection}>
      <div className={styles.interactiveContainer}>
        
        {/* Side 1: Tabs */}
        <div className={styles.interactiveList}>
          {data.map((feat, idx) => (
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

        {/* Side 2: Image and Floating Card */}
        <div className={styles.interactiveImageSide}>
          <div className={styles.interactiveImageWrap}>
            {activeImage && (
              <Image 
                src={activeImage} 
                alt={activeFeature.title} 
                fill 
                style={{ objectFit: "cover", transition: "opacity 0.5s ease-in-out" }} 
              />
            )}
          </div>
          <div className={styles.interactiveDescCard}>
            {activeFeature.desc}
          </div>
        </div>

      </div>
    </div>
  );
}
