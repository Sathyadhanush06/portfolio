import { personalInfo } from "../data/resume";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">{personalInfo.name}</p>
        <p className="footer__copy">
          &copy; {year} {personalInfo.shortName}. Crafted with passion.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
