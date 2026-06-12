import { useState, useEffect } from "react";
import { navLinks, personalInfo } from "../data/resume";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <button
          className="navbar__brand"
          onClick={() => handleNavClick("home")}
          aria-label="Go to home"
        >
          <span className="navbar__brand-mark">GSD</span>
          <span className="navbar__brand-name">{personalInfo.shortName}</span>
        </button>

        <button
          className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button onClick={() => handleNavClick(link.id)}>{link.label}</button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
