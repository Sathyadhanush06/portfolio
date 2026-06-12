import SectionHeader from "./SectionHeader";
import { education } from "../data/resume";

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <SectionHeader
          label="Education"
          title="Academic Journey"
          subtitle="Building a strong foundation in computer science"
        />
        <div className="timeline">
          {education.map((item, index) => (
            <div key={index} className="timeline__item">
              <div className="timeline__marker">
                <span className="timeline__dot" />
                {index < education.length - 1 && <span className="timeline__line" />}
              </div>
              <div className="timeline__card">
                <span className="timeline__period">{item.period}</span>
                <h3 className="timeline__institution">{item.institution}</h3>
                <p className="timeline__degree">{item.degree}</p>
                <span className="timeline__detail">{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
