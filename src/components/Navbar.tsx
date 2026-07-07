"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/admissions", label: "Admissions" },
    { href: "/jobs", label: "Jobs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={styles.headerWrapper}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContent}`}>
          <div className={styles.topBarInfo}>
            <span>📍 Musa Khel Road, Wan Bhachran</span>
            <span>📞 0307-6813575 | 03314215165</span>
          </div>
          <div className={styles.topBarSocials}>
            <a href="#">f</a>
            <a href="#">in</a>
            <a href="#">tw</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`container ${styles.navbar}`}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="Nisab College Logo" className={styles.logoImg} style={{ objectFit: 'contain', background: 'white' }} />
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>NISAB COLLEGE</span>
            <span className={styles.logoSubtitle}>WAN BHACHRAN</span>
          </div>
        </Link>
        <div className={styles.navLinks}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${
                pathname === link.href ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary">
            Apply Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
