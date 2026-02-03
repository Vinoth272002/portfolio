
import { Github, Zap } from "lucide-react";
import { PROFILE } from "../data/content";

export default function Hero() {
  return (
    <section className="pt-40 pb-32">
      <span className="inline-flex gap-2 text-blue-500">
        <Zap size={14} /> Frontend Specialist
      </span>
      <h1 className="text-6xl font-bold mt-6">
        Building clean, frictionless web experiences.
      </h1>
      <p className="text-xl text-gray-500 mt-6">
        Hi, I’m <strong>Vinothkumar</strong>, a frontend developer.
      </p>
      <div className="mt-8">
        <a href={PROFILE.github} target="_blank" rel="noreferrer">
          <Github /> GitHub
        </a>
      </div>
    </section>
  );
}
