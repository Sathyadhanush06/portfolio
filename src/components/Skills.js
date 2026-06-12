import SectionHeader from "./SectionHeader";
import { skills } from "../data/resume";

const skillCategories = [
  { key: "languages", label: "Languages", icon: "code" },
  { key: "machineLearning", label: "Machine Learning", icon: "brain" },
  { key: "developerTools", label: "Developer Tools", icon: "tools" },
  { key: "softSkills", label: "Soft Skills", icon: "people" },
];

function SkillIcon({ type }) {
  const icons = {
    code: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    brain: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z" />
        <line x1="10" y1="22" x2="14" y2="22" />
      </svg>
    ),
    tools: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    people: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  };
  return <div className="skill-card__icon">{icons[type]}</div>;
}

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeader
          label="Skills"
          title="Technical Expertise"
          subtitle="Tools and technologies I work with"
        />
        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <div key={cat.key} className="skill-card">
              <SkillIcon type={cat.icon} />
              <h3 className="skill-card__title">{cat.label}</h3>
              <div className="skill-card__tags">
                {skills[cat.key].map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
