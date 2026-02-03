
import { PROFILE } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-4xl font-bold mb-4">Ready to collaborate?</h2>
      <a href={`mailto:${PROFILE.email}`} className="underline">
        Send Email
      </a>
    </section>
  );
}
