import { useEffect, useState } from "react";
import { NavLink } from "./components/NavLink";
import { ThemeToggle } from "./components/ThemeToggle";
import { SectionHeading } from "./components/SectionHeading";
import { SpotlightCard } from "./components/SpotlightCard";
import { PROFILE, SKILLS, EXPERIENCE, PROJECTS } from "./data/content";
import {
  Linkedin,
  Mail,
  Monitor,
  Code2,
  Layout,
  Cpu,
  Zap,
  Globe,
  ArrowUpRight,
  MapPin,
  Download,
  Menu,
  X,
  FileText
} from "lucide-react";
import profileImage from './assets/vinoth.png';
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-[#0B1120] dark:text-gray-100 font-sans selection:bg-blue-500/30">

      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px] mix-blend-multiply dark:bg-blue-500/10 dark:mix-blend-normal animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-400/20 blur-[120px] mix-blend-multiply dark:bg-purple-500/10 dark:mix-blend-normal animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-10 h-10 rounded-full bg-gray-200 dark:bg-slate-800 border-2 border-white dark:border-slate-900 overflow-hidden flex items-center justify-center font-bold text-blue-600">
                <img src={profileImage} alt="Vinothkumar E" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight leading-none">Vinothkumar E</span>
              {/* <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-1">Available for work</span> */}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Work</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <div className="h-6 w-[1px] bg-gray-200 dark:bg-slate-800"></div>
            <ThemeToggle />
            <a
              href={PROFILE.resumeLink}
              download="Vinothkumar_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-[#0B1120] pt-24 px-6 md:hidden animate-fade-in flex flex-col">
          <NavLink href="#about" mobile onClick={() => setMobileMenuOpen(false)}>About</NavLink>
          <NavLink href="#experience" mobile onClick={() => setMobileMenuOpen(false)}>Experience</NavLink>
          <NavLink href="#projects" mobile onClick={() => setMobileMenuOpen(false)}>Work</NavLink>
          <NavLink href="#contact" mobile onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
          <a
            href={PROFILE.resumeLink}
            download="Vinothkumar_Resume.pdf"
            className="mt-6 flex items-center justify-center gap-2 px-4 py-4 bg-blue-600 text-white rounded-xl text-lg font-bold"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative z-10 pt-40 pb-20 md:pt-52 md:pb-32 container mx-auto px-6 max-w-6xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Zap size={14} />
            Frontend Specialist
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-snug mb-8">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">clean, frictionless</span> web experiences.
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-2xl">
            Hi, I’m <strong>Vinothkumar</strong>. I’m a frontend developer dedicated to transforming complex requirements into simple, high-performance web applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20 flex items-center gap-2">
              Let's Connect
              <ArrowUpRight size={20} />
            </a>
            <a href={PROFILE.resumeLink} download="Vinothkumar_Resume.pdf" className="px-8 py-4 rounded-full border border-gray-300 dark:border-slate-700 font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
              <FileText size={20} />
              Get CV
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-6 max-w-6xl space-y-32 pb-32">

        {/* About & Skills Grid */}
        <section id="about">
          <SectionHeading
            title="About & Skills"
            subtitle="I prefer simple solutions over complicated ones and focus on building things that last."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SpotlightCard className="md:col-span-2 p-8 h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 text-blue-600 dark:text-blue-400">
                <Layout size={24} />
                <h3 className="font-bold text-lg">My Approach</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                I enjoy turning ideas into understandable screens. Being part of a live, growing application at Astravue taught me how important
                <span className="text-gray-900 dark:text-white font-semibold"> clarity, usability, and reliability</span> really are in modern frontend engineering.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I work closely with product and backend teams to shape features from idea to release. My goal isn't just to write code, but to solve problems that improve the overall experience using the best tools for the job.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-8 flex flex-col justify-between bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900">
              <div>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  <MapPin size={24} />
                </div>
                <h4 className="font-bold text-2xl mb-1">{PROFILE.location.split(',')[0]}</h4>
                <p className="text-sm text-gray-500">Based in India</p>
              </div>
              <div className="mt-8">
                <h4 className="font-bold text-2xl mb-1">2+ Years</h4>
                <p className="text-sm text-gray-500">Industry Experience</p>
              </div>
            </SpotlightCard>

            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {SKILLS.map((skillGroup, idx) => (
                <SpotlightCard key={idx} className="p-6">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">{skillGroup.category}</h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-sm font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <SectionHeading
            title="Work Experience"
            subtitle="My professional journey in building scalable products."
          />

          <div className="space-y-8">
            {EXPERIENCE.map((job) => (
              <div key={job.id} className="group relative border-l-2 border-gray-200 dark:border-slate-800 pl-8 ml-4 md:ml-0">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full border-4 border-white dark:border-[#0B1120] bg-blue-500 shadow-md"></div>

                <SpotlightCard className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        {job.role}
                        <span className="hidden md:flex text-xs px-2 py-1 rounded border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20">
                          {job.company}
                        </span>
                      </h3>
                      <p className="md:hidden text-blue-600 dark:text-blue-400 font-medium mt-1">{job.company}</p>
                    </div>
                    <span className="text-sm font-mono text-gray-500 mt-2 md:mt-0">{job.period}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic border-l-4 border-gray-100 dark:border-slate-800 pl-4 py-1">
                    "{job.description}"
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {job.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1.5 min-w-[16px]">
                          <Zap size={16} className="text-yellow-500" />
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <SectionHeading title="Selected Work" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <SpotlightCard key={project.id} className="group flex flex-col h-full">
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center items-start">
                    <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400">
                      {project.title.includes("Movie") ? <Monitor size={24} /> : <Code2 size={24} />}

                    </div>
                      <div className="pl-3 text-sm dark:text-gray-400">{project.status}</div>
                    </div>
                    <a href={project.link} target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
                      <ArrowUpRight size={20} className="text-gray-400 hover:text-blue-500 transition-colors" />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold mb-2 transition-colors">{project.title}</h3>
                  <p className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">{project.role}</p>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-xs font-semibold px-2 py-1 rounded border border-gray-200 dark:border-slate-700 text-gray-500">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="relative overflow-hidden rounded-3xl bg-gray-900 dark:bg-blue-600 text-white p-12 md:p-24 text-center">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to collaborate?</h2>
            <p className="text-lg text-gray-300 dark:text-blue-100 mb-10">
              Whether you have a question, a project opportunity, or just want to say hi, I’m always open to meaningful conversations.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-xl shadow-black/20">
                <Mail size={20} />
                Send Email
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-gray-600 dark:border-blue-400 text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-800 dark:border-blue-500/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400 dark:text-blue-200">
              <p>© {new Date().getFullYear()} Vinothkumar E. All rights reserved.</p>
              <div className="flex gap-6">
                <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 dark:bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 dark:bg-indigo-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
        </section>

      </main>
      
      <Analytics/>
    </div>
  );
}
