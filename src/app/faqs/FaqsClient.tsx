"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";

const faqsDataEn = [
  {
    category: "admissions",
    question: "What are the eligibility criteria for DPT (Doctor of Physical Therapy)?",
    answer: "Candidates must have completed FSc (Pre-Medical) or equivalent A-Levels with at least 60% marks. A college entrance test and interview are also conducted before final merit determination.",
  },
  {
    category: "admissions",
    question: "Can awaiting-result students apply for admissions?",
    answer: "Yes, students awaiting their intermediate or matriculation results can apply on a provisional basis with a hope certificate issued by their previous institution.",
  },
  {
    category: "fees",
    question: "What is the fee structure and are installment plans available?",
    answer: "Our fee structure is tailored to be highly accessible and affordable for families in Wan Bhachran and neighboring districts. Semester fees can be paid in easy, flexible monthly or quarterly installments.",
  },
  {
    category: "fees",
    question: "Are merit or need-based scholarships offered?",
    answer: "Yes! Nisab College provides special merit scholarships for board high-achievers and need-based financial concessions for deserving and underprivileged students.",
  },
  {
    category: "hostel",
    question: "Is there a dedicated hostel facility for female students?",
    answer: "Yes, we provide a secure, fully enclosed hostel facility exclusively for female students featuring 24/7 security guards, CCTV surveillance, hygienic mess catering, and daily transport to campus.",
  },
  {
    category: "hostel",
    question: "Which areas are covered by the college transport fleet?",
    answer: "College buses and vans cover major pickup routes across Wan Bhachran, Mianwali City, Piplan, Kundian, Musa Khel, and surrounding rural union councils.",
  },
  {
    category: "recognition",
    question: "Are your degree programs recognized by HEC and affiliated with universities?",
    answer: "All our academic degree programs are affiliated with the University of Sargodha and fully accredited by the Higher Education Commission (HEC) of Pakistan.",
  },
  {
    category: "recognition",
    question: "Where do students complete clinical hospital rotations?",
    answer: "Students undergo mandatory hands-on clinical rotations at District Headquarters Hospital (DHQ) Mianwali and affiliated specialty medical centers under senior consultants.",
  },
];

const faqsDataUr = [
  {
    category: "admissions",
    question: "ڈی پی ٹی (ڈاکٹر آف فزیکل تھراپی) میں داخلے کے لیے کیا اہلیت درکار ہے؟",
    answer: "امیدوار کا ایف ایس سی (پری میڈیکل) یا مساوی اے لیولز میں کم از کم 60 فیصد نمبروں کے ساتھ پاس ہونا ضروری ہے۔ داخلے کے لیے انٹری ٹیسٹ اور انٹرویو لازمی ہے۔",
  },
  {
    category: "admissions",
    question: "کیا رزلٹ کے منتظر طلباء داخلے کے لیے اپلائی کر سکتے ہیں؟",
    answer: "جی ہاں! انٹرمیڈیٹ یا میٹرک کے رزلٹ کے منتظر طلباء ہوپ سرٹیفکیٹ (Hope Certificate) کی بنیاد پر عارضی داخلے کے لیے درخواست دے سکتے ہیں۔",
  },
  {
    category: "fees",
    question: "فیس کا کیا طریقہ کار ہے اور کیا اقساط کی سہولت موجود ہے؟",
    answer: "نصاب کالج کا فیس اسٹرکچر انتہائی مناسب اور عوام دوست ہے۔ والدین کی سہولت کے لیے سمسٹر فیس آسان ماہانہ یا سہ ماہی اقساط میں ادا کی جا سکتی ہے۔",
  },
  {
    category: "fees",
    question: "کیا میرٹ یا مستحق طلباء کے لیے اسکالرشپس دستیاب ہیں؟",
    answer: "جی ہاں! بورڈ میں نمایاں پوزیشن حاصل کرنے والے طلباء کے لیے میرٹ اسکالرشپس اور مستحق و نادار طلباء کے لیے خصوصی مالی رعایت کی سہولت موجود ہے۔",
  },
  {
    category: "hostel",
    question: "کیا طالبات کے لیے محفوظ ہاسٹل اور رہائش دستیاب ہے؟",
    answer: "جی ہاں! طالبات کے لیے 24 گھنٹے سیکیورٹی، سی سی ٹی وی کیمروں، معیاری کھانے اور روزانہ ٹرانسپورٹ کی سہولت کے ساتھ پردے دار ہاسٹل موجود ہے۔",
  },
  {
    category: "hostel",
    question: "کالج کی ٹرانسپورٹ کن کن علاقوں کے لیے چلتی ہے؟",
    answer: "کالج کی بسیں اور وینز واں بھچراں، میانوالی شہر، پپلاں، کندیاں، موسیٰ خیل اور قریبی دیہاتوں کے روٹس پر باقاعدگی سے چلتی ہیں۔",
  },
  {
    category: "recognition",
    question: "کیا تمام پروگرامز ایچ ای سی اور یونیورسٹی سے الحاق شدہ ہیں؟",
    answer: "جی ہاں! نصاب کالج کے تمام ڈگری پروگرامز یونیورسٹی آف سرگودھا سے الحاق شدہ اور ہائر ایجوکیشن کمیشن (HEC) پاکستان سے تسلیم شدہ ہیں۔",
  },
  {
    category: "recognition",
    question: "طلباء کو ہسپتال میں عملی ٹریننگ کہاں کروائی جاتی ہے؟",
    answer: "طلباء کو ڈسٹرکٹ ہیڈ کوارٹر ہسپتال (DHQ) میانوالی اور نامور پارٹنر ہسپتالوں میں سینئر کنسلٹنٹس اور ڈاکٹرز کی زیرِ نگرانی عملی کلینیکل تربیت دی جاتی ہے۔",
  },
];

export default function FaqsClient() {
  const { isUrdu, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const rawList = isUrdu ? faqsDataUr : faqsDataEn;
  const filteredList =
    activeCategory === "all"
      ? rawList
      : rawList.filter((item) => item.category === activeCategory);

  const categories = [
    { id: "all", label: t("faqCatAll") },
    { id: "admissions", label: t("faqCatAdmissions") },
    { id: "fees", label: t("faqCatFees") },
    { id: "hostel", label: t("faqCatHostel") },
    { id: "recognition", label: t("faqCatRecognition") },
  ];

  return (
    <main>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <span className={styles.heroBadge}>{t("gotQuestionsLabel")}</span>
        <h1 className={styles.heroTitle}>{t("faqsPageTitle")}</h1>
        <p className={styles.heroSubtitle}>{t("faqsPageSubtitle")}</p>
      </section>

      {/* ── CONTENT ── */}
      <div className={styles.container}>
        {/* Category filter tabs */}
        <div className={styles.categoriesBar}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.catBtn} ${
                activeCategory === cat.id ? styles.catBtnActive : ""
              }`}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIdx(null);
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className={styles.faqList}>
          {filteredList.map((faq, idx) => (
            <div key={idx} className={styles.faqItem}>
              <button
                className={`${styles.faqQuestionBtn} ${
                  openIdx === idx ? styles.faqQuestionBtnActive : ""
                }`}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                style={{ textAlign: isUrdu ? "right" : "left" }}
              >
                <span>{faq.question}</span>
                <span className={styles.faqIcon}>
                  {openIdx === idx ? "−" : "+"}
                </span>
              </button>
              {openIdx === idx && (
                <div className={styles.faqAnswer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Help Banner */}
        <div className={styles.helpBanner}>
          <h3>{isUrdu ? "کیا آپ کے پاس کوئی اور سوال ہے؟" : "Still have questions?"}</h3>
          <p>
            {isUrdu
              ? "ہماری داخلہ ہیلپ ڈیسک سے براہِ راست رابطہ کریں یا واٹس ایپ پر پیغام بھیجیں۔"
              : "Feel free to get in touch directly with our admissions desk or message us on WhatsApp."}
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">
              {t("navContact")} →
            </Link>
            <a
              href="https://wa.me/923076813575"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp: 0307-6813575
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
