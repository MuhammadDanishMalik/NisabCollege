// ─────────────────────────────────────────────────────────────────────────────
// Nisab College — All Academic Programs
// Single source of truth consumed by Programs page, Admissions page, and Footer.
// ─────────────────────────────────────────────────────────────────────────────

export type ProgramCategory = 
  | "Intermediate" 
  | "Allied Health" 
  | "Diploma" 
  | "Medical Degree" 
  | "Freelancing" 
  | "AD/BS & Professional";

export interface Program {
  id: string;               // URL-safe slug for anchors
  title: string;
  titleUr?: string;
  badge: string;            // short label shown on card
  badgeUr?: string;
  category: ProgramCategory;
  categoryUr?: string;
  duration: string;
  durationUr?: string;
  description: string;      // 1-2 lines of original copy
  descriptionUr?: string;
  eligibility: string[];    // English eligibility bullet points
  eligibilityUr?: string[]; // Urdu eligibility bullet points
  urduCriteria?: string[];  // Optional Urdu translation
  waMessage: string;        // Pre-filled WhatsApp inquiry text
}

const WA_PREFIX = "Assalam-o-Alaikum! I am interested in the";
const WA_SUFFIX =
  "program at Nisab College, Wan Bhachran. Kindly share details about eligibility, fee structure, and upcoming admission dates. JazakAllah Khair.";

// ─────────────────────────────────────────────────────────────────────────────
// GROUP 1 — Intermediate Programs
// ─────────────────────────────────────────────────────────────────────────────
export const intermediatePrograms: Program[] = [
  {
    id: "fsc-pre-medical",
    title: "FSc (Pre-Medical)",
    titleUr: "ایف ایس سی (پری میڈیکل)",
    badge: "Intermediate",
    badgeUr: "انٹرمیڈیٹ",
    category: "Intermediate",
    categoryUr: "انٹرمیڈیٹ",
    duration: "2 Years",
    durationUr: "2 سال",
    description: "A foundational program leading to fields like medicine, dentistry, allied health sciences, pharmacy, biotechnology, and related healthcare sectors.",
    descriptionUr: "میڈیسن، ڈینٹسٹری، الائیڈ ہیلتھ سائنسز، فارمیسی، بائیوٹیکنالوجی اور شعبہ صحت کے دیگر شعبوں کے لیے بنیادی تعلیمی پروگرام۔",
    eligibility: ["Matric (Science) with the board’s required minimum marks."],
    eligibilityUr: ["میٹرک (سائنس) متعلقہ تعلیمی بورڈ کے مقرر کردہ کم از کم نمبروں کے ساتھ۔"],
    waMessage: `${WA_PREFIX} FSc (Pre-Medical) ${WA_SUFFIX}`,
  },
  {
    id: "fsc-pre-engineering",
    title: "FSc (Pre-Engineering)",
    titleUr: "ایف ایس سی (پری انجینئرنگ)",
    badge: "Intermediate",
    badgeUr: "انٹرمیڈیٹ",
    category: "Intermediate",
    categoryUr: "انٹرمیڈیٹ",
    duration: "2 Years",
    durationUr: "2 سال",
    description: "Designed for students aiming for careers in engineering, computer science, architecture, and advanced technology fields.",
    descriptionUr: "انجینئرنگ، کمپیوٹر سائنس، آرکیٹیکچر اور جدید ٹیکنالوجی کے شعبوں میں مستقبل بنانے والے طلباء کے لیے۔",
    eligibility: ["Matric (Science) with mathematics."],
    eligibilityUr: ["میٹرک (سائنس) بمعہ ریاضی۔"],
    waMessage: `${WA_PREFIX} FSc (Pre-Engineering) ${WA_SUFFIX}`,
  },
  {
    id: "ics",
    title: "ICS (Intermediate in Computer Science)",
    titleUr: "آئی سی ایس (کمپیوٹر سائنس)",
    badge: "Intermediate",
    badgeUr: "انٹرمیڈیٹ",
    category: "Intermediate",
    categoryUr: "انٹرمیڈیٹ",
    duration: "2 Years",
    durationUr: "2 سال",
    description: "Your gateway to computer science, software engineering, information technology, data science, and business technology.",
    descriptionUr: "کمپیوٹر سائنس، سافٹ ویئر انجینئرنگ، انفارمیشن ٹیکنالوجی اور ڈیٹا سائنس کے جدید شعبوں کا راستہ۔",
    eligibility: ["Matric with science or mathematics (board rules apply)."],
    eligibilityUr: ["میٹرک سائنس یا ریاضی کے مضامین کے ساتھ۔"],
    waMessage: `${WA_PREFIX} ICS ${WA_SUFFIX}`,
  },
  {
    id: "fa",
    title: "FA (Faculty of Arts)",
    titleUr: "ایف اے (فیکلٹی آف آرٹس)",
    badge: "Intermediate",
    badgeUr: "انٹرمیڈیٹ",
    category: "Intermediate",
    categoryUr: "انٹرمیڈیٹ",
    duration: "2 Years",
    durationUr: "2 سال",
    description: "Broaden your horizons with studies leading to humanities, social sciences, education, law, media, and civil services.",
    descriptionUr: "سوشل سائنسز، تعلیم، قانون، میڈیا، صحافت اور سول سروسز کے لیے وسیع البنیاد تعلیمی پروگرام۔",
    eligibility: ["Matric or equivalent qualification."],
    eligibilityUr: ["میٹرک یا مساوی تعلیمی قابلیت۔"],
    waMessage: `${WA_PREFIX} FA ${WA_SUFFIX}`,
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// GROUP 2 — Medical & Allied Health Programs
// ─────────────────────────────────────────────────────────────────────────────
export const alliedHealthPrograms: Program[] = [
  {
    id: "cardiac-tech",
    title: "Cardiac Technology",
    titleUr: "کارڈیک ٹیکنالوجی",
    badge: "Allied Health",
    badgeUr: "الائیڈ ہیلتھ",
    category: "Allied Health",
    categoryUr: "میڈیکل اور الائیڈ ہیلتھ",
    duration: "2 Years",
    durationUr: "2 سال",
    description: "Gain specialized skills for working in cardiac labs, catheterization units, and cardiac diagnostic centers.",
    descriptionUr: "کارڈیک لیبز، دل کے تشخیصی مراکز اور سی سی یو وارڈز میں پیشہ ورانہ خدمات کے لیے۔",
    eligibility: ["FSc Pre-Medical."],
    eligibilityUr: ["ایف ایس سی (پری میڈیکل)۔"],
    waMessage: `${WA_PREFIX} Cardiac Technology ${WA_SUFFIX}`,
  },
  {
    id: "orthopaedic-tech",
    title: "Orthopaedic Technology",
    titleUr: "آرتھوپیڈک ٹیکنالوجی",
    badge: "Allied Health",
    badgeUr: "الائیڈ ہیلتھ",
    category: "Allied Health",
    categoryUr: "میڈیکل اور الائیڈ ہیلتھ",
    duration: "2 Years",
    durationUr: "2 سال",
    description: "Learn to support orthopaedic hospitals, rehabilitation centers, and specialized prosthetics services.",
    descriptionUr: "ہڈیوں کے امراض کے ہسپتالوں، بحالی کے مراکز اور مصنوعی اعضاء کی سروسز کے لیے تربیت۔",
    eligibility: ["FSc Pre-Medical."],
    eligibilityUr: ["ایف ایس سی (پری میڈیکل)۔"],
    waMessage: `${WA_PREFIX} Orthopaedic Technology ${WA_SUFFIX}`,
  },
  {
    id: "dental-hygiene",
    title: "Dental Hygiene Technology",
    titleUr: "ڈینٹل ہائیجین ٹیکنالوجی",
    badge: "Allied Health",
    badgeUr: "الائیڈ ہیلتھ",
    category: "Allied Health",
    categoryUr: "میڈیکل اور الائیڈ ہیلتھ",
    duration: "2 Years",
    durationUr: "2 سال",
    description: "Prepare for a career in dental clinics, hospitals, and preventive oral healthcare.",
    descriptionUr: "ڈینٹل کلینکس، ہسپتالوں اور دانتوں و مسوڑھوں کی حفاظتی نگہداشت میں کیریئر کے لیے۔",
    eligibility: ["FSc Pre-Medical."],
    eligibilityUr: ["ایف ایس سی (پری میڈیکل)۔"],
    waMessage: `${WA_PREFIX} Dental Hygiene Technology ${WA_SUFFIX}`,
  },
  {
    id: "dispensing-tech",
    title: "Dispensing Technology",
    titleUr: "ڈسپنسنگ ٹیکنالوجی",
    badge: "Allied Health",
    badgeUr: "الائیڈ ہیلتھ",
    category: "Allied Health",
    categoryUr: "میڈیکل اور الائیڈ ہیلتھ",
    duration: "2 Years",
    durationUr: "2 سال",
    description: "Develop the practical knowledge required for pharmacies, hospitals, and pharmaceutical services.",
    descriptionUr: "فارمیسیوں، ہسپتالوں اور ادویات سازی کے شعبے کے لیے عملی اور سائنسی مہارتیں حاصل کریں۔",
    eligibility: ["FSc Pre-Medical."],
    eligibilityUr: ["ایف ایس سی (پری میڈیکل)۔"],
    waMessage: `${WA_PREFIX} Dispensing Technology ${WA_SUFFIX}`,
  },
  {
    id: "mlt",
    title: "Medical Lab Technology (MLT)",
    titleUr: "میڈیکل لیب ٹیکنالوجی (ایم ایل ٹی)",
    badge: "Allied Health",
    badgeUr: "الائیڈ ہیلتھ",
    category: "Allied Health",
    categoryUr: "میڈیکل اور الائیڈ ہیلتھ",
    duration: "2 Years",
    durationUr: "2 سال",
    description: "Master laboratory techniques for diagnostic laboratories, hospitals, and cutting-edge research institutions.",
    descriptionUr: "تشخیصی لیبارٹریوں، ہسپتالوں اور طبی ریسرچ کے اداروں کے لیے جدید لیب ٹیکنیکس میں مہارت حاصل کریں۔",
    eligibility: ["FSc Pre-Medical."],
    eligibilityUr: ["ایف ایس سی (پری میڈیکل)۔"],
    waMessage: `${WA_PREFIX} Medical Lab Technology (MLT) ${WA_SUFFIX}`,
  },
  {
    id: "operation-theatre-tech",
    title: "Operation Theatre Technology",
    titleUr: "آپریشن تھیٹر ٹیکنالوجی",
    badge: "Allied Health",
    badgeUr: "الائیڈ ہیلتھ",
    category: "Allied Health",
    categoryUr: "میڈیکل اور الائیڈ ہیلتھ",
    duration: "2 Years",
    durationUr: "2 سال",
    description: "Train to excel in surgical units, operating theatres, and fast-paced emergency care environments.",
    descriptionUr: "سرجیکل یونٹس، آپریشن تھیٹرز اور ہنگامی نگہداشت کے شعبوں میں معاونت کے لیے پیشہ ورانہ ٹریننگ۔",
    eligibility: ["FSc Pre-Medical."],
    eligibilityUr: ["ایف ایس سی (پری میڈیکل)۔"],
    waMessage: `${WA_PREFIX} Operation Theatre Technology ${WA_SUFFIX}`,
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// GROUP 3 — Diploma Programs
// ─────────────────────────────────────────────────────────────────────────────
export const diplomaPrograms: Program[] = [
  {
    id: "lad",
    title: "Livestock Assistant Diploma (LAD)",
    titleUr: "لائیو اسٹاک اسسٹنٹ ڈپلومہ (ایل اے ڈی)",
    badge: "Diploma",
    badgeUr: "ڈپلومہ",
    category: "Diploma",
    categoryUr: "ڈپلومہ پروگرامز",
    duration: "2 Years",
    durationUr: "2 سال",
    description: "Opens opportunities in veterinary services, livestock farms, dairy and poultry sectors, and self-employment.",
    descriptionUr: "لائیو اسٹاک فارمز، ڈیری و پولٹری سیکٹر، ویٹرنری کلینکس اور ذاتی کاروبار کے شاندار مواقع۔",
    eligibility: ["Matric (science preferred)."],
    eligibilityUr: ["میٹرک (سائنس ترجیح دی جائے گی)۔"],
    waMessage: `${WA_PREFIX} Livestock Assistant Diploma ${WA_SUFFIX}`,
  },
  {
    id: "agri-science",
    title: "Diploma in Agricultural Science",
    titleUr: "ڈپلومہ ان ایگریکلچرل سائنس",
    badge: "Diploma",
    badgeUr: "ڈپلومہ",
    category: "Diploma",
    categoryUr: "ڈپلومہ پروگرامز",
    duration: "2 Years",
    durationUr: "2 سال",
    description: "A practical pathway into agribusiness, crop management, extension services, and modern farming enterprises.",
    descriptionUr: "زرعی کاروبار، جدید کاشتکاری، فصلوں کی نگہداشت اور زرعی سروسز میں عملی تربیت۔",
    eligibility: ["Matric (science preferred)."],
    eligibilityUr: ["میٹرک (سائنس ترجیح دی جائے گی)۔"],
    waMessage: `${WA_PREFIX} Diploma in Agricultural Science ${WA_SUFFIX}`,
  },
  {
    id: "pharmacy",
    title: "B.Pharmacy / Pharm-D track",
    titleUr: "بی فارمیسی / فارم ڈی ٹریک",
    badge: "Diploma / Track",
    badgeUr: "ڈپلومہ / ٹریک",
    category: "Diploma",
    categoryUr: "ڈپلومہ پروگرامز",
    duration: "Varies",
    durationUr: "حسبِ نوعیت",
    description: "Designed for careers in community and hospital pharmacies, the pharmaceutical industry, and clinical research.",
    descriptionUr: "کمیونٹی و ہسپتال فارمیسی، فارماسیوٹیکل انڈسٹری اور کلینیکل ریسرچ میں کیریئر کے لیے۔",
    eligibility: ["FSc Pre-Medical."],
    eligibilityUr: ["ایف ایس سی (پری میڈیکل)۔"],
    waMessage: `${WA_PREFIX} B.Pharmacy / Pharm-D track ${WA_SUFFIX}`,
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// GROUP 4 — Medical Degree Programs
// ─────────────────────────────────────────────────────────────────────────────
export const medicalDegreePrograms: Program[] = [
  {
    id: "dpt",
    title: "DPT — Doctor of Physical Therapy",
    titleUr: "ڈی پی ٹی — ڈاکٹر آف فزیکل تھراپی",
    badge: "5-Year Professional Doctorate",
    badgeUr: "5 سالہ پروفیشنل ڈاکٹریٹ",
    category: "Medical Degree",
    categoryUr: "میڈیکل ڈگری پروگرامز",
    duration: "5 Years",
    durationUr: "5 سال",
    description:
      "Train as a licensed physiotherapist under expert clinical supervision. Scope: hospitals, rehabilitation clinics, sports medicine, and private practice.",
    descriptionUr:
      "ماہر ڈاکٹرز کی نگرانی میں لائسنس یافتہ فزیوتھراپسٹ بنیں۔ ہسپتالوں، بحالی کلینکس، اسپورٹس میڈیسن اور پرائیویٹ پریکٹس کے وسیع مواقع۔",
    eligibility: [
      "F.Sc (Pre-Medical) or A-Levels with a minimum of 60% aggregate marks.",
      "All applicants must sit an entry test and be formally interviewed."
    ],
    eligibilityUr: [
      "ایف ایس سی (پری میڈیکل) یا اے لیولز کم از کم 60 فیصد نمبروں کے ساتھ۔",
      "امیدوار کا انٹری ٹیسٹ اور انٹرویو میں شریک ہونا لازمی ہے۔"
    ],
    waMessage: `${WA_PREFIX} DPT (Doctor of Physical Therapy) ${WA_SUFFIX}`,
  },
  {
    id: "ad-bs-mlt",
    title: "AD / BS Medical Lab Technology (MLT)",
    titleUr: "اے ڈی / بی ایس میڈیکل لیب ٹیکنالوجی",
    badge: "Degree Program",
    badgeUr: "ڈگری پروگرام",
    category: "Medical Degree",
    categoryUr: "میڈیکل ڈگری پروگرامز",
    duration: "2 Years (AD) / 4 Years (BS)",
    durationUr: "2 سال (AD) / 4 سال (BS)",
    description:
      "A comprehensive degree in laboratory medicine. Scope: advanced laboratory practice, research, and healthcare management.",
    descriptionUr:
      "لیبارٹری میڈیسن میں جامع ڈگری پروگرام۔ ایڈوانس لیبارٹری پریکٹس، تشخیصی تحقیق اور ہسپتال مینجمنٹ۔",
    eligibility: [
      "F.Sc (Pre-Medical) or A-Levels.",
      "All applicants must sit an entry test and interview."
    ],
    eligibilityUr: [
      "ایف ایس سی (پری میڈیکل) یا اے لیولز۔",
      "تمام امیدواروں کے لیے انٹری ٹیسٹ اور انٹرویو لازمی ہے۔"
    ],
    waMessage: `${WA_PREFIX} AD / BS Medical Lab Technology ${WA_SUFFIX}`,
  },
  {
    id: "bs-rit",
    title: "BS RIT (Radiologic Imaging Technology)",
    titleUr: "بی ایس آر آئی ٹی (ریڈیولاجک امیجنگ ٹیکنالوجی)",
    badge: "4-Year Bachelor's Degree",
    badgeUr: "4 سالہ بیچلر ڈگری",
    category: "Medical Degree",
    categoryUr: "میڈیکل ڈگری پروگرامز",
    duration: "4 Years",
    durationUr: "4 سال",
    description:
      "Master diagnostic imaging technologies. Scope: radiology departments, imaging centers, and radiation safety.",
    descriptionUr:
      "جدید تشخیصی امیجنگ ٹیکنالوجیز (ایکسرے، الٹراساؤنڈ، سی ٹی اسکین، ایم آر آئی) میں مہارت حاصل کریں۔",
    eligibility: [
      "F.Sc (Pre-Medical) or A-Levels.",
      "All applicants must sit an entry test and interview."
    ],
    eligibilityUr: [
      "ایف ایس سی (پری میڈیکل) یا اے لیولز۔",
      "انٹری ٹیسٹ اور انٹرویو پاس کرنا لازمی ہے۔"
    ],
    waMessage: `${WA_PREFIX} BS Radiologic Imaging Technology ${WA_SUFFIX}`,
  },
  {
    id: "bs-surgical-tech",
    title: "BS Surgical Technology",
    titleUr: "بی ایس سرجیکل ٹیکنالوجی",
    badge: "4-Year Bachelor's Degree",
    badgeUr: "4 سالہ بیچلر ڈگری",
    category: "Medical Degree",
    categoryUr: "میڈیکل ڈگری پروگرامز",
    duration: "4 Years",
    durationUr: "4 سال",
    description:
      "Step into the operating theatre with confidence. Scope: surgical assistance, operation theatres, and specialized procedures.",
    descriptionUr:
      "اعتماد کے ساتھ آپریشن تھیٹر میں قدم رکھیں۔ سرجیکل اسسٹنس، آپریشن تھیٹر مینجمنٹ اور پیچیدہ پروسیجرز میں عملی مہارت۔",
    eligibility: [
      "F.Sc (Pre-Medical) or A-Levels.",
      "All applicants must sit an entry test and interview."
    ],
    eligibilityUr: [
      "ایف ایس سی (پری میڈیکل) یا مساوی تعلیمی قابلیت۔",
      "تمام امیدواروں کے لیے انٹری ٹیسٹ اور انٹرویو لازمی ہے۔"
    ],
    waMessage: `${WA_PREFIX} BS Surgical Technology ${WA_SUFFIX}`,
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// GROUP 5 — Freelancing Courses
// ─────────────────────────────────────────────────────────────────────────────
export const freelancingCourses: Program[] = [
  {
    id: "freelancing-digital",
    title: "Digital Marketing, Graphic Designing, Video Editing, Freelancing",
    titleUr: "ڈیجیٹل مارکیٹنگ، گرافک ڈیزائننگ، ویڈیو ایڈیٹنگ، فری لانسنگ",
    badge: "Skill Course",
    badgeUr: "ہنر کورس",
    category: "Freelancing",
    categoryUr: "فری لانسنگ و آئی ٹی کورسز",
    duration: "Short Course",
    durationUr: "مختصر دورانیہ کورس",
    description: "Equip yourself for the modern gig economy. Scope: remote work, digital agencies, entrepreneurship, and independent freelancing.",
    descriptionUr: "جدید ڈیجیٹل دور کے لیے خود کو تیار کریں۔ آن لائن ارننگ، ریموٹ ورک، ڈیجیٹل ایجنسی اور آزادانہ فری لانسنگ۔",
    eligibility: ["Usually open to matriculates and above; basic computer skills are beneficial."],
    eligibilityUr: ["میٹرک یا اس سے زائد تعلیم کے حامل افراد؛ بنیادی کمپیوٹر کا علم مفید ہے۔"],
    waMessage: `${WA_PREFIX} Freelancing and Digital Skills Courses ${WA_SUFFIX}`,
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// GROUP 6 — AD / BS & Professional Programs
// ─────────────────────────────────────────────────────────────────────────────
export const adBsProfessionalPrograms: Program[] = [
  {
    id: "ad-bs-sspe",
    title: "AD / BS — SSPE",
    titleUr: "اے ڈی / بی ایس — ایس ایس پی ای (سپورٹس سائنسز)",
    badge: "AD / BS",
    badgeUr: "اے ڈی / بی ایس",
    category: "AD/BS & Professional",
    categoryUr: "اے ڈی / بی ایس و پروفیشنل پروگرامز",
    duration: "2 Years (AD) / 4 Years (BS)",
    durationUr: "2 سال (AD) / 4 سال (BS)",
    description: "Specialized physical education program. Scope: physical education, sports coaching, and fitness management.",
    descriptionUr: "فزیکل ایجوکیشن کا خصوصی پروگرام۔ اسپورٹس کوچنگ، فٹنس مینجمنٹ اور تعلیمی اداروں میں کیریئر۔",
    eligibility: ["Intermediate with the institution’s required marks."],
    eligibilityUr: ["انٹرمیڈیٹ کم از کم مقررہ نمبروں کے ساتھ۔"],
    waMessage: `${WA_PREFIX} AD/BS in SSPE ${WA_SUFFIX}`,
  },
  {
    id: "ad-bs-arts",
    title: "AD / BS — Urdu, Islamiyat, English",
    titleUr: "اے ڈی / بی ایس — اردو، اسلامیات، انگلش",
    badge: "AD / BS",
    badgeUr: "اے ڈی / بی ایس",
    category: "AD/BS & Professional",
    categoryUr: "اے ڈی / بی ایس و پروفیشنل پروگرامز",
    duration: "2 Years (AD) / 4 Years (BS)",
    durationUr: "2 سال (AD) / 4 سال (BS)",
    description: "Deepen your knowledge in languages and Islamic studies. Scope: teaching, research, writing, media, and civil services.",
    descriptionUr: "زبان و ادب اور اسلامی علوم میں اعلیٰ تعلیم۔ تدریس، ریسرچ، تحریر، میڈیا اور سی ایس ایس کے لیے بہترین۔",
    eligibility: ["Intermediate or the relevant previous qualification."],
    eligibilityUr: ["انٹرمیڈیٹ یا مساوی قابلیت۔"],
    waMessage: `${WA_PREFIX} AD/BS in Urdu/Islamiyat/English ${WA_SUFFIX}`,
  },
  {
    id: "ad-bs-cs",
    title: "AD / BS — Computer Science",
    titleUr: "اے ڈی / بی ایس — کمپیوٹر سائنس",
    badge: "AD / BS",
    badgeUr: "اے ڈی / بی ایس",
    category: "AD/BS & Professional",
    categoryUr: "اے ڈی / بی ایس و پروفیشنل پروگرامز",
    duration: "2 Years (AD) / 4 Years (BS)",
    durationUr: "2 سال (AD) / 4 سال (BS)",
    description: "Build a strong foundation in modern computing. Scope: software development, IT, cybersecurity, and data analytics.",
    descriptionUr: "جدید کمپیوٹنگ میں مضبوط بنیاد بنائیں۔ سافٹ ویئر ڈویلپمنٹ، آئی ٹی، سائبر سیکیورٹی اور ڈیٹا اینالیٹکس۔",
    eligibility: ["Intermediate with mathematics (or as per university policy)."],
    eligibilityUr: ["انٹرمیڈیٹ بمعہ ریاضی (یا یونیورسٹی پالیسی کے مطابق)۔"],
    waMessage: `${WA_PREFIX} AD/BS in Computer Science ${WA_SUFFIX}`,
  },
  {
    id: "ad-bs-education",
    title: "AD / BS — Education",
    titleUr: "اے ڈی / بی ایس — ایجوکیشن",
    badge: "AD / BS",
    badgeUr: "اے ڈی / بی ایس",
    category: "AD/BS & Professional",
    categoryUr: "اے ڈی / بی ایس و پروفیشنل پروگرامز",
    duration: "2 Years (AD) / 4 Years (BS)",
    durationUr: "2 سال (AD) / 4 سال (BS)",
    description: "Prepare for a fulfilling career in teaching. Scope: teaching, educational administration, and curriculum development.",
    descriptionUr: "تدریس کے باوقار پیشے میں داخل ہوں۔ تعلیمی نظم و نسق، اسکول مینجمنٹ اور نصاب سازی۔",
    eligibility: ["Intermediate."],
    eligibilityUr: ["انٹرمیڈیٹ۔"],
    waMessage: `${WA_PREFIX} AD/BS in Education ${WA_SUFFIX}`,
  },
  {
    id: "ad-bs-fine-art",
    title: "AD / BS — Fine Art",
    titleUr: "اے ڈی / بی ایس — فائن آرٹ",
    badge: "AD / BS",
    badgeUr: "اے ڈی / بی ایس",
    category: "AD/BS & Professional",
    categoryUr: "اے ڈی / بی ایس و پروفیشنل پروگرامز",
    duration: "2 Years (AD) / 4 Years (BS)",
    durationUr: "2 سال (AD) / 4 سال (BS)",
    description: "Cultivate your creative vision. Scope: design, illustration, teaching, and creative industries.",
    descriptionUr: "اپنی تخلیقی سوچ کو پروان چڑھائیں۔ ڈیزائننگ، السٹریشن، آرٹ کی تدریس اور میڈیا انڈسٹری۔",
    eligibility: ["Intermediate; some institutions may require a portfolio or aptitude test."],
    eligibilityUr: ["انٹرمیڈیٹ (ادارے کے ٹیسٹ یا پورٹ فولیو کے مطابق)۔"],
    waMessage: `${WA_PREFIX} AD/BS in Fine Art ${WA_SUFFIX}`,
  },
  {
    id: "bba",
    title: "AD / BS — BBA",
    titleUr: "اے ڈی / بی ایس — بی بی اے (بزنس ایڈمنسٹریشن)",
    badge: "AD / BS",
    badgeUr: "اے ڈی / بی ایس",
    category: "AD/BS & Professional",
    categoryUr: "اے ڈی / بی ایس و پروفیشنل پروگرامز",
    duration: "2 Years (AD) / 4 Years (BS)",
    durationUr: "2 سال (AD) / 4 سال (BS)",
    description: "Launch your business career. Scope: business management, banking, marketing, and entrepreneurship.",
    descriptionUr: "کاروباری دنیا میں کامیابی کا آغاز کریں۔ بزنس مینجمنٹ، بینکنگ، مارکیٹنگ اور انٹرپرینیورشپ۔",
    eligibility: ["Intermediate."],
    eligibilityUr: ["انٹرمیڈیٹ۔"],
    waMessage: `${WA_PREFIX} AD/BS in BBA ${WA_SUFFIX}`,
  },
  {
    id: "bed",
    title: "B.Ed (1.5 / 2 / 2.5 years)",
    titleUr: "بی ایڈ (1.5 / 2 / 2.5 سال)",
    badge: "Teaching Degree",
    badgeUr: "تدریسی ڈگری",
    category: "AD/BS & Professional",
    categoryUr: "اے ڈی / بی ایس و پروفیشنل پروگرامز",
    duration: "1.5 / 2 / 2.5 Years",
    durationUr: "1.5 / 2 / 2.5 سال",
    description: "A comprehensive teaching credential. Scope: professional teaching, school leadership, and educational administration.",
    descriptionUr: "جامع پیشہ ورانہ تدریسی ڈگری۔ سکول لیڈرشپ، ہیڈ ماسٹر شپ اور تعلیمی پالیسی سازی۔",
    eligibility: ["A relevant bachelor’s degree meeting the university’s requirements."],
    eligibilityUr: ["یونیورسٹی کے معیار کے مطابق متعلقہ بیچلر ڈگری۔"],
    waMessage: `${WA_PREFIX} B.Ed Program ${WA_SUFFIX}`,
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// Convenience export — all programs in one flat array
// ─────────────────────────────────────────────────────────────────────────────
export const allPrograms: Program[] = [
  ...intermediatePrograms,
  ...alliedHealthPrograms,
  ...diplomaPrograms,
  ...medicalDegreePrograms,
  ...freelancingCourses,
  ...adBsProfessionalPrograms,
];
