"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import { PROFILE } from "@/lib/profile";

export default function Home() {
  const avatar = "/avatar.jpeg";

  return (
    <main>
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 bordered">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">
            {PROFILE.name}
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#experience" className="hover:opacity-70">Experience</a>
            <a href="#education" className="hover:opacity-70">Education</a>
            <a href="#certifications" className="hover:opacity-70">Certifications</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <div className="flex items-center gap-3 text-sm">
            <a href={PROFILE.github} className="underline underline-offset-4 decoration-dotted">GitHub</a>
            <a href={PROFILE.linkedin} className="underline underline-offset-4 decoration-dotted">LinkedIn</a>
          </div>
        </div>
      </header>

{/* Hero */}
<section id="home" className="max-w-6xl mx-auto px-6 md:px-10 py-14">
  <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-10 items-center">
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400"
      >
        {PROFILE.name}
      </motion.h1>
      <h2 className="text-lg md:text-xl font-medium text-zinc-500 dark:text-zinc-300 mt-2">
        {PROFILE.title}
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
        {PROFILE.summary}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-xl px-5 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-xl px-5 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
    <div className="justify-self-center">
      <motion.img
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        src="/avatar.jpeg"
        alt={`${PROFILE.name} avatar`}
        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg hover:scale-105 transition-transform"
      />
    </div>
  </div>
</section>
      <Section id="about" title="About">
  <div className="card p-8 grid md:grid-cols-2 gap-8 items-center">
    {/* Left side - Intro */}
    <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
      <p className="text-lg">
        I'm <span className="font-semibold text-blue-500">{PROFILE.name}</span>, a{" "}
        <span className="font-medium">{PROFILE.title}</span> passionate about building
        robust REST APIs, clean architectures, and efficient data access layers with
        Spring Boot and MySQL.
      </p>
      <p className="mt-4">
        I focus on creating scalable backend systems, integrating modern frameworks,
        and delivering solutions that balance performance and maintainability.
      </p>
    </div>

    {/* Right side - Skills */}
    <div className="grid grid-cols-2 gap-3">
      {[
        ...PROFILE.skills.languages,
        ...PROFILE.skills.frameworks,
        ...PROFILE.skills.web,
        ...PROFILE.skills.databases,
        ...PROFILE.skills.tools,
      ].map((skill) => (
        <div
          key={skill}
          className="rounded-lg bg-zinc-100 dark:bg-zinc-800 px-3 py-2 text-sm font-medium text-center shadow-sm hover:shadow-md transition"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
</Section>
      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {PROFILE.projects.map((p) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="card overflow-hidden"
            >
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                  <span className="text-xs opacity-70">{p.year}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 px-2 py-1 bordered">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  {p.live !== "#" && <a href={p.live} className="underline underline-offset-4">Live</a>}
                  {p.repo !== "#" && <a href={p.repo} className="underline underline-offset-4">Code</a>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Languages & Frameworks" items={[...PROFILE.skills.languages, ...PROFILE.skills.frameworks]} />
          <Card title="Databases & Web" items={[...PROFILE.skills.databases, ...PROFILE.skills.web]} />
          <Card title="Tools & Practices" items={[...PROFILE.skills.tools, ...PROFILE.skills.testing, ...PROFILE.skills.architecture, ...PROFILE.skills.cloud]} />
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="space-y-4">
          {PROFILE.experience.map((e) => (
            <div key={e.company} className="card p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-semibold">{e.title} — {e.company}</div>
                <div className="text-xs opacity-70">{e.location} • {e.start} – {e.end}</div>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="grid gap-4">
          {PROFILE.education.map((ed) => (
            <div key={ed.degree} className="card p-5">
              <div className="font-semibold">{ed.degree}</div>
              <div className="text-sm opacity-80">{ed.school}</div>
              <div className="text-xs opacity-70">{ed.details}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications" title="Certifications">
        <div className="card p-5">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {PROFILE.certifications.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-[1fr,1fr] gap-8 items-start">
          <div className="space-y-2 text-zinc-700 dark:text-zinc-300">
            <p>Want to collaborate or have a role that fits? Reach out:</p>
            <ul className="mt-4 space-y-1 text-sm">
              <li><span className="opacity-70">Email: </span><a className="underline underline-offset-4" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></li>
              <li><span className="opacity-70">Phone: </span><a className="underline underline-offset-4" href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a></li>
              <li><span className="opacity-70">LinkedIn: </span><a className="underline underline-offset-4" href={PROFILE.linkedin}>{PROFILE.linkedin}</a></li>
              <li><span className="opacity-70">GitHub: </span><a className="underline underline-offset-4" href={PROFILE.github}>{PROFILE.github}</a></li>
            </ul>
          </div>

          <form
            className="card p-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks! This demo form is static. Connect Formspree or Resend for real email sending.');
            }}
          >
            <div className="grid gap-3">
              <label className="text-sm">
                Name
                <input className="mt-1 w-full rounded-xl px-3 py-2 bg-transparent bordered" required />
              </label>
              <label className="text-sm">
                Email
                <input type="email" className="mt-1 w-full rounded-xl px-3 py-2 bg-transparent bordered" required />
              </label>
              <label className="text-sm">
                Message
                <textarea rows={4} className="mt-1 w-full rounded-xl px-3 py-2 bg-transparent bordered" required />
              </label>
              <button className="justify-self-start rounded-2xl px-4 py-2 bordered">Send</button>
            </div>
          </form>
        </div>
      </Section>

      <footer className="py-10 text-center text-xs opacity-70">
        © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js & TailwindCSS.
      </footer>
    </main>
  );
}

function Card({ title, items }: { title: string, items: string[] }) {
  return (
    <div className="card p-5">
      <h3 className="font-semibold mb-3">{title}</h3>
      <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bordered" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
