
import SectionHeading from "../components/SectionHeading";
import { SKILLS } from "../data/content";

export default function About() {
  return (
    <section id="about">
      <SectionHeading title="About & Skills" />
      <div className="grid grid-cols-2 gap-6">
        {SKILLS.map((group) => (
          <div key={group.category}>
            <h4 className="font-bold">{group.category}</h4>
            <ul>
              {group.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
