"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";

const WA_NUMBER = "923076813575";

const jobsEn = [
  {
    icon: "📋",
    title: "Admission Officer",
    department: "Administration",
    type: "Full-Time",
    gender: "Female Only",
    urgent: true,
    description:
      "We are looking for a motivated, organized, and student-focused Admission Officer to manage our student intake process. You will be the first point of contact for prospective students and their families, guiding them through the admissions journey from inquiry to enrollment.",
    requirements: [
      "Bachelor's degree in any field (preferably Education, Management, or Social Sciences)",
      "Minimum 1-2 years of experience in an educational institution",
      "Excellent communication skills in Urdu and English",
      "Proficient in MS Office (Word, Excel, PowerPoint)",
      "Strong interpersonal and organizational skills",
      "Ability to handle high-volume inquiries calmly and professionally",
    ],
    responsibilities: [
      "Counsel prospective students about available programs",
      "Manage and update student application records",
      "Coordinate entry tests and interview schedules",
      "Communicate admission decisions to applicants",
      "Maintain student enrollment database",
      "Prepare monthly admission reports",
    ],
    salary: "Competitive (Based on Experience)",
    location: "Wan Bhachran, Mianwali",
    deadline: "Open Until Filled",
    waMessage: "Hello! I am interested in the Admission Officer position at Nisab College. Please share more details about the role and how I can apply.",
  },
  {
    icon: "📖",
    title: "English Language Teacher",
    department: "English Department",
    type: "Full-Time",
    gender: "Female Only",
    urgent: false,
    description:
      "Nisab College is seeking an enthusiastic and qualified English Language Teacher to inspire students to excel in communication. You will design and deliver engaging lessons that develop students' reading, writing, listening, and speaking skills to meet both academic and professional standards.",
    requirements: [
      "Bachelor's or Master's degree in English Literature / Applied Linguistics / TESOL",
      "B.Ed or teaching certification preferred",
      "Minimum 1 year teaching experience (fresher with strong skills may apply)",
      "Excellent spoken and written English",
      "Strong classroom management skills",
      "Ability to use modern teaching methodologies (CLT, Task-Based Learning, etc.)",
    ],
    responsibilities: [
      "Plan and deliver engaging English language classes",
      "Develop lesson plans aligned with the curriculum",
      "Assess and evaluate student progress regularly",
      "Prepare students for English proficiency tests",
      "Conduct speaking and writing workshops",
      "Maintain student attendance and grade records",
    ],
    salary: "PKR 25,000 – 40,000 / month",
    location: "Wan Bhachran, Mianwali",
    deadline: "Open Until Filled",
    waMessage: "Assalam-o-Alaikum! I am interested in the English Teacher position at Nisab College. I would like to know more about the requirements and application process.",
  },
  {
    icon: "🔬",
    title: "Lab Technician / Demonstrator",
    department: "Medical Lab Technology",
    type: "Full-Time",
    gender: "Female Preferred",
    urgent: false,
    description:
      "We are hiring a skilled Lab Technician / Demonstrator to support our Medical Lab Technology and Allied Health programs. You will assist faculty in conducting practical laboratory sessions and ensure all lab equipment and specimens are properly maintained.",
    requirements: [
      "B.Sc or Associate Degree in Medical Lab Technology (MLT)",
      "Minimum 1 year hands-on lab experience",
      "Knowledge of clinical laboratory procedures and safety protocols",
      "Ability to operate and maintain lab instruments",
      "Good communication and organizational skills",
      "DVM supervision experience is a plus",
    ],
    responsibilities: [
      "Assist in conducting practical lab sessions for students",
      "Prepare lab specimens, reagents, and materials before sessions",
      "Ensure proper maintenance and calibration of lab equipment",
      "Maintain lab safety standards and hygiene protocols",
      "Guide students through lab procedures and demonstrations",
      "Record and manage lab inventory and supplies",
    ],
    salary: "PKR 20,000 – 35,000 / month",
    location: "Wan Bhachran, Mianwali",
    deadline: "Open Until Filled",
    waMessage: "Hello! I am interested in the Lab Technician / Demonstrator position at Nisab College. Please guide me about the requirements and how to apply.",
  },
];

const jobsUr = [
  {
    icon: "📋",
    title: "ایڈمیشن آفیسر",
    department: "انتظامیہ",
    type: "فل ٹائم",
    gender: "صرف خواتین",
    urgent: true,
    description:
      "ہمیں نصاب کالج میں طلباء کے داخلے کا انتظام سنبھالنے کے لیے ایک باصلاحیت اور فعال ایڈمیشن آفیسر کی ضرورت ہے۔ آپ نئے آنے والے طلباء اور والدین کی رہنمائی اور کاؤنسلنگ کریں گی۔",
    requirements: [
      "کسی بھی شعبے میں بیچلر ڈگری (ترجیحاً ایجوکیشن، مینجمنٹ یا سوشل سائنسز)",
      "تعلیمی ادارے میں کم از کم 1 سے 2 سال کا تجربہ",
      "اردو اور انگریزی زبان میں بہترین گفتگو کی صلاحیت",
      "ایم ایس آفس (ورڈ، ایکسل، پاورپوائنٹ) میں مہارت",
      "بہترین تنظیمی صلاحیتیں اور خوش اخلاقی",
      "کالز اور سوالات کو تحمل اور پیشہ ورانہ انداز میں حل کرنے کی صلاحیت",
    ],
    responsibilities: [
      "امیدوار طلباء کو پروگرامز کے بارے میں رہنمائی فراہم کرنا",
      "داخلہ فارمز اور ریکارڈ کو اپ ڈیٹ اور منظم رکھنا",
      "انٹری ٹیسٹ اور انٹرویو کا شیڈول ترتیب دینا",
      "کامیاب امیدواروں کو داخلے سے متعلق آگاہ کرنا",
      "طلباء کا داخلہ ڈیٹا بیس برقرار رکھنا",
      "ماہانہ ایڈمیشن رپورٹس تیار کرنا",
    ],
    salary: "حسبِ تجربہ (پرکشش تنخواہ)",
    location: "واں بھچراں، میانوالی",
    deadline: "تاحکمِ ثانی جاری",
    waMessage: "السلام علیکم! میں نصاب کالج میں ایڈمیشن آفیسر کی اسامی کے لیے معلومات اور اپلائی کرنے کا طریقہ جاننا چاہتی ہوں۔",
  },
  {
    icon: "📖",
    title: "انگلش لینگویج ٹیچر",
    department: "شعبہ انگریزی",
    type: "فل ٹائم",
    gender: "صرف خواتین",
    urgent: false,
    description:
      "نصاب کالج کو طلباء کی انگریزی بول چال، گرامر اور تحریری صلاحیتوں کو نکھارنے کے لیے تجربہ کار اور پرجوش خاتون استاد کی ضرورت ہے۔",
    requirements: [
      "انگلش لٹریچر / اپلائیڈ لنگوئسٹکس میں بی ایس یا ماسٹرز ڈگری",
      "بی ایڈ یا ٹیچنگ سرٹیفکیٹ کو ترجیح دی جائے گی",
      "کم از کم 1 سال تدریسی تجربہ (مضبوط مہارت کی حامل فریش گریجویٹس بھی اہل ہیں)",
      "انگریزی بولنے اور لکھنے میں مکمل روانی",
      "کلاس روم مینجمنٹ کی بہترین صلاحیت",
      "جدید تدریسی طریقہ کار سے واقفیت",
    ],
    responsibilities: [
      "انگریزی زبان کی باقاعدہ اور دلچسپ کلاسز کا انعقاد",
      "نصاب کے مطابق موثر سبق کا خاکہ تیار کرنا",
      "طلباء کی تعلیمی کارکردگی کا باقاعدہ جائزہ لینا",
      "طلباء کو انگلش ٹیسٹ اور انٹرویوز کے لیے تیار کرنا",
      "اسپیکنگ اور رائٹنگ ورکشاپس کروانا",
      "حاضری اور گریڈز کا ریکارڈ مرتب رکھنا",
    ],
    salary: "25,000 تا 40,000 روپے ماہانہ",
    location: "واں بھچراں، میانوالی",
    deadline: "تاحکمِ ثانی جاری",
    waMessage: "السلام علیکم! میں نصاب کالج میں انگلش ٹیچر کی اسامی کے لیے معلومات اور اپلائی کرنے کا طریقہ جاننا چاہتی ہوں۔",
  },
  {
    icon: "🔬",
    title: "لیب ٹیکنیشن / ڈیمونسٹریٹر",
    department: "میڈیکل لیب ٹیکنالوجی",
    type: "فل ٹائم",
    gender: "خواتین کو ترجیح",
    urgent: false,
    description:
      "ہمیں اپنے میڈیکل لیب ٹیکنالوجی اور الائیڈ ہیلتھ پروگرامز کے پریکٹیکل سیشنز کے لیے ایک ماہر لیب ٹیکنیشن کی ضرورت ہے جو لیب آلات اور نمونہ جات کی حفاظت کو یقینی بنا سکے۔",
    requirements: [
      "میڈیکل لیب ٹیکنالوجی (MLT) میں بی ایس سی یا ایسوسی ایٹ ڈگری",
      "لیبارٹری میں کم از کم 1 سال کا عملی تجربہ",
      "کلینیکل لیبارٹری پروسیجرز اور سیفٹی پروٹوکول کا مکمل علم",
      "لیب آلات چلانے اور ان کی دیکھ بھال کی صلاحیت",
      "اچھی باہمی رابطے کی مہارتیں",
      "ڈی وی ایم یا سینئر ڈاکٹر کی نگرانی میں کام کا تجربہ اضافی خوبی ہوگی",
    ],
    responsibilities: [
      "طلباء کے عملی لیب سیشنز کے انعقاد میں فیکلٹی کی معاونت",
      "سیشن سے قبل نمونہ جات اور ری ایجنٹس کی تیاری",
      "لیبارٹری کے آلات کی دیکھ بھال اور کیلیبریشن",
      "حفظانِ صحت اور حفاظتی ضوابط کی مکمل پابندی",
      "طلباء کو پریکٹیکل پروسیجرز کی عملی رہنمائی فراہم کرنا",
      "لیب انوینٹری اور سامان کا باقاعدہ اندراج رکھنا",
    ],
    salary: "20,000 تا 35,000 روپے ماہانہ",
    location: "واں بھچراں، میانوالی",
    deadline: "تاحکمِ ثانی جاری",
    waMessage: "السلام علیکم! میں نصاب کالج میں لیب ٹیکنیشن کی اسامی کے لیے اپلائی کرنے کی تفصیلات جاننا چاہتی ہوں۔",
  },
];

const perksEn = [
  { icon: "💰", title: "Competitive Salary", desc: "We offer market-competitive salaries with performance-based increments." },
  { icon: "📈", title: "Career Growth", desc: "Clear promotion pathways and professional development opportunities." },
  { icon: "🎓", title: "Learning Culture", desc: "Work in an environment that values continuous learning and innovation." },
  { icon: "⏰", title: "Work-Life Balance", desc: "Regular office hours (Mon–Sat, 8 AM – 4 PM) with all public holidays." },
  { icon: "🤝", title: "Supportive Team", desc: "Join a passionate team dedicated to shaping the next generation of healthcare professionals." },
  { icon: "🌟", title: "Meaningful Work", desc: "Make a real difference in students' lives and your community." },
];

const perksUr = [
  { icon: "💰", title: "پرکشش معاوضہ", desc: "مارکیٹ کے مطابق مسابقتی تنخواہ اور کارکردگی کی بنیاد پر مراعات۔" },
  { icon: "📈", title: "ترقی کے مواقع", desc: "پیشہ ورانہ ترقی اور کیریئر میں آگے بڑھنے کے واضح راستے۔" },
  { icon: "🎓", title: "تعلیمی ماحول", desc: "ایک ایسا ماحول جہاں نئی مہارتیں سیکھنے اور جدت پسندی کی حوصلہ افزائی کی جاتی ہے۔" },
  { icon: "⏰", title: "بہترین دفتری اوقات", desc: "پیر تا ہفتہ، صبح 8:00 تا شام 4:00 بجے بمعہ تمام سرکاری تعطیلات۔" },
  { icon: "🤝", title: "ہمدرد اور باوقار ٹیم", desc: "ایک باصلاحیت اور مخلص ٹیم کا حصہ بنیں جو قوم کے مستقبل کو سنوار رہی ہے۔" },
  { icon: "🌟", title: "بامقصد خدمات", desc: "طلباء کی زندگیوں اور اپنے معاشرے میں مثبت اور پائیدار تبدیلی لائیں۔" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, type: "spring" as const, stiffness: 180, damping: 22 },
  }),
};

export default function JobsPage() {
  const { isUrdu, t } = useLanguage();
  const jobs = isUrdu ? jobsUr : jobsEn;
  const perks = isUrdu ? perksUr : perksEn;

  return (
    <main>
      {/* ── HERO ── */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={styles.heroBadge}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          🟢 {isUrdu ? "ملازمت کے مواقع" : "NOW HIRING"}
        </motion.div>
        <motion.h1
          className={styles.heroTitle}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {t("careersTitle")}
        </motion.h1>
        <motion.p
          className={styles.heroSubtitle}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {t("careersSubtitle")}
        </motion.p>
        <motion.div
          className={styles.heroNotice}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          <span>👩</span>
          <span>{t("femaleOnlyNotice")}</span>
        </motion.div>
      </motion.section>

      {/* ── OPEN POSITIONS ── */}
      <div className={styles.jobsContainer}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>{t("openPositionsLabel")}</div>
          <h2 className={styles.sectionTitle}>{t("currentJobOpeningsTitle")}</h2>
          <div className={styles.sectionDivider}></div>
        </div>

        <div className={styles.jobsGrid}>
          {jobs.map((job, index) => {
            const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(job.waMessage)}`;

            return (
              <motion.article
                key={index}
                className={styles.jobCard}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
              >
                <div className={styles.jobCardHeader}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", flex: 1 }}>
                    <div className={styles.jobIcon}>{job.icon}</div>
                    <div className={styles.jobTitleGroup}>
                      <h2 className={styles.jobTitle}>{job.title}</h2>
                      <div className={styles.jobMeta}>
                        <span className={`${styles.jobTag} ${styles.tagDept}`}>{job.department}</span>
                        <span className={`${styles.jobTag} ${styles.tagType}`}>{job.type}</span>
                        <span className={`${styles.jobTag} ${styles.tagGender}`}>{job.gender}</span>
                        {job.urgent && <span className={`${styles.jobTag} ${styles.tagUrgent}`}>⚡ {isUrdu ? "فوری ضرورت" : "Urgent"}</span>}
                      </div>
                    </div>
                  </div>
                  <div className={styles.jobStatus}>
                    <span className={styles.statusBadge}>{t("openBadge")}</span>
                    <span className={styles.deadline}>📅 {job.deadline}</span>
                  </div>
                </div>

                <div className={styles.jobCardBody}>
                  <p className={styles.jobDescription}>{job.description}</p>

                  <details className={styles.jobDetails}>
                    <summary className={styles.jobDetailsSummary} style={{ fontFamily: "inherit" }}>
                      {t("viewReqsAndResp")}
                    </summary>
                    <div className={styles.jobDetailsContent}>
                      <div className={styles.requirementsGrid}>
                        <div className={styles.requirementGroup}>
                          <h4>{t("requirementsTitle")}</h4>
                          <ul className={styles.requirementList}>
                            {job.requirements.map((r, i) => <li key={i}>{r}</li>)}
                          </ul>
                        </div>
                        <div className={styles.requirementGroup}>
                          <h4>{t("responsibilitiesTitle")}</h4>
                          <ul className={styles.requirementList}>
                            {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className={styles.jobCardFooter}>
                  <div className={styles.footerInfo}>
                    <div className={styles.footerInfoItem}>
                      💰 <strong>{t("salaryLabel")}</strong>&nbsp;{job.salary}
                    </div>
                    <div className={styles.footerInfoItem}>
                      📍 <strong>{t("locationLabel")}</strong>&nbsp;{job.location}
                    </div>
                  </div>
                  <div className={styles.applyButtons}>
                    <a href={`mailto:info@nisabcollege.edu.pk?subject=Job Application: ${job.title}`} className={styles.btnApply}>
                      {t("applyViaEmail")}
                    </a>
                    <a href={waUrl} target="_blank" rel="noopener noreferrer" className={styles.btnWhatsApp}>
                      <svg viewBox="0 0 24 24" fill="white" width="16" height="16" style={{ marginInlineEnd: "6px" }}>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      {t("applyOnWa")}
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* ── PERKS ── */}
      <section className={styles.perksSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>{t("whyJoinUsLabel")}</div>
          <h2 className={styles.sectionTitle}>{t("lifeAtNisabTitle")}</h2>
          <div className={styles.sectionDivider}></div>
        </div>
        <div className={styles.perksGrid}>
          {perks.map((perk, i) => (
            <motion.div
              key={i}
              className={styles.perkCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={styles.perkIcon}>{perk.icon}</div>
              <div className={styles.perkTitle}>{perk.title}</div>
              <p className={styles.perkDesc}>{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <motion.section
        className={styles.ctaBanner}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>{t("readyToJoinTeamTitle")}</h2>
        <p>{t("readyToJoinTeamDesc")}</p>
        <div className={styles.ctaButtons}>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(isUrdu ? "السلام علیکم! میں نصاب کالج میں ملازمت کے لیے رابطہ کرنا چاہتی ہوں۔" : "Hello! I am interested in joining the Nisab College team. Please let me know about available positions and how I can apply.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaWa}
          >
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20" style={{ marginInlineEnd: "6px" }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t("chatOnWaBtn")}
          </a>
          <a href="mailto:info@nisabcollege.edu.pk?subject=Job Application - Nisab College" className={styles.ctaEmail}>
            {t("sendCvViaEmailBtn")}
          </a>
        </div>
      </motion.section>
    </main>
  );
}
