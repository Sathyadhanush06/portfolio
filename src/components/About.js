import SectionHeader from "./SectionHeader";
import { summary } from "../data/resume";

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeader label="About Me" title="Summary" />
        <div className="about__grid">
          <div className="about__card">
            <div className="about__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <p className="about__text">{summary}</p>
          </div>
          <div className="about__stats">
            <div className="stat-card">
              <span className="stat-card__value">7.61</span>
              <span className="stat-card__label">CGPA</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__value">2+</span>
              <span className="stat-card__label">Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__value">2</span>
              <span className="stat-card__label">Certifications</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__value">1</span>
              <span className="stat-card__label">Hackathon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
