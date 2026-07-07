// ─────────────────────────────────────────────────────────────────────────────
// Nisab College — All Academic Programs
// Single source of truth consumed by Programs page, Admissions page, and Footer.
// ─────────────────────────────────────────────────────────────────────────────

export type ProgramCategory = "Medical" | "AD/BS" | "Professional";

export interface Program {
  id: string;               // URL-safe slug for anchors
  title: string;
  badge: string;            // short label shown on card (e.g. "5-Year Doctorate")
  category: ProgramCategory;
  duration: string;
  description: string;      // 1-2 lines of original copy
  eligibility: string[];    // English eligibility bullet points
  urduCriteria?: string[];  // Optional Urdu translation (medical programs only)
  waMessage: string;        // Pre-filled WhatsApp inquiry text
}

const WA_PREFIX = "Assalam-o-Alaikum! I am interested in the";
const WA_SUFFIX =
  "program at Nisab College, Wan Bhachran. Kindly share details about eligibility, fee structure, and upcoming admission dates. JazakAllah Khair.";

// ─────────────────────────────────────────────────────────────────────────────
// GROUP 1 — Medical & Allied Health Programs
// ─────────────────────────────────────────────────────────────────────────────
export const medicalPrograms: Program[] = [
  {
    id: "dpt",
    title: "DPT — Doctor of Physiotherapy",
    badge: "5-Year Professional Doctorate",
    category: "Medical",
    duration: "5 Years",
    description:
      "Train as a licensed physiotherapist under expert clinical supervision. This rigorous five-year program combines human anatomy, therapeutic techniques, and hands-on hospital practice to prepare you for a rewarding healthcare career.",
    eligibility: [
      "F.Sc (Pre-Medical) or A-Levels with a minimum of 60% aggregate marks.",
      "Diploma holders in a relevant healthcare field with at least 60% marks (annual system) or 3.00 CGPA on a 4.00 scale (semester system) are also eligible.",
      "All applicants must sit an entry test administered by a recognized testing agency or university.",
      "Shortlisted candidates will be called for a formal interview conducted by the university.",
    ],
    urduCriteria: [
      "ایف ایس سی (پری میڈیکل) یا اے لیولز کے ساتھ کم از کم 60% نمبروں کے ساتھ امیدوار درخواست دینے کے اہل ہیں۔",
      "متعلقہ فیلڈ میں ڈپلومہ کے ساتھ امیدوار سالانہ سسٹم میں کم از کم 60% نمبروں کے ساتھ یا سمسٹر سسٹم میں 4.00 کے سکیل پر 3.00 CGPA کے ساتھ امیدوار درخواست دینے کے اہل ہیں۔",
      "امیدوار کو کسی بھی رجسٹرڈ ٹیسٹنگ ایجنسی یا یونیورسٹی کے ذریعہ منعقد ہونے والے انٹری ٹیسٹ میں شرکت کرنا ہوگی۔",
      "امیدوار یونیورسٹی کے ذریعہ کئے جانے والے انٹرویو میں حاضر ہوں گے۔",
    ],
    waMessage: `${WA_PREFIX} DPT (Doctor of Physiotherapy) ${WA_SUFFIX}`,
  },
  {
    id: "ad-mlt",
    title: "Associate Degree in Medical Lab Technology",
    badge: "2-Year Associate Degree",
    category: "Medical",
    duration: "2 Years",
    description:
      "Build a solid foundation in clinical laboratory sciences through intensive practical sessions. Graduates are equipped to perform diagnostic procedures and support frontline healthcare teams in hospitals and labs.",
    eligibility: [
      "F.Sc (Pre-Medical or MLT) or A-Levels with a minimum of 50% aggregate marks.",
      "Diploma holders in a relevant healthcare field with at least 50% marks (annual system) or 3.00 CGPA on a 4.00 scale (semester system) are also eligible.",
      "All applicants must appear in an entry test conducted by a recognized testing agency or university.",
      "Shortlisted candidates will attend an interview held by the university.",
    ],
    urduCriteria: [
      "ایف ایس سی (پری میڈیکل / ایم ایل ٹی) کم از کم 50 فیصد نمبروں کے ساتھ اے لیولز کے ساتھ امیدوار درخواست دینے کے اہل ہیں۔",
      "متعلقہ فیلڈ میں ڈپلومہ کے ساتھ امیدوار سالانہ سسٹم میں کم از کم 50% نمبروں کے ساتھ یا سمسٹر سسٹم میں 4.00 کے سکیل پر 3.00 CGPA کے ساتھ امیدوار درخواست دینے کے اہل ہیں۔",
      "امیدوار کو کسی بھی رجسٹرڈ ٹیسٹنگ ایجنسی یا یونیورسٹی کے ذریعہ منعقد ہونے والے انٹری ٹیسٹ میں شرکت کرنا ہوگی۔",
      "امیدوار یونیورسٹی کے ذریعہ کئے جانے والے انٹرویو میں حاضر ہوں گے۔",
    ],
    waMessage: `${WA_PREFIX} Associate Degree in Medical Lab Technology ${WA_SUFFIX}`,
  },
  {
    id: "bs-radiology",
    title: "B.Sc Radiology & Imaging Technology",
    badge: "4-Year Bachelor's Degree",
    category: "Medical",
    duration: "4 Years",
    description:
      "Master the science behind diagnostic imaging — from X-ray and ultrasound to MRI and CT scanning. This four-year program provides the technical expertise and patient-care skills demanded by modern radiology departments.",
    eligibility: [
      "F.Sc (Pre-Medical) or A-Levels with a minimum of 50% aggregate marks.",
      "Diploma holders in a relevant field with at least 50% marks (annual system) or 2.00 CGPA on a 4.00 scale (semester system) are also eligible.",
      "All applicants must sit an entry test conducted by a recognized testing agency or university.",
      "Shortlisted candidates will be called for a formal interview by the university.",
    ],
    urduCriteria: [
      "ایف ایس سی (پری میڈیکل) کم از کم 50 فیصد نمبروں کے ساتھ اے لیولز کے ساتھ امیدوار درخواست دینے کے اہل ہیں۔",
      "متعلقہ فیلڈ میں ڈپلومہ کے ساتھ امیدوار سالانہ سسٹم میں کم از کم 50% نمبروں کے ساتھ یا سمسٹر سسٹم میں 4.00 کے سکیل پر 2.00 CGPA کے ساتھ امیدوار درخواست دینے کے اہل ہیں۔",
      "امیدوار کو کسی بھی رجسٹرڈ ٹیسٹنگ ایجنسی یا یونیورسٹی کے ذریعہ منعقد ہونے والے انٹری ٹیسٹ میں شرکت کرنا ہوگی۔",
      "امیدوار یونیورسٹی کے ذریعہ کئے جانے والے انٹرویو میں حاضر ہوں گے۔",
    ],
    waMessage: `${WA_PREFIX} B.Sc Radiology & Imaging Technology ${WA_SUFFIX}`,
  },
  {
    id: "bs-surgical",
    title: "B.Sc Surgical Technology",
    badge: "4-Year Bachelor's Degree",
    category: "Medical",
    duration: "4 Years",
    description:
      "Step into the operating theatre with the knowledge and confidence to assist surgical teams effectively. The program covers sterile technique, instrument handling, patient safety, and live surgical rotations.",
    eligibility: [
      "F.Sc (Pre-Medical, Surgical, or OT) or A-Levels with a minimum of 50% aggregate marks.",
      "Diploma holders in a relevant surgical or allied health field with at least 50% marks (annual system) or 2.00 CGPA on a 4.00 scale (semester system) are also eligible.",
      "All applicants must sit an entry test conducted by a recognized testing agency or university.",
      "Shortlisted candidates will attend an interview held by the university.",
    ],
    urduCriteria: [
      "ایف ایس سی (پری میڈیکل، سرجیکل / او۔ٹی) کم از کم 50 فیصد نمبروں کے ساتھ اے لیولز کے ساتھ امیدوار درخواست دینے کے اہل ہیں۔",
      "متعلقہ فیلڈ میں ڈپلومہ کے ساتھ امیدوار سالانہ سسٹم میں کم از کم 50% نمبروں کے ساتھ یا سمسٹر سسٹم میں 4.00 کے سکیل پر 2.00 CGPA کے ساتھ امیدوار درخواست دینے کے اہل ہیں۔",
      "امیدوار کو کسی بھی رجسٹرڈ ٹیسٹنگ ایجنسی یا یونیورسٹی کے ذریعہ منعقد ہونے والے انٹری ٹیسٹ میں شرکت کرنا ہوگی۔",
      "امیدوار یونیورسٹی کے ذریعہ کئے جانے والے انٹرویو میں حاضر ہوں گے۔",
    ],
    waMessage: `${WA_PREFIX} B.Sc Surgical Technology ${WA_SUFFIX}`,
  },
  {
    id: "bs-mlt",
    title: "B.Sc Medical Lab Technology",
    badge: "4-Year Bachelor's Degree",
    category: "Medical",
    duration: "4 Years",
    description:
      "A comprehensive four-year degree in laboratory medicine covering haematology, microbiology, biochemistry, and histopathology. Credit-transfer pathways allow associate degree holders to join from the 5th semester.",
    eligibility: [
      "F.Sc (Pre-Medical or MLT) or A-Levels with a minimum of 50% aggregate marks.",
      "Diploma holders in a relevant field with at least 50% marks (annual system) or 3.00 CGPA on a 4.00 scale (semester system) are eligible.",
      "Holders of an Associate Degree in a relevant discipline with at least 2.00 CGPA from a recognized institution may enter directly into the 5th semester (following the 5th–8th semester scheme).",
      "Candidates with a Bachelor's degree (14 years of education) at 50%+ marks, or an Associate Degree in an unrelated discipline at 2.00+ CGPA, may join through the bridge programme.",
      "All applicants must sit an entry test conducted by a recognized testing agency or university.",
      "Shortlisted candidates will be called for a formal interview by the university.",
    ],
    urduCriteria: [
      "ایف ایس سی (پری میڈیکل / ایم ایل ٹی) یا کم از کم 50 فیصد نمبروں کے ساتھ اے لیول والے امیدوار درخواست دینے کے اہل ہیں۔",
      "سالانہ سسٹم میں کم از کم 50% نمبروں کے ساتھ متعلقہ فیلڈ میں ڈپلومہ یا سمسٹر سسٹم میں 4.00 کے سکیل پر 3.00 CGPA کے ساتھ امیدوار درخواست دینے کے اہل ہیں۔",
      "کسی بھی تسلیم شدہ یونیورسٹی / ادارے سے 4.00 کے پیمانے پر کم از کم 2.00 CGPA کے ساتھ متعلقہ نظم و ضبط میں ایسوسی ایٹ ڈگری رکھنے والے امیدوار اپنے ڈگری پروگرام کے 5ویں سمسٹر سے شامل ہوں گے۔",
      "سالانہ سسٹم میں کم از کم 50 فیصد نمبروں کے ساتھ بیچلر (14 سال کی تعلیم) رکھنے والے امیدوار برج سسٹم کے ذریعے شامل ہوں گے۔",
      "امیدوار کو کسی بھی رجسٹرڈ ٹیسٹنگ ایجنسی یا یونیورسٹی کے ذریعہ منعقد ہونے والے انٹری ٹیسٹ میں شرکت کرنا ہوگی۔",
      "امیدوار یونیورسٹی کے ذریعہ کئے جانے والے انٹرویو میں حاضر ہوں گے۔",
    ],
    waMessage: `${WA_PREFIX} B.Sc Medical Lab Technology ${WA_SUFFIX}`,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// GROUP 2 — AD / BS (5th Semester) Programs
// Shared eligibility: HSSC / Intermediate (12 years), min 45–50% marks.
// ─────────────────────────────────────────────────────────────────────────────
const adBsEligibility: string[] = [
  "Completion of HSSC / Intermediate or an equivalent qualification (12 years of formal schooling) from a recognized board.",
  "A minimum aggregate of 45–50% marks in the qualifying examination (exact threshold varies by programme and affiliated university).",
  "Students who already hold an Associate Degree in a relevant discipline from a recognized institution may apply directly for the 5th-semester entry pathway.",
  "All applicants must provide original academic certificates and a valid CNIC / B-Form at the time of admission.",
];

export const adBsPrograms: Program[] = [
  {
    id: "ad-bs-sspe",
    title: "AD / BS — Special Education (SSPE)",
    badge: "AD / BS — 5th Semester Entry",
    category: "AD/BS",
    duration: "2 Years (AD) / 4 Years (BS)",
    description:
      "Develop the skills to support and empower learners with diverse educational needs. This programme blends theory with supervised fieldwork, preparing compassionate professionals for inclusive classroom environments across Pakistan.",
    eligibility: adBsEligibility,
    waMessage: `${WA_PREFIX} AD/BS in Special Education (SSPE) ${WA_SUFFIX}`,
  },
  {
    id: "ad-bs-urdu",
    title: "AD / BS — Urdu",
    badge: "AD / BS — 5th Semester Entry",
    category: "AD/BS",
    duration: "2 Years (AD) / 4 Years (BS)",
    description:
      "Deepen your mastery of the national language through the study of classical literature, linguistics, and contemporary Urdu prose. Graduates pursue careers in journalism, education, publishing, and civil services.",
    eligibility: adBsEligibility,
    waMessage: `${WA_PREFIX} AD/BS in Urdu ${WA_SUFFIX}`,
  },
  {
    id: "ad-bs-english",
    title: "AD / BS — English",
    badge: "AD / BS — 5th Semester Entry",
    category: "AD/BS",
    duration: "2 Years (AD) / 4 Years (BS)",
    description:
      "Sharpen your command of the English language through exposure to world literature, academic writing, and applied linguistics. Ideal for students aiming at teaching, translation, media, or postgraduate study abroad.",
    eligibility: adBsEligibility,
    waMessage: `${WA_PREFIX} AD/BS in English ${WA_SUFFIX}`,
  },
  {
    id: "ad-bs-fine-art",
    title: "AD / BS — Fine Arts",
    badge: "AD / BS — 5th Semester Entry",
    category: "AD/BS",
    duration: "2 Years (AD) / 4 Years (BS)",
    description:
      "Cultivate your creative vision across painting, printmaking, sculpture, and digital media. Studio-based instruction combined with art history and criticism produces graduates ready for professional practice and arts education.",
    eligibility: adBsEligibility,
    waMessage: `${WA_PREFIX} AD/BS in Fine Arts ${WA_SUFFIX}`,
  },
  {
    id: "ad-bs-education",
    title: "AD / BS — Education",
    badge: "AD / BS — 5th Semester Entry",
    category: "AD/BS",
    duration: "2 Years (AD) / 4 Years (BS)",
    description:
      "Lay the groundwork for a fulfilling career in teaching and educational leadership. The curriculum covers pedagogy, curriculum design, and classroom management, with practical school-placement components built into every semester.",
    eligibility: adBsEligibility,
    waMessage: `${WA_PREFIX} AD/BS in Education ${WA_SUFFIX}`,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// GROUP 3 — Professional Degree Programs
// ─────────────────────────────────────────────────────────────────────────────
export const professionalPrograms: Program[] = [
  {
    id: "bba",
    title: "BBA — Bachelor of Business Administration",
    badge: "4-Year Professional Degree",
    category: "Professional",
    duration: "4 Years",
    description:
      "Launch your business career with a rigorous programme covering management, marketing, accounting, and entrepreneurship. Open to students from Science, Arts, and Commerce backgrounds, the BBA develops the analytical and leadership skills employers demand.",
    eligibility: [
      "HSSC / Intermediate or an equivalent qualification from any recognized board — Science, Arts, and Commerce streams are all welcome.",
      "A minimum aggregate of approximately 45% marks in the qualifying examination (exact requirement may vary by affiliated university).",
      "No prior business or commerce background is required; the programme is designed for students from any academic discipline.",
      "All applicants must submit original certificates, CNIC / B-Form, and recent passport-sized photographs at enrolment.",
    ],
    waMessage: `${WA_PREFIX} BBA (Bachelor of Business Administration) ${WA_SUFFIX}`,
  },
  {
    id: "bed-1-5",
    title: "B.Ed 1.5 — Bachelor of Education (1.5 Years)",
    badge: "1.5-Year Teaching Credential",
    category: "Professional",
    duration: "1.5 Years",
    description:
      "A focused teaching credential for graduates who wish to enter the classroom quickly. The accelerated curriculum covers educational psychology, instructional design, and assessed school-based teaching practice.",
    eligibility: [
      "A bachelor's degree (14 years of education) in any subject from a recognized university is required.",
      "Minimum 45% marks in the bachelor's degree (or equivalent CGPA as specified by the affiliated university).",
      "Candidates are encouraged to have completed a teaching internship or volunteer classroom experience, though it is not mandatory.",
      "All applicants must submit original degree/transcript, CNIC, and complete the prescribed admission form.",
    ],
    waMessage: `${WA_PREFIX} B.Ed 1.5 (Bachelor of Education) ${WA_SUFFIX}`,
  },
  {
    id: "bed-2-5",
    title: "B.Ed 2.5 — Bachelor of Education (2.5 Years)",
    badge: "2.5-Year Teaching Degree",
    category: "Professional",
    duration: "2.5 Years",
    description:
      "A comprehensive teaching degree that goes beyond methodology to build subject mastery and professional identity. Extensive school placements and research projects ensure graduates are confident, reflective practitioners.",
    eligibility: [
      "A bachelor's degree (14 years of education) in any discipline from a recognized university is required.",
      "Minimum 45% marks in the bachelor's degree (specific CGPA requirement may apply depending on the affiliated university).",
      "Preference may be given to candidates who already hold teaching experience in a school setting.",
      "All applicants must submit original degree/transcript, CNIC, and the completed admission form before the deadline.",
    ],
    waMessage: `${WA_PREFIX} B.Ed 2.5 (Bachelor of Education) ${WA_SUFFIX}`,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Convenience export — all programs in one flat array
// ─────────────────────────────────────────────────────────────────────────────
export const allPrograms: Program[] = [
  ...medicalPrograms,
  ...adBsPrograms,
  ...professionalPrograms,
];
