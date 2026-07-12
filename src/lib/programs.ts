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
  badge: string;            // short label shown on card
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
// GROUP 1 — Intermediate Programs
// ─────────────────────────────────────────────────────────────────────────────
export const intermediatePrograms: Program[] = [
  {
    id: "fsc-pre-medical",
    title: "FSc (Pre-Medical)",
    badge: "Intermediate",
    category: "Intermediate",
    duration: "2 Years",
    description: "A foundational program leading to fields like medicine, dentistry, allied health sciences, pharmacy, biotechnology, and related healthcare sectors.",
    eligibility: ["Matric (Science) with the board’s required minimum marks."],
    waMessage: `${WA_PREFIX} FSc (Pre-Medical) ${WA_SUFFIX}`,
  },
  {
    id: "fsc-pre-engineering",
    title: "FSc (Pre-Engineering)",
    badge: "Intermediate",
    category: "Intermediate",
    duration: "2 Years",
    description: "Designed for students aiming for careers in engineering, computer science, architecture, and advanced technology fields.",
    eligibility: ["Matric (Science) with mathematics."],
    waMessage: `${WA_PREFIX} FSc (Pre-Engineering) ${WA_SUFFIX}`,
  },
  {
    id: "ics",
    title: "ICS (Intermediate in Computer Science)",
    badge: "Intermediate",
    category: "Intermediate",
    duration: "2 Years",
    description: "Your gateway to computer science, software engineering, information technology, data science, and business technology.",
    eligibility: ["Matric with science or mathematics (board rules apply)."],
    waMessage: `${WA_PREFIX} ICS ${WA_SUFFIX}`,
  },
  {
    id: "fa",
    title: "FA (Faculty of Arts)",
    badge: "Intermediate",
    category: "Intermediate",
    duration: "2 Years",
    description: "Broaden your horizons with studies leading to humanities, social sciences, education, law, media, and civil services.",
    eligibility: ["Matric or equivalent qualification."],
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
    badge: "Allied Health",
    category: "Allied Health",
    duration: "2 Years",
    description: "Gain specialized skills for working in cardiac labs, catheterization units, and cardiac diagnostic centers.",
    eligibility: ["FSc Pre-Medical."],
    waMessage: `${WA_PREFIX} Cardiac Technology ${WA_SUFFIX}`,
  },
  {
    id: "orthopaedic-tech",
    title: "Orthopaedic Technology",
    badge: "Allied Health",
    category: "Allied Health",
    duration: "2 Years",
    description: "Learn to support orthopaedic hospitals, rehabilitation centers, and specialized prosthetics services.",
    eligibility: ["FSc Pre-Medical."],
    waMessage: `${WA_PREFIX} Orthopaedic Technology ${WA_SUFFIX}`,
  },
  {
    id: "dental-hygiene",
    title: "Dental Hygiene Technology",
    badge: "Allied Health",
    category: "Allied Health",
    duration: "2 Years",
    description: "Prepare for a career in dental clinics, hospitals, and preventive oral healthcare.",
    eligibility: ["FSc Pre-Medical."],
    waMessage: `${WA_PREFIX} Dental Hygiene Technology ${WA_SUFFIX}`,
  },
  {
    id: "dispensing-tech",
    title: "Dispensing Technology",
    badge: "Allied Health",
    category: "Allied Health",
    duration: "2 Years",
    description: "Develop the practical knowledge required for pharmacies, hospitals, and pharmaceutical services.",
    eligibility: ["FSc Pre-Medical."],
    waMessage: `${WA_PREFIX} Dispensing Technology ${WA_SUFFIX}`,
  },
  {
    id: "mlt",
    title: "Medical Lab Technology (MLT)",
    badge: "Allied Health",
    category: "Allied Health",
    duration: "2 Years",
    description: "Master laboratory techniques for diagnostic laboratories, hospitals, and cutting-edge research institutions.",
    eligibility: ["FSc Pre-Medical."],
    waMessage: `${WA_PREFIX} Medical Lab Technology (MLT) ${WA_SUFFIX}`,
  },
  {
    id: "operation-theatre-tech",
    title: "Operation Theatre Technology",
    badge: "Allied Health",
    category: "Allied Health",
    duration: "2 Years",
    description: "Train to excel in surgical units, operating theatres, and fast-paced emergency care environments.",
    eligibility: ["FSc Pre-Medical."],
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
    badge: "Diploma",
    category: "Diploma",
    duration: "2 Years",
    description: "Opens opportunities in veterinary services, livestock farms, dairy and poultry sectors, and self-employment.",
    eligibility: ["Matric (science preferred)."],
    waMessage: `${WA_PREFIX} Livestock Assistant Diploma ${WA_SUFFIX}`,
  },
  {
    id: "agri-science",
    title: "Diploma in Agricultural Science",
    badge: "Diploma",
    category: "Diploma",
    duration: "2 Years",
    description: "A practical pathway into agribusiness, crop management, extension services, and modern farming enterprises.",
    eligibility: ["Matric (science preferred)."],
    waMessage: `${WA_PREFIX} Diploma in Agricultural Science ${WA_SUFFIX}`,
  },
  {
    id: "pharmacy",
    title: "B.Pharmacy / Pharm-D track",
    badge: "Diploma / Track",
    category: "Diploma",
    duration: "Varies",
    description: "Designed for careers in community and hospital pharmacies, the pharmaceutical industry, and clinical research.",
    eligibility: ["FSc Pre-Medical."],
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
    badge: "5-Year Professional Doctorate",
    category: "Medical Degree",
    duration: "5 Years",
    description:
      "Train as a licensed physiotherapist under expert clinical supervision. Scope: hospitals, rehabilitation clinics, sports medicine, and private practice.",
    eligibility: [
      "F.Sc (Pre-Medical) or A-Levels with a minimum of 60% aggregate marks.",
      "All applicants must sit an entry test and be formally interviewed."
    ],
    urduCriteria: [
      "ایف ایس سی (پری میڈیکل) یا اے لیولز کے ساتھ کم از کم 60% نمبروں کے ساتھ امیدوار درخواست دینے کے اہل ہیں۔"
    ],
    waMessage: `${WA_PREFIX} DPT (Doctor of Physical Therapy) ${WA_SUFFIX}`,
  },
  {
    id: "ad-bs-mlt",
    title: "AD / BS Medical Lab Technology (MLT)",
    badge: "Degree Program",
    category: "Medical Degree",
    duration: "2 Years (AD) / 4 Years (BS)",
    description:
      "A comprehensive degree in laboratory medicine. Scope: advanced laboratory practice, research, and healthcare management.",
    eligibility: [
      "F.Sc (Pre-Medical) or A-Levels.",
      "All applicants must sit an entry test and interview."
    ],
    urduCriteria: [
      "ایف ایس سی (پری میڈیکل) کے ساتھ امیدوار درخواست دینے کے اہل ہیں۔"
    ],
    waMessage: `${WA_PREFIX} AD / BS Medical Lab Technology ${WA_SUFFIX}`,
  },
  {
    id: "bs-rit",
    title: "BS RIT (Radiologic Imaging Technology)",
    badge: "4-Year Bachelor's Degree",
    category: "Medical Degree",
    duration: "4 Years",
    description:
      "Master diagnostic imaging technologies. Scope: radiology departments, imaging centers, and radiation safety.",
    eligibility: [
      "F.Sc (Pre-Medical) or A-Levels.",
      "All applicants must sit an entry test and interview."
    ],
    urduCriteria: [
      "ایف ایس سی (پری میڈیکل) کے ساتھ امیدوار درخواست دینے کے اہل ہیں۔"
    ],
    waMessage: `${WA_PREFIX} BS Radiologic Imaging Technology ${WA_SUFFIX}`,
  },
  {
    id: "bs-surgical-tech",
    title: "BS Surgical Technology",
    badge: "4-Year Bachelor's Degree",
    category: "Medical Degree",
    duration: "4 Years",
    description:
      "Step into the operating theatre with confidence. Scope: surgical assistance, operation theatres, and specialized procedures.",
    eligibility: [
      "F.Sc (Pre-Medical) or A-Levels.",
      "All applicants must sit an entry test and interview."
    ],
    urduCriteria: [
      "ایف ایس سی (پری میڈیکل) کے ساتھ امیدوار درخواست دینے کے اہل ہیں۔"
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
    badge: "Skill Course",
    category: "Freelancing",
    duration: "Short Course",
    description: "Equip yourself for the modern gig economy. Scope: remote work, digital agencies, entrepreneurship, and independent freelancing.",
    eligibility: ["Usually open to matriculates and above; basic computer skills are beneficial."],
    waMessage: `${WA_PREFIX} Freelancing and Digital Skills Courses ${WA_SUFFIX}`,
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// GROUP 6 — AD / BS & Professional Programs
// ─────────────────────────────────────────────────────────────────────────────
const adBsEligibility: string[] = [
  "Completion of HSSC / Intermediate or an equivalent qualification.",
  "Appropriate marks depending on the specific program."
];

export const adBsProfessionalPrograms: Program[] = [
  {
    id: "ad-bs-sspe",
    title: "AD / BS — SSPE",
    badge: "AD / BS",
    category: "AD/BS & Professional",
    duration: "2 Years (AD) / 4 Years (BS)",
    description: "Specialized physical education program. Scope: physical education, sports coaching, and fitness management.",
    eligibility: ["Intermediate with the institution’s required marks."],
    waMessage: `${WA_PREFIX} AD/BS in SSPE ${WA_SUFFIX}`,
  },
  {
    id: "ad-bs-arts",
    title: "AD / BS — Urdu, Islamiyat, English",
    badge: "AD / BS",
    category: "AD/BS & Professional",
    duration: "2 Years (AD) / 4 Years (BS)",
    description: "Deepen your knowledge in languages and Islamic studies. Scope: teaching, research, writing, media, and civil services.",
    eligibility: ["Intermediate or the relevant previous qualification."],
    waMessage: `${WA_PREFIX} AD/BS in Urdu/Islamiyat/English ${WA_SUFFIX}`,
  },
  {
    id: "ad-bs-cs",
    title: "AD / BS — Computer Science",
    badge: "AD / BS",
    category: "AD/BS & Professional",
    duration: "2 Years (AD) / 4 Years (BS)",
    description: "Build a strong foundation in modern computing. Scope: software development, IT, cybersecurity, and data analytics.",
    eligibility: ["Intermediate with mathematics (or as per university policy)."],
    waMessage: `${WA_PREFIX} AD/BS in Computer Science ${WA_SUFFIX}`,
  },
  {
    id: "ad-bs-education",
    title: "AD / BS — Education",
    badge: "AD / BS",
    category: "AD/BS & Professional",
    duration: "2 Years (AD) / 4 Years (BS)",
    description: "Prepare for a fulfilling career in teaching. Scope: teaching, educational administration, and curriculum development.",
    eligibility: ["Intermediate."],
    waMessage: `${WA_PREFIX} AD/BS in Education ${WA_SUFFIX}`,
  },
  {
    id: "ad-bs-fine-art",
    title: "AD / BS — Fine Art",
    badge: "AD / BS",
    category: "AD/BS & Professional",
    duration: "2 Years (AD) / 4 Years (BS)",
    description: "Cultivate your creative vision. Scope: design, illustration, teaching, and creative industries.",
    eligibility: ["Intermediate; some institutions may require a portfolio or aptitude test."],
    waMessage: `${WA_PREFIX} AD/BS in Fine Art ${WA_SUFFIX}`,
  },
  {
    id: "bba",
    title: "AD / BS — BBA",
    badge: "AD / BS",
    category: "AD/BS & Professional",
    duration: "2 Years (AD) / 4 Years (BS)",
    description: "Launch your business career. Scope: business management, banking, marketing, and entrepreneurship.",
    eligibility: ["Intermediate."],
    waMessage: `${WA_PREFIX} AD/BS in BBA ${WA_SUFFIX}`,
  },
  {
    id: "bed",
    title: "B.Ed (1.5 / 2 / 2.5 years)",
    badge: "Teaching Degree",
    category: "AD/BS & Professional",
    duration: "1.5 / 2 / 2.5 Years",
    description: "A comprehensive teaching credential. Scope: professional teaching, school leadership, and educational administration.",
    eligibility: ["A relevant bachelor’s degree meeting the university’s requirements."],
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
