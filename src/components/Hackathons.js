import SectionHeader from "./SectionHeader";
import { hackathons } from "../data/resume";

function Hackathons() {
  return (
    <section id="hackathons" className="section hackathons">
      <div className="container">
        <SectionHeader
          label="Hackathons"
          title="Competitive Experience"
          subtitle="Rapid prototyping under pressure"
        />
        <div className="hackathons__list">
          {hackathons.map((event, index) => (
            <div key={index} className="hackathon-card">
              <div className="hackathon-card__meta">
                <span className="hackathon-card__date">{event.date}</span>
                <span className="hackathon-card__organizer">{event.organizer}</span>
              </div>
              <h3 className="hackathon-card__name">{event.name}</h3>
              <ul className="hackathon-card__highlights">
                {event.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hackathons;
