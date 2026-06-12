import SectionHeader from "./SectionHeader";
import { certifications } from "../data/resume";

function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <SectionHeader
          label="Certifications"
          title="Credentials"
          subtitle="Validated skills and continuous learning"
        />
        <div className="certifications__grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-card__badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <span className="cert-card__issuer">{cert.issuer}</span>
              <h3 className="cert-card__title">{cert.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
