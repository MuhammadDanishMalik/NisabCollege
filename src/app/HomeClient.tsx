"use client";

import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ShimmerImage from "@/components/ShimmerImage";
import HeroSlider from "@/components/HeroSlider";
import { 
  alliedHealthPrograms, 
  medicalDegreePrograms, 
  adBsProfessionalPrograms,
  type Program 
} from "@/lib/programs";
import { DynamicNoticeBoard, TestimonialSlider, FAQAccordion, InteractiveFeatures } from "@/components/DynamicSections";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";

interface HomeClientProps {
  allImages: string[];
}

export default function HomeClient({ allImages }: HomeClientProps) {
  const { isUrdu, t } = useLanguage();

  // Distribute Cloudinary images for different sections
  const programImgs = allImages.slice(1, 7);
  const step = Math.max(1, Math.floor(allImages.length / 8));
  const galleryImages = allImages.filter((_, i) => i % step === 0).slice(0, 8);

  const featuredPrograms: Program[] = [
    ...medicalDegreePrograms.slice(0, 2),
    ...adBsProfessionalPrograms.slice(0, 2),
    ...alliedHealthPrograms.slice(0, 2),
  ];

  const stats = [
    { number: t("stat1Number"), label: t("stat1Label") },
    { number: t("stat2Number"), label: t("stat2Label") },
    { number: t("stat3Number"), label: t("stat3Label") },
    { number: t("stat4Number"), label: t("stat4Label") },
  ];

  const facilitiesPreview = [
    {
      num: "01",
      icon: "🔬",
      title: t("facility1Title"),
      desc: t("facility1Desc")
    },
    {
      num: "02",
      icon: "📚",
      title: t("facility2Title"),
      desc: t("facility2Desc")
    },
    {
      num: "03",
      icon: "🚌",
      title: t("facility3Title"),
      desc: t("facility3Desc")
    },
    {
      num: "04",
      icon: "🏥",
      title: t("facility4Title"),
      desc: t("facility4Desc")
    },
    {
      num: "05",
      icon: "🕌",
      title: t("facility5Title"),
      desc: t("facility5Desc")
    },
    {
      num: "06",
      icon: "💻",
      title: t("facility6Title"),
      desc: t("facility6Desc")
    },
  ];

  const admissionSteps = [
    { num: t("step1Num"), title: t("step1Title"), desc: t("step1Desc") },
    { num: t("step2Num"), title: t("step2Title"), desc: t("step2Desc") },
    { num: t("step3Num"), title: t("step3Title"), desc: t("step3Desc") },
    { num: t("step4Num"), title: t("step4Title"), desc: t("step4Desc") },
  ];

  return (
    <main>
      {/* ── INTERACTIVE HERO SLIDER (ANIMATED CAROUSEL) ── */}
      <HeroSlider bannerImages={allImages} />

      {/* ── STATS BAR ── */}
      <section className={styles.statsBar}>
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
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
            <div className={styles.aboutLabel}>{t("welcomeLabel")}</div>
            <h2 className={styles.aboutTitle}>{t("empoweringMindsTitle")}</h2>
            <p className={styles.aboutDesc}>
              {t("aboutHomeDesc")}
            </p>
            <ul className={styles.aboutFeatures}>
              <li>{t("aboutFeature1")}</li>
              <li>{t("aboutFeature2")}</li>
              <li>{t("aboutFeature3")}</li>
              <li>{t("aboutFeature4")}</li>
            </ul>
            <Link href="/about" className="btn-outline" style={{ display: "inline-block", marginTop: "1rem", borderColor: "var(--primary-red)", color: "var(--primary-red)" }}>
              {t("readMoreAboutUs")}
            </Link>
          </div>
          <div className={styles.aboutImageWrap}>
            {programImgs[0] && (
              <ShimmerImage
                src={programImgs[0]}
                alt="Nisab Campus Life"
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROGRAMS ── */}
      <section className={styles.programsSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionSubTitle}>{t("ourProgramsLabel")}</div>
          <h2 className={styles.sectionTitleWhite}>{t("multipleTracksTitle")}</h2>
          <div className={styles.sectionDivider}></div>
        </div>
        <div className={styles.programsGrid}>
          {featuredPrograms.map((prog, idx) => {
            const progTitle = isUrdu && prog.titleUr ? prog.titleUr : prog.title;
            const progDesc = isUrdu && prog.descriptionUr ? prog.descriptionUr : prog.description;
            const progCat = isUrdu && prog.categoryUr ? prog.categoryUr : prog.category;

            return (
              <div key={idx} className={styles.programCard}>
                <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "rgba(163,21,21,0.8)", background: "rgba(163,21,21,0.08)", padding: "0.2rem 0.6rem", borderRadius: "20px", marginBottom: "0.5rem", display: "inline-block" }}>
                  {progCat}
                </span>
                <h3 className={styles.programTitle}>{progTitle}</h3>
                <p className={styles.programDesc}>{progDesc}</p>
                <Link href={`/programs#${prog.id}`} className="btn-primary" style={{ padding: "8px 20px", fontSize: "0.875rem" }}>
                  {t("learnMore")}
                </Link>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link href="/programs" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "underline", fontSize: "0.95rem" }}>
            {t("viewAll13Programs")}
          </Link>
        </div>
      </section>

      {/* ── PRINCIPAL MESSAGE TEASER ── */}
      <section className={styles.principalSection}>
        <div className={styles.principalContainer}>
          <div className={styles.principalImageWrap}>
            {galleryImages[1] && (
              <ShimmerImage
                src={galleryImages[1]}
                alt="Principal"
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
          <div className={styles.principalText}>
            <div className={styles.aboutLabel}>{t("leadershipLabel")}</div>
            <h2 className={styles.sectionTitleDark}>{t("principalTitle")}</h2>
            <div className={styles.sectionDividerRed} style={{ margin: "1rem 0 2rem 0" }}></div>
            <p className={styles.principalQuote}>
              {t("principalQuote")}
            </p>
            <div className={styles.principalName}>{t("principalName")}</div>
            <div className={styles.principalRole}>{t("principalRole")}</div>
            <div style={{ marginTop: "1.5rem" }}>
              <Link href="/principal-message" className="btn-outline">
                {t("readFullMessage")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE FEATURES (KINDERHEAVEN STYLE) ── */}
      <InteractiveFeatures images={galleryImages} />

      {/* ── WE ARE HIRING BANNER ── */}
      <section style={{ backgroundColor: "rgba(163,21,21,0.05)", padding: "4rem 2rem", margin: "2rem 0" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", gap: "3rem", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "300px" }}>
            <div className={styles.teamSubtitle}>{t("weAreHiring")}</div>
            <h2 className={styles.teamTitle} style={{ color: "var(--text-main)", fontSize: "2rem", marginBottom: "1rem" }}>{t("joinOurTeam")}</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: isUrdu ? 1.9 : 1.6 }}>{t("hiringDesc")}</p>
            <ul className={styles.teamList} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
              <li style={{ background: "white", padding: "1rem", borderRadius: "8px", borderLeft: isUrdu ? "none" : "4px solid var(--primary-red)", borderRight: isUrdu ? "4px solid var(--primary-red)" : "none" }}>{t("jobPos1")}</li>
              <li style={{ background: "white", padding: "1rem", borderRadius: "8px", borderLeft: isUrdu ? "none" : "4px solid var(--primary-red)", borderRight: isUrdu ? "4px solid var(--primary-red)" : "none" }}>{t("jobPos2")}</li>
              <li style={{ background: "white", padding: "1rem", borderRadius: "8px", borderLeft: isUrdu ? "none" : "4px solid var(--primary-red)", borderRight: isUrdu ? "4px solid var(--primary-red)" : "none" }}>{t("jobPos3")}</li>
              <li style={{ background: "white", padding: "1rem", borderRadius: "8px", borderLeft: isUrdu ? "none" : "4px solid var(--primary-red)", borderRight: isUrdu ? "4px solid var(--primary-red)" : "none", fontWeight: "bold" }}>{t("jobPosOnlyFemale")}</li>
            </ul>
            <Link href="/jobs" className="btn-primary">{t("applyForJob")}</Link>
          </div>
          {allImages[3] && (
            <div style={{ flex: 1, minWidth: "300px", borderRadius: "24px", overflow: "hidden", height: "350px", position: "relative", boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}>
              <ShimmerImage
                src={allImages[3]}
                alt="Team"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
        </div>
      </section>

      {/* ── FACILITIES PREVIEW SECTION ── */}
      <section className={styles.facilitiesSection}>
        <div className={styles.whyUsSubtitle}>{t("campusLifeLabel")}</div>
        <h2 className={styles.sectionTitleDark}>{t("worldClassFacilities")}</h2>
        <div className={styles.sectionDividerRed}></div>
        <p style={{ color: "var(--text-secondary)", maxWidth: "650px", margin: "1.5rem auto 0", lineHeight: isUrdu ? 2.0 : 1.7, fontSize: "1.05rem" }}>
          {t("facilitiesSubtitle")}
        </p>
        <div className={styles.facilitiesGrid}>
          {facilitiesPreview.map((fac, i) => (
            <div key={i} className={styles.facilityCard}>
              <div className={styles.facilityNumber}>{fac.num}</div>
              <div className={styles.facilityIcon}>{fac.icon}</div>
              <h3 className={styles.facilityTitle}>{fac.title}</h3>
              <p className={styles.facilityDesc}>{fac.desc}</p>
              <div className={styles.facilityBar}></div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/facilities" className="btn-primary">
            {t("viewAllFacilities")}
          </Link>
        </div>
      </section>

      {/* ── NOTICE BOARD ── */}
      <section className={styles.noticeBoardSection}>
        <div className={styles.noticeBoardContainer}>
          <DynamicNoticeBoard />
          <div>
            <h2 className={styles.sectionTitleDark} style={{ fontSize: "1.75rem" }}>{t("stayUpdated")}</h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: isUrdu ? 1.9 : 1.6, marginTop: "1rem" }}>
              {t("stayUpdatedDesc")}
            </p>
            <Link href="/admissions" className="btn-primary" style={{ display: "inline-block", marginTop: "1.5rem" }}>
              {t("viewAdmissionDetails")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ── */}
      <section className={styles.testimonialsSection}>
        <h2 className={styles.sectionTitleDark} style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{t("testimonialsTitle")}</h2>
        <TestimonialSlider />
      </section>

      {/* ── CAMPUS GALLERY PREVIEW ── */}
      <section className={styles.gallerySection}>
        <div className={styles.whyUsSubtitle}>{t("ourGalleryLabel")}</div>
        <h2 className={styles.galleryTitle}>{t("campusLifeTitle")}</h2>
        <div className={styles.sectionDividerRed} style={{ marginBottom: "2.5rem" }}></div>
        <div className={styles.galleryGrid}>
          {galleryImages.map((img, i) => (
            <div key={i} className={styles.galleryGridItem} style={{ position: "relative" }}>
              <ShimmerImage
                src={img}
                alt={`Campus photo ${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        <div className={styles.galleryViewMore}>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            {t("exploreMorePhotos")}
          </p>
          <Link href="/gallery" className="btn-primary">{t("viewFullGallery")}</Link>
        </div>
      </section>

      {/* ── AFFILIATIONS MARQUEE ── */}
      <section className={styles.affiliationsSection}>
        <div className={styles.affiliationsHeader}>
          <div className={styles.whyUsSubtitle}>{t("recognitionLabel")}</div>
          <h2 className={styles.sectionTitleDark}>{t("affiliationsTitle")}</h2>
        </div>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeContent}>
            <div className={styles.affiliationCard}>
              <img src="/logos/uos.png" alt="University of Sargodha" style={{ height: "42px", objectFit: "contain", marginInlineEnd: "1rem" }} />
              <span>{t("affilUos")}</span>
            </div>
            <div className={styles.affiliationCard}>
              <img src="/logos/hec.png" alt="HEC Recognized" style={{ height: "42px", objectFit: "contain", marginInlineEnd: "1rem" }} />
              <span>{t("affilHec")}</span>
            </div>
            <div className={styles.affiliationCard}>
              <img src="/logos/pharmacy.png" alt="Pharmacy Council of Pakistan" style={{ height: "42px", objectFit: "contain", marginInlineEnd: "1rem" }} />
              <span>{t("affilPharmacy")}</span>
            </div>
            <div className={styles.affiliationCard}>
              <img src="/logos/gov.png" alt="Government of Pakistan" style={{ height: "42px", objectFit: "contain", marginInlineEnd: "1rem" }} />
              <span>{t("affilGov")}</span>
            </div>
            <div className={styles.affiliationCard}>
              <img src="/logos/ahpc.png" alt="AHPC" style={{ height: "42px", objectFit: "contain", marginInlineEnd: "1rem" }} />
              <span>{t("affilAhpc")}</span>
            </div>
            <div className={styles.affiliationCard}>
              <span style={{ fontSize: "1.6rem", marginInlineEnd: "1rem" }}>🏥</span>
              <span>{t("affilDhq")}</span>
            </div>
            {/* Duplicate for infinite seamless loop */}
            <div aria-hidden="true" style={{ display: "contents" }}>
              <div className={styles.affiliationCard}>
                <img src="/logos/uos.png" alt="" style={{ height: "42px", objectFit: "contain", marginInlineEnd: "1rem" }} />
                <span>{t("affilUos")}</span>
              </div>
              <div className={styles.affiliationCard}>
                <img src="/logos/hec.png" alt="" style={{ height: "42px", objectFit: "contain", marginInlineEnd: "1rem" }} />
                <span>{t("affilHec")}</span>
              </div>
              <div className={styles.affiliationCard}>
                <img src="/logos/pharmacy.png" alt="" style={{ height: "42px", objectFit: "contain", marginInlineEnd: "1rem" }} />
                <span>{t("affilPharmacy")}</span>
              </div>
              <div className={styles.affiliationCard}>
                <img src="/logos/gov.png" alt="" style={{ height: "42px", objectFit: "contain", marginInlineEnd: "1rem" }} />
                <span>{t("affilGov")}</span>
              </div>
              <div className={styles.affiliationCard}>
                <img src="/logos/ahpc.png" alt="" style={{ height: "42px", objectFit: "contain", marginInlineEnd: "1rem" }} />
                <span>{t("affilAhpc")}</span>
              </div>
              <div className={styles.affiliationCard}>
                <span style={{ fontSize: "1.6rem", marginInlineEnd: "1rem" }}>🏥</span>
                <span>{t("affilDhq")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROSPECTUS BANNER ── */}
      <section className={styles.prospectusBanner}>
        <div className={styles.prospectusContent}>
          <h2 className={styles.prospectusTitle}>{t("prospectusTitle")}</h2>
          <p className={styles.prospectusDesc}>
            {t("prospectusDesc")}
          </p>
          <a href="https://wa.me/923076813575?text=I%20would%20like%20to%20request%20the%20Nisab%20College%20prospectus" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: "white", color: "var(--primary-red)", border: "2px solid white" }}>
            {t("requestProspectusWa")}
          </a>
        </div>
      </section>

      {/* ── FAQ PREVIEW SECTION ── */}
      <section className={styles.faqSection}>
        <div className={styles.whyUsSubtitle}>{t("gotQuestionsLabel")}</div>
        <h2 className={styles.sectionTitleDark}>{t("faqTitle")}</h2>
        <div className={styles.sectionDividerRed} style={{ marginBottom: "2.5rem" }}></div>
        <FAQAccordion />
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link href="/faqs" className="btn-outline">
            {t("viewAllFaqs")}
          </Link>
        </div>
      </section>

      {/* ── ADMISSIONS PROCESS ── */}
      <section className={styles.admissionsSection}>
        <div className={styles.whyUsSubtitle}>{t("howToApplyLabel")}</div>
        <h2 className={styles.sectionTitleDark}>{t("admissionProcessTitle")}</h2>
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
          <div className={styles.whyUsSubtitle} style={{ textAlign: isUrdu ? "right" : "left" }}>{t("getInTouchLabel")}</div>
          <h2 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "2rem", color: "var(--text-main)" }}>{t("contactUsTitle")}</h2>
          <div className={styles.contactInfoRow}>
            <span className={styles.contactIcon}>📍</span>
            <div><strong>{t("contactAddressLabel")}</strong><br />{t("contactAddressValue")}</div>
          </div>
          <div className={styles.contactInfoRow}>
            <span className={styles.contactIcon}>📞</span>
            <div><strong>{t("contactPhoneLabel")}</strong><br />0307-6813575<br />03314215165</div>
          </div>
          <div className={styles.contactInfoRow}>
            <span className={styles.contactIcon}>✉️</span>
            <div><strong>{t("contactEmailLabel")}</strong><br />info@nisabcollege.edu.pk</div>
          </div>
          <div className={styles.contactInfoRow}>
            <span className={styles.contactIcon}>🕐</span>
            <div><strong>{t("contactHoursLabel")}</strong><br />{t("contactHoursValue")}</div>
          </div>
        </div>

        <div className={styles.contactMap}>
          <span style={{ fontSize: "3rem" }}>📍</span>
          <span style={{ fontWeight: 800, fontSize: "1.25rem" }}>{t("collegeName")}</span>
          <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)", fontWeight: 400 }}>{t("contactAddressValue")}</span>
        </div>

        <div className={styles.contactFormArea}>
          <h3>{t("sendUsMessageTitle")}</h3>
          <p>{t("contactFormSub")}</p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
