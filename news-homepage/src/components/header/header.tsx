import { useState } from "react";
import { CloseMenuIcon, MenuIcon } from "../icons";
import { Logo } from "../logo";
import styles from "./header.module.css";

const navigation = [
  { label: "Home", href: "#" },
  { label: "New", href: "#" },
  { label: "Popular", href: "#" },
  { label: "Trending", href: "#" },
  { label: "Categories", href: "#" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Logo />
      <button
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
      >
        <MenuIcon />
      </button>
      <nav
        className={`${styles.nav} ${
          isMenuOpen ? styles.navOpen : styles.navClosed
        }`}
      >
        <button
          className={styles.closeMenuButton}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <CloseMenuIcon />
        </button>
        <ul className={styles.navList}>
          {navigation.map((item) => (
            <li key={item.label}>
              <a href={item.href} className={styles.navItems}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
