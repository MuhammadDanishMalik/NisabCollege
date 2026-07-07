import Image from "next/image";
import Link from "next/link";
import { readdirSync } from "fs";
import { join } from "path";
import ContactForm from "@/components/ContactForm";
import { medicalPrograms, adBsPrograms, professionalPrograms } from "@/lib/programs";
import { DynamicNoticeBoard, TestimonialSlider, FAQAccordion, InteractiveFeatures } from "@/components/DynamicSections";
import styles from "./page.module.css";

// Read all image files at build/request time (Server Component)
function getMediaImages(): string[] {
  const mediaDir = join(process.cwd(), "Media-Images");
  try {
    const files = readdirSync(mediaDir);
    return files.filter((file) => {
      const ext = file.split(".").pop()?.toLowerCase();
      return ["jpg", "jpeg", "png", "webp"].includes(ext || "");
    });
  } catch {
    return [];
  }
}

// Featured picks — 2 from each category shown on homepage
const featuredPrograms = [
  ...medicalPrograms.slice(0, 2),
  ...adBsPrograms.slice(0, 2),
  ...professionalPrograms.slice(0, 2),
];

const whyUsFeatures = [
  { icon: "👥", text: "Experienced Faculty", sub: "Qualified and dedicated teaching staff" },
  { icon: "🏥", text: "Practical Training", sub: "Hands-on lab and clinical practice" },
  { icon: "💰", text: "Affordable Fees", sub: "Education accessible to all" },
  { icon: "💼", text: "Job-Oriented Courses", sub: "Industry-relevant curriculum" },
  { icon: "🩺", text: "DVM Supervision", sub: "Expert medical mentorship" },
  { icon: "🎓", text: "Quality Education", sub: "Nationally recognized programs" },
];

const admissionSteps = [
  { num: "01", title: "Check Eligibility", desc: "Review eligibility criteria for your desired program on the Programs page." },
  { num: "02", title: "Apply Online", desc: "Fill out the application form and submit the required documents." },
  { num: "03", title: "Entry Test", desc: "Appear in an entry test conducted by any registered testing agency." },
  { num: "04", title: "Interview", desc: "Attend the interview conducted by the university and receive your offer." },
];

export default function HomePage() {
  const mediaFiles = getMediaImages();
  // Build full API URLs for all images
  const allImages = mediaFiles.map((f) => `/api/media/${encodeURIComponent(f)}`);

  // Distribute images for different sections
  const heroImg = allImages[0] || "";
  const programImgs = allImages.slice(1, 6);
  // Use all remaining images for the gallery
  // Show only 8 evenly-spread images on the homepage — full gallery is on /gallery
  const step = Math.max(1, Math.floor(allImages.length / 8));
  const galleryImages = allImages.filter((_, i) => i % step === 0).slice(0, 8);

  return (
    <main>
      {/* ── LATEST NEWS TICKER ── */}
      <div className={styles.newsTickerWrap}>
        <div className={styles.tickerLabel}>LATEST NEWS</div>
        <div className={styles.tickerContent}>
          <div className={styles.tickerItem}>Admissions Open for Fall 2026! Apply now for DPT and AD/BS Programs.</div>
          <div className={styles.tickerItem}>Merit List for Medical Lab Technology will be displayed on Sep 5th.</div>
          <div className={styles.tickerItem}>New transport routes added for surrounding villages. Contact Admin for details.</div>
          <div className={styles.tickerItem}>Orientation session scheduled for Sep 15th at Main Campus Auditorium.</div>
          {/* Duplicate for infinite loop */}
          <div className={styles.tickerItem}>Admissions Open for Fall 2026! Apply now for DPT and AD/BS Programs.</div>
          <div className={styles.tickerItem}>Merit List for Medical Lab Technology will be displayed on Sep 5th.</div>
          <div className={styles.tickerItem}>New transport routes added for surrounding villages. Contact Admin for details.</div>
          <div className={styles.tickerItem}>Orientation session scheduled for Sep 15th at Main Campus Auditorium.</div>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.welcomeText}>Welcome to</div>
          <h1 className={styles.heroTitle}>NISAB COLLEGE</h1>
          <div className={styles.heroSubtitle}>WAN BHACHRAN</div>
          <div className={styles.heroBadge}>ADMISSIONS OPEN</div>
          <p className={styles.heroDesc}>Build Your Future With Us</p>
          <div className={styles.heroButtons}>
            <Link href="/programs" className="btn-primary">Apply Now &rarr;</Link>
            <Link href="/programs" className="btn-outline">Explore Courses &rarr;</Link>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroImageWrapper}>
            {heroImg && (
              <Image src={heroImg} alt="Nisab College Students" fill className={styles.heroImage} unoptimized />
            )}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className={styles.statsBar}>
        <div className={styles.statsGrid}>
          {[
            { number: "13+", label: "Academic Programs" },
            { number: "500+", label: "Enrolled Students" },
            { number: "20+", label: "Expert Faculty" },
            { number: "100%", label: "Pass Rate" },
          ].map((stat, idx) => (
            <div key={idx} className={styles.statItem}>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutText}>
            <div className={styles.aboutLabel}>WELCOME TO NISAB COLLEGE</div>
            <h2 className={styles.aboutTitle}>Empowering Minds,<br/>Transforming Healthcare</h2>
            <p className={styles.aboutDesc}>
              Located in the heart of Wan Bhachran, Nisab College is dedicated to producing top-tier medical and professional graduates. With state-of-the-art facilities and experienced faculty, we offer a transformative learning environment.
            </p>
            <ul className={styles.aboutFeatures}>
              <li>Recognized & Affiliated Programs</li>
              <li>Hands-on Clinical & Lab Training</li>
              <li>Affordable Fee Structures</li>
              <li>Dedicated Female Facilities</li>
            </ul>
            <Link href="/about" className="btn-outline" style={{ display: "inline-block", marginTop: "1rem", borderColor: "var(--primary-red)", color: "var(--primary-red)" }}>
              Read More About Us &rarr;
            </Link>
          </div>
          <div className={styles.aboutImageWrap}>
            {programImgs[0] && (
              <Image src={programImgs[0]} alt="Nisab Campus Life" fill style={{ objectFit: "cover" }} />
            )}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROGRAMS ── */}
      <section className={styles.programsSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionSubTitle}>OUR PROGRAMS</div>
          <h2 className={styles.sectionTitleWhite}>13 Programs Across 3 Tracks</h2>
          <div className={styles.sectionDivider}></div>
        </div>
        <div className={styles.programsGrid}>
          {featuredPrograms.map((prog, idx) => (
            <div key={idx} className={styles.programCard}>
              {programImgs[idx] && (
                <img src={programImgs[idx]} alt={prog.title} className={styles.programIcon} />
              )}
              <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(163,21,21,0.7)", background: "rgba(163,21,21,0.08)", padding: "0.2rem 0.5rem", borderRadius: "20px", marginBottom: "0.5rem", display: "inline-block" }}>
                {prog.category}
              </span>
              <h3 className={styles.programTitle}>{prog.title}</h3>
              <p className={styles.programDesc}>{prog.description}</p>
              <Link href={`/programs#${prog.id}`} className="btn-primary" style={{ padding: "8px 20px", fontSize: "0.875rem" }}>
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link href="/programs" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "underline", fontSize: "0.95rem" }}>
            View all 13 programs →
          </Link>
        </div>
      </section>

      {/* ── PRINCIPAL MESSAGE ── */}
      <section className={styles.principalSection}>
        <div className={styles.principalContainer}>
          <div className={styles.principalImageWrap}>
            {galleryImages[1] && (
              <Image src={galleryImages[1]} alt="Principal" fill style={{ objectFit: "cover" }} />
            )}
          </div>
          <div className={styles.principalText}>
            <div className={styles.aboutLabel}>LEADERSHIP</div>
            <h2 className={styles.sectionTitleDark}>Message from the Principal</h2>
            <div className={styles.sectionDividerRed} style={{ margin: "1rem 0 2rem 0" }}></div>
            <p className={styles.principalQuote}>
              Our vision at Nisab College is to empower the youth of Wan Bhachran and surrounding areas by providing top-quality, accessible education in medical sciences and professional disciplines. We believe that with the right guidance, facilities, and dedication, our students can transform healthcare and education across the region.
            </p>
            <div className={styles.principalName}>Dr. Muhammad Imran</div>
            <div className={styles.principalRole}>Principal, Nisab College</div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE FEATURES (KINDERHEAVEN STYLE) ── */}
      <InteractiveFeatures images={galleryImages} />

      {/* ── WE ARE HIRING BANNER ── */}
      <section style={{ backgroundColor: "rgba(163,21,21,0.05)", padding: "4rem 2rem", margin: "2rem 0" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", gap: "3rem", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "300px" }}>
            <div className={styles.teamSubtitle}>WE ARE HIRING</div>
            <h2 className={styles.teamTitle} style={{ color: "var(--text-main)", fontSize: "2rem", marginBottom: "1rem" }}>Join Our Team</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: 1.6 }}>We are looking for dedicated professionals to join our growing academic family.</p>
            <ul className={styles.teamList} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
              <li style={{ background: "white", padding: "1rem", borderRadius: "8px", borderLeft: "4px solid var(--primary-red)" }}>Admission Officer</li>
              <li style={{ background: "white", padding: "1rem", borderRadius: "8px", borderLeft: "4px solid var(--primary-red)" }}>English Teacher</li>
              <li style={{ background: "white", padding: "1rem", borderRadius: "8px", borderLeft: "4px solid var(--primary-red)" }}>Lab Technician</li>
              <li style={{ background: "white", padding: "1rem", borderRadius: "8px", borderLeft: "4px solid var(--primary-red)", fontWeight: "bold" }}>Only Female Candidates</li>
            </ul>
            <Link href="/contact" className="btn-primary">Apply for Job &rarr;</Link>
          </div>
          {allImages[3] && (
            <div style={{ flex: 1, minWidth: "300px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}>
              <img src={allImages[3]} alt="Team" style={{ width: "100%", height: "350px", objectFit: "cover", display: "block" }} />
            </div>
          )}
        </div>
      </section>

      {/* ── FACILITIES SECTION ── */}
      <section className={styles.facilitiesSection}>
        <div className={styles.whyUsSubtitle}>CAMPUS LIFE</div>
        <h2 className={styles.sectionTitleDark}>World-Class Facilities</h2>
        <div className={styles.sectionDividerRed}></div>
        <div className={styles.facilitiesGrid}>
          <div className={styles.facilityCard}>
            <div className={styles.facilityIcon}>🔬</div>
            <h3 className={styles.facilityTitle}>Advanced Laboratories</h3>
            <p className={styles.facilityDesc}>Fully equipped radiology and pathology labs for hands-on, practical training under expert supervision.</p>
          </div>
          <div className={styles.facilityCard}>
            <div className={styles.facilityIcon}>📚</div>
            <h3 className={styles.facilityTitle}>Digital Library</h3>
            <p className={styles.facilityDesc}>Access to thousands of physical and digital medical journals, research papers, and textbooks.</p>
          </div>
          <div className={styles.facilityCard}>
            <div className={styles.facilityIcon}>🚌</div>
            <h3 className={styles.facilityTitle}>Transport Facility</h3>
            <p className={styles.facilityDesc}>Safe and reliable college transport available for students commuting from nearby cities and villages.</p>
          </div>
        </div>
      </section>

      {/* ── NOTICE BOARD ── */}
      <section className={styles.noticeBoardSection}>
        <div className={styles.noticeBoardContainer}>
          <DynamicNoticeBoard />
          <div>
            <h2 className={styles.sectionTitleDark} style={{ fontSize: "1.75rem" }}>Stay Updated</h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginTop: "1rem" }}>
              Keep an eye on our notice board for the latest updates regarding admissions, merit lists, examination schedules, and campus events. 
            </p>
            <Link href="/admissions" className="btn-primary" style={{ display: "inline-block", marginTop: "1.5rem" }}>
              View Admission Details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ── */}
      <section className={styles.testimonialsSection}>
        <h2 className={styles.sectionTitleDark} style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Testimonials</h2>
        <TestimonialSlider />
      </section>

      {/* ── CAMPUS GALLERY (All Images) ── */}
      <section className={styles.gallerySection}>
        <div className={styles.whyUsSubtitle}>OUR GALLERY</div>
        <h2 className={styles.galleryTitle}>Campus Life</h2>
        <div className={styles.sectionDividerRed} style={{ marginBottom: "2.5rem" }}></div>
        <div className={styles.galleryMarqueeWrapper}>
          <div className={styles.galleryMarqueeContent}>
            {galleryImages.map((img, i) => (
              <div key={`g1-${i}`} className={styles.galleryMarqueeItem}>
                <img src={img} alt={`Campus photo ${i + 1}`} loading="lazy" />
              </div>
            ))}
            {/* Duplicate for infinite loop */}
            {galleryImages.map((img, i) => (
              <div key={`g2-${i}`} className={styles.galleryMarqueeItem}>
                <img src={img} alt={`Campus photo ${i + 1} duplicate`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.galleryViewMore}>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            Explore more photos from our campus, labs, and events.
          </p>
          <Link href="/gallery" className="btn-primary">View Full Gallery ({allImages.length}+ Photos) &rarr;</Link>
        </div>
      </section>

      {/* ── AFFILIATIONS MARQUEE ── */}
      <section className={styles.affiliationsSection}>
        <div className={styles.affiliationsHeader}>
          <div className={styles.whyUsSubtitle}>RECOGNITION</div>
          <h2 className={styles.sectionTitleDark}>Our Affiliations & Partners</h2>
        </div>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeContent}>
            <div className={styles.affiliationCard}>
              <img src="/logos/uos.png" alt="University of Sargodha" style={{ height: "40px", objectFit: "contain", marginRight: "1rem" }} />
              <span>University of Sargodha</span>
            </div>
            <div className={styles.affiliationCard}>
              <img src="/logos/hec.png" alt="HEC Recognized" style={{ height: "40px", objectFit: "contain", marginRight: "1rem" }} />
              <span>HEC Recognized</span>
            </div>
            <div className={styles.affiliationCard}>
              <img src="/logos/gov.png" alt="Government of Pakistan" style={{ height: "40px", objectFit: "contain", marginRight: "1rem" }} />
              <span>Pharmacy Council of Pakistan</span>
            </div>
            <div className={styles.affiliationCard}>
              <img src="/logos/ahpc.png" alt="AHPC" style={{ height: "40px", objectFit: "contain", marginRight: "1rem" }} />
              <span>Allied Health Professionals Council</span>
            </div>
            <div className={styles.affiliationCard}>
              <span style={{ fontSize: "1.5rem", marginRight: "1rem" }}>🏥</span>
              <span>District Headquarters Hospital</span>
            </div>
            {/* Duplicate for infinite loop */}
            <div className={styles.affiliationCard}>
              <img src="/logos/uos.png" alt="University of Sargodha" style={{ height: "40px", objectFit: "contain", marginRight: "1rem" }} />
              <span>University of Sargodha</span>
            </div>
            <div className={styles.affiliationCard}>
              <img src="/logos/hec.png" alt="HEC Recognized" style={{ height: "40px", objectFit: "contain", marginRight: "1rem" }} />
              <span>HEC Recognized</span>
            </div>
            <div className={styles.affiliationCard}>
              <img src="/logos/gov.png" alt="Government of Pakistan" style={{ height: "40px", objectFit: "contain", marginRight: "1rem" }} />
              <span>Pharmacy Council of Pakistan</span>
            </div>
            <div className={styles.affiliationCard}>
              <img src="/logos/ahpc.png" alt="AHPC" style={{ height: "40px", objectFit: "contain", marginRight: "1rem" }} />
              <span>Allied Health Professionals Council</span>
            </div>
            <div className={styles.affiliationCard}>
              <span style={{ fontSize: "1.5rem", marginRight: "1rem" }}>🏥</span>
              <span>District Headquarters Hospital</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROSPECTUS BANNER ── */}
      <section className={styles.prospectusBanner}>
        <div className={styles.prospectusContent}>
          <h2 className={styles.prospectusTitle}>Start Your Journey With Us</h2>
          <p className={styles.prospectusDesc}>
            Discover everything Nisab College has to offer. Download our official prospectus to learn more about our state-of-the-art facilities, expert faculty, and detailed program curricula.
          </p>
          <a href="/images/placeholder-prospectus.pdf" className="btn-primary" style={{ background: "white", color: "var(--primary-red)", border: "2px solid white" }}>
            Download Prospectus (PDF) &darr;
          </a>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className={styles.faqSection}>
        <div className={styles.whyUsSubtitle}>GOT QUESTIONS?</div>
        <h2 className={styles.sectionTitleDark}>Frequently Asked Questions</h2>
        <div className={styles.sectionDividerRed} style={{ marginBottom: "3rem" }}></div>
        <FAQAccordion />
      </section>

      {/* ── ADMISSIONS PROCESS ── */}
      <section className={styles.admissionsSection}>
        <div className={styles.whyUsSubtitle}>HOW TO APPLY</div>
        <h2 className={styles.sectionTitleDark}>Admission Process</h2>
        <div className={styles.sectionDividerRed}></div>
        <div className={styles.stepsGrid}>
          {admissionSteps.map((step, idx) => (
            <div key={idx} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.num}</div>
              <div className={styles.stepTitle}>{step.title}</div>
              <p className={styles.stepDesc}>{step.desc}</p>
              {idx < admissionSteps.length - 1 && <div className={styles.stepConnector}></div>}
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className={styles.contactSection}>
        <div className={styles.contactLeft}>
          <div className={styles.whyUsSubtitle} style={{ textAlign: "left" }}>GET IN TOUCH</div>
          <h2 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "2rem", color: "var(--text-main)" }}>Contact Us</h2>
          <div className={styles.contactInfoRow}>
            <span className={styles.contactIcon}>📍</span>
            <div><strong>Address</strong><br />Musa Khel Road, Wan Bhachran</div>
          </div>
          <div className={styles.contactInfoRow}>
            <span className={styles.contactIcon}>📞</span>
            <div><strong>Phone</strong><br />0307-6813575<br />03314215165</div>
          </div>
          <div className={styles.contactInfoRow}>
            <span className={styles.contactIcon}>✉️</span>
            <div><strong>Email</strong><br />info@nisabcollege.edu.pk</div>
          </div>
          <div className={styles.contactInfoRow}>
            <span className={styles.contactIcon}>🕐</span>
            <div><strong>Office Hours</strong><br />Mon–Sat: 8:00 AM – 4:00 PM</div>
          </div>
        </div>

        <div className={styles.contactMap}>
          <span style={{ fontSize: "3rem" }}>📍</span>
          <span style={{ fontWeight: 800, fontSize: "1.25rem" }}>NISAB COLLEGE</span>
          <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)", fontWeight: 400 }}>Wan Bhachran, Mianwali</span>
        </div>

        <div className={styles.contactFormArea}>
          <h3>Send Us a Message</h3>
          <p>Fill in the form and our team will get back to you within 24 hours.</p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
